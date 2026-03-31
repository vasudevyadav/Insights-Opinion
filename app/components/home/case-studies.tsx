"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
type CaseStudy = {
    title: string;
    desc: string;
    image: string;
    accent: string;
    large?: boolean;
};

type Connection = {
    fromLat: number;
    fromLng: number;
    toLat: number;
    toLng: number;
    color: string;
    progress: number;
    speed: number;
};

type City = {
    lat: number;
    lng: number;
    label: string;
    color: string;
};

type ContinentDot = {
    lat: number;
    lng: number;
};

type Point3D = {
    x: number;
    y: number;
    z: number;
};

type ProjectedPoint = {
    x: number;
    y: number;
    visible: boolean;
    depth: number;
};

type CaseCardProps = {
    title: string;
    desc: string;
    image: string;
    accent: string;
    large?: boolean;
};

// ─── Case Studies Data ────────────────────────────────────────────────────────
const caseStudies: CaseStudy[] = [
    {
        title: "Automotive Industry",
        desc: "With your unique blend of expertise and entrepreneurial drive, you are now equipped to navigate the complexities of the legal landscape with confidence.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
        accent: "from-cyan-400/50 to-emerald-400/40",
        large: true,
    },
    {
        title: "Healthcare Industry\nDiabetes",
        desc: "With your unique blend of expertise and entrepreneurial drive, you are now equipped to navigate the complexities of the legal landscape with confidence.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
        accent: "from-blue-500/40 to-fuchsia-500/30",
    },
    {
        title: "Chemical Industry",
        desc: "With your unique blend of expertise and entrepreneurial drive, you are now equipped to navigate the complexities of the legal landscape with confidence.",
        image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1200&q=80",
        accent: "from-sky-400/30 to-indigo-500/30",
    },
    {
        title: "Healthcare Industry\nHIV",
        desc: "With your unique blend of expertise and entrepreneurial drive, you are now equipped to navigate the complexities of the legal landscape with confidence.",
        image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=80",
        accent: "from-violet-500/30 to-cyan-400/20",
    },
    {
        title: "Automotive Industry",
        desc: "With your unique blend of expertise and entrepreneurial drive, you are now equipped to navigate the complexities of the legal landscape with confidence.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        accent: "from-blue-500/30 to-purple-500/30",
    },
    {
        title: "Telecom Industry",
        desc: "With your unique blend of expertise and entrepreneurial drive, you are now equipped to navigate the complexities of the legal landscape with confidence.",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
        accent: "from-sky-500/30 to-blue-700/40",
    },
];

// ─── Globe Canvas ─────────────────────────────────────────────────────────────
function GlobeCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const _ctx = canvas.getContext("2d");
        if (!_ctx) return;
        const ctx: CanvasRenderingContext2D = _ctx;

        const W = (canvas.width = canvas.offsetWidth);
        const H = (canvas.height = canvas.offsetHeight);

        // Globe center — bottom-left quadrant like the reference image
        const cx = W * 0.28;
        const cy = H * 0.52;
        const R = Math.min(W, H) * 0.72;

        // Dot map — simplified world continents as lat/lng pairs
        const continentDots: ContinentDot[] = [];
        // Generate dots on a sphere surface that approximate land masses
        const landRegions = [
            { latMin: 25, latMax: 70, lngMin: -130, lngMax: -60, density: 0.6 },
            { latMin: -55, latMax: 12, lngMin: -80, lngMax: -35, density: 0.55 },
            { latMin: 35, latMax: 70, lngMin: -10, lngMax: 40, density: 0.7 },
            { latMin: -35, latMax: 37, lngMin: -18, lngMax: 52, density: 0.6 },
            { latMin: 10, latMax: 75, lngMin: 40, lngMax: 150, density: 0.65 },
            { latMin: -40, latMax: -10, lngMin: 113, lngMax: 155, density: 0.5 },
        ];

        for (const region of landRegions) {
            const latSteps = Math.floor((region.latMax - region.latMin) / 4);
            const lngSteps = Math.floor((region.lngMax - region.lngMin) / 4);
            for (let li = 0; li <= latSteps; li++) {
                for (let lj = 0; lj <= lngSteps; lj++) {
                    if (Math.random() > region.density) continue;
                    const lat = region.latMin + li * 4 + (Math.random() - 0.5) * 3;
                    const lng = region.lngMax - lj * 4 + (Math.random() - 0.5) * 3;
                    continentDots.push({ lat, lng });
                }
            }
        }

        // Convert lat/lng to 3D sphere point, then project to 2D
        function latLngTo3D(lat: number, lng: number, rotY: number): Point3D {
            const phi = ((90 - lat) * Math.PI) / 180;
            const theta = ((lng + rotY) * Math.PI) / 180;
            return {
                x: Math.sin(phi) * Math.cos(theta),
                y: Math.cos(phi),
                z: Math.sin(phi) * Math.sin(theta),
            };
        }

        function project(p: Point3D): ProjectedPoint {
            return {
                x: cx + p.x * R,
                y: cy - p.y * R,
                visible: p.z > -0.1,
                depth: p.z,
            };
        }

        // Animated connection lines with moving dots
        const connections: Connection[] = [
            { fromLat: 40, fromLng: -74, toLat: 51, toLng: 0, color: "#ef4444", progress: 0, speed: 0.004 },
            { fromLat: 51, fromLng: 0, toLat: 35, toLng: 139, color: "#f59e0b", progress: 0.3, speed: 0.003 },
            { fromLat: -33, fromLng: 151, toLat: 1, toLng: 103, color: "#06b6d4", progress: 0.6, speed: 0.005 },
            { fromLat: 19, fromLng: 72, toLat: 40, toLng: -74, color: "#a78bfa", progress: 0.1, speed: 0.0035 },
        ];

        // Highlight points (cities)
        const cities: City[] = [
            { lat: 40, lng: -74, label: "New York", color: "#06b6d4" },
            { lat: 51, lng: 0, label: "London", color: "#06b6d4" },
            { lat: 35, lng: 139, label: "Tokyo", color: "#06b6d4" },
            { lat: -33, lng: 151, label: "Sydney", color: "#06b6d4" },
            { lat: 1, lng: 103, label: "Singapore", color: "#06b6d4" },
            { lat: 19, lng: 72, label: "Mumbai", color: "#06b6d4" },
        ];

        let rotY = 20;
        let t = 0;

        function drawArc(from3D: Point3D, to3D: Point3D, progress: number, color: string) {
            const steps = 60;
            ctx.beginPath();
            let started = false;

            for (let i = 0; i <= steps * progress; i++) {
                const s = i / steps;
                const ix = from3D.x + (to3D.x - from3D.x) * s;
                const iy = from3D.y + (to3D.y - from3D.y) * s;
                const iz = from3D.z + (to3D.z - from3D.z) * s;

                const len = Math.sqrt(ix * ix + iy * iy + iz * iz);
                const lift = 1 + 0.25 * Math.sin(Math.PI * s);
                const px = (ix / len) * lift;
                const py = (iy / len) * lift;
                const pz = (iz / len) * lift;

                const sx = cx + px * R;
                const sy = cy - py * R;
                const vis = pz > -0.05;
                if (!vis) {
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
            ctx.lineWidth = 1.2;
            ctx.globalAlpha = 0.7;
            ctx.stroke();
            ctx.globalAlpha = 1;
        }

        function drawMovingDot(from3D: Point3D, to3D: Point3D, progress: number, color: string) {
            if (progress <= 0 || progress > 1) return;

            const s = progress;
            const ix = from3D.x + (to3D.x - from3D.x) * s;
            const iy = from3D.y + (to3D.y - from3D.y) * s;
            const iz = from3D.z + (to3D.z - from3D.z) * s;
            const len = Math.sqrt(ix * ix + iy * iy + iz * iz);
            const lift = 1 + 0.25 * Math.sin(Math.PI * s);
            const px = (ix / len) * lift;
            const py = (iy / len) * lift;
            const pz = (iz / len) * lift;
            if (pz < -0.05) return;

            const sx = cx + px * R;
            const sy = cy - py * R;

            const grd = ctx.createRadialGradient(sx, sy, 0, sx, sy, 8);
            grd.addColorStop(0, color + "ff");
            grd.addColorStop(1, color + "00");
            ctx.beginPath();
            ctx.arc(sx, sy, 8, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(sx, sy, 3, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
        }

        function draw() {
            ctx.clearRect(0, 0, W, H);

            const atmo = ctx.createRadialGradient(cx, cy, R * 0.85, cx, cy, R * 1.15);
            atmo.addColorStop(0, "rgba(6,182,212,0.06)");
            atmo.addColorStop(1, "rgba(6,182,212,0)");
            ctx.beginPath();
            ctx.arc(cx, cy, R * 1.15, 0, Math.PI * 2);
            ctx.fillStyle = atmo;
            ctx.fill();

            for (const d of continentDots) {
                const p3 = latLngTo3D(d.lat, d.lng, rotY);
                const p2 = project(p3);
                if (!p2.visible) continue;
                const alpha = 0.3 + p2.depth * 0.5;
                const size = 1.2 + p2.depth * 0.8;
                ctx.beginPath();
                ctx.arc(p2.x, p2.y, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(100,220,255,${alpha.toFixed(2)})`;
                ctx.fill();
            }

            ctx.globalAlpha = 0.08;
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

            for (const conn of connections) {
                const from3D = latLngTo3D(conn.fromLat, conn.fromLng, rotY);
                const to3D = latLngTo3D(conn.toLat, conn.toLng, rotY);
                drawArc(from3D, to3D, conn.progress, conn.color);
                drawMovingDot(from3D, to3D, conn.progress, conn.color);
                conn.progress += conn.speed;
                if (conn.progress > 1) conn.progress = 0;
            }

            for (const city of cities) {
                const p3 = latLngTo3D(city.lat, city.lng, rotY);
                const p2 = project(p3);
                if (!p2.visible) continue;

                const pulse = 0.5 + 0.5 * Math.sin(t * 2 + city.lat);

                ctx.beginPath();
                ctx.arc(p2.x, p2.y, 6 + pulse * 4, 0, Math.PI * 2);
                ctx.strokeStyle = city.color + "66";
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

        draw();

        return () => {
            if (animRef.current !== null) {
                cancelAnimationFrame(animRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ display: "block" }}
        />
    );
}

// ─── Global Coverage Section ──────────────────────────────────────────────────
function GlobalCoverage() {
    return (
        <section className="relative overflow-hidden bg-[#07102b] h-[520px] flex items-center">
            <div className="absolute inset-0">
                <GlobeCanvas />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#07102b]/30 to-[#07102b]/95" />

            <div className="relative ml-auto mr-12 max-w-xs text-white z-10">
                <h2 className="text-4xl font-light tracking-wide">Global</h2>
                <h2 className="text-4xl font-bold text-cyan-400 tracking-wide mb-4">
                    Coverage
                </h2>
                <p className="text-sm leading-6 text-white/60 mb-6">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 text-[#07102b] font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    Get Started
                </button>
            </div>
        </section>
    );
}

// ─── Case Card ────────────────────────────────────────────────────────────────
function CaseCard({ title, desc, image, accent, large = false }: CaseCardProps) {
    return (
        <div
            className={`group relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/20 hover:shadow-[0_12px_40px_rgba(0,200,255,0.08)] ${large ? "h-[420px]" : "h-[380px]"}`}
        >
            <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-40 mix-blend-screen`} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07102b]/95 via-[#07102b]/45 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-5">
                <h3 className="whitespace-pre-line text-center text-[14px] font-semibold leading-snug tracking-wide text-cyan-300">
                    {title}
                </h3>
                <p className="mt-2 text-center text-xs leading-5 text-white/80 line-clamp-3">{desc}</p>
                <div className="mt-3 flex justify-end">
                    <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-200 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/20 group-hover:text-cyan-300">
                        <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
}

// ─── Case Studies Section ─────────────────────────────────────────────────────
function CaseStudies() {
    const leftCards = caseStudies.filter((_, i) => i % 2 === 0);
    const rightCards = caseStudies.filter((_, i) => i % 2 !== 0);

    return (
        <section className="relative overflow-hidden bg-[#07102b] py-16 text-white">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/8 blur-[130px]" />
                <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/8 blur-[130px]" />
            </div>
            <div className="absolute inset-y-0 left-0 w-px bg-white/10" />
            <div className="absolute inset-y-0 right-0 w-px bg-white/10" />

            <div className="relative mx-auto max-w-6xl px-5 md:px-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-cyan-400 md:text-4xl">Case Studies</h2>
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/50">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:-mt-10">
                    <div className="flex flex-col gap-6 md:mt-20">
                        {leftCards.map((item, i) => (
                            <CaseCard key={i} {...item} large={i === 0} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-6">
                        {rightCards.map((item, i) => (
                            <CaseCard key={i} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Page() {
    return (
        <div className="bg-[#07102b]">
           
            <CaseStudies />
             <GlobalCoverage />
        </div>
    );
}