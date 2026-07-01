import type { Metadata } from "next";
import LegalPage, {
  type LegalSection,
} from "@/app/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Insights Opinion",
  description:
    "Learn how Insights Opinion collects, uses, and protects personal information.",
};

const sections: LegalSection[] = [
  {
    title: "Consent and Scope",
    paragraphs: [
      "By using this website, you agree to this Privacy Policy. It applies to information shared with or collected by Insights Opinion through this website and does not cover information collected offline or through unrelated channels.",
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: [
      "We explain what information is required and why when we ask you to provide personal information.",
      "If you contact us, submit a form, or create an account, we may receive information such as your name, company, postal address, email address, telephone number, message content, attachments, and any other details you choose to provide.",
    ],
  },
  {
    title: "How We Use Information",
    bullets: [
      "Provide, operate, secure, and maintain the website.",
      "Improve and personalize website content and user experience.",
      "Understand website usage, performance, and audience trends.",
      "Develop services, features, and functionality.",
      "Respond to enquiries and provide service-related updates.",
      "Send communications where permitted and prevent fraudulent activity.",
    ],
  },
  {
    title: "Log Files",
    paragraphs: [
      "Like many websites, our hosting and analytics systems may collect standard log information, including IP address, browser type, internet service provider, timestamps, referring or exit pages, and click activity. This information is generally used for website administration, security, performance analysis, and aggregated reporting.",
    ],
  },
  {
    title: "Cookies and Similar Technologies",
    paragraphs: [
      "We may use cookies to remember preferences, understand which pages visitors use, and adapt website content to browser or device information. Please read our Cookies Policy for more information and available controls.",
    ],
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "Third-party services, advertising partners, or linked websites may use their own cookies, scripts, or tracking technologies. Their privacy practices are governed by their own policies, and Insights Opinion does not control those technologies.",
      "You can manage or disable cookies through your browser settings. Some website features may not work correctly when cookies are disabled.",
    ],
  },
  {
    title: "California Privacy Rights",
    bullets: [
      "Request disclosure of categories and specific pieces of personal information collected about you.",
      "Request deletion of personal information, subject to applicable exceptions.",
      "Request that personal information is not sold where that right applies.",
    ],
    paragraphs: [
      "We aim to respond to valid privacy requests within the period required by applicable law.",
    ],
  },
  {
    title: "GDPR Data Protection Rights",
    bullets: [
      "Access personal information held about you.",
      "Correct inaccurate or incomplete information.",
      "Request erasure or restriction of processing where applicable.",
      "Object to certain processing activities.",
      "Request data portability where the law provides this right.",
    ],
    paragraphs: [
      "We may need to verify your identity before completing a request and will respond within the timeframe required by applicable law.",
    ],
  },
  {
    title: "Children’s Information",
    paragraphs: [
      "Insights Opinion does not knowingly collect personally identifiable information from children under 13 through this website. Parents or guardians who believe a child has provided such information should contact us so that we can review and remove it where appropriate.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Privacy is a priority at Insights Opinion. This policy explains the information we may collect through our website, how we use it, and the rights available to website visitors."
      sections={sections}
    />
  );
}
