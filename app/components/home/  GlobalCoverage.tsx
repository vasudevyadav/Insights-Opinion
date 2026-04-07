"use client";

import { useEffect, useRef } from "react";

// ── Types ──────────────────────────────────────────────────────────────────
type ContinentDot = { lat: number; lng: number };
type LandRegion = { latMin: number; latMax: number; lngMin: number; lngMax: number; density: number };
type Connection = {
    fromLat: number;
    fromLng: number;
    toLat: number;
    toLng: number;
    color: string;
    progress: number;
    speed: number;
};
type City = { lat: number; lng: number; color: string };
type Point3D = { x: number; y: number; z: number };
type Projected = { x: number; y: number; visible: boolean; depth: number };

function GlobeCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d")!;

        let W = 0;
        let H = 0;
        let R = 0;
        let cx = 0;
        let cy = 0;

        // ── Continent dots ────────────────────────────────────────────────
        const continentDots: ContinentDot[] = [];

        const landRegions: LandRegion[] = [
            { latMin: 25, latMax: 70, lngMin: -130, lngMax: -60, density: 0.62 },
            { latMin: -55, latMax: 12, lngMin: -80, lngMax: -35, density: 0.55 },
            { latMin: 35, latMax: 70, lngMin: -10, lngMax: 40, density: 0.72 },
            { latMin: -35, latMax: 37, lngMin: -18, lngMax: 52, density: 0.62 },
            { latMin: 10, latMax: 75, lngMin: 40, lngMax: 150, density: 0.66 },
            { latMin: -40, latMax: -10, lngMin: 113, lngMax: 155, density: 0.52 },
        ];

        for (const region of landRegions) {
            const latSteps = Math.floor((region.latMax - region.latMin) / 3.2);
            const lngSteps = Math.floor((region.lngMax - region.lngMin) / 3.2);
            for (let li = 0; li <= latSteps; li++) {
                for (let lj = 0; lj <= lngSteps; lj++) {
                    if (Math.random() > region.density) continue;
                    const lat = region.latMin + li * 3.2 + (Math.random() - 0.5) * 2.5;
                    const lng = region.lngMax - lj * 3.2 + (Math.random() - 0.5) * 2.5;
                    continentDots.push({ lat, lng });
                }
            }
        }

        // ── Helpers ───────────────────────────────────────────────────────
        function updateCanvasSize() {
            const parent = canvas?.parentElement;
            if (!parent || !canvas) return;

            const dpr = window.devicePixelRatio || 1;
            const rect = parent.getBoundingClientRect();

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;

            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);

            W = rect.width;
            H = rect.height;

            const isMobile = window.innerWidth <= 768;

            R = Math.min(W * (isMobile ? 0.34 : 0.58), H * (isMobile ? 0.36 : 0.5));
            cx = isMobile ? W * 0.5 : W * 0.36;
            cy = isMobile ? H * 0.54 : R * 1.28 + 16;
        }

        function latLngTo3D(lat: number, lng: number, rotY: number): Point3D {
            const phi = ((90 - lat) * Math.PI) / 180;
            const theta = ((lng + rotY) * Math.PI) / 180;
            return {
                x: Math.sin(phi) * Math.cos(theta),
                y: Math.cos(phi),
                z: Math.sin(phi) * Math.sin(theta),
            };
        }

        function project(p: Point3D): Projected {
            return {
                x: cx + p.x * R,
                y: cy - p.y * R,
                visible: p.z > -0.1,
                depth: p.z,
            };
        }

        // ── Data ──────────────────────────────────────────────────────────
        const connections: Connection[] = [
            { fromLat: 40, fromLng: -74, toLat: 51, toLng: 0, color: "#ef4444", progress: 0, speed: 0.004 },
            { fromLat: 51, fromLng: 0, toLat: 35, toLng: 139, color: "#f59e0b", progress: 0.3, speed: 0.003 },
            { fromLat: -33, fromLng: 151, toLat: 1, toLng: 103, color: "#06b6d4", progress: 0.6, speed: 0.005 },
            { fromLat: 19, fromLng: 72, toLat: 40, toLng: -74, color: "#a78bfa", progress: 0.1, speed: 0.0035 },
        ];

        const cities: City[] = [
            { lat: 40, lng: -74, color: "#06b6d4" },
            { lat: 51, lng: 0, color: "#06b6d4" },
            { lat: 35, lng: 139, color: "#06b6d4" },
            { lat: -33, lng: 151, color: "#06b6d4" },
            { lat: 1, lng: 103, color: "#06b6d4" },
            { lat: 19, lng: 72, color: "#06b6d4" },
        ];

        let rotY = 20;
        let t = 0;

        // ── Draw helpers ──────────────────────────────────────────────────
        function drawArc(from3D: Point3D, to3D: Point3D, progress: number, color: string): void {
            const steps = 80;
            ctx.beginPath();
            let started = false;

            for (let i = 0; i <= steps * progress; i++) {
                const s = i / steps;
                const ix = from3D.x + (to3D.x - from3D.x) * s;
                const iy = from3D.y + (to3D.y - from3D.y) * s;
                const iz = from3D.z + (to3D.z - from3D.z) * s;
                const len = Math.sqrt(ix * ix + iy * iy + iz * iz);
                const lift = 1 + 0.28 * Math.sin(Math.PI * s);
                const px = (ix / len) * lift;
                const py = (iy / len) * lift;
                const pz = (iz / len) * lift;
                const sx = cx + px * R;
                const sy = cy - py * R;

                if (pz < -0.05) {
                    started = false;
                    continue;
                }

                if (!started) {
                    ctx.moveTo(sx, sy);
                    started = true;
                } else {
                    ctx.lineTo(sx, sy);
                }
            }

            ctx.strokeStyle = color;
            ctx.lineWidth = 1.4;
            ctx.globalAlpha = 0.75;
            ctx.stroke();
            ctx.globalAlpha = 1;
        }

        function drawMovingDot(from3D: Point3D, to3D: Point3D, progress: number, color: string): void {
            if (progress <= 0 || progress > 1) return;

            const s = progress;
            const ix = from3D.x + (to3D.x - from3D.x) * s;
            const iy = from3D.y + (to3D.y - from3D.y) * s;
            const iz = from3D.z + (to3D.z - from3D.z) * s;
            const len = Math.sqrt(ix * ix + iy * iy + iz * iz);
            const lift = 1 + 0.28 * Math.sin(Math.PI * s);
            const px = (ix / len) * lift;
            const py = (iy / len) * lift;
            const pz = (iz / len) * lift;

            if (pz < -0.05) return;

            const sx = cx + px * R;
            const sy = cy - py * R;
            const grd = ctx.createRadialGradient(sx, sy, 0, sx, sy, 9);
            grd.addColorStop(0, color + "ff");
            grd.addColorStop(1, color + "00");

            ctx.beginPath();
            ctx.arc(sx, sy, 9, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(sx, sy, 3.2, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
        }

        // ── Main render loop ──────────────────────────────────────────────
        function draw(): void {
            ctx.clearRect(0, 0, W, H);

            // Atmosphere glow
            const atmo = ctx.createRadialGradient(cx, cy, R * 0.82, cx, cy, R * 1.22);
            atmo.addColorStop(0, "rgba(6,182,212,0.08)");
            atmo.addColorStop(1, "rgba(6,182,212,0)");
            ctx.beginPath();
            ctx.arc(cx, cy, R * 1.22, 0, Math.PI * 2);
            ctx.fillStyle = atmo;
            ctx.fill();

            // Continent dots
            for (const d of continentDots) {
                const p3 = latLngTo3D(d.lat, d.lng, rotY);
                const p2 = project(p3);
                if (!p2.visible) continue;
                const alpha = 0.28 + p2.depth * 0.58;
                const size = 1.4 + p2.depth * 1.0;
                ctx.beginPath();
                ctx.arc(p2.x, p2.y, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(100,220,255,${alpha.toFixed(2)})`;
                ctx.fill();
            }

            // Grid lines
            ctx.globalAlpha = 0.07;
            ctx.strokeStyle = "#4dd0e1";
            ctx.lineWidth = 0.5;

            for (let lat = -60; lat <= 60; lat += 30) {
                ctx.beginPath();
                let first = true;
                for (let lng = -180; lng <= 180; lng += 3) {
                    const p3 = latLngTo3D(lat, lng, rotY);
                    const p2 = project(p3);
                    if (!p2.visible) {
                        first = true;
                        continue;
                    }
                    if (first) {
                        ctx.moveTo(p2.x, p2.y);
                        first = false;
                    } else {
                        ctx.lineTo(p2.x, p2.y);
                    }
                }
                ctx.stroke();
            }

            for (let lng = -180; lng <= 180; lng += 30) {
                ctx.beginPath();
                let first = true;
                for (let lat = -90; lat <= 90; lat += 3) {
                    const p3 = latLngTo3D(lat, lng, rotY);
                    const p2 = project(p3);
                    if (!p2.visible) {
                        first = true;
                        continue;
                    }
                    if (first) {
                        ctx.moveTo(p2.x, p2.y);
                        first = false;
                    } else {
                        ctx.lineTo(p2.x, p2.y);
                    }
                }
                ctx.stroke();
            }

            ctx.globalAlpha = 1;

            // Arcs + moving dots
            for (const conn of connections) {
                const from3D = latLngTo3D(conn.fromLat, conn.fromLng, rotY);
                const to3D = latLngTo3D(conn.toLat, conn.toLng, rotY);
                drawArc(from3D, to3D, conn.progress, conn.color);
                drawMovingDot(from3D, to3D, conn.progress, conn.color);
                conn.progress += conn.speed;
                if (conn.progress > 1) conn.progress = 0;
            }

            // City markers
            for (const city of cities) {
                const p3 = latLngTo3D(city.lat, city.lng, rotY);
                const p2 = project(p3);
                if (!p2.visible) continue;

                const pulse = 0.5 + 0.5 * Math.sin(t * 2 + city.lat);

                ctx.beginPath();
                ctx.arc(p2.x, p2.y, 6 + pulse * 4, 0, Math.PI * 2);
                ctx.strokeStyle = city.color + "55";
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(p2.x, p2.y, 3, 0, Math.PI * 2);
                ctx.fillStyle = city.color;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(p2.x, p2.y, 1.2, 0, Math.PI * 2);
                ctx.fillStyle = "#fff";
                ctx.fill();
            }

            rotY += 0.12;
            t += 0.03;
            animRef.current = requestAnimationFrame(draw);
        }

        updateCanvasSize();
        draw();

        const handleResize = () => {
            updateCanvasSize();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animRef.current !== null) cancelAnimationFrame(animRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ display: "block", width: "100%", height: "100%" }}
        />
    );
}

export default function GlobalCoverage() {
    return (
        <section className="relative grid h-auto min-h-[650px] grid-cols-1 overflow-hidden bg-[#07102b] md:h-[650px] md:grid-cols-[7fr_5fr]">
            {/* ── RIGHT col-5 : Content ── */}
            <div className="relative z-10 order-1 flex items-center px-5 pb-0 lg:pb-12 py-12 text-white sm:px-8 md:order-2 md:px-0 md:pr-[52px]">
                <div className="max-w-[520px]">
                    <h2
                        style={{
                            fontSize: "clamp(2rem, 5vw, 2.9rem)",
                            fontWeight: 300,
                            letterSpacing: "0.05em",
                            lineHeight: 1.1,
                            margin: 0,
                        }}
                    >
                        Global

                    </h2>

                    <h2 className="mb-4 bg-gradient-to-r from-[#29c7c3] via-[#2fa9d6] to-[#4169e1] bg-clip-text text-3xl font-semibold leading-tight text-transparent sm:text-4xl lg:text-[45px]">
                        Coverage
                    </h2>

                    <p
                        style={{
                            fontSize: "14px",
                            lineHeight: 1.8,
                            color: "rgba(255,255,255,0.52)",
                            margin: "0 0 18px 0",
                        }}
                    >
                        Insights Opinion delivers research across 100+ countries and 60+ languages through coordinated fieldwork, localized execution, and consistent project management.
                    </p>

                    <button
                        style={{
                            borderRadius: "9999px",
                            background: "#17ae8f",
                            padding: "12px 50px",
                            fontSize: "18px",
                            fontWeight: 500,
                            color: "#fff",
                            border: "none",
                            cursor: "pointer",
                            boxShadow: "0 0 12px rgba(6,182,212,0.35)",
                        }}
                    >
                        Get Started
                    </button>
                </div>
            </div>

            {/* ── LEFT col-7 : Globe ── */}
            <div className="relative order-2 h-[340px] overflow-hidden sm:h-[420px] md:order-1 md:h-full">
                <GlobeCanvas />
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to bottom, transparent 0%, rgba(7,16,43,0.08) 100%)",
                    }}
                />
                <div
                    className="pointer-events-none absolute inset-0 hidden md:block"
                    style={{
                        background:
                            "linear-gradient(to right, transparent 0%, transparent 52%, rgba(7,16,43,0.55) 72%, #07102b 100%)",
                    }}
                />
            </div>
        </section>
    );
}