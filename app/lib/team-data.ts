export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  detailImage: string;
  description: string[];
};

export const teamMembers: TeamMember[] = [
  {
    slug: "shahab-s",
    name: "Shahab S",
    role: "Director, Research Services",
    image: "/our-team/shahab.png",
    detailImage: "/our-team/team-member-detailks.png",
    description: [
      "As a founding member and Director of Research Services at Insights Opinion, Shahab plays a key role in driving the company’s strategic vision and fostering global client partnerships.",
      "With more than 15 years of experience in market research and international business development, he brings a wealth of industry knowledge, operational excellence, and a strong client-first mindset to the organization.",
      "His hands-on leadership has helped build multidisciplinary research capabilities and dependable data collection solutions across B2B, healthcare, and consumer research.",
      "His expertise spans global panel development, CATI operations, online communities, and end-to-end project management for qualitative and quantitative research methodologies.",
    ],
  },
  {
    slug: "sharoz-ghauri",
    name: "Sharoz Ghauri",
    role: "Director, Client Services",
    image: "/our-team/shahab.png",
    detailImage: "/our-team/team-member-detailks.png",
    description: [
      "Sharoz leads client services at Insights Opinion, helping research partners translate complex business questions into clear, practical research programmes.",
      "With extensive experience in international market research and business development, he brings strategic thinking, operational discipline, and a client-first approach to every engagement.",
      "He works closely with multidisciplinary teams to deliver consistent fieldwork, dependable communication, and high-quality insights across global markets.",
      "His collaborative leadership continues to strengthen long-term client relationships and support the company’s growing portfolio of international research programmes.",
    ],
  },
  {
    slug: "dan-schmitt",
    name: "Dan Schmitt",
    role: "Vice President, North America",
    image: "/our-team/shahab.png",
    detailImage: "/our-team/team-member-detailks.png",
    description: [
      "Dan leads Insights Opinion’s North American business, bringing regional market expertise and a strong understanding of complex research requirements.",
      "He partners with clients to shape effective research strategies, coordinate multi-market studies, and ensure every project remains aligned with its commercial objectives.",
      "His experience spans quantitative and qualitative research, client development, project oversight, and the delivery of actionable recommendations.",
      "Dan’s practical approach and commitment to service quality help clients move confidently from research questions to informed decisions.",
    ],
  },
  {
    slug: "sankar-dhara",
    name: "Sankar Dhara",
    role: "VP- CATI Services",
    image: "/our-team/shahab.png",
    detailImage: "/our-team/team-member-detailks.png",
    description: [
      "Sankar oversees CATI services at Insights Opinion, guiding telephone research operations with a focus on quality, consistency, and respondent experience.",
      "He brings deep operational knowledge to interviewer training, fieldwork management, quality control, and complex international data collection programmes.",
      "Working alongside research and technology teams, he helps create efficient processes that maintain accuracy while meeting demanding project timelines.",
      "His leadership supports reliable CATI delivery across B2B, healthcare, consumer, and specialist audience studies.",
    ],
  },
  {
    slug: "priyanka-sarma",
    name: "Priyanka Sarma",
    role: "VP- APAC, EMEA",
    image: "/our-team/shahab.png",
    detailImage: "/our-team/team-member-detailks.png",
    description: [
      "Priyanka leads business and client partnerships across APAC and EMEA, connecting regional expertise with Insights Opinion’s global research capabilities.",
      "She supports clients throughout the research journey, from early project consultation and market planning to coordinated fieldwork and final delivery.",
      "Her cross-cultural perspective and collaborative working style help teams navigate local market nuances while preserving consistency across multi-country studies.",
      "Priyanka remains focused on building trusted partnerships and delivering research experiences that create lasting value for clients.",
    ],
  },
];

export function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}
