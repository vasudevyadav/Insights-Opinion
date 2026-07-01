export type CaseStudyDetail = {
  overview: string;
  client: string;
  mandate: string[];
  methodology: string[];
  methodologyImage: string;
  delivery: string[];
  results: string;
};

export type CaseStudy = {
  id: number;
  category: string;
  title: string;
  image: string;
  description: string;
  slug: string;
  detail: CaseStudyDetail;
};

const automotiveDetail: CaseStudyDetail = {
  overview:
    "With our help the client was able to understand the change in the services required by their brand and the experiences of the target audience with respect to the car industry. The client was also able to understand the purchase pattern of the target audience for their future car purchase.",
  client: "Japanese Car Manufacturing Company",
  mandate: [
    "To understand the opinions and feedback of car owners or potential car buyers regarding the automobile industry.",
    "To provide useful data and insights regarding co-creation of new services by the brand and understand future car purchase behavior.",
  ],
  methodology: [
    "Conducted quantitative research with car owners and potential car buyers in different countries to understand their opinions and feedback regarding the automobile industry and the car brand.",
    "Ensured comparability of results between all countries' data and seamless integration of the data into analysis.",
    "Researchers designed a survey that catered to the overall dynamics of car owners and potential buyers.",
    "Research was conducted extensively in 8 countries including Japan, China, India, UK, Singapore, Germany, France and US.",
    "We conducted surveys of approximately 15-20 minutes with car owners and potential car buyers.",
    "The sample size was 1600, i.e. 200 from each country.",
    "Assistance was provided for questionnaire translation, localization, survey programming and sampling.",
    "We provided ongoing consultation on designing, operations, and analytical issues while working collaboratively with active members of the client team.",
    "Deployed specialist interviewers to capture quality information from the respondents.",
    "Time Frame - 4 Weeks",
  ],
  methodologyImage: "/Workflow-Efficiency.png",
  delivery: [
    "Interview transcripts were delivered in word format to ensure the quality of results.",
    "Country wise reporting and analysis was presented in power point presentation for key indicators.",
  ],
  results:
    "With our help the client was able to understand the change in the services required by their brand and the experiences of the target audience with respect to the car industry. The client was also able to understand the purchase pattern of the target audience for their future car purchase.",
};

const healthcareDetail: CaseStudyDetail = {
  overview:
    "Our assistance enabled the client to evaluate treatment experiences, care gaps, and respondent needs across healthcare settings with reliable and comparable research inputs.",
  client: "Healthcare Research Organization",
  mandate: [
    "To understand patient and caregiver experiences around treatment, follow-up care, and support requirements.",
    "To identify service gaps and help the client improve patient-centered research decisions.",
  ],
  methodology: [
    "Designed a structured study with verified healthcare respondents and clear screening criteria.",
    "Collected feedback from relevant patient, caregiver, and healthcare professional groups.",
    "Maintained strict respondent privacy and quality control throughout recruitment and fieldwork.",
    "Used localized questionnaire support to improve clarity and response quality.",
    "Compared findings across respondent segments to identify common needs and actionable differences.",
    "Delivered ongoing fieldwork monitoring and consultation to keep the study aligned with research goals.",
    "Time Frame - 4 Weeks",
  ],
  methodologyImage: "/market-research/Healthcare-1.jpg",
  delivery: [
    "Clean transcripts and coded response files were delivered for analysis.",
    "Summary reporting highlighted patient needs, treatment gaps, and service improvement opportunities.",
  ],
  results:
    "The research helped the client understand healthcare experiences more clearly, identify gaps in current support, and capture insights for improving future treatment and communication strategies.",
};

const industryDetail: CaseStudyDetail = {
  overview:
    "The study helped the client understand changing customer requirements, decision drivers, and the service expectations influencing future purchase behavior in the target industry.",
  client: "Global Industry Client",
  mandate: [
    "To collect reliable feedback from target users and industry stakeholders.",
    "To translate respondent feedback into practical inputs for service, communication, and planning decisions.",
  ],
  methodology: [
    "Built a quantitative study framework around the client's business questions and audience segments.",
    "Screened respondents to ensure relevant experience and qualified participation.",
    "Collected structured feedback across key markets with consistent survey logic.",
    "Reviewed country-level results for quality, completeness, and comparability.",
    "Supported questionnaire localization, sampling, and project coordination.",
    "Prepared analysis inputs for the client's internal decision-making teams.",
    "Time Frame - 4 Weeks",
  ],
  methodologyImage: "/Data-Insights.jpg",
  delivery: [
    "Survey outputs were delivered in clean, analysis-ready formats.",
    "Key findings were summarized with country-wise and segment-wise views.",
  ],
  results:
    "The client received clearer evidence around customer expectations, purchase behavior, and opportunities to improve future service planning.",
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    category: "Automotive Industry",
    title: "Automative Industry",
    image: "/case-studies/case-1.png",
    slug: "automotive-industry-1",
    description:
      "With our help the client was able to understand the change in the services required by their brand and the experiences of the target audience with respect to the car industry. The client was also able to understand the purchase pattern of the target audience for their future car purchase.",
    detail: automotiveDetail,
  },
  {
    id: 2,
    category: "Healthcare Industry Diabetes",
    title: "Healthcare Industry Diabetes",
    image: "/case-studies/case-2.png",
    slug: "healthcare-industry-diabetes",
    description:
      "Our assistance enabled the client to successfully anayze the kind of treatment and care provided in hospitals to HIV infected persons as well as the ways to reduce the risk of future infections thereby capturing the disease in a wholesome manner.",
    detail: healthcareDetail,
  },
  {
    id: 3,
    category: "Healthcare Industry- HIV",
    title: "Healthcare Industry- HIV",
    image: "/case-studies/case-3.png",
    slug: "healthcare-industry-hiv",
    description:
      "Our assistance enabled the client to successfully analyze the kind of treatment and care provided in hospitals to HIV infected persons as well as the ways to reduce the risk of future infections thereby capturing the disease in a wholesome manner. Along with these findings, satisfaction result enabled the client to identify the gap in the current",
    detail: healthcareDetail,
  },
  {
    id: 4,
    category: "Chemical Industry",
    title: "Chemical Industry",
    image: "/case-studies/case-4.png",
    slug: "chemical-industry",
    description:
      "With our help the client was able to understand the change in the services required by their brand and the experiences of the target audience with respect to the car industry. The client was also able to understand the purchase pattern of the target audience for their future car purchase.",
    detail: industryDetail,
  },
  {
    id: 5,
    category: "Telecom Industry",
    title: "Telecom Industry",
    image: "/case-studies/case-5.png",
    slug: "telecom-industry",
    description:
      "Our assistance enabled the client to successfully anayze the kind of treatment and care provided in hospitals to HIV infected persons as well as the ways to reduce the risk of future infections thereby capturing the disease in a wholesome manner.",
    detail: industryDetail,
  },
  {
    id: 6,
    category: "Automotive Industry",
    title: "Automotive Industry",
    image: "/case-studies/case-1.png",
    slug: "automotive-industry-2",
    description:
      "Our assistance enabled the client to successfully analyze the kind of treatment and care provided in hospitals to HIV infected persons as well as the ways to reduce the risk of future infections thereby capturing the disease in a wholesome manner. Along with these findings, satisfaction result enabled the client to identify the gap in the current",
    detail: automotiveDetail,
  },
  {
    id: 7,
    category: "Automotive Industry",
    title: "Automative Industry",
    image: "/case-studies/case-2.png",
    slug: "automotive-industry-3",
    description:
      "With our help the client was able to understand the change in the services required by their brand and the experiences of the target audience with respect to the car industry. The client was also able to understand the purchase pattern of the target audience for their future car purchase.",
    detail: automotiveDetail,
  },
  {
    id: 8,
    category: "Healthcare Industry Diabetes",
    title: "Healthcare Industry Diabetes",
    image: "/case-studies/case-3.png",
    slug: "healthcare-industry-diabetes-2",
    description:
      "Our assistance enabled the client to successfully anayze the kind of treatment and care provided in hospitals to HIV infected persons as well as the ways to reduce the risk of future infections thereby capturing the disease in a wholesome manner.",
    detail: healthcareDetail,
  },
  {
    id: 9,
    category: "Healthcare Industry- HIV",
    title: "Healthcare Industry- HIV",
    image: "/case-studies/case-4.png",
    slug: "healthcare-industry-hiv-2",
    description:
      "Our assistance enabled the client to successfully analyze the kind of treatment and care provided in hospitals to HIV infected persons as well as the ways to reduce the risk of future infections thereby capturing the disease in a wholesome manner.",
    detail: healthcareDetail,
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug) ?? null;
}

export function getRelatedCaseStudies(slug: string, limit = 3) {
  const current = getCaseStudyBySlug(slug);

  if (!current) {
    return caseStudies.slice(0, limit);
  }

  return caseStudies
    .filter((item) => item.slug !== slug)
    .sort((a, b) => {
      const aScore = a.category === current.category ? 0 : 1;
      const bScore = b.category === current.category ? 0 : 1;
      return aScore - bScore;
    })
    .slice(0, limit);
}
