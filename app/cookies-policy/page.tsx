import type { Metadata } from "next";
import LegalPage, {
  type LegalSection,
} from "@/app/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Cookies Policy | Insights Opinion",
  description:
    "Learn how Insights Opinion uses cookies and how you can manage your cookie preferences.",
};

const sections: LegalSection[] = [
  {
    title: "What Are Cookies?",
    paragraphs: [
      "Cookies are small files stored on your device by websites. They help websites remember information, provide useful functionality, and understand how visitors use different pages.",
    ],
  },
  {
    title: "How We Use Cookies",
    paragraphs: [
      "We may use cookies to support website functionality, remember preferences, understand website performance, improve content, and provide a smoother visitor experience.",
      "Disabling every cookie may prevent parts of the website from working as intended.",
    ],
  },
  {
    title: "Managing or Disabling Cookies",
    paragraphs: [
      "Most browsers allow you to review, block, or delete cookies through their privacy or security settings. Browser help documentation provides instructions for the device and browser you use.",
      "If you disable cookies, certain forms, account features, preferences, or other website functions may become unavailable.",
    ],
  },
  {
    title: "Cookies We May Set",
    bullets: [
      "Account cookies used to support registration, sign-in, and account administration.",
      "Login cookies used to remember an authenticated session.",
      "Newsletter cookies used to remember subscription preferences and notifications.",
      "Survey cookies used to record participation or maintain responses between pages.",
      "Form cookies used to remember information submitted for future correspondence.",
      "Preference cookies used to remember choices about how the website operates.",
    ],
  },
  {
    title: "Third-Party Cookies",
    paragraphs: [
      "Trusted third-party services may set cookies when their tools are used on this website. Analytics services may collect aggregated usage information such as pages visited and time spent on the website.",
      "Social media buttons or plugins may allow platforms such as LinkedIn, Facebook, or X to set cookies under their own privacy and cookie policies.",
    ],
  },
  {
    title: "More Information",
    paragraphs: [
      "If you are unsure whether a cookie is necessary, keeping it enabled may help preserve the website features you use. You can contact Insights Opinion if you need more information about our use of cookies.",
    ],
  },
];

export default function CookiesPolicyPage() {
  return (
    <LegalPage
      title="Cookies Policy"
      intro="This policy explains how Insights Opinion may use cookies, why they are used, and how you can manage them."
      sections={sections}
    />
  );
}
