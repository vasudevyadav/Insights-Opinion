import type { ApiSeo } from "@/lib/api-metadata";

export type CaseStudySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  tables?: { caption?: string; headers: string[]; rows: string[][] }[];
  quotes?: { text: string; source: string }[];
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

// Content is transcribed directly from the source "Research Case Study" and
// "Post-Research Findings Report" PDFs for these two studies. Section
// headings, tables, figures and quotes mirror the source documents; nothing
// beyond what the PDFs contain has been added.
export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    category: "Healthcare Industry",
    title: "US Retina Pharmaceutical Distribution, GPO & MSO Study",
    slug: "us-retina-pharmaceutical-distribution-gpo-mso-study",
    image: "/healcare.png",
    description:
      "Research with 24 US retina practice decision-makers exploring pharmaceutical purchasing, MSO affiliation, GPO relationships and wholesaler loyalty.",
    overview:
      "Understanding practice economics, MSO affiliation, GPO relationships, wholesaler dynamics and switching behavior.",
    facts: [
      {
        label: "Research Type",
        value:
          "End-User Quantitative Survey with Open-Ended Qualitative Responses",
      },
      { label: "Therapy / Practice Area", value: "Retina / Ophthalmology" },
      {
        label: "Industry",
        value: "Pharmaceutical Distribution & Practice Procurement",
      },
      { label: "Geography", value: "United States" },
      { label: "Sample", value: "24 Respondents" },
      {
        label: "Target Respondents",
        value:
          "Retina practice administrators and senior operational / procurement decision-makers",
      },
      { label: "LOI", value: "Approximately 30-35 minutes" },
      { label: "Status", value: "Completed Study" },
    ],
    sections: [
      {
        title: "Study Overview",
        paragraphs: [
          "This study was conducted to understand how US retina practices manage pharmaceutical purchasing relationships across MSOs, Group Purchasing Organizations (GPOs), and pharmaceutical wholesalers/distributors, with particular emphasis on Anti-VEGF and other retina pharmaceuticals.",
          "The survey targeted US-based healthcare professionals working in outpatient/ambulatory ophthalmology practices providing retina treatment. Respondents were required to be directly involved as primary decision-makers or key influencers in pharmaceutical wholesaler and GPO evaluation.",
        ],
        bullets: [
          "Practice structure and economics: ownership/affiliation, strategic importance of retina, pharmaceutical purchasing economics and biosimilar attitudes.",
          "MSO dynamics: current affiliation, satisfaction, reasons for joining or considering an MSO, and barriers to participation.",
          "GPO and wholesaler relationships: current providers, relationship tenure, selection criteria, satisfaction, recommendation and interdependence between GPO and wholesaler choice.",
          "Relationship stability: formal reviews/RFPs, switching difficulty, barriers to switching and three-year switching intent.",
          "Procurement ecosystem: how MSO affiliation, GPO contracting, wholesaler relationships and pharmaceutical economics collectively shape purchasing behavior.",
        ],
        tables: [
          {
            caption: "Methodology",
            headers: ["Parameter", "Details"],
            rows: [
              ["Research Method", "Structured end-user quantitative survey"],
              ["Geography", "United States"],
              ["LOI", "Approximately 15-20 minutes"],
              [
                "Target Audience",
                "Retina practice administrative and operational leaders",
              ],
              [
                "Practice Setting",
                "Community / ambulatory outpatient ophthalmology practices",
              ],
              ["Analytical Sample", "24 respondents"],
              [
                "Research Coverage",
                "MSOs, GPOs, wholesalers/distributors and retina pharmaceutical purchasing",
              ],
              [
                "Qualitative Component",
                "Open-ended recommendation rationale and switching feedback",
              ],
            ],
          },
        ],
      },
      {
        title: "Sample Profile",
        paragraphs: [
          "Analytical note: Question-level bases vary according to questionnaire routing and applicability. N/A responses are not treated as substantive responses.",
          "All respondents rated retina as either very or extremely important to their practice strategy, and 79.2% participated as key influencers in wholesaler/GPO decisions while 20.8% were primary decision-makers.",
        ],
        tables: [
          {
            caption: "Practice Ownership / Affiliation",
            headers: ["Practice Ownership / Affiliation", "Share"],
            rows: [
              ["Independent", "50.0%"],
              ["MSO-affiliated", "45.8%"],
              ["Hospital / Health System", "4.2%"],
              ["Total", "100.0%"],
            ],
          },
          {
            caption: "Respondent Designation by Practice Ownership (%)",
            headers: [
              "Designation",
              "Independent",
              "MSO-affiliated",
              "Hospital / Health System",
            ],
            rows: [
              [
                "Practice Administrator / Office Manager",
                "66.7%",
                "36.4%",
                "100.0%",
              ],
              ["Operations Leadership", "16.7%", "36.4%", ""],
              [
                "Owner / Senior Leadership / Other Management",
                "16.7%",
                "27.3%",
                "",
              ],
              ["Total", "100.0%", "100.0%", "100.0%"],
            ],
          },
        ],
      },
      {
        title: "Retina Practice Economics",
        bullets: [
          "Pricing and rebates strongly influence drug selection.",
          "Responses indicate a strong orientation toward economically optimizing drug mix. Biosimilars are broadly accepted for new patients, while switching established patients from reference products is approached more cautiously.",
        ],
        tables: [
          {
            caption: "Influence of Wholesaler Pricing / Rebates",
            headers: ["Influence of Wholesaler Pricing / Rebates", "Share"],
            rows: [
              ["Extremely influential", "25.0%"],
              ["Very influential", "54.2%"],
              ["Moderately influential", "20.8%"],
              ["Total", "100.0%"],
            ],
          },
        ],
      },
      {
        title: "MSO Landscape & Participation Drivers",
        paragraphs: [
          "MSO-affiliated practices account for 45.8% of the sample. Within this segment, Retina Consultants of America (RCA) is the most frequently represented platform.",
        ],
        bullets: [
          "Average likelihood to recommend the current MSO is 8.3/10. At contract expiry, 90.9% of affiliated practices are very or extremely likely to remain with their current MSO.",
          "Among independent practices that had evaluated or rejected MSO participation, the dominant concern was preserving control over vendor and business relationships, followed by concerns about loss of clinical or operational autonomy.",
        ],
        tables: [
          {
            caption: "MSO Platform Share Among MSO-affiliated Practices",
            headers: ["MSO Platform", "Share Among MSO-affiliated Practices"],
            rows: [
              ["Retina Consultants of America (RCA)", "54.5%"],
              ["EyeCare Partners", "18.2%"],
              ["PRISM Vision Group", "9.1%"],
              ["Spectrum Vision Partners", "9.1%"],
              ["Other", "9.1%"],
            ],
          },
          {
            caption: "MSO Satisfaction & Retention",
            headers: ["MSO Dimension", "Avg. Satisfaction (1-7)"],
            rows: [
              ["Practice growth & business development support", "6.4"],
              ["Drug pricing / purchasing terms", "6.2"],
              ["Overall value delivered", "6.0"],
              ["Expansion into new revenue streams", "5.9"],
              ["Access to capital & cash-flow flexibility", "5.9"],
              ["Payer contracting / managed care support", "5.9"],
            ],
          },
          {
            caption: "#1 Reason for Joining / Considering an MSO",
            headers: ["#1 Reason for Joining / Considering an MSO", "Share"],
            rows: [
              ["Better pharmaceutical pricing / rebates", "41.7%"],
              ["Administrative / operational support", "41.7%"],
              ["Financial benefits / shared cost savings", "16.7%"],
            ],
          },
        ],
      },
      {
        title: "GPO Landscape & Selection Drivers",
        paragraphs: [
          "All respondents reported using a GPO for retina pharmaceutical purchasing. Among practices identifying a primary GPO, the market is concentrated around Cencora and McKesson-linked platforms.",
        ],
        bullets: [
          "Approximately 62.5% of respondents have been with their primary GPO for at least five years.",
        ],
        tables: [
          {
            caption: "Primary GPO",
            headers: ["Primary GPO", "Share"],
            rows: [
              [
                "Specialty Practice Network / Vision Practice Network (Cencora)",
                "71.4%",
              ],
              ["Onmark Vision (McKesson)", "23.8%"],
              ["Vizient", "4.8%"],
            ],
          },
          {
            caption: "Primary GPO Relationship Tenure",
            headers: ["Primary GPO Relationship Tenure", "Share"],
            rows: [
              ["1-2 years", "16.7%"],
              ["3-4 years", "20.8%"],
              ["5-9 years", "41.7%"],
              ["10+ years", "20.8%"],
            ],
          },
          {
            caption: "GPO Selection Criteria",
            headers: ["#1 GPO Selection Criterion", "Share"],
            rows: [
              ["Net drug cost / performance-based rebates", "95.8%"],
              ["Access to preferred wholesaler / distributor", "4.2%"],
            ],
          },
        ],
      },
      {
        title: "GPO Satisfaction, Loyalty & Review Behavior",
        tables: [
          {
            caption: "Satisfaction & Advocacy",
            headers: ["GPO Dimension", "Avg. Satisfaction (1-7)"],
            rows: [
              ["Access to preferred wholesaler / distributor", "6.5"],
              ["GPO reputation", "6.4"],
              ["Net drug economics", "6.3"],
              ["Customer service / account management", "6.1"],
              ["Contract administration", "5.8"],
            ],
          },
          {
            headers: ["Relationship Metric", "Result"],
            rows: [
              ["Average likelihood to recommend GPO", "8.4 / 10"],
              ["Average switching difficulty", "5.9 / 7"],
              ["Average 3-year switching likelihood", "2.0 / 7"],
            ],
          },
          {
            caption: "Most Recent GPO Review Outcome",
            headers: ["Outcome", "Share"],
            rows: [
              ["RFP - renewed incumbent", "45.8%"],
              ["Renewed incumbent without formal RFP", "41.7%"],
              ["Switched due to MSO affiliation", "12.5%"],
            ],
          },
        ],
      },
      {
        title: "Wholesaler / Distributor Landscape & GPO Linkage",
        tables: [
          {
            caption: "Primary Retina Wholesaler",
            headers: ["Primary Wholesaler / Distributor", "Share"],
            rows: [
              ["Cencora / Besse / ASD Healthcare", "75.0%"],
              ["McKesson", "25.0%"],
            ],
          },
          {
            caption: "GPO Influence on Wholesaler Choice",
            headers: ["Relationship Between GPO & Wholesaler", "Share"],
            rows: [
              ["GPO determines primary wholesaler", "83.3%"],
              ["Wholesaler determines primary GPO", "12.5%"],
              ["No influence between the two", "4.2%"],
            ],
          },
        ],
      },
      {
        title: "Wholesaler Selection, Satisfaction & Loyalty",
        paragraphs: [
          "Wholesaler choice remains strongly economics-led, but operational execution plays a more prominent role than it does in GPO selection.",
        ],
        tables: [
          {
            caption: "Selection Drivers",
            headers: ["#1 Wholesaler Selection Criterion", "Share"],
            rows: [
              ["Discounts / rebates on drug purchases", "75.0%"],
              ["Timeliness & reliability of deliveries", "20.8%"],
              ["Inventory management", "4.2%"],
            ],
          },
          {
            caption: "Satisfaction & Relationship Strength",
            headers: ["Wholesaler Dimension", "Avg. Satisfaction (1-7)"],
            rows: [
              ["Timeliness & reliability of deliveries", "6.6"],
              ["Wholesaler reputation", "6.6"],
              ["Discounts / rebates", "6.0"],
              ["Access to limited-distribution drugs", "6.0"],
              ["Customer service / account management", "6.0"],
            ],
          },
          {
            headers: ["Relationship Metric", "Result"],
            rows: [
              ["Average wholesaler recommendation", "8.4 / 10"],
              ["Average switching difficulty", "5.8 / 7"],
              ["Average 3-year switching likelihood", "2.1 / 7"],
            ],
          },
          {
            caption: "Wholesaler Relationship Tenure",
            headers: ["Wholesaler Relationship Tenure", "Share"],
            rows: [
              ["1-2 years", "12.5%"],
              ["3-4 years", "20.8%"],
              ["5-9 years", "58.3%"],
              ["10+ years", "8.3%"],
            ],
          },
        ],
      },
      {
        title: "Qualitative Customer Experience",
        quotes: [
          {
            text: "We get the drugs we need on time and the pricing is competitive so I would be comfortable recommending them.",
            source: "Practice Administrator - Independent Retina Practice",
          },
          {
            text: "They have given us excellent shipping reliability and highly competitive rebate options for years. The deliveries are always on time and the pricing is very consistent, which makes managing our day-to-day operations a lot smoother.",
            source: "Senior Practice Leader - MSO-affiliated Practice",
          },
          {
            text: "Our experience has been positive because they provide dependable service, strong product availability, and responsive support when challenges arise.",
            source: "Practice Administrator - MSO-affiliated Practice",
          },
        ],
      },
      {
        title: "Illustrative Respondent Profiles",
        tables: [
          {
            caption: "Profile 1 - MSO-Affiliated Commercial Optimizer",
            headers: ["Attribute", "Profile"],
            rows: [
              ["Practice Structure", "MSO-affiliated retina practice"],
              [
                "Primary GPO / Wholesaler",
                "Specialty Practice Network / Cencora",
              ],
              [
                "Primary Priority",
                "Pharmaceutical economics and reliable access",
              ],
            ],
          },
          {
            caption: "Profile 2 - Independent Autonomy-Focused Administrator",
            headers: ["Attribute", "Profile"],
            rows: [
              ["Practice Structure", "Independent retina practice"],
              [
                "Primary Priority",
                "Competitive drug economics while maintaining practice control",
              ],
              ["MSO Concern", "Loss of operational and commercial autonomy"],
            ],
          },
          {
            caption: "Profile 3 - Established Procurement Influencer",
            headers: ["Attribute", "Profile"],
            rows: [
              ["Role", "Practice Administration / Operations"],
              ["Typical Wholesaler Tenure", "5-9 years"],
              [
                "Key Priorities",
                "Rebates, reliable delivery and inventory continuity",
              ],
            ],
          },
        ],
      },
      {
        title: "Strategic Implications",
        tables: [
          {
            caption: "For Pharmaceutical Wholesalers / Distributors",
            headers: ["Finding", "Strategic Implication"],
            rows: [
              [
                "Cencora holds a strong position within the sample",
                "Challengers need targeted differentiation rather than broad parity.",
              ],
              [
                "Rebates dominate wholesaler selection",
                "Maintain competitive retina-specific pricing and rebate structures.",
              ],
              [
                "Delivery reliability performs strongly",
                "Protect fulfillment and supply-chain performance.",
              ],
              [
                "GPO often determines wholesaler choice",
                "Build relationships at both GPO and MSO levels.",
              ],
              [
                "Switching difficulty is high",
                "Reduce migration friction through structured transition support.",
              ],
              [
                "Analytics/support trail core distribution capabilities",
                "Expand reporting, analytics and reimbursement-support services.",
              ],
            ],
          },
          {
            caption: "For GPOs",
            headers: ["Finding", "Strategic Implication"],
            rows: [
              [
                "Net drug economics dominate selection",
                "Demonstrate measurable acquisition-cost savings.",
              ],
              [
                "GPO choice influences downstream wholesaler share",
                "Preferred distribution partnerships remain strategically important.",
              ],
              [
                "Relationships are long-tenured",
                "Prioritize retention and sustained contract value.",
              ],
              [
                "MSO affiliation can trigger GPO changes",
                "Strengthen partnerships with MSO platforms.",
              ],
            ],
          },
          {
            caption: "For MSO Platforms",
            headers: ["Finding", "Strategic Implication"],
            rows: [
              [
                "Pricing and operational support jointly drive participation",
                "Quantify both procurement leverage and administrative value.",
              ],
              [
                "Growth support receives strong satisfaction",
                "Position MSO value beyond back-office consolidation.",
              ],
              [
                "Independent practices value autonomy",
                "Preserve visible clinical and operational independence.",
              ],
              [
                "MSO structure can influence GPO relationships",
                "Use procurement leverage as part of the platform value proposition.",
              ],
            ],
          },
        ],
      },
      {
        title: "Research Design Learnings",
        paragraphs: [
          "The study captures the retina pharmaceutical procurement ecosystem across multiple interconnected layers rather than measuring vendor share in isolation.",
        ],
        bullets: [
          "Practice ownership / affiliation and strategic importance of retina.",
          "MSO affiliation, satisfaction and participation drivers.",
          "GPO relationships, purchasing criteria and switching behavior.",
          "Wholesaler/distributor relationships, satisfaction and switching behavior.",
          "Drug purchasing economics and biosimilar attitudes.",
          "Recommendation rationale and qualitative customer experience.",
        ],
      },
      {
        title: "Survey Structure & Data Sheet Reference",
        paragraphs: [
          "Question-level denominators are based on respondents who were eligible for the question, routed to it and provided a valid substantive response.",
        ],
        tables: [
          {
            caption: "Survey Structure",
            headers: ["Module", "Questions", "Key Topics"],
            rows: [
              [
                "Screener & Practice Profile",
                "Q1-Q14D",
                "Geography, practice profile, ownership, scale and economics",
              ],
              [
                "MSO Affiliation",
                "Q15-Q18, Q40 series",
                "MSO platform, satisfaction, joining drivers and retention",
              ],
              [
                "GPO Relationships",
                "Q19-Q31, Q41-Q43",
                "GPO usage, selection, satisfaction, RFP and switching",
              ],
              [
                "Wholesaler / Distributor",
                "Q32-Q36, Q44-Q53",
                "Primary wholesaler, criteria, satisfaction, RFP and switching",
              ],
              ["Wrap-Up", "Q39", "Validation / attention check"],
            ],
          },
          {
            caption: "Data Sheet Reference",
            headers: ["Data Sheet", "Case Study Usage"],
            rows: [
              [
                "Transcript Sheet",
                "Primary respondent-level quantitative and qualitative responses",
              ],
              ["OPEN ENDS", "GPO and wholesaler recommendation rationale"],
              ["QC Flags", "Response consistency and survey-logic checks"],
              ["CompanyDuplicacy_Check", "Organization duplication checks"],
              [
                "Open End Similarity",
                "Similarity checks across qualitative responses",
              ],
              ["Secondary", "Supporting market and distributor context"],
              ["Terminate", "Screened-out records"],
              ["EL", "Respondent tracking and fieldwork information"],
            ],
          },
        ],
      },
      {
        title: "Overall Case Study Takeaway",
        paragraphs: [
          "US retina pharmaceutical purchasing operates within a highly interconnected and economically driven procurement ecosystem. Acquisition economics strongly influence drug selection, while MSOs offer purchasing leverage, growth support and operational benefits. Independent practices, however, remain particularly protective of autonomy.",
          "GPOs occupy a strategically central position: net drug economics overwhelmingly drive their selection, and GPO choice frequently determines the downstream wholesaler relationship. Both GPOs and wholesalers benefit from strong satisfaction, long-standing relationships, meaningful switching friction and low near-term switching intent.",
        ],
      },
    ],
    analysisNote:
      "Findings describe the 24-respondent study sample. Question-level bases vary according to questionnaire routing and applicability; N/A responses are not treated as substantive responses. Segment percentages describe the relevant subgroup, not the entire US market.",
  },
  {
    id: 2,
    category: "Healthcare Industry",
    title: "US Pharmaceutical Wholesaler, GPO & Buying Group Customer Study",
    slug: "us-pharmaceutical-wholesaler-gpo-buying-group-customer-study",
    image: "/Translation.jpg",
    description:
      "A 30-respondent US study of pharmacy and health-system procurement, examining supplier selection, buying groups, satisfaction and switching barriers.",
    overview:
      "Understanding purchasing priorities, incumbent relationships, satisfaction and switching dynamics.",
    facts: [
      {
        label: "Research Type",
        value:
          "End-User Quantitative Survey with Open-Ended Qualitative Responses",
      },
      { label: "Industry", value: "Pharmaceutical Distribution & Procurement" },
      { label: "Geography", value: "United States" },
      { label: "Sample", value: "30 Respondents" },
      {
        label: "Respondent Mix",
        value: "Pharmacy and Hospital / Health System",
      },
      { label: "Field Period", value: "July 17-27, 2026" },
      { label: "LOI", value: "Approximately 25-30 minutes" },
      { label: "Status", value: "Completed Study" },
    ],
    sections: [
      {
        title: "Study Overview",
        paragraphs: [
          "This study was conducted to understand how US healthcare organizations and pharmacies evaluate, select, and manage their relationships with pharmaceutical wholesalers/distributors, Group Purchasing Organizations (GPOs), and pharmacy buying groups.",
          "Respondents were US-based healthcare/pharmacy professionals with meaningful involvement as either primary decision-makers or key influencers in pharmaceutical wholesaler/distributor or GPO/buying-group decisions.",
          "The research focused specifically on prescription pharmaceuticals and distinguished between traditional and specialty pharmaceutical sourcing.",
        ],
        bullets: [
          "Current pharmaceutical sourcing and distribution structures.",
          "Primary wholesaler/distributor relationships.",
          "GPO and pharmacy buying-group relationships.",
          "Key purchasing criteria used in vendor selection.",
          "Satisfaction with incumbent partners and likelihood to recommend.",
          "Relationship tenure and supplier stability.",
          "Frequency and outcomes of formal vendor reviews and RFPs.",
          "Difficulty and barriers associated with switching.",
          "Likelihood of switching providers over the next three years.",
          "Role of pricing, product access, service reliability, analytics and support in procurement decisions.",
        ],
        tables: [
          {
            caption: "Methodology",
            headers: ["Parameter", "Details"],
            rows: [
              ["Research Method", "Structured end-user quantitative survey"],
              ["Geography", "United States"],
              ["LOI", "Approximately 25-30 minutes"],
              [
                "Target Respondents",
                "Pharmaceutical procurement decision-makers / influencers",
              ],
              ["Respondent Segments", "Pharmacy and Hospital / Health System"],
              ["Analytical Sample", "30 respondents"],
              [
                "Research Coverage",
                "Wholesalers, GPOs and pharmacy buying groups",
              ],
              [
                "Qualitative Component",
                "Open-ended explanations embedded throughout the survey",
              ],
            ],
          },
        ],
      },
      {
        title: "Sample Profile",
        paragraphs: [
          "Analytical note: Question-level bases vary depending on survey routing, applicability and valid responses. N/A responses are excluded from question-level analysis where appropriate.",
        ],
        bullets: [
          "Specialty pharmaceuticals are particularly relevant within the Pharmacy sample, with all applicable respondents to the specialty-dispensing question reporting that their organization dispenses specialty pharmaceuticals.",
        ],
        tables: [
          {
            caption: "Respondent Segmentation",
            headers: ["Segment", "Share"],
            rows: [
              ["Pharmacy", "86.7%"],
              ["Hospital / Health System", "13.3%"],
              ["Total", "100.0%"],
            ],
          },
          {
            caption: "Respondent Designation by Industry",
            headers: ["Designation", "Healthcare", "Pharmacy"],
            rows: [
              ["Director of Pharmacy / Pharmacy Manager", "50.0%", "83.3%"],
              ["Hospital / Health System Pharmacy Director", "50.0%", ""],
              ["Owner / Senior Pharmacy Leadership", "", "16.7%"],
              ["Total", "100.0%", "100.0%"],
            ],
          },
          {
            caption: "Pharmacy Profile",
            headers: ["Pharmacy Type", "Share"],
            rows: [
              ["Independent Specialty Pharmacy", "58%"],
              ["Independent Community Pharmacy", "29%"],
              ["National Chain Pharmacy", "8%"],
              ["Supermarket Pharmacy", "4%"],
            ],
          },
        ],
      },
      {
        title: "Pharmaceutical Wholesaler Landscape",
        tables: [
          {
            caption:
              "Primary Wholesaler Relationships Are Concentrated (Pharmacy)",
            headers: ["Primary Wholesaler", "Pharmacy Share"],
            rows: [
              ["Cencora", "70.6%"],
              ["McKesson", "23.5%"],
              ["Cardinal Health", "5.9%"],
            ],
          },
          {
            caption: "Primary Wholesaler (Hospital / Health System)",
            headers: ["Primary Wholesaler", "Hospital / Health System Share"],
            rows: [
              ["Cencora", "50%"],
              ["McKesson", "25%"],
              ["Cardinal Health", "25%"],
            ],
          },
        ],
      },
      {
        title: "Long-Term Relationships Create Incumbent Stickiness",
        paragraphs: [
          "Approximately 78% of applicable Pharmacy respondents have worked with their primary wholesaler for at least five years. Hospital / Health System respondents similarly demonstrate predominantly long-term supplier relationships.",
        ],
        tables: [
          {
            caption: "Relationship Tenure (Pharmacy)",
            headers: ["Relationship Tenure", "Pharmacy Share"],
            rows: [
              ["Less than 1 year", "4.3%"],
              ["3-4 years", "17.4%"],
              ["5-9 years", "30.4%"],
              ["10+ years", "47.8%"],
            ],
          },
        ],
      },
      {
        title: "Wholesaler Selection Drivers",
        paragraphs: [
          "All applicable Hospital / Health System respondents ranked net drug economics as their most important criterion.",
        ],
        tables: [
          {
            caption: "Net Drug Economics Are the Dominant Purchase Criterion",
            headers: ["#1 Selection Criterion", "Pharmacy Share"],
            rows: [
              ["Net drug cost / rebates / discounts", "65.2%"],
              ["Timeliness & reliability of deliveries", "26.1%"],
              ["Broad product access", "4.3%"],
              ["Access to limited-distribution drugs", "4.3%"],
            ],
          },
        ],
      },
      {
        title: "Satisfaction & Customer Advocacy",
        paragraphs: [
          "No applicable Pharmacy respondent rated their incumbent primary wholesaler below 8.",
        ],
        tables: [
          {
            caption:
              "Incumbent Wholesalers Generate Strong Recommendation Scores",
            headers: ["Metric", "Pharmacy", "Hospital / Health System"],
            rows: [
              ["Average likelihood to recommend", "8.7 / 10", "8.25 / 10"],
              ["9 / 10 rating", "69.6%", ""],
              ["8 / 10 rating", "30.4%", ""],
            ],
          },
        ],
      },
      {
        title: "Qualitative Customer Experience",
        paragraphs: [
          "Open-ended responses reinforce the importance of reliability, product availability and ease of doing business.",
        ],
        quotes: [
          {
            text: "McKesson is very reliable and usually keeps the products we need in stock...",
            source: "Pharmacy Manager - Supermarket Pharmacy",
          },
          {
            text: "Our experience has been positive because communication is good and they help keep our inventory running smoothly.",
            source: "VP, Pharmacy Operations - Independent Specialty Pharmacy",
          },
          {
            text: "They deliver on time, usually have what we need, and work with us to handle drug shortages.",
            source: "Director of Pharmacy - Hospital / Health System",
          },
        ],
      },
      {
        title: "Switching Dynamics",
        paragraphs: [
          "Potential barriers include contract and pricing migration, administrative onboarding, GPO/buying-group dependencies, bundled services, staff resistance and working-capital implications.",
        ],
        tables: [
          {
            caption: "Switching Wholesalers Is Perceived as Difficult",
            headers: [
              "Segment",
              "Average Switching Difficulty",
              "Average 3-Year Switching Likelihood",
            ],
            rows: [
              ["Pharmacy", "6.1 / 7", "2.1 / 7"],
              ["Hospital / Health System", "6.0 / 7", "1.75 / 7"],
            ],
          },
        ],
      },
      {
        title: "Formal Reviews & RFP Behavior",
        paragraphs: [
          "All applicable Hospital / Health System respondents conducted an RFP and renewed with the existing primary wholesaler.",
        ],
        tables: [
          {
            caption: "Formal Reviews Usually Reinforce Incumbency",
            headers: ["Most Recent Review Outcome", "Pharmacy Share"],
            rows: [
              ["Conducted RFP and renewed incumbent", "78.3%"],
              ["Renewed incumbent without formal RFP", "17.4%"],
              ["Conducted RFP and switched wholesaler", "4.3%"],
            ],
          },
        ],
      },
      {
        title: "GPO & Buying Group Dynamics",
        paragraphs: [
          "Hospital / Health System respondents reported working with Vizient for pharmaceutical purchasing and demonstrated long-standing GPO relationships.",
        ],
        tables: [
          {
            caption: "Pharmacy Buying Groups - #1 Selection Criterion",
            headers: ["#1 Buying-Group Criterion", "Share"],
            rows: [
              ["Net drug cost / rebates / discounts", "92.3%"],
              ["Franchise requirement", "7.7%"],
            ],
          },
          {
            headers: ["Metric", "Result"],
            rows: [
              ["Average recommendation", "8.3 / 10"],
              ["Average switching difficulty", "5.8 / 7"],
              ["Average 3-year switching likelihood", "2.3 / 7"],
            ],
          },
        ],
      },
      {
        title: "Illustrative Respondent Profiles",
        tables: [
          {
            caption: "Profile 1 - The National-Chain Operational Loyalist",
            headers: ["Attribute", "Profile"],
            rows: [
              ["Organization", "National Chain Pharmacy"],
              ["Primary Wholesaler", "Cencora"],
              ["Relationship Tenure", "3-4 years"],
              ["Recommendation", "9 / 10"],
              ["Switching Difficulty", "7 / 7"],
              ["3-Year Switching Likelihood", "1 / 7"],
            ],
          },
          {
            caption:
              "Profile 2 - The Specialty Pharmacy Supply-Continuity Optimizer",
            headers: ["Attribute", "Profile"],
            rows: [
              ["Organization", "Independent Specialty Pharmacy"],
              ["Primary Wholesaler", "Cencora"],
              ["Relationship Tenure", "5-9 years"],
              ["Recommendation", "9 / 10"],
              ["Switching Difficulty", "6 / 7"],
              ["3-Year Switching Likelihood", "3 / 7"],
            ],
          },
          {
            caption:
              "Profile 3 - The Enterprise Health-System Procurement Leader",
            headers: ["Attribute", "Profile"],
            rows: [
              ["Organization", "Hospital / Health System"],
              ["Primary Wholesaler", "Cardinal Health"],
              ["Primary GPO", "Vizient"],
              ["Wholesaler Tenure", "10+ years"],
              ["Recommendation", "9 / 10"],
              ["Switching Difficulty", "7 / 7"],
              ["3-Year Switching Likelihood", "1 / 7"],
            ],
          },
        ],
      },
      {
        title: "Strategic Implications",
        tables: [
          {
            caption: "For Pharmaceutical Wholesalers / Distributors",
            headers: ["Finding", "Strategic Implication"],
            rows: [
              [
                "Net economics lead supplier selection",
                "Maintain competitive pricing, rebate and discount structures",
              ],
              [
                "Delivery reliability is a major secondary driver",
                "Protect service levels and supply-chain resilience",
              ],
              [
                "Most applicable relationships exceed five years",
                "Prioritize retention and account expansion",
              ],
              [
                "Recommendation scores are high",
                "Challengers require meaningful differentiation",
              ],
              [
                "Switching difficulty is ~6 / 7",
                "Migration support can become a challenger advantage",
              ],
              [
                "Switching likelihood is low",
                "Focus acquisition around identifiable trigger events",
              ],
              [
                "Most RFPs result in incumbent renewal",
                "Treat RFPs as retention and renegotiation opportunities",
              ],
              [
                "Specialty pharmacies value supply continuity",
                "Strengthen specialty and limited-distribution access",
              ],
              [
                "GPO / buying-group relationships matter",
                "Manage the wider procurement ecosystem",
              ],
            ],
          },
          {
            caption: "For GPOs & Buying Groups",
            headers: ["Finding", "Strategic Implication"],
            rows: [
              [
                "Economics dominate buying-group selection",
                "Quantify member savings and rebate value clearly",
              ],
              [
                "Advocacy remains high",
                "Protect commercial value while expanding differentiated services",
              ],
              [
                "Switching is difficult",
                "Streamlined onboarding could support challenger acquisition",
              ],
              [
                "Recent reviews rarely result in switching",
                "Competitive acquisition requires a clear trigger",
              ],
              [
                "Buying groups may influence wholesaler choice",
                "Distributor partnerships remain strategically important",
              ],
            ],
          },
        ],
      },
      {
        title: "Research Design Learnings",
        paragraphs: [
          "The study provides a comprehensive view of pharmaceutical procurement because it evaluates more than vendor usage alone. The pharmacy pathway additionally assesses buying groups and generic purchasing consortia, while the hospital pathway examines GPO relationships and health-system procurement structures.",
        ],
        bullets: [
          "Wholesaler awareness and usage.",
          "Primary supplier identification.",
          "Relationship tenure.",
          "Purchasing-criteria ranking.",
          "Attribute-level satisfaction.",
          "Recommendation likelihood.",
          "Open-ended rationale.",
          "Formal review / RFP history.",
          "Switching difficulty.",
          "Switching barriers.",
          "Future switching intent.",
        ],
      },
      {
        title: "Survey Structure & Data Sheet Reference",
        paragraphs: [
          "Question-level denominators are based on respondents who were eligible for the question, routed to the question and provided a valid substantive response. N/A responses are not treated as substantive responses.",
        ],
        tables: [
          {
            caption: "Survey Structure",
            headers: ["Module", "Questions", "Key Topics"],
            rows: [
              [
                "Core Screener",
                "Q1-Q8",
                "Geography, industry, role, tenure, pharmaceutical type, decision involvement",
              ],
              [
                "Hospital / Health System",
                "Q9-Q40",
                "Facility profile, GPO, spend, wholesaler selection, satisfaction and switching",
              ],
              [
                "Pharmacy Profile",
                "Q41-Q49",
                "Pharmacy type, ownership, scale, specialty dispensing and spend",
              ],
              [
                "Pharmacy Buying Groups",
                "Q50-Q67",
                "Buying-group relationships, criteria, satisfaction and switching",
              ],
              [
                "Pharmacy Wholesalers",
                "Q68-Q83",
                "Wholesaler relationship, criteria, satisfaction, RFP and switching",
              ],
            ],
          },
          {
            caption: "Data Sheet Reference",
            headers: ["Data Sheet", "Case Study Usage"],
            rows: [
              [
                "Transcript",
                "Primary respondent-level quantitative and qualitative data",
              ],
              ["OES", "Open-ended responses and illustrative verbatims"],
              ["QC Flags", "Response-quality and logical-consistency checks"],
              [
                "OpenEnds_Fuzzy_Check",
                "Similarity / duplicate checks for open-ended responses",
              ],
              ["CompanyDuplicacy_Check", "Organization duplication checks"],
              ["Secondary", "Supporting distributor / reference information"],
              ["Terminate", "Terminated / screened-out respondents"],
              ["EL", "Respondent tracking and disposition information"],
            ],
          },
        ],
      },
      {
        title: "Overall Case Study Takeaway",
        paragraphs: [
          "The research points to a highly sticky US pharmaceutical distribution ecosystem. Incumbent wholesalers benefit from long-standing customer relationships, strong recommendation levels, significant switching complexity and low near-term switching intent.",
          "Economics remain the primary basis of supplier selection, but price alone does not explain loyalty. Delivery reliability, inventory continuity, product access and ease of doing business reinforce incumbent relationships, particularly within specialty pharmacy and health-system environments.",
          "Formal RFPs create competitive windows, but within the studied sample they overwhelmingly lead to incumbent retention rather than replacement.",
        ],
      },
    ],
    analysisNote:
      "Findings describe the 30-respondent study sample. Question-level bases vary depending on survey routing, applicability and valid responses. N/A responses are excluded from question-level analysis where appropriate.",
  },
];
