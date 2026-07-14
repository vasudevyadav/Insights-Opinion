import { serviceCategories } from "@/app/lib/service-catalog";
import type { WhyChooseSection } from "@/data/service-page-content";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  iconKey: string;
}

export interface WhenToUseItem {
  iconKey: string;
  title: string;
  description: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface MethodData {
  slug: string;
  hero: { title: string; subtitle: string; description: string };
  about: string;
  why: {
    heading1: string;
    heading2: string;
    bodyLeft: string;
    bodyRight1: string;
    bodyRight2: string;
  };
  services: {
    headingGradient: string;
    headingLight: string;
    subheading: string;
    items: ServiceItem[];
  };
  whenToUse: {
    heading1: string;
    heading2: string;
    bodyText: string;
    image: string;
    items: WhenToUseItem[];
  };
  comparison: {
    col1: string;
    col2: string;
    rows: { factor: string; col1: string; col2: string }[];
    footer: string;
  };
  vsBox: {
    title: string;
    subtitle: string;
    description: string;
    col1Label: string;
    col2Label: string;
    col1Desc: string;
    col2Desc?: string;
    items: { label: string; col1: string; col2: string }[];
  };
  sectors: { title: string; image: string; description: string }[];
  whyChooseChild?: readonly WhyChooseSection[];
  whyChooseSections?: readonly WhyChooseSection[];
  faqs: FaqItem[];
}

const methods: Record<string, MethodData> = {
  cati: {
    slug: "cati",
    hero: {
      title: "CATI Market\nResearch Services",
      subtitle: "Accurate Human-Led\nData Collection",
      description:
        "Conduct smarter phone surveys with real-time, reliable insights powered by expert interviewers and advanced CATI technology.",
    },
    about:
      "At Insights Opinion, we are a full-service CATI market research company delivering reliable data across 100+ countries and 60+ languages. All CATI services are backed by ISO 27001 and ISO 20252 certified processes and live quality supervision throughout fieldwork.",
    why: {
      heading1: "Why is CATI",
      heading2: "the Right Choice?",
      bodyLeft:
        "CATI is a better fit than online surveys when the study needs more than a link sent to a panel. It works well when your audience is harder to reach online, when questions are sensitive or complex, when you need to probe beyond a yes or no answer, or when you are running a B2B or healthcare study where respondent verification matters.",
      bodyRight1:
        "Our telephone interviewing services are designed for studies where data quality comes first.",
      bodyRight2:
        "For studies that need face-to-face interaction instead, our CAPI services are the right alternative.",
    },
    services: {
      headingGradient: "What Our CATI",
      headingLight: "Services Include?",
      subheading:
        "Insights Opinion manages the full project as a single CATI survey company, from questionnaire to final data.",
      items: [
        {
          id: "01",
          title: "Questionnaire Design and Scripting",
          description:
            "We design and script questionnaires built for telephone delivery — clear routing, controlled length, and language tuned for spoken responses rather than a screen.",
          image: "/Survey-Programming.jpg",
          iconKey: "FileText",
        },
        {
          id: "02",
          title: "Interviewer Training",
          description:
            "Every interviewer is briefed on the specific study and trained for the audience type. B2B research and healthcare research studies receive additional sector briefings.",
          image: "/quality/cati-telephone.png",
          iconKey: "Users",
        },
        {
          id: "03",
          title: "Automated Dialing and Scheduling",
          description:
            "Our dialing system manages call queues, time-zone scheduling, and callback windows so interviewers spend time talking, not waiting.",
          image: "/quality/cati-computer.png",
          iconKey: "Phone",
        },
        {
          id: "04",
          title: "Live Monitoring and Quality Review",
          description:
            "Supervisors monitor live calls throughout fieldwork. Interviews that fall outside quality thresholds are flagged and removed before data delivery.",
          image: "/Live-Project-Visibility.png",
          iconKey: "Eye",
        },
        {
          id: "05",
          title: "Data Delivery",
          description:
            "Clean, coded data delivered in your preferred format — SPSS, Excel, or CSV — with a full fieldwork summary and response rate breakdown.",
          image: "/Data-Insights.jpg",
          iconKey: "Database",
        },
      ],
    },
    whenToUse: {
      heading1: "When to Use",
      heading2: "CATI Market Research?",
      bodyText:
        "Outsourcing CATI market research to Insights Opinion gives you fully managed CATI fieldwork services from brief to delivery. For studies needing panel respondents alongside telephone reach, our global panel of 8M+ profiled respondents works alongside CATI fieldwork.",
      image: "/quality/cati-telephone.png",
      items: [
        { iconKey: "TrendingDown", title: "Low Digital Reach", description: "Your target audience has lower digital engagement or is difficult to reach through online panels" },
        { iconKey: "BookOpen", title: "Sensitive Topics", description: "The study covers sensitive topics where a human interviewer improves response quality" },
        { iconKey: "Wifi", title: "Deep Probing", description: "You need structured probing to go deeper than a closed question allows" },
        { iconKey: "UserCheck", title: "Verified Respondents", description: "You are running a B2B, healthcare, or public opinion study where respondent verification is important" },
        { iconKey: "RefreshCw", title: "Consistent Tracking", description: "Longitudinal tracking requires a consistent method across multiple research waves" },
      ],
    },
    comparison: {
      col1: "CATI",
      col2: "Online Surveys",
      rows: [
        { factor: "Interviewer involvement", col1: "Trained interviewer throughout", col2: "Self-completion only" },
        { factor: "Response quality control", col1: "High, real-time supervision", col2: "Respondent-led" },
        { factor: "Audience reach", col1: "Broad, including non-digital populations", col2: "Primarily digital users" },
        { factor: "Sensitive topic handling", col1: "Stronger, reduces dropout", col2: "Higher abandonment rates" },
        { factor: "Cost per response", col1: "Higher", col2: "Lower for large panels" },
        { factor: "Best for", col1: "B2B, healthcare, complex studies", col2: "Large consumer panels, fast turnaround" },
      ],
      footer:
        "Many clients combine CATI data collection services with online panel methods to build representative samples. Both sit within Insights Opinion's quantitative research portfolio.",
    },
    vsBox: {
      title: "CATI vs CAPI!",
      subtitle: "What's the Difference?",
      description:
        "CATI is telephone-based and centrally managed. It is faster to deploy, easier to supervise, and more cost-efficient for covering wide geographic areas. Computer Assisted Personal Interviewing (CAPI) uses face-to-face interviews on a tablet or laptop, reaching hard-to-reach or in-person markets. Both methods can be combined in mixed-method research designs.",
      col1Label: "CATI",
      col2Label: "CAPI",
      col1Desc: "Telephone-based, centrally managed, wide geographic reach",
      col2Desc: "Face-to-face, tablet/laptop, hard-to-reach in-person markets",
      items: [
        { label: "Deployment Speed", col1: "Faster", col2: "Moderate" },
        { label: "Supervision", col1: "Centralised, real-time", col2: "Field supervisor" },
        { label: "Geographic Reach", col1: "Wide", col2: "In-person locations" },
        { label: "Cost Efficiency", col1: "Higher", col2: "Field cost adds up" },
      ],
    },
    sectors: [
      { title: "CATI for Healthcare Research", image: "/market-research/Healthcare-1.jpg", description: "Healthcare telephone surveys require careful respondent handling, ethics protocols, and strict data privacy. Our healthcare CATI team recruits patients, caregivers, and healthcare professionals. Informed consent is built into every project. GDPR and CCPA-aligned practices govern all data collection throughout." },
      { title: "CATI for Consumer Research", image: "/quality/cati-telephone.png", description: "Consumer CATI delivers structured telephone interviews at scale across demographic groups. Our interviewers are trained to maintain engagement and reduce dropout, giving you high-quality responses from representative consumer samples." },
      { title: "CATI for Public Opinion Research", image: "/quality/cati-location.png", description: "Public opinion polling requires precise sampling and neutral questioning. Our CATI fieldwork teams apply rigorous randomisation, quota controls, and verbatim capture to deliver representative views across any population segment." },
    ],
    faqs: [
      { q: "What is CATI market research?", a: "CATI market research is a telephone-based quantitative research method where trained interviewers conduct structured surveys using computer-assisted scripting. It is widely used for B2B, healthcare, consumer, and public opinion research due to its high response quality and broad reach." },
      { q: "How is CATI different from online surveys?", a: "CATI uses trained interviewers to conduct telephone surveys, providing real-time quality supervision and access to non-digital audiences. Online surveys are self-administered, lower cost, and faster, but limited to digitally active respondents." },
      { q: "Can Insights Opinion run CATI research internationally?", a: "Yes. Insights Opinion runs CATI projects across 100+ countries in 60+ languages with centralised quality control, time-zone managed dialing, and consistent fieldwork protocols across all markets." },
      { q: "What quality controls are in place for CATI fieldwork?", a: "Every CATI project includes interviewer briefings, live call monitoring by supervisors, back-checks on completed interviews, and data validation before delivery. Interviews that do not meet quality thresholds are removed before data is processed." },
      { q: "How long does a CATI project typically take?", a: "CATI fieldwork timelines vary by sample size and audience. Most consumer studies complete fieldwork in 2–4 weeks. B2B and healthcare studies may take slightly longer depending on incidence rates and respondent availability." },
    ],
  },

  capi: {
    slug: "capi",
    hero: {
      title: "CAPI Market\nResearch Services",
      subtitle: "Accurate Face-to-Face\nData Collection",
      description:
        "Conduct smarter in-person surveys with real-time, reliable insights powered by field interviewers and advanced CAPI technology.",
    },
    about:
      "At Insights Opinion, we are a full-service CAPI market research company delivering reliable data across 100+ countries and 60+ languages. All CAPI services are backed by ISO 27001 and ISO 20252 certified processes and field quality supervision throughout every project.",
    why: {
      heading1: "Why is CAPI",
      heading2: "the Right Choice?",
      bodyLeft:
        "CAPI is a better fit than online surveys when your study requires direct in-person engagement. It works well when your audience is in a specific geographic area, when products or concepts need to be shown physically, when you need to capture non-verbal or observed responses, or when you are running a household or B2B survey requiring face-to-face verification.",
      bodyRight1:
        "Our field interviewing services are designed for studies where physical engagement and response quality come first.",
      bodyRight2:
        "For studies that need telephone coverage instead, our CATI services are the right alternative.",
    },
    services: {
      headingGradient: "What Our CAPI",
      headingLight: "Services Include?",
      subheading:
        "Insights Opinion manages the full CAPI project from questionnaire design through to fieldwork and clean data delivery.",
      items: [
        {
          id: "01",
          title: "Survey Design and Programming",
          description:
            "We design and script CAPI questionnaires for tablet and laptop delivery — logical routing, controlled skip patterns, and offline capability for low-connectivity environments.",
          image: "/Survey-Programming.jpg",
          iconKey: "FileText",
        },
        {
          id: "02",
          title: "Field Interviewer Training",
          description:
            "Every field interviewer is briefed on the study objectives, sampling approach, and target audience. Sector-specific studies receive additional training on sensitive protocols.",
          image: "/quality/cati-computer.png",
          iconKey: "Users",
        },
        {
          id: "03",
          title: "Territory Planning and Scheduling",
          description:
            "We manage field routes, geographic quotas, and daily call targets to ensure representative coverage across every assigned territory.",
          image: "/quality/cati-location.png",
          iconKey: "MapPin",
        },
        {
          id: "04",
          title: "Live Supervision and Quality Review",
          description:
            "Field supervisors back-check completed interviews daily. GPS stamps, time-on-device checks, and response pattern validation ensure every interview meets quality standards.",
          image: "/Live-Project-Visibility.png",
          iconKey: "Eye",
        },
        {
          id: "05",
          title: "Data Processing and Delivery",
          description:
            "Clean, coded data delivered in SPSS, Excel, or CSV format with a full fieldwork summary, response rate breakdown, and quality certification.",
          image: "/Data-Insights.jpg",
          iconKey: "Database",
        },
      ],
    },
    whenToUse: {
      heading1: "When to Use",
      heading2: "CAPI Research?",
      bodyText:
        "Outsourcing CAPI research to Insights Opinion gives you fully managed face-to-face fieldwork from brief to delivery. For studies combining in-person reach with panel respondents, our global panel of 8M+ profiled respondents can complement CAPI fieldwork.",
      image: "/quality/cati-computer.png",
      items: [
        { iconKey: "MapPin", title: "Product Placement Studies", description: "Physical product or stimulus needs to be placed in front of respondents during the interview" },
        { iconKey: "Home", title: "Household Surveys", description: "You need to reach respondents within specific households or communities in defined geographic areas" },
        { iconKey: "Users", title: "Rural or Remote Audiences", description: "Your target population is in areas with low internet connectivity or limited digital access" },
        { iconKey: "Package", title: "Concept and Pack Testing", description: "Respondents need to physically interact with a product, pack design, or in-store display" },
        { iconKey: "UserCheck", title: "Verified In-Person Interviews", description: "Your study requires confirmed respondent identity and presence, such as B2B or public institution surveys" },
      ],
    },
    comparison: {
      col1: "CAPI",
      col2: "Online Surveys",
      rows: [
        { factor: "Interviewer involvement", col1: "Trained field interviewer", col2: "Self-completion only" },
        { factor: "Response quality control", col1: "Live field supervision + back-checks", col2: "Respondent-led" },
        { factor: "Audience reach", col1: "In-person, including offline populations", col2: "Primarily digital users" },
        { factor: "Sensitive topic handling", col1: "Strong, interviewer-guided", col2: "Higher abandonment rates" },
        { factor: "Cost per response", col1: "Higher due to fieldwork logistics", col2: "Lower for large panels" },
        { factor: "Best for", col1: "Household, rural, product testing", col2: "Large consumer panels, fast turnaround" },
      ],
      footer:
        "Many clients combine CAPI fieldwork with online panel surveys to reach both in-person and digital audiences within a single study. Both sit within Insights Opinion's quantitative research portfolio.",
    },
    vsBox: {
      title: "CAPI vs CATI!",
      subtitle: "What's the Difference?",
      description:
        "CAPI uses face-to-face interviewing via tablet or laptop in the field. It is ideal for in-person product testing, household surveys, and hard-to-reach geographic populations. CATI is centrally managed telephone research — faster to deploy and more cost-efficient across wide geographies. Both methods can be combined in mixed-method research designs.",
      col1Label: "CAPI",
      col2Label: "CATI",
      col1Desc: "Face-to-face, field-based, ideal for in-person and offline audiences",
      col2Desc: "Telephone-based, centrally managed, wide geographic reach",
      items: [
        { label: "Interviewer Contact", col1: "Face-to-face", col2: "Telephone" },
        { label: "Supervision", col1: "Field supervisor", col2: "Centralised, real-time" },
        { label: "Best Audience", col1: "Rural, offline, in-person", col2: "Broad, including non-digital" },
        { label: "Cost", col1: "Field logistics cost", col2: "More cost-efficient" },
      ],
    },
    sectors: [
      { title: "CAPI for Healthcare Research", image: "/market-research/Healthcare-1.jpg", description: "Healthcare CAPI studies require careful in-person protocols, informed consent management, and strict data privacy compliance. Our field teams are trained to recruit and interview patients, caregivers, and healthcare professionals with GDPR and CCPA-aligned processes in place." },
      { title: "CAPI for Retail Research", image: "/In-Home-Usage-Testings.jpg", description: "Retail CAPI studies intercept shoppers at point of purchase, measure in-store behaviour, and test product or display responses in real environments. Our field teams manage recruits, intercepts, and quality checks across retail locations." },
      { title: "CAPI for Rural Research", image: "/quality/cati-location.png", description: "Rural and remote CAPI fieldwork requires experienced field teams, GPS-managed routing, and offline capability. Our field supervisors ensure geographic quotas are met and data integrity is maintained even in low-connectivity environments." },
    ],
    faqs: [
      { q: "What is CAPI market research?", a: "CAPI (Computer-Assisted Personal Interviewing) is a face-to-face research method where trained field interviewers conduct structured interviews using tablets or laptops. It is used for household surveys, product testing, retail research, and studies requiring in-person respondent verification." },
      { q: "How is CAPI different from CATI?", a: "CAPI uses face-to-face interviewing in the field, making it ideal for physical product interaction and in-person respondent verification. CATI is telephone-based and centrally managed — faster and more cost-efficient but without the in-person engagement CAPI provides." },
      { q: "Can Insights Opinion run CAPI research in multiple countries?", a: "Yes. Insights Opinion runs CAPI fieldwork across 100+ countries with local field supervisor networks, GPS-managed routing, and centralised quality control from our project management team." },
      { q: "What quality controls are in place for CAPI fieldwork?", a: "Every CAPI project includes interviewer briefings, daily back-checks by field supervisors, GPS verification of interview locations, time-on-device monitoring, and response pattern validation before data is processed and delivered." },
      { q: "How long does a CAPI project typically take?", a: "CAPI timelines vary by sample size, geographic spread, and audience type. Most consumer CAPI studies complete fieldwork in 3–5 weeks. Household or rural studies with dispersed populations may take longer depending on field logistics." },
    ],
  },

  clt: {
    slug: "clt",
    hero: {
      title: "Central Location\nTesting (CLT)",
      subtitle: "Controlled Product\nTesting Research",
      description:
        "Run precise product, pack, and concept evaluations in a controlled environment with verified respondents and expert moderation.",
    },
    about:
      "At Insights Opinion, we run Central Location Testing studies across 100+ countries — delivering controlled, in-person product and concept evaluations with verified respondents, ISO-certified quality processes, and end-to-end project management from brief to final report.",
    why: {
      heading1: "Why is CLT",
      heading2: "the Right Choice?",
      bodyLeft:
        "CLT is the right choice when your study requires controlled conditions that online or in-home testing cannot reliably provide. It works best when respondents need to react to a product, pack, or concept under standardised conditions, when sensory attributes are being evaluated, or when you need to prevent external bias from influencing responses.",
      bodyRight1:
        "Our CLT facilities and field teams are designed for studies where controlled exposure and consistent conditions are critical to data quality.",
      bodyRight2:
        "For studies requiring in-home usage testing instead, our IHUT and CAPI services provide the right alternative.",
    },
    services: {
      headingGradient: "What Our CLT",
      headingLight: "Services Include?",
      subheading:
        "Insights Opinion manages every stage of the CLT project — from venue setup and respondent recruitment through to moderation, data capture, and final delivery.",
      items: [
        {
          id: "01",
          title: "Venue Selection and Setup",
          description:
            "We source, book, and set up testing venues across 100+ countries — configuring booths, stimulus stations, and interview areas to match your study protocol exactly.",
          image: "/CLT-(Central-Location-Testing).jpg",
          iconKey: "MapPin",
        },
        {
          id: "02",
          title: "Screener Recruitment",
          description:
            "We recruit respondents who meet your exact target profile using screeners designed to minimise false accepts. Confirmations and reminders reduce no-show rates throughout.",
          image: "/quality/cati-telephone.png",
          iconKey: "Users",
        },
        {
          id: "03",
          title: "Test Design and Stimulus Preparation",
          description:
            "We prepare and manage all test stimuli — products, packs, concepts, or mock-ups — following the exposure sequence and monadic or comparative test design specified in the brief.",
          image: "/Survey-Programming.jpg",
          iconKey: "Package",
        },
        {
          id: "04",
          title: "Moderated Data Capture",
          description:
            "Trained moderators guide respondents through the evaluation protocol, capturing quantitative ratings and open-ended responses with consistency across all sessions.",
          image: "/Live-Project-Visibility.png",
          iconKey: "Eye",
        },
        {
          id: "05",
          title: "Data Coding and Delivery",
          description:
            "Verbatim responses are coded and cleaned. Final data is delivered in SPSS, Excel, or CSV with a full fieldwork report and response breakdown.",
          image: "/Data-Insights.jpg",
          iconKey: "Database",
        },
      ],
    },
    whenToUse: {
      heading1: "When to Use",
      heading2: "Central Location Testing?",
      bodyText:
        "Outsourcing CLT to Insights Opinion gives you controlled, verifiable product and concept evaluation managed end-to-end. For studies that need both CLT and home placement testing, we combine methods within a single project framework.",
      image: "/CLT-(Central-Location-Testing).jpg",
      items: [
        { iconKey: "Package", title: "Sensory Product Evaluation", description: "You need respondents to taste, smell, feel, or observe a product under identical conditions across all test sessions" },
        { iconKey: "Star", title: "Pack and Concept Testing", description: "You are testing new packaging, product names, or concept boards that require controlled exposure to avoid carry-over bias" },
        { iconKey: "Lightbulb", title: "New Product Development", description: "You are evaluating multiple product variants or prototypes before a launch decision and need reliable comparative data" },
        { iconKey: "BarChart", title: "Blind vs Branded Testing", description: "You need to separate intrinsic product performance from brand influence by controlling respondent exposure to branding" },
        { iconKey: "RefreshCw", title: "Multi-Product Comparison", description: "Your study compares your product against competitive products and requires consistent side-by-side evaluation conditions" },
      ],
    },
    comparison: {
      col1: "CLT",
      col2: "In-Home Usage Test (IHUT)",
      rows: [
        { factor: "Environment control", col1: "Fully controlled, standardised", col2: "Natural home environment" },
        { factor: "Respondent supervision", col1: "Moderated throughout", col2: "Unsupervised" },
        { factor: "Stimulus presentation", col1: "Consistent across all participants", col2: "Variable, respondent-controlled" },
        { factor: "Reaction data", col1: "Immediate reaction data", col2: "Extended usage over days or weeks" },
        { factor: "Cost", col1: "Higher due to venue and logistics", col2: "Lower per completed interview" },
        { factor: "Best for", col1: "Sensory, pack, blind testing", col2: "Durability, habit, longitudinal use" },
      ],
      footer:
        "Many clients use CLT for initial product screening followed by IHUT for extended usage evaluation. Both sit within Insights Opinion's quantitative research portfolio.",
    },
    vsBox: {
      title: "CLT vs Online",
      subtitle: "Concept Testing — What's the Difference?",
      description:
        "Central Location Testing brings respondents into a controlled environment to evaluate products or stimuli in person — giving you immediate, observed reactions under standardised conditions. Online concept testing reaches larger samples faster but cannot control stimulus presentation quality, respondent attention, or sensory elements. The right choice depends on what your product requires.",
      col1Label: "CLT",
      col2Label: "Online Concept Test",
      col1Desc: "Controlled environment, in-person, observed reactions, standardised stimulus",
      col2Desc: "Digital, self-administered, large samples, fast turnaround",
      items: [
        { label: "Environment", col1: "Controlled venue", col2: "Respondent's device" },
        { label: "Stimulus Quality", col1: "Standardised, verified", col2: "Screen-dependent" },
        { label: "Sample Size", col1: "Moderate (200–600)", col2: "Large (500–2000+)" },
        { label: "Sensory Data", col1: "Yes — taste, smell, feel", col2: "Visual only" },
      ],
    },
    sectors: [
      { title: "CLT for FMCG Research", image: "/In-Home-Usage-Testings.jpg", description: "FMCG CLT studies evaluate product performance, pack designs, and line extensions in controlled environments. We manage multi-booth setups, monadic and comparative testing protocols, and rapid turnaround data delivery to support tight innovation timelines." },
      { title: "CLT for Food & Beverage", image: "/CLT-(Central-Location-Testing).jpg", description: "Food and beverage CLT requires sensory testing booths, temperature-controlled product delivery, and trained moderators. Our field teams manage all logistics to ensure consistent stimulus presentation across every respondent session." },
      { title: "CLT for Healthcare Products", image: "/market-research/Healthcare-1.jpg", description: "Healthcare CLT studies evaluate medical device usability, OTC product acceptance, and patient-facing materials under controlled conditions. All studies follow strict ethics and consent protocols with GDPR and CCPA-aligned data management throughout." },
    ],
    faqs: [
      { q: "What is Central Location Testing (CLT)?", a: "Central Location Testing (CLT) is a quantitative research method where respondents attend a pre-arranged venue to evaluate products, concepts, or stimuli under controlled conditions. It is widely used in FMCG, food and beverage, healthcare, and consumer goods sectors for product development and pack testing." },
      { q: "How is CLT different from In-Home Usage Testing (IHUT)?", a: "CLT takes place in a controlled venue where all respondents are exposed to the same stimuli under identical conditions. IHUT places products in respondents' homes for extended use over days or weeks. CLT is better for sensory and pack testing; IHUT is better for habitual use and durability evaluation." },
      { q: "Can Insights Opinion run CLT studies internationally?", a: "Yes. Insights Opinion runs CLT projects across 100+ countries, managing venue sourcing, respondent recruitment, stimulus logistics, and fieldwork quality locally in each market with centralised project oversight." },
      { q: "How many respondents are typically included in a CLT study?", a: "CLT sample sizes typically range from 200 to 600 respondents per market, depending on the number of product variants being tested and the subgroup analysis required. Multi-cell designs for competitive benchmarking often require larger samples." },
      { q: "What quality controls are in place for CLT fieldwork?", a: "Every CLT study includes screener validation at recruitment, identity checks at venue entry, moderated evaluation sessions, and stimulus presentation checks between sessions. Data is cleaned and validated before delivery to remove any partial or out-of-protocol responses." },
    ],
  },

  "online-surveys": {
    slug: "online-surveys",
    hero: {
      title: "Online Survey\nResearch Services",
      subtitle: "Scalable Digital\nData Collection",
      description:
        "Reach large, verified audiences fast with professionally designed online surveys backed by our global panel of 8M+ respondents.",
    },
    about:
      "At Insights Opinion, we are a full-service online survey research company with access to 8M+ verified panellists across consumer, B2B, and healthcare audiences in 100+ countries and 60+ languages. All projects are backed by ISO 27001 and ISO 20252 certified quality processes and end-to-end project management.",
    why: {
      heading1: "Why Are Online Surveys",
      heading2: "the Right Choice?",
      bodyLeft:
        "Online surveys are the right fit when your study needs large, representative samples quickly and cost-efficiently. They work best when your audience is digitally active, when you need to run multi-country studies simultaneously, or when tracking studies require consistent, repeatable methodology across multiple waves.",
      bodyRight1:
        "Our online survey services are designed for studies where scale, speed, and consistent data quality are the priority.",
      bodyRight2:
        "For studies that need telephone reach or in-person engagement instead, our CATI and CAPI services are the right alternative.",
    },
    services: {
      headingGradient: "What Our Online Survey",
      headingLight: "Services Include?",
      subheading:
        "Insights Opinion manages every stage of the online survey project — from questionnaire design through to panel sampling, programming, quality validation, and final data delivery.",
      items: [
        {
          id: "01",
          title: "Survey Design and Scripting",
          description:
            "We design questionnaires optimised for online completion — clear question routing, mobile-responsive layout, appropriate length, and skip logic that mirrors your analytical plan.",
          image: "/Survey-Programming.jpg",
          iconKey: "FileText",
        },
        {
          id: "02",
          title: "Panel Access and Quota Management",
          description:
            "We access our 8M+ verified panellists across consumer, B2B, and healthcare audiences — applying quota controls to ensure representative samples across all required subgroups.",
          image: "/quality/cati-online.png",
          iconKey: "Users",
        },
        {
          id: "03",
          title: "Survey Programming and Testing",
          description:
            "Questionnaires are programmed, tested across devices, and previewed by the research team before launch to eliminate routing errors and display issues.",
          image: "/quality/cati-computer.png",
          iconKey: "Code",
        },
        {
          id: "04",
          title: "Data Quality and Validation",
          description:
            "Every completed survey passes through straight-lining detection, speeder removal, attention check validation, and open-text quality review before entering the final dataset.",
          image: "/Live-Project-Visibility.png",
          iconKey: "Eye",
        },
        {
          id: "05",
          title: "Data Delivery and Reporting",
          description:
            "Clean data delivered in SPSS, Excel, or CSV — with cross-tabulations, significance testing, and optional executive insight reports designed for confident stakeholder presentation.",
          image: "/Data-Insights.jpg",
          iconKey: "Database",
        },
      ],
    },
    whenToUse: {
      heading1: "When to Use",
      heading2: "Online Surveys?",
      bodyText:
        "Outsourcing online surveys to Insights Opinion gives you fully managed digital data collection from brief to delivery. For studies requiring panel respondents alongside CATI or CAPI fieldwork, we combine methods within a single project framework.",
      image: "/quality/cati-online.png",
      items: [
        { iconKey: "Globe", title: "Large Consumer Samples", description: "Your study needs hundreds or thousands of respondents from a defined consumer audience across one or multiple markets" },
        { iconKey: "Clock", title: "Fast Turnaround", description: "You need fieldwork completed in days rather than weeks — online surveys typically close within 2–5 days for consumer audiences" },
        { iconKey: "TrendingUp", title: "Brand and Ad Tracking", description: "Your tracking programme requires consistent, repeatable methodology across regular waves with comparable sample profiles" },
        { iconKey: "BarChart", title: "Multi-Country Studies", description: "You need simultaneous fieldwork across multiple markets with centralised project management and consistent protocols" },
        { iconKey: "Users", title: "Segmentation Research", description: "Your study needs large enough samples to analyse subgroups — age, region, category usage, or behaviour — with statistical confidence" },
      ],
    },
    comparison: {
      col1: "Online Surveys",
      col2: "CATI",
      rows: [
        { factor: "Interviewer involvement", col1: "Self-completion", col2: "Trained interviewer throughout" },
        { factor: "Response quality control", col1: "Automated validation", col2: "Real-time supervisor monitoring" },
        { factor: "Audience reach", col1: "Primarily digital users", col2: "Broad, including non-digital" },
        { factor: "Speed of fieldwork", col1: "2–5 days for consumer studies", col2: "2–4 weeks typically" },
        { factor: "Cost per response", col1: "Lower for large panels", col2: "Higher per complete" },
        { factor: "Best for", col1: "Large consumer panels, tracking, multi-country", col2: "B2B, healthcare, complex studies" },
      ],
      footer:
        "Many clients combine online surveys with CATI to reach both digital and non-digital audiences within the same study. Both sit within Insights Opinion's quantitative research portfolio.",
    },
    vsBox: {
      title: "Online Surveys vs CAPI!",
      subtitle: "What's the Difference?",
      description:
        "Online surveys reach large digital audiences quickly and cost-efficiently. Computer Assisted Personal Interviewing (CAPI) uses face-to-face field interviewers on tablets, reaching offline and geographically dispersed populations that online panels cannot access. Both methods produce high-quality quantitative data — the right choice depends on your audience and study objectives.",
      col1Label: "Online Surveys",
      col2Label: "CAPI",
      col1Desc: "Digital, scalable, fast, ideal for digitally active consumer and B2B audiences",
      col2Desc: "Face-to-face, field-based, ideal for in-person and offline populations",
      items: [
        { label: "Reach", col1: "Digital audiences globally", col2: "In-person, offline populations" },
        { label: "Speed", col1: "2–5 days", col2: "3–5 weeks" },
        { label: "Cost Efficiency", col1: "Lower per complete", col2: "Higher field costs" },
        { label: "Quality Control", col1: "Automated validation", col2: "Field supervisor checks" },
      ],
    },
    sectors: [
      { title: "Online Surveys for Consumer Research", image: "/quality/cati-online.png", description: "Consumer online surveys give you fast, scalable access to representative audience samples across demographics, geographies, and categories. Our panel of 8M+ verified respondents enables precise quota controls and rapid fieldwork completion for brand, product, and market studies." },
      { title: "Online Surveys for B2B Research", image: "/2_Need-More-Reliable-Market-Data-.jpg", description: "B2B online surveys reach decision-makers, buyers, and professionals across sectors with verified job titles, industries, and seniority levels. We apply rigorous respondent validation to ensure your B2B sample matches the exact audience your study requires." },
      { title: "Online Surveys for Healthcare Research", image: "/market-research/Healthcare-1.jpg", description: "Healthcare online surveys recruit verified patients, caregivers, and healthcare professionals through our specialist panels. All healthcare studies apply GDPR and CCPA-aligned protocols, informed consent processes, and sector-appropriate data handling from collection through delivery." },
    ],
    faqs: [
      { q: "What is online survey research?", a: "Online survey research collects structured, quantitative data from defined audiences using web-based questionnaires. Respondents self-complete surveys on desktop or mobile, typically recruited through online panels. It is widely used for brand tracking, segmentation, product testing, and consumer and B2B research." },
      { q: "How do you ensure the quality of online survey data?", a: "Every completed survey passes through straight-lining detection, speeder removal, attention check validation, IP duplication checks, and open-text quality review. Respondents who fail quality checks are removed before the data is processed and delivered." },
      { q: "How quickly can online surveys be fielded?", a: "Most consumer online surveys complete fieldwork within 2–5 days. B2B and specialist healthcare studies may take longer depending on incidence rates and quota complexity. Multi-country studies run simultaneously across all markets to minimise total fieldwork duration." },
      { q: "What panel does Insights Opinion use for online surveys?", a: "Insights Opinion uses its proprietary panel of 8M+ verified respondents across consumer, B2B, and healthcare audiences in 100+ countries. All panellists are double-opt-in verified with regular re-validation to maintain data quality." },
      { q: "Can Insights Opinion run online surveys in multiple languages?", a: "Yes. We run online survey projects in 60+ languages with localised questionnaire translation, back-translation quality checks, and culturally adapted question wording to ensure cross-market comparability." },
    ],
  },
};

const categoryImages = {
  quantitative: "/quality/cati-online.png",
  qualitative: "/_Qualitative-Research.jpg",
  support: "/_Support-Services.jpg",
} as const;

function createDemoMethodData(
  slug: string,
  title: string,
  categoryTitle: string,
  categoryKey: keyof typeof categoryImages
): MethodData {
  const image = categoryImages[categoryKey];

  return {
    slug,
    hero: {
      title: `${title}\nServices`,
      subtitle: `Managed ${categoryTitle}\nSolutions`,
      description: `Explore our ${title.toLowerCase()} capabilities, managed by experienced research teams from project planning through final delivery.`,
    },
    about: `Insights Opinion provides end-to-end ${title.toLowerCase()} services for research programs across industries and markets. This demo service page uses the shared detail-page design and can be replaced with final service-specific copy when approved.`,
    why: {
      heading1: `Why Choose ${title}`,
      heading2: "for Your Research?",
      bodyLeft: `${title} helps teams collect the right evidence for clearer, faster decisions. We tailor the approach to your audience, objectives, timeline, and required markets.`,
      bodyRight1:
        "Every engagement includes a defined workflow, experienced project management, and practical quality checks.",
      bodyRight2:
        "Our team can also combine this service with complementary quantitative, qualitative, and support capabilities.",
    },
    services: {
      headingGradient: `What Our ${title}`,
      headingLight: "Services Include?",
      subheading: `A flexible, fully managed ${title.toLowerCase()} workflow from brief to delivery.`,
      items: [
        {
          id: "01",
          title: "Research Planning",
          description:
            "We translate the business question into a practical research plan, audience definition, timeline, and delivery framework.",
          image,
          iconKey: "FileText",
        },
        {
          id: "02",
          title: "Project Setup",
          description:
            "Our team prepares the required materials, workflows, technology, and quality controls before launch.",
          image: "/Survey-Programming.jpg",
          iconKey: "Code",
        },
        {
          id: "03",
          title: "Fieldwork Management",
          description:
            "Dedicated project managers monitor progress, resolve fieldwork issues, and keep delivery aligned with the agreed plan.",
          image: "/Live-Project-Visibility.png",
          iconKey: "Users",
        },
        {
          id: "04",
          title: "Quality Review",
          description:
            "Outputs are checked for completeness, consistency, and research quality before they enter the final dataset.",
          image: "/Data-Insights.jpg",
          iconKey: "Eye",
        },
        {
          id: "05",
          title: "Data and Insight Delivery",
          description:
            "We deliver clean, usable outputs with a concise project summary and formats suited to your analysis workflow.",
          image: "/Data-Insights.jpg",
          iconKey: "Database",
        },
      ],
    },
    whenToUse: {
      heading1: "When to Use",
      heading2: `${title}?`,
      bodyText: `${title} is a strong fit when your study needs a managed ${categoryTitle.toLowerCase()} approach with clear quality controls, dependable delivery, and support across multiple project stages.`,
      image,
      items: [
        {
          iconKey: "Users",
          title: "Defined Audiences",
          description:
            "You need to reach a specific audience with a structured recruitment and validation plan.",
        },
        {
          iconKey: "Globe",
          title: "Multi-Market Work",
          description:
            "Your project spans regions, languages, or markets and needs central coordination.",
        },
        {
          iconKey: "Clock",
          title: "Managed Timelines",
          description:
            "You need clear milestones, proactive updates, and dependable delivery.",
        },
        {
          iconKey: "UserCheck",
          title: "Quality Controls",
          description:
            "Respondent, process, or output quality needs to be verified throughout the study.",
        },
        {
          iconKey: "BarChart",
          title: "Actionable Outputs",
          description:
            "Your stakeholders need clean evidence that can move directly into analysis and decisions.",
        },
      ],
    },
    comparison: {
      col1: title,
      col2: "Standard Research",
      rows: [
        {
          factor: "Project design",
          col1: "Tailored to the study",
          col2: "Fixed general approach",
        },
        {
          factor: "Project management",
          col1: "Dedicated support",
          col2: "Limited coordination",
        },
        {
          factor: "Quality review",
          col1: "Multi-stage checks",
          col2: "Basic final checks",
        },
        {
          factor: "Market coverage",
          col1: "Single or multi-market",
          col2: "Usually single market",
        },
        {
          factor: "Delivery",
          col1: "Flexible output formats",
          col2: "Standard output",
        },
      ],
      footer: `${title} can be used independently or combined with other services in the Insights Opinion research portfolio.`,
    },
    vsBox: {
      title: `${title} vs Standard Research`,
      subtitle: "What's the Difference?",
      description: `${title} provides a more tailored, managed workflow with service-specific planning and quality control.`,
      col1Label: title,
      col2Label: "Standard Research",
      col1Desc: "Tailored, managed, and flexible",
      col2Desc: "Generalised, fixed, and self-managed",
      items: [
        { label: "Planning", col1: "Custom", col2: "Standard" },
        { label: "Support", col1: "Dedicated", col2: "Limited" },
        { label: "Quality", col1: "Multi-stage", col2: "Final review" },
        { label: "Delivery", col1: "Flexible", col2: "Fixed" },
      ],
    },
    sectors: [
      {
        title: `${title} for Healthcare`,
        image: "/market-research/Healthcare-1.jpg",
        description:
          "A carefully managed approach for healthcare audiences, sensitive topics, and privacy-conscious research workflows.",
      },
      {
        title: `${title} for Consumer Research`,
        image,
        description:
          "Flexible consumer research support for product, brand, experience, and market decision-making.",
      },
      {
        title: `${title} for B2B Research`,
        image: "/2_Need-More-Reliable-Market-Data-.jpg",
        description:
          "Targeted research support for professional audiences, decision-makers, and specialist business categories.",
      },
    ],
    faqs: [
      {
        q: `What is ${title}?`,
        a: `${title} is part of our ${categoryTitle.toLowerCase()} portfolio. The exact research design is tailored to the audience, business question, markets, and delivery requirements.`,
      },
      {
        q: `When should I use ${title}?`,
        a: `Use ${title} when you need a managed research workflow, clear quality controls, and outputs designed around a specific business decision.`,
      },
      {
        q: "Can this service be used internationally?",
        a: "Yes. Insights Opinion can coordinate single-country and multi-country projects with central project management and local market support.",
      },
      {
        q: "Can it be combined with other research services?",
        a: "Yes. We can combine quantitative, qualitative, and support services within one coordinated research program.",
      },
      {
        q: "How do I get a project estimate?",
        a: "Share your audience, markets, sample requirements, timing, and expected outputs. Our team will recommend an approach and prepare a tailored estimate.",
      },
    ],
  };
}

const demoMethods: Record<string, MethodData> = Object.fromEntries(
  serviceCategories.flatMap((category) =>
    category.services
      .filter((service) => !methods[service.slug])
      .map((service) => [
        service.slug,
        createDemoMethodData(
          service.slug,
          service.title,
          category.title,
          category.key
        ),
      ])
  )
);

export function getMethodData(slug: string): MethodData | null {
  return methods[slug] ?? demoMethods[slug] ?? null;
}

export function getAllMethodSlugs(): string[] {
  return [...new Set([...Object.keys(methods), ...Object.keys(demoMethods)])];
}
