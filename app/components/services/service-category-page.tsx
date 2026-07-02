import QuantHero from "@/app/components/quantitative-research/quant-hero";
import QuantAbout from "@/app/components/quantitative-research/quant-about";
import QuantWhat from "@/app/components/quantitative-research/quant-what";
import QuantMethods from "@/app/components/quantitative-research/quant-methods";
import QuantMethodCta from "@/app/components/quantitative-research/quant-method-cta";
import QuantDataAnalysis from "@/app/components/quantitative-research/quant-data-analysis";
import QuantIndustries from "@/app/components/quantitative-research/quant-industries";
import QuantGlobalServices from "@/app/components/quantitative-research/quant-global-services";
import QuantWhyRadial from "@/app/components/quantitative-research/quant-why-radial";
import QuantWhyChoose from "@/app/components/quantitative-research/quant-why-choose";
import QuantFaq from "@/app/components/quantitative-research/quant-faq";
import QuantNews from "@/app/components/quantitative-research/quant-news";
import BookDemoHealth from "@/app/components/healthcare-research/book-demo";

type CategoryKey = "qualitative" | "support";

const categoryContent = {
  qualitative: {
    hero: {
      titleLine1: "Qualitative",
      titleLine2: "Market Research",
      label: "Services",
      lead: "Qualitative market research",
      description:
        "reveals why customers think, choose, and behave the way they do through moderated conversations, observation, and deeper contextual exploration.",
      insightText: "Turn Customer Context into Actionable Insights",
      backgroundImage: "/quality/quant-banner.png",
    },
    about:
      "At Insights Opinion, our qualitative research services uncover the motivations, language, experiences, and unmet needs behind customer behaviour. We manage focus groups, in-depth reviews, in-home usage testing, and mystery shopping from research design through analysis and reporting.",
    what: {
      headingLine1: "What Qualitative",
      headingLine2: "Market Research",
      suffix: "reveals for Your Business?",
      description:
        "Qualitative research uses guided conversations and observation to explain why people think, feel, and behave as they do—giving your team context that numbers alone cannot provide.",
      image: "/managing-Research.jpg",
      imageAlt: "Qualitative research discussion and observation",
      cards: [
        "Understand the motivations and emotions behind customer decisions",
        "Explore unmet needs, language, and real-world experiences in depth",
        "Test early concepts, messages, and customer journeys before launch",
        "Observe how products and services are used in natural settings",
        "Turn rich conversations into clear themes and practical actions",
      ],
    },
    methodCta: {
      heading: "Not sure which qualitative method fits your study?",
      description:
        "Share your audience and research question, and our team will recommend the right moderated or observation-led approach.",
    },
    analysis: {
      heading: "Qualitative Insight Services",
      paragraph1:
        "Collecting conversations is only the beginning. Our researchers code transcripts, identify patterns, and connect participant language to the decisions your team needs to make.",
      paragraph2:
        "Every analysis framework is built around your objectives, with clear themes, supporting evidence, and actionable recommendations.",
    },
    industries: {
      description:
        "Insights Opinion applies qualitative research across sectors where context, experience, and motivation matter.",
      useCasesLabel: "Typical Qualitative Research Use Cases",
      useCases: [
        "Patient journeys, HCP interviews, treatment experience exploration",
        "Product experience, pack evaluation, brand meaning, usage behaviour",
        "Purchase journeys, dealership experience, mobility concept exploration",
        "Customer trust, service journeys, proposition and message testing",
        "UX interviews, usability observation, feature discovery",
        "Student journeys, programme perceptions, educator interviews",
        "Decision-maker interviews, buyer journeys, stakeholder mapping",
      ],
    },
    global: {
      heading: "Qualitative Research Services",
      description:
        "Our teams coordinate qualitative studies across the USA, UK, India, and 100+ countries with local moderation, cultural adaptation, and consistent central oversight.",
      officeDescriptions: [
        "Our New York team supports consumer, B2B, and healthcare interviews and focus groups across the US, with local recruitment and senior moderation.",
        "Our London office coordinates UK and European qualitative programmes with culturally appropriate moderation, analysis, and stakeholder reporting.",
        "Our Noida hub supports Asia Pacific fieldwork, multilingual moderation, transcription, translation, and cross-market qualitative analysis.",
      ],
    },
    whyRadial: {
      heading: "Qualitative Research?",
      items: [
        "One project manager from discussion guide to final report",
        "Custom moderation guides built around your decision",
        "Focus groups, in-depth reviews, IHUTs, and mystery shopping",
        "Experienced moderators for consumer, B2B, and healthcare audiences",
        "Local-language research across 100+ countries",
        "Recruitment validation and participant quality checks",
        "Clear themes supported by participant evidence",
        "Transcription, translation, coding, and analysis managed together",
        "Secure handling of recordings and personal data",
        "GDPR and CCPA-aligned research processes",
        "Actionable reports designed for stakeholder decisions",
      ],
    },
    whyChoose: {
      description:
        "Businesses choose our qualitative research services for experienced moderation, reliable recruitment, cultural sensitivity, and analysis that turns human stories into clear business direction.",
      items: [
        {
          title: "Experienced Moderators and Interviewers",
          content:
            "Sector-aware researchers create comfortable conversations, probe beyond surface answers, and keep every session aligned with the study objectives.",
        },
        {
          title: "Reliable Participant Recruitment",
          content:
            "Screening, validation, and confirmation processes help ensure every participant genuinely matches the required audience.",
        },
        {
          title: "Multi-Market Cultural Understanding",
          content:
            "Local-language teams preserve cultural nuance while a central framework keeps findings comparable across markets.",
        },
        {
          title: "Evidence-Led Qualitative Analysis",
          content:
            "Themes are grounded in transcripts, observations, and participant language—not assumptions or generic templates.",
        },
      ],
    },
    faqs: [
      {
        question: "What is qualitative market research?",
        answer:
          "Qualitative market research uses moderated conversations and observation to understand motivations, perceptions, experiences, and unmet needs in depth.",
      },
      {
        question: "Which qualitative method should I choose?",
        answer:
          "Focus groups are useful for shared discussion, in-depth reviews for private or complex topics, IHUTs for real-world product use, and mystery shopping for service experience evaluation.",
      },
      {
        question: "Can qualitative studies run across multiple countries?",
        answer:
          "Yes. We coordinate local recruitment and moderation across markets while using shared guides, reporting frameworks, and central project management.",
      },
      {
        question: "How are qualitative findings analysed?",
        answer:
          "Researchers code transcripts and observations, identify recurring and contrasting themes, and connect the evidence to your business questions and decisions.",
      },
    ],
    articles: [
      {
        image: "/strengthen-decision-making-with-qualitative-research-methods.jpg",
        category: "Qualitative Research",
        date: "June 2026",
        title: "How Qualitative Research Strengthens Decision-Making",
        desc: "Learn how conversations and observation reveal the context behind customer choices.",
        href: "#",
      },
      {
        image: "/In-Depth-Interviews.jpg",
        category: "Research Methods",
        date: "May 2026",
        title: "Focus Groups or In-Depth Reviews: Which Method Fits?",
        desc: "Compare two core qualitative approaches and understand when each delivers stronger evidence.",
        href: "#",
      },
      {
        image: "/In-Home-Usage-Testings.jpg",
        category: "Customer Experience",
        date: "April 2026",
        title: "Why Real-World Product Usage Changes the Research Story",
        desc: "See how in-home observation uncovers behaviours that controlled testing can miss.",
        href: "#",
      },
    ],
  },
  support: {
    hero: {
      titleLine1: "Research",
      titleLine2: "Support",
      label: "Services",
      lead: "Research support services",
      description:
        "help teams launch, manage, localise, process, and deliver studies efficiently across markets and methodologies.",
      insightText: "Turn Complex Research Workflows into Clear Delivery",
      backgroundImage: "/quality/quant-banner.png",
    },
    about:
      "Insights Opinion provides research support services that keep studies accurate, localised, and ready for analysis. Our teams manage survey programming, translation, data processing, quality checks, and insight delivery across markets and methodologies.",
    what: {
      headingLine1: "What Research",
      headingLine2: "Support Services",
      suffix: "do for Your Project?",
      description:
        "Research support services connect the technical and operational stages of a study—from questionnaire setup and language adaptation to clean data and decision-ready outputs.",
      image: "/_Support-Services.jpg",
      imageAlt: "Research programming and data support services",
      cards: [
        "Launch accurate surveys with tested logic, routing, and device compatibility",
        "Adapt research materials across languages without losing meaning",
        "Clean, validate, and structure data for dependable analysis",
        "Reduce delivery risk through documented quality-control checkpoints",
        "Turn complex datasets into clear tables, charts, and insight summaries",
      ],
    },
    methodCta: {
      heading: "Not sure which support services your project needs?",
      description:
        "Share your questionnaire, markets, languages, data formats, and timeline—we will map the right support workflow.",
    },
    analysis: {
      heading: "Data Delivery Services",
      paragraph1:
        "Reliable research depends on what happens between collection and decision-making. Our teams clean, validate, code, tabulate, and structure outputs for confident analysis.",
      paragraph2:
        "Delivery formats are tailored to your workflow, including Excel, CSV, SPSS, cross-tabs, dashboards, and concise insight summaries.",
    },
    industries: {
      description:
        "Our research support teams adapt technical workflows to the quality, privacy, and reporting needs of each sector.",
      useCasesLabel: "Typical Research Support Use Cases",
      useCases: [
        "Compliant survey programming, medical translation, secure datasets",
        "Multi-market questionnaires, product lists, concept and pack localisation",
        "Dealer surveys, multilingual scripts, experience dashboards",
        "Secure programming, customer datasets, NPS and satisfaction reporting",
        "Complex logic, API integrations, UX survey data processing",
        "Student surveys, multilingual materials, programme reporting",
        "B2B questionnaires, open-end coding, decision-maker data validation",
      ],
    },
    global: {
      heading: "Research Support Services",
      description:
        "Our USA, UK, and India teams provide coordinated technical and language support for domestic and multi-country research programmes across 100+ markets.",
      officeDescriptions: [
        "Our New York team supports client coordination, questionnaire review, reporting requirements, and US-market delivery standards.",
        "Our London office manages European language workflows, local compliance needs, and cross-market research delivery.",
        "Our Noida delivery hub provides scalable survey programming, translation coordination, data processing, tabulation, and quality review.",
      ],
    },
    whyRadial: {
      heading: "Research Support?",
      items: [
        "One delivery team across setup, fieldwork support, and outputs",
        "Responsive survey programming across devices",
        "Translation and localisation in 60+ languages",
        "Questionnaire logic and routing quality checks",
        "Multi-browser and mobile compatibility testing",
        "Data cleaning, validation, coding, and tabulation",
        "Clear, analysis-ready output formats",
        "Secure file transfer and controlled data access",
        "Documented review checkpoints and version control",
        "Flexible capacity for single and multi-country studies",
        "Timelines agreed upfront and monitored throughout",
      ],
    },
    whyChoose: {
      description:
        "Businesses choose our support services for dependable technical execution, language accuracy, secure data handling, and one coordinated team from setup through final delivery.",
      items: [
        {
          title: "Experienced Survey Programmers",
          content:
            "Our teams build and test complex routing, quotas, validations, and responsive layouts across leading survey platforms.",
        },
        {
          title: "Research-Aware Translation",
          content:
            "Translators preserve question intent, response scales, terminology, and cultural relevance across every required language.",
        },
        {
          title: "Structured Data Quality Controls",
          content:
            "Datasets pass through completeness, consistency, duplicate, response-pattern, and formatting checks before delivery.",
        },
        {
          title: "Flexible Output and Reporting",
          content:
            "Outputs are prepared around your analysis workflow, stakeholder needs, and preferred tools—not a fixed delivery template.",
        },
      ],
    },
    faqs: [
      {
        question: "What do research support services include?",
        answer:
          "They include survey programming, questionnaire testing, translation, localisation, data cleaning, coding, tabulation, dashboard inputs, and insight-ready delivery.",
      },
      {
        question: "Can you work with an existing questionnaire?",
        answer:
          "Yes. We can review, program, test, translate, and prepare an existing questionnaire while preserving the approved research design.",
      },
      {
        question: "Which survey platforms and output formats are supported?",
        answer:
          "Platform and format support is tailored to the project. Typical outputs include Excel, CSV, SPSS, cross-tabs, charts, dashboards, and coded open ends.",
      },
      {
        question: "How is translation quality checked?",
        answer:
          "Research translations use terminology review, contextual checks, proofreading, and optional back-translation or client review workflows.",
      },
    ],
    articles: [
      {
        image: "/Survey-Programming.jpg",
        category: "Survey Programming",
        date: "June 2026",
        title: "The Survey Programming Checks That Prevent Bad Data",
        desc: "A practical look at routing, validation, quota, and device checks before launch.",
        href: "#",
      },
      {
        image: "/Translation.jpg",
        category: "Translation",
        date: "May 2026",
        title: "Why Research Translation Needs More Than Literal Accuracy",
        desc: "Learn how localisation protects question intent and cross-market comparability.",
        href: "#",
      },
      {
        image: "/Data-Insights.jpg",
        category: "Data Insights",
        date: "April 2026",
        title: "From Raw Data to Decision-Ready Research Outputs",
        desc: "See how cleaning, coding, tabulation, and reporting create dependable evidence.",
        href: "#",
      },
    ],
  },
} as const;

export default function ServiceCategoryPage({
  category,
}: {
  category: CategoryKey;
}) {
  const content = categoryContent[category];

  return (
    <main>
      <QuantHero content={content.hero} />
      <QuantAbout content={content.about} />
      <QuantWhat content={content.what} />
      <QuantMethods initialCategoryKey={category} />
      <QuantMethodCta content={content.methodCta} />
      <QuantDataAnalysis content={content.analysis} />
      <QuantIndustries content={content.industries} />
      <QuantGlobalServices content={content.global} />
      <QuantWhyRadial content={content.whyRadial} />
      <QuantWhyChoose />
      <QuantFaq items={[...content.faqs]} />
      <QuantNews articles={[...content.articles]} />
      <BookDemoHealth />
    </main>
  );
}
