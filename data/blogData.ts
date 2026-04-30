export interface BlogSection {
    id: string;
    heading: string;
    content?: string;
    bullets?: string[];
    isImage?: boolean;
    imageUrl?: string;
    imageLabel?: string;
    subItems?: { label: string; text: string }[];
}

export interface Blog {
    id: number;
    slug: string;
    category: string;
    tags: string[];
    type: string;
    date: string;
    time: string;
    title: string;
    description: string;
    image: string;
    intro?: string;
    sections?: BlogSection[];
}

export const blogData: Blog[] = [
    {
        id: 1,
        slug: "from-local-to-global-using-research-to-identify-high-growth-regions",
        category: "Productivity",
        tags: ["B2B Research", "Market Research", "Global Panel"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "From Local To Global: Using Research To Identify High-Growth Regions",
        description:
            "Expanding into new countries is exciting and risky. The fastest way to spot where you should read signals correctly and scale only where it will travel.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        intro:
            "Expanding to new countries is exciting and risky. The fastest wins happen when you read local signals correctly and scale only what will travel. Quick answer: Study growth patterns in global regions, build a comparable score for each country or city cluster, and localize the offer before you spend. At Insights Opinion, we run global market research with local strategy by blending secondary data, on-the-ground interviews, and fast quant from our global panel research solutions. You get a shortlist of high-growth regions and a clear entry plan. Rank regions using demand, access, risk, and unit economics. Pilot small, scale what converts.",
        sections: [
            {
                id: "why-local-to-global-works",
                heading: 'Why "Local To Global" Works?',
                content:
                    "Start small in one region, prove traction, then scale the parts that data says will work elsewhere.",
                bullets: [
                    "Local reality beats assumptions. Regulations, channels, and price bands vary by region.",
                    "Early wins finance expansion. A focused wedge market reduces burn.",
                    "Evidence transfers. Playbooks built on verified behavior scale better than guesswork.",
                ],
            },
            {
                id: "what-to-measure-leading-indicators",
                heading: "What To Measure: Leading Indicators Of High-Growth Regions",
                content: "Track signals that predict adoption, not just GDP",
                subItems: [
                    { label: "Demand Signals:", text: "search trends, category penetration, trial rates" },
                    { label: "Customer Economics:", text: "willingness to pay, replacement cycles, switching triggers" },
                    { label: "Channel Fit:", text: "marketplace share, retailer power, last-mile reliability, return friction" },
                    { label: "Policy And Risk:", text: "import duties, data laws, certification paths, IP enforcement" },
                    { label: "Competition Heat:", text: "white space, differentiation room, promotional intensity" },
                    { label: "Talent And Partners:", text: "service capacity, integrators, distributors, KOL density" },
                ],
            },
            {
                id: "data-sources-that-keep-you-grounded",
                heading: "Data Sources That Keep You Grounded",
                content:
                    "Start small in one region, prove traction, then scale the parts that data says will work elsewhere.",
                bullets: [
                    "Local reality beats assumptions. Regulations, channels, and price bands vary by region.",
                    "Early wins finance expansion. A focused wedge market reduces burn.",
                    "Evidence transfers. Playbooks built on verified behavior scale better than guesswork.",
                ],
            },
            {
                id: "learn-pilot-launch-expansion-loop",
                heading: "Learn → Pilot → Launch: A Simple Expansion Loop",
                subItems: [
                    { label: "Demand Signals:", text: "search trends, category penetration, trial rates" },
                    { label: "Customer Economics:", text: "willingness to pay, replacement cycles, switching triggers" },
                    { label: "Channel Fit:", text: "marketplace share, retailer power, last-mile reliability, return friction" },
                ],
                content:
                    "Need a shortlist in weeks, not months? Our global market research with local strategy uses global panel research solutions to rank regions and plan a pilot.\nEmail: bids@insightsopinion.com",
            },
            {
                id: "info-graphic",
                heading: "Info Graphic",
                isImage: true,
                imageUrl:
                    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
                imageLabel: "Info Graphic",
            },
            {
                id: "global-market-research-with-local-strategy",
                heading: "Global Market Research With Local Strategy At Insights Opinion",
                subItems: [
                    { label: "Policy And Risk:", text: "import duties, data laws, certification paths, IP enforcement" },
                    { label: "Competition Heat:", text: "white space, differentiation room, promotional intensity" },
                    { label: "Talent And Partners:", text: "service capacity, integrators, distributors, KOL density" },
                ],
            },
            {
                id: "book-a-local-to-global-research-program",
                heading: "Book A Local-To-Global Research Program",
                content:
                    "Send your category, candidate regions, goals, timelines, and constraints. We will return feasibility, a research design, and a field-to-decision schedule.\nContact: US +1 646 475 7865 • UK +44 20 3239 5786 • India +91 120 359 4799 • Email: bids@insightsopinion.com",
            },
        ],
    },
    {
        id: 2,
        slug: "how-research-helps-teams-build-smarter-market-entry-plans",
        category: "Collaboration",
        tags: ["B2B Research", "FGDs", "Qualitative Research"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "How Research Helps Teams Build Smarter Market Entry Plans",
        description:
            "Good decisions need more than assumptions. Research helps teams compare regions, test demand, and move forward with sharper confidence.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        intro:
            "Good decisions need more than assumptions. Research helps teams compare regions, test demand, and move forward with sharper confidence. A well-structured market entry research plan identifies the right entry point, the right partners, and the right timing.",
        sections: [
            {
                id: "why-research-matters",
                heading: "Why Research Matters For Market Entry?",
                content: "Market entry without research is guesswork at scale.",
                bullets: [
                    "Reduces risk by validating demand before full investment.",
                    "Identifies the right local partners and channels.",
                    "Builds a fact-based business case for leadership buy-in.",
                ],
            },
            {
                id: "key-research-methods",
                heading: "Key Research Methods For Market Entry",
                subItems: [
                    { label: "FGDs:", text: "Deep consumer understanding in target markets" },
                    { label: "B2B Interviews:", text: "Partner and distributor landscape mapping" },
                    { label: "Quantitative Surveys:", text: "Demand sizing and pricing sensitivity" },
                    { label: "Secondary Research:", text: "Competitive landscape and regulatory environment" },
                ],
            },
            {
                id: "building-your-entry-plan",
                heading: "Building Your Market Entry Plan",
                content:
                    "A structured approach ensures no critical element is missed. Start with hypothesis, validate with data, then build the go-to-market playbook.",
                bullets: [
                    "Define target segments and value proposition.",
                    "Test pricing and product-market fit.",
                    "Map distribution and channel strategy.",
                    "Plan phased rollout with measurable milestones.",
                ],
            },
            {
                id: "info-graphic",
                heading: "Info Graphic",
                isImage: true,
                imageUrl:
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
                imageLabel: "Info Graphic",
            },
            {
                id: "how-insights-opinion-helps",
                heading: "How Insights Opinion Helps Teams Win",
                subItems: [
                    { label: "Speed:", text: "Fast-turnaround research using global panels" },
                    { label: "Accuracy:", text: "Local expertise with global methodology standards" },
                    { label: "Actionability:", text: "Research that goes straight to decision-ready outputs" },
                ],
            },
            {
                id: "get-started",
                heading: "Get Started With Your Market Entry Research",
                content:
                    "Contact our team to discuss your market entry goals. We will design a research program that fits your timeline and budget.\nEmail: bids@insightsopinion.com",
            },
        ],
    },
    {
        id: 3,
        slug: "using-data-processing-to-support-better-global-expansion",
        category: "News",
        tags: ["Data Processing & Analytics", "CATI", "Online Surveys"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "Using Data Processing To Support Better Global Expansion",
        description:
            "Data-backed planning reduces guesswork. With the right signals, brands can identify patterns, validate demand, and avoid costly expansion mistakes.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        intro:
            "Data-backed planning reduces guesswork. With the right signals, brands can identify patterns, validate demand, and avoid costly expansion mistakes in global markets.",
        sections: [
            {
                id: "role-of-data-processing",
                heading: "The Role Of Data Processing In Global Expansion",
                content: "Raw data alone is not insight. Processed, structured data drives decisions.",
                bullets: [
                    "Cleans and standardizes multi-country survey data.",
                    "Enables cross-market comparison with statistical reliability.",
                    "Reduces time from data collection to strategic insight.",
                ],
            },
            {
                id: "analytics-capabilities",
                heading: "Analytics Capabilities That Drive Expansion Decisions",
                subItems: [
                    { label: "CATI Data:", text: "Structured phone interview data processing" },
                    { label: "Online Survey Analytics:", text: "Real-time dashboards and cross-tabs" },
                    { label: "Predictive Modeling:", text: "Forecast demand and adoption curves" },
                    { label: "Text Analytics:", text: "Qualitative data quantification at scale" },
                ],
            },
            {
                id: "info-graphic",
                heading: "Info Graphic",
                isImage: true,
                imageUrl:
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
                imageLabel: "Info Graphic",
            },
            {
                id: "insights-opinion-data-solutions",
                heading: "Insights Opinion Data Processing Solutions",
                content:
                    "Our data processing team handles everything from raw data cleaning to final presentation-ready outputs for global clients.",
                bullets: [
                    "Multi-language data processing.",
                    "SPSS, R, and Python-based analytics.",
                    "Custom dashboard development.",
                ],
            },
            {
                id: "contact-us",
                heading: "Contact Our Data Analytics Team",
                content:
                    "Get in touch to discuss your data processing and analytics needs.\nEmail: bids@insightsopinion.com",
            },
        ],
    },
    {
        id: 4,
        slug: "how-ai-speeds-up-research-analysis-for-business-decisions",
        category: "AI",
        tags: ["Insight", "Market Research", "Quantitative Research"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "How AI Speeds Up Research Analysis For Business Decisions",
        description:
            "AI can support faster research interpretation, uncovering patterns and helping teams move from insight to action with better speed.",
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
        intro:
            "AI can support faster research interpretation, uncovering patterns and helping teams move from insight to action with better speed than traditional methods.",
        sections: [
            {
                id: "ai-in-market-research",
                heading: "AI's Role In Modern Market Research",
                content: "AI augments research teams, not replaces them. Speed and pattern recognition at scale.",
                bullets: [
                    "Processes large survey datasets in minutes.",
                    "Identifies non-obvious patterns across segments.",
                    "Summarizes qualitative data without losing nuance.",
                ],
            },
            {
                id: "ai-tools-and-techniques",
                heading: "AI Tools And Techniques In Research Analysis",
                subItems: [
                    { label: "NLP:", text: "Automatic theme extraction from open-ended responses" },
                    { label: "Sentiment Analysis:", text: "Brand perception tracking at scale" },
                    { label: "Predictive Models:", text: "Churn and adoption forecasting" },
                    { label: "Image Recognition:", text: "Shelf audit and compliance checking" },
                ],
            },
            {
                id: "info-graphic",
                heading: "Info Graphic",
                isImage: true,
                imageUrl:
                    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
                imageLabel: "Info Graphic",
            },
            {
                id: "ai-research-at-insights-opinion",
                heading: "AI-Powered Research At Insights Opinion",
                content:
                    "We integrate AI tools into our research workflow to deliver faster, sharper, more actionable insights for our clients.",
                bullets: [
                    "Automated verbatim coding and theme clustering.",
                    "AI-assisted report generation.",
                    "Real-time insight dashboards.",
                ],
            },
            {
                id: "get-started",
                heading: "Explore AI-Powered Research Solutions",
                content:
                    "Contact us to learn how AI can accelerate your research program.\nEmail: bids@insightsopinion.com",
            },
        ],
    },
    {
        id: 5,
        slug: "survey-design-tips-for-better-response-quality",
        category: "Productivity",
        tags: ["Online Surveys", "CAPI", "Survey Audit", "Programming & Hosting"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "Survey Design Tips For Better Response Quality",
        description:
            "A better survey creates better answers. Small changes in wording, structure, and flow can significantly improve your research quality.",
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
        intro:
            "A better survey creates better answers. Small changes in wording, structure, and flow can significantly improve your research quality and data reliability.",
        sections: [
            {
                id: "survey-design-principles",
                heading: "Core Survey Design Principles",
                content: "Good survey design starts before the first question is written.",
                bullets: [
                    "Define the research objective clearly before designing.",
                    "Keep questions focused on one idea at a time.",
                    "Use plain language that respondents understand.",
                    "Avoid leading questions that bias responses.",
                ],
            },
            {
                id: "question-types",
                heading: "Choosing The Right Question Types",
                subItems: [
                    { label: "Likert Scales:", text: "Attitude and satisfaction measurement" },
                    { label: "NPS Questions:", text: "Loyalty and recommendation tracking" },
                    { label: "Open-Ended:", text: "Exploratory insight and verbatim capture" },
                    { label: "Ranking Questions:", text: "Priority and preference ordering" },
                ],
            },
            {
                id: "mobile-first-design",
                heading: "Mobile-First Survey Design",
                content:
                    "Over 60% of survey responses now come from mobile devices. Design for mobile first to maximize completion rates.",
                bullets: [
                    "Keep surveys under 10 minutes for mobile.",
                    "Use single-column layouts.",
                    "Test on multiple device types before launch.",
                ],
            },
            {
                id: "info-graphic",
                heading: "Info Graphic",
                isImage: true,
                imageUrl:
                    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
                imageLabel: "Info Graphic",
            },
            {
                id: "survey-audit",
                heading: "Survey Audit: Catch Problems Before Launch",
                content:
                    "A pre-launch survey audit catches logic errors, question biases, and flow problems that can invalidate data.",
                bullets: [
                    "Check skip logic and routing.",
                    "Review question wording for bias.",
                    "Test with a pilot sample of 20-50 respondents.",
                ],
            },
            {
                id: "get-help",
                heading: "Get Expert Survey Design Help",
                content:
                    "Our survey design team builds questionnaires that deliver clean, reliable data.\nEmail: bids@insightsopinion.com",
            },
        ],
    },
    {
        id: 6,
        slug: "what-modern-market-research-looks-like-in-2026",
        category: "News",
        tags: ["Mystery Shopping", "IDIs", "Translation", "CATI Survey"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "What Modern Market Research Looks Like In 2026",
        description:
            "From qualitative interviews to AI-supported analysis, modern market research is becoming faster, sharper, and more action-focused.",
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
        intro:
            "From qualitative interviews to AI-supported analysis, modern market research is becoming faster, sharper, and more action-focused than ever before.",
        sections: [
            {
                id: "evolution-of-research",
                heading: "The Evolution Of Market Research",
                content: "Research has shifted from periodic studies to continuous intelligence.",
                bullets: [
                    "Real-time data collection via digital panels.",
                    "AI-powered analysis reducing turnaround times.",
                    "Integrated qual-quant approaches for richer insight.",
                ],
            },
            {
                id: "modern-methods",
                heading: "Modern Research Methods In 2026",
                subItems: [
                    { label: "IDIs:", text: "In-depth interviews now conducted via video globally" },
                    { label: "Mystery Shopping:", text: "Digital and physical channel auditing" },
                    { label: "CATI:", text: "Enhanced with AI-assisted scripting" },
                    { label: "Translation Services:", text: "Multi-language research at scale" },
                ],
            },
            {
                id: "info-graphic",
                heading: "Info Graphic",
                isImage: true,
                imageUrl:
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
                imageLabel: "Info Graphic",
            },
            {
                id: "future-of-research",
                heading: "The Future Of Market Research",
                content:
                    "Research will continue to evolve toward faster, more predictive, and more personalized intelligence.",
                bullets: [
                    "Continuous research panels replacing annual studies.",
                    "Behavioral data integration with survey research.",
                    "AI co-pilots assisting researchers in real time.",
                ],
            },
            {
                id: "contact-us",
                heading: "Partner With A Modern Research Company",
                content:
                    "Insights Opinion delivers modern research solutions for global brands.\nEmail: bids@insightsopinion.com",
            },
        ],
    },
    {
        id: 7,
        slug: "building-online-communities-for-richer-consumer-insights",
        category: "Collaboration",
        tags: ["Online Community Building", "Qualitative Research", "FGDs"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "Building Online Communities For Richer Consumer Insights",
        description:
            "Online communities give brands a continuous feedback loop. They allow deeper engagement, real-time reactions, and stronger qualitative insights.",
        image:
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
        intro:
            "Online communities give brands a continuous feedback loop. They allow deeper engagement, real-time reactions, and stronger qualitative insights that traditional methods cannot match.",
        sections: [
            {
                id: "what-are-online-communities",
                heading: "What Are Online Research Communities?",
                content:
                    "Online research communities are private, moderated digital spaces where brands engage consumers over time for ongoing insight generation.",
                bullets: [
                    "Continuous access to engaged consumers.",
                    "Richer qualitative data than one-time surveys.",
                    "Faster iteration on ideas and concepts.",
                ],
            },
            {
                id: "community-vs-traditional",
                heading: "Online Communities Vs Traditional Research",
                subItems: [
                    { label: "Speed:", text: "Community insights in hours vs weeks for traditional" },
                    { label: "Depth:", text: "Ongoing conversations vs single-point surveys" },
                    { label: "Cost:", text: "Lower per-insight cost at scale" },
                    { label: "Engagement:", text: "Participants more invested in community context" },
                ],
            },
            {
                id: "info-graphic",
                heading: "Info Graphic",
                isImage: true,
                imageUrl:
                    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
                imageLabel: "Info Graphic",
            },
            {
                id: "building-your-community",
                heading: "Building Your Online Research Community",
                content: "A successful research community requires the right platform, moderation strategy, and engagement plan.",
                bullets: [
                    "Define community purpose and target member profile.",
                    "Choose platform with the right research tools.",
                    "Design engagement calendar and activity schedule.",
                ],
            },
            {
                id: "get-started",
                heading: "Launch Your Online Research Community",
                content:
                    "We design and manage online research communities for global brands.\nEmail: bids@insightsopinion.com",
            },
        ],
    },
    {
        id: 8,
        slug: "cati-surveys-still-work-here-is-why-they-remain-effective",
        category: "News",
        tags: ["CATI Survey", "CAPI", "Data Processing & Analytics"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "CATI Surveys Still Work — Here Is Why They Remain Effective",
        description:
            "Phone-based interviews remain one of the most reliable methods for reaching specific demographics and collecting structured data at scale.",
        image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
        intro:
            "Phone-based interviews remain one of the most reliable methods for reaching specific demographics and collecting structured data at scale.",
        sections: [
            {
                id: "why-cati-still-works",
                heading: "Why CATI Surveys Still Work",
                content: "CATI delivers where digital channels cannot reach.",
                bullets: [
                    "Reaches demographics with low digital literacy.",
                    "Higher completion rates for structured questionnaires.",
                    "Real-time probing and clarification by trained interviewers.",
                    "Ideal for B2B and professional audience research.",
                ],
            },
            {
                id: "cati-best-practices",
                heading: "CATI Best Practices For Quality Data",
                subItems: [
                    { label: "Scripting:", text: "Clear, tested questionnaire with skip logic" },
                    { label: "Training:", text: "Interviewer calibration and quality checks" },
                    { label: "Monitoring:", text: "Live call monitoring and silent supervision" },
                    { label: "Back-checking:", text: "Post-interview validation of responses" },
                ],
            },
            {
                id: "info-graphic",
                heading: "Info Graphic",
                isImage: true,
                imageUrl:
                    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
                imageLabel: "Info Graphic",
            },
            {
                id: "cati-at-insights-opinion",
                heading: "CATI Research At Insights Opinion",
                content:
                    "Our CATI team operates across multiple geographies with multilingual interviewers and real-time monitoring capabilities.",
                bullets: [
                    "15+ language capabilities.",
                    "Global CATI centers with 24/7 operations.",
                    "Integrated data processing and reporting.",
                ],
            },
            {
                id: "get-quote",
                heading: "Get A CATI Research Quote",
                content:
                    "Tell us your target audience and we will design a CATI study that meets your needs.\nEmail: bids@insightsopinion.com",
            },
        ],
    },
    {
        id: 9,
        slug: "how-proper-survey-programming-reduces-drop-off-rates",
        category: "Productivity",
        tags: ["Programming & Hosting", "Survey Audit", "Online Surveys"],
        type: "Admin",
        date: "March 23, 2026",
        time: "03:39 PM",
        title: "How Proper Survey Programming Reduces Drop-Off Rates",
        description:
            "Survey logic, routing, and mobile-first design all play a role in keeping respondents engaged from the first question to the last.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        intro:
            "Survey logic, routing, and mobile-first design all play a role in keeping respondents engaged from the first question to the last.",
        sections: [
            {
                id: "why-programming-matters",
                heading: "Why Survey Programming Matters",
                content: "Poor programming creates friction that drives respondents away before completion.",
                bullets: [
                    "Broken skip logic confuses respondents.",
                    "Slow loading times increase abandonment.",
                    "Poor mobile layout leads to early exit.",
                    "Validation errors frustrate users mid-survey.",
                ],
            },
            {
                id: "programming-best-practices",
                heading: "Survey Programming Best Practices",
                subItems: [
                    { label: "Logic Testing:", text: "Test all skip patterns before launch" },
                    { label: "Load Speed:", text: "Optimize for 3G connections in emerging markets" },
                    { label: "Mobile Testing:", text: "QA on iOS and Android devices" },
                    { label: "Progress Bar:", text: "Show respondents how far they are" },
                ],
            },
            {
                id: "reducing-drop-off",
                heading: "Strategies To Reduce Survey Drop-Off",
                content:
                    "Small UX improvements can significantly increase completion rates.",
                bullets: [
                    "Keep surveys under 8 minutes on mobile.",
                    "Use engaging question formats like sliders and image choices.",
                    "Show estimated completion time at the start.",
                    "Send reminders to partial completers.",
                ],
            },
            {
                id: "info-graphic",
                heading: "Info Graphic",
                isImage: true,
                imageUrl:
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
                imageLabel: "Info Graphic",
            },
            {
                id: "programming-services",
                heading: "Professional Survey Programming Services",
                content:
                    "Our survey programming team handles complex routing, multilingual surveys, and custom response validation.\nEmail: bids@insightsopinion.com",
            },
        ],
    },
];

export function getBlogBySlug(slug: string): Blog | undefined {
    return blogData.find((blog) => blog.slug === slug);
}

export function getRelatedBlogs(currentId: number, limit = 3): Blog[] {
    return blogData.filter((b) => b.id !== currentId).slice(0, limit);
}
