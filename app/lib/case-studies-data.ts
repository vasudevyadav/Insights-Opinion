import type { ApiSeo } from "@/lib/api-metadata";

export type CaseStudySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type CaseStudy = {
  id: number;
  category: string;
  title: string;
  image: string;
  description: string;
  slug: string;
  overview: string;
  facts: { label: string; value: string }[];
  sections: CaseStudySection[];
  analysisNote: string;
  seo?: ApiSeo;
};

// Edit case studies here. Each unique slug creates a /case-studies/<slug> page.
// Source reports and companion presentations describe TWO studies, not four.
// Retina LOI and disputed selection percentages are intentionally omitted.
// See docs/case-studies.md for source reconciliation and editing instructions.
export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    category: "Healthcare Industry",
    title: "US Retina Pharmaceutical Distribution, GPO & MSO Study",
    slug: "us-retina-pharmaceutical-distribution-gpo-mso-study",
    image: "/healcare.png",
    description: "Research with 24 US retina practice decision-makers exploring pharmaceutical purchasing, MSO affiliation, GPO relationships and wholesaler loyalty.",
    overview: "This study examined how US retina practices manage pharmaceutical purchasing across management services organizations (MSOs), Group Purchasing Organizations (GPOs), and wholesalers or distributors, with particular emphasis on Anti-VEGF and other retina pharmaceuticals.",
    facts: [
      { label: "Geography", value: "United States" },
      { label: "Sample", value: "24 respondents" },
      { label: "Practice area", value: "Retina / Ophthalmology" },
      { label: "Research type", value: "Quantitative survey with open-ended qualitative responses" },
    ],
    sections: [
      {
        title: "Research objectives",
        bullets: [
          "Understand practice ownership, pharmaceutical purchasing economics and attitudes toward biosimilars.",
          "Assess MSO affiliation, satisfaction, participation drivers and barriers to joining.",
          "Explore GPO and wholesaler selection, relationship tenure, satisfaction and recommendation.",
          "Evaluate formal supplier reviews, switching barriers and three-year switching intent.",
          "Understand how practice affiliation, GPO contracting and wholesaler relationships jointly shape procurement.",
        ],
      },
      {
        title: "Methodology & respondent profile",
        paragraphs: ["A structured end-user survey covered US outpatient and ambulatory ophthalmology practices providing retina treatment. Respondents were practice administrators and senior operational or procurement leaders directly involved in GPO and wholesaler decisions. Open-ended questions captured recommendation rationale and switching feedback."],
        bullets: [
          "Practice ownership: 50.0% independent, 45.8% MSO-affiliated and 4.2% hospital or health-system affiliated.",
          "Decision involvement: 79.2% key influencers and 20.8% primary decision-makers.",
          "All respondents rated retina as very or extremely important to their practice strategy.",
        ],
      },
      {
        title: "Practice economics & MSO affiliation",
        bullets: [
          "79.2% considered wholesaler pricing and rebates very or extremely influential in retina drug selection.",
          "Biosimilars were broadly accepted for new patients, while switching established patients from reference products was approached more cautiously.",
          "Among MSO-affiliated practices, average MSO recommendation was 8.3/10 and 90.9% were very or extremely likely to remain at contract expiry.",
          "Pharmaceutical pricing and administrative support were leading reasons for joining or considering an MSO; independent practices emphasized control over business relationships and autonomy.",
        ],
      },
      {
        title: "GPO relationships & purchasing decisions",
        bullets: [
          "All respondents reported using a GPO for retina pharmaceutical purchasing.",
          "Among practices identifying a primary GPO, 71.4% used Specialty Practice Network / Vision Practice Network (Cencora), 23.8% Onmark Vision (McKesson), and 4.8% Vizient.",
          "62.5% had been with their primary GPO for at least five years. Net drug economics were the dominant selection driver.",
          "Average GPO recommendation was 8.4/10, switching difficulty 5.9/7, and three-year switching likelihood 2.0/7.",
          "Recent GPO reviews resulted in incumbent renewal following an RFP for 45.8%, renewal without a formal RFP for 41.7%, and switching due to MSO affiliation for 12.5%.",
        ],
      },
      {
        title: "Wholesaler relationships & switching",
        bullets: [
          "Primary wholesalers in the sample were Cencora / Besse / ASD Healthcare (75.0%) and McKesson (25.0%).",
          "83.3% reported that their GPO determines their primary wholesaler; 12.5% reported the reverse relationship and 4.2% reported no influence.",
          "Discounts and rebates led wholesaler selection, with delivery reliability also an important consideration.",
          "Average wholesaler recommendation was 8.4/10, switching difficulty 5.8/7, and three-year switching likelihood 2.1/7.",
          "Customer feedback emphasized dependable access, timely deliveries, competitive pricing and responsive support. Analytics and reimbursement support offered opportunities for additional value.",
        ],
      },
      {
        title: "Strategic implications",
        bullets: [
          "Wholesalers: protect competitive retina-specific economics and reliable fulfillment, build GPO and MSO partnerships, and reduce transition friction.",
          "GPOs: demonstrate acquisition-cost savings, sustain contract value and strengthen preferred distribution partnerships.",
          "MSOs: quantify purchasing leverage and operational support while preserving visible practice autonomy.",
        ],
        paragraphs: ["The findings describe an interconnected MSO-GPO-wholesaler ecosystem. Competitive advantage depends on commercial economics, organizational partnerships, dependable distribution and practical migration support."],
      },
    ],
    analysisNote: "Findings describe the 24-respondent study sample. Question-level bases vary with routing, eligibility and valid substantive responses; N/A responses are excluded. Segment percentages describe the relevant subgroup, not the entire US market.",
  },
  {
    id: 2,
    category: "Healthcare Industry",
    title: "US Pharmaceutical Wholesaler, GPO & Buying Group Customer Study",
    slug: "us-pharmaceutical-wholesaler-gpo-buying-group-customer-study",
    image: "/healcare.png",
    description: "A 30-respondent US study of pharmacy and health-system procurement, examining supplier selection, buying groups, satisfaction and switching barriers.",
    overview: "This study explored how US pharmacies and healthcare organizations evaluate and manage pharmaceutical wholesalers, Group Purchasing Organizations (GPOs), and pharmacy buying groups. The research focused on prescription pharmaceuticals and distinguished traditional from specialty sourcing.",
    facts: [
      { label: "Geography", value: "United States" },
      { label: "Sample", value: "30 respondents" },
      { label: "Field period", value: "July 17-27, 2026" },
      { label: "Interview length", value: "Approximately 25-30 minutes" },
      { label: "Research type", value: "Quantitative survey with open-ended qualitative responses" },
    ],
    sections: [
      {
        title: "Research objectives",
        bullets: [
          "Map pharmaceutical sourcing structures and primary wholesaler, GPO and buying-group relationships.",
          "Identify purchasing criteria, satisfaction, recommendation and relationship tenure.",
          "Understand formal vendor reviews, RFP outcomes, switching barriers and three-year switching intent.",
          "Assess the role of pricing, product access, service reliability, analytics and procurement support.",
        ],
      },
      {
        title: "Methodology & respondent profile",
        paragraphs: ["A structured end-user quantitative survey included US pharmaceutical procurement decision-makers and key influencers, with separate routed pathways for pharmacies and hospitals or health systems. Open-ended responses added context to the quantitative measures."],
        bullets: [
          "The sample comprised 86.7% pharmacy respondents and 13.3% hospital or health-system respondents.",
          "Within the pharmacy designation profile, 83.3% were Directors of Pharmacy / Pharmacy Managers and 16.7% were owners or senior pharmacy leaders.",
          "The pharmacy type profile was 58% independent specialty, 29% independent community, 8% national chain and 4% supermarket pharmacy, as rounded in the source report.",
          "Survey modules covered screening, organization profiles, buying groups, GPOs, wholesaler selection, satisfaction and switching.",
        ],
      },
      {
        title: "Wholesaler landscape & selection drivers",
        bullets: [
          "Among applicable pharmacy respondents, primary wholesaler shares were Cencora 70.6%, McKesson 23.5%, and Cardinal Health 5.9%.",
          "Among hospital / health-system respondents, the corresponding shares were 50%, 25%, and 25%.",
          "Approximately 78% of applicable pharmacy respondents had used their primary wholesaler for at least five years.",
          "65.2% of applicable pharmacy respondents ranked net drug cost, rebates and discounts first; 26.1% ranked delivery timeliness and reliability first.",
          "All applicable hospital / health-system respondents ranked net drug economics as their leading criterion.",
        ],
      },
      {
        title: "Satisfaction & switching dynamics",
        bullets: [
          "Average wholesaler recommendation was 8.7/10 for pharmacy respondents and 8.25/10 for hospital / health-system respondents.",
          "No applicable pharmacy respondent rated their primary wholesaler below 8/10.",
          "Average switching difficulty was 6.1/7 for pharmacy respondents and 6.0/7 for hospital / health-system respondents; three-year switching likelihood was 2.1/7 and 1.75/7 respectively.",
          "Potential barriers included contract and pricing migration, onboarding, GPO or buying-group dependencies, bundled services, staff resistance and working-capital implications.",
          "Qualitative feedback emphasized product availability, on-time delivery, inventory continuity, communication and support during drug shortages.",
        ],
      },
      {
        title: "Formal reviews, GPOs & buying groups",
        bullets: [
          "Among applicable pharmacy respondents, 78.3% conducted an RFP and renewed their incumbent, 17.4% renewed without a formal RFP, and 4.3% conducted an RFP and switched.",
          "All applicable hospital / health-system respondents conducted an RFP and renewed their existing primary wholesaler; hospital respondents reported Vizient GPO relationships.",
          "92.3% of applicable pharmacy respondents ranked net drug cost, rebates and discounts as their leading buying-group criterion, while 7.7% ranked a franchise requirement first.",
          "Buying-group recommendation averaged 8.3/10, switching difficulty 5.8/7, and three-year switching likelihood 2.3/7.",
        ],
      },
      {
        title: "Strategic implications",
        bullets: [
          "Defend incumbent relationships through measurable economic value, consistent service and account reviews.",
          "Target identifiable conversion opportunities such as RFPs, acquisitions, service failures, pricing resets and buying-group changes.",
          "Support contract migration, onboarding and inventory transition to reduce switching risk.",
          "Differentiate through specialty and limited-distribution access, shortage support, analytics and responsive account management.",
        ],
        paragraphs: ["The sample points to long-standing supplier relationships reinforced by satisfaction and switching complexity. Challengers need a measurable economic advantage alongside operational value and a credible transition plan."],
      },
    ],
    analysisNote: "Findings describe the 30-respondent study sample. Question-level bases vary by routing, applicability and valid responses, with N/A excluded where appropriate. Pharmacy and hospital findings refer to their respective eligible subgroups. Rounded percentages may not total 100%; supplier shares are sample findings, not national market shares.",
  },
];
