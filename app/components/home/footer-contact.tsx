import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Youtube,
} from "lucide-react";

const socialLinks = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/MRInsightsopinion/",
        icon: Facebook,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/insightsopinion/",
        icon: Instagram,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/channel/UCjGQ2nhfxBTAszLnmJCfM0w",
        icon: Youtube,
    },
    {
        label: "X",
        href: "https://x.com/insightsopn",
        icon: Twitter,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/insightsopinion",
        icon: Linkedin,
    },
] as const;

export default function FooterContact({ mobile = false }: { mobile?: boolean }) {
    return (
        <div className={mobile ? "pt-5" : "mt-8"}>
            <address className="max-w-[280px] text-sm not-italic leading-6 text-white/75">
                100 Church Street, Suite 800 New York, NY, 10007
            </address>

            <div className="mt-4 flex flex-wrap items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className={`flex items-center justify-center rounded-full bg-white text-[#151b4a] transition hover:scale-105 ${
                            mobile ? "h-9 w-9" : "h-10 w-10"
                        }`}
                    >
                        <Icon size={mobile ? 16 : 18} />
                    </a>
                ))}
            </div>
        </div>
    );
}
