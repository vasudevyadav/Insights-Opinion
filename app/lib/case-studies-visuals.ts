export type StudyChart = {
  title: string;
  kind: "pie" | "bar";
  unit: "%" | "/7";
  base: string;
  rows: { label: string; value: number; comparison?: number }[];
  series?: [string, string];
};
export type StudyVisuals = {
  metrics: { value: string; label: string }[];
  flow: string[];
  sections: Record<string, { charts?: StudyChart[]; insight?: string }>;
};

// Chart values are transcribed only from figures that are explicitly charted
// in the source "Research Case Study" report or its companion "Post-Research
// Findings Report" presentation, and only where the two documents agree.
// Where the report and presentation disagree on a figure (e.g. the retina
// wholesaler-selection-criterion percentages, or the GPO selection-criterion
// percentages), the report's own table/figure is used as the sole source and
// no chart duplicating the conflicting presentation figure is added.
export const studyVisuals: Record<string, StudyVisuals> = {
  "us-retina-pharmaceutical-distribution-gpo-mso-study": {
    metrics: [
      { value: "24", label: "Respondents" },
      { value: "79.2%", label: "Pricing / rebates very or extremely influential" },
      { value: "83.3%", label: "GPO determines primary wholesaler" },
      { value: "75.0%", label: "Cencora / Besse / ASD primary wholesaler" },
    ],
    flow: ["Practice / MSO", "GPO contracting", "Wholesaler", "Drug economics & supply"],
    sections: {
      "Sample Profile": {
        insight: "The sample provides balanced visibility into independent and MSO-affiliated retina practices, enabling comparison between centralized platform benefits and the factors supporting continued independence. The research is grounded in respondents who are closely involved in practice administration, operations and pharmaceutical procurement decision-making.",
        charts: [
          { title: "Practice ownership / affiliation", kind: "pie", unit: "%", base: "All 24 respondents", rows: [{ label: "Independent", value: 50 }, { label: "MSO-affiliated", value: 45.8 }, { label: "Hospital / Health System", value: 4.2 }] },
        ],
      },
      "Retina Practice Economics": {
        insight: "Almost four in five respondents (79.2%) consider wholesaler pricing and rebates very or extremely influential, highlighting the commercial importance of acquisition economics in retina care. Retina practices appear commercially sophisticated rather than purely price-driven: economics matter, but treatment changes remain shaped by clinical and operational considerations.",
        charts: [
          { title: "Influence of wholesaler pricing / rebates", kind: "bar", unit: "%", base: "All 24 respondents", rows: [{ label: "Extremely influential", value: 25 }, { label: "Very influential", value: 54.2 }, { label: "Moderately influential", value: 20.8 }] },
        ],
      },
      "MSO Landscape & Participation Drivers": {
        insight: "MSOs compete on a dual value proposition: purchasing leverage and operational support must be delivered without creating the perception that practices will lose meaningful autonomy.",
        charts: [
          { title: "Top reason for joining / considering an MSO", kind: "bar", unit: "%", base: "MSO-affiliated / considering practices", rows: [{ label: "Better pharmaceutical pricing / rebates", value: 41.7 }, { label: "Administrative / operational support", value: 41.7 }, { label: "Financial benefits / shared cost savings", value: 16.7 }] },
        ],
      },
      "GPO Landscape & Selection Drivers": {
        insight: "GPO choice is overwhelmingly economics-led. Long-standing contracts and strong purchasing value combine to reinforce incumbent stability.",
        charts: [
          { title: "Primary GPO for retina pharmaceuticals", kind: "pie", unit: "%", base: "Practices identifying a primary GPO", rows: [{ label: "Specialty / Vision Practice Network (Cencora)", value: 71.4 }, { label: "Onmark Vision (McKesson)", value: 23.8 }, { label: "Vizient", value: 4.8 }] },
          { title: "Most important GPO selection criterion", kind: "bar", unit: "%", base: "All 24 respondents", rows: [{ label: "Net drug cost / performance-based rebates", value: 95.8 }, { label: "Access to preferred wholesaler / distributor", value: 4.2 }] },
        ],
      },
      "GPO Satisfaction, Loyalty & Review Behavior": {
        insight: "Nearly 88% of recent GPO reviews resulted in incumbent retention. The limited switching observed was linked to organizational affiliation changes rather than dissatisfaction alone.",
      },
      "Wholesaler / Distributor Landscape & GPO Linkage": {
        insight: "For most practices, wholesaler choice is not an independent procurement decision. The prevailing ecosystem operates as Practice / MSO -> GPO -> Wholesaler -> Retina Drug Economics & Supply.",
        charts: [
          { title: "Primary retina wholesaler / distributor", kind: "pie", unit: "%", base: "All 24 respondents", rows: [{ label: "Cencora / Besse / ASD Healthcare", value: 75 }, { label: "McKesson", value: 25 }] },
          { title: "Relationship between GPO & wholesaler", kind: "bar", unit: "%", base: "All 24 respondents", rows: [{ label: "GPO determines primary wholesaler", value: 83.3 }, { label: "Wholesaler determines primary GPO", value: 12.5 }, { label: "No influence between the two", value: 4.2 }] },
        ],
      },
      "Wholesaler Selection, Satisfaction & Loyalty": {
        insight: "Wholesalers benefit from strong satisfaction, embedded relationships and limited near-term churn. Analytics, reimbursement support and payment flexibility are clearer areas for differentiation than core fulfillment.",
        charts: [
          { title: "High switching friction, low switching intent", kind: "bar", unit: "/7", base: "Valid responses for each relationship measure; average score (1-7)", series: ["Switching difficulty", "3-year switching likelihood"], rows: [{ label: "GPO", value: 5.9, comparison: 2 }, { label: "Wholesaler", value: 5.8, comparison: 2.1 }] },
        ],
      },
      "Qualitative Customer Experience": {
        insight: "Pricing drives consideration, while dependable access, on-time delivery and responsive support sustain satisfaction. Reporting and analytics emerge as recurring opportunities for incremental value.",
      },
      "Illustrative Respondent Profiles": {
        insight: "MSO affiliation, GPO contracting and wholesaler choice are closely interconnected, reinforcing incumbent loyalty. Independent practices value purchasing leverage but remain protective of decision-making control. Long-standing operational integration creates switching friction; challengers need better economics and a low-risk transition proposition.",
      },
      "Research Design Learnings": {
        insight: "The design enables analysis of how ownership structure, contracting relationships and pharmaceutical economics interact to shape purchasing behavior.",
      },
      "Overall Case Study Takeaway": {
        insight: "The competitive landscape is best understood as an MSO-GPO-wholesaler ecosystem rather than as separate supplier markets. Winning share is likely to require superior commercial economics, strong organizational partnerships, dependable distribution performance and low-friction migration support.",
      },
    },
  },
  "us-pharmaceutical-wholesaler-gpo-buying-group-customer-study": {
    metrics: [
      { value: "70.6%", label: "Cencora primary among applicable pharmacy respondents" },
      { value: "65.2%", label: "Ranked net economics as #1 wholesaler criterion" },
      { value: "6.1/7", label: "Avg. pharmacy difficulty to switch wholesaler" },
      { value: "78.3%", label: "RFPs renewed incumbent in latest review" },
    ],
    flow: ["Pharmacy / Health system", "GPO / Buying group", "Primary wholesaler", "Rx supply & economics"],
    sections: {
      "Sample Profile": {
        insight: "The pharmacy sample has meaningful exposure to complex distribution requirements, particularly specialty-product availability, limited-distribution access and supply continuity.",
        charts: [
          { title: "Respondent segmentation", kind: "pie", unit: "%", base: "All 30 respondents", rows: [{ label: "Pharmacy", value: 86.7 }, { label: "Hospital / Health System", value: 13.3 }] },
          { title: "Respondent designation mix - Pharmacy", kind: "pie", unit: "%", base: "Pharmacy respondents", rows: [{ label: "Director of Pharmacy / Pharmacy Manager", value: 83.3 }, { label: "Owner / Senior Pharmacy Leadership", value: 16.7 }] },
          { title: "Pharmacy type profile", kind: "bar", unit: "%", base: "Pharmacy respondents; rounded source percentages", rows: [{ label: "Independent specialty", value: 58 }, { label: "Independent community", value: 29 }, { label: "National chain", value: 8 }, { label: "Supermarket", value: 4 }] },
        ],
      },
      "Pharmaceutical Wholesaler Landscape": {
        insight: "The study indicates a highly concentrated pharmaceutical distribution environment, with Cencora showing the strongest position among applicable Pharmacy respondents. The results also demonstrate the significant role of the three major national wholesalers across studied customer types.",
        charts: [
          { title: "Primary wholesaler - Pharmacy", kind: "pie", unit: "%", base: "Applicable pharmacy respondents", rows: [{ label: "Cencora", value: 70.6 }, { label: "McKesson", value: 23.5 }, { label: "Cardinal Health", value: 5.9 }] },
          { title: "Primary wholesaler - Hospital / Health System", kind: "bar", unit: "%", base: "Hospital / Health System respondents", rows: [{ label: "Cencora", value: 50 }, { label: "McKesson", value: 25 }, { label: "Cardinal Health", value: 25 }] },
        ],
      },
      "Long-Term Relationships Create Incumbent Stickiness": {
        insight: "Wholesaler relationships appear to function as long-term strategic partnerships rather than frequently changing transactional arrangements. Over time, incumbent wholesalers become embedded across contracting, ordering infrastructure, inventory management, pricing/rebate structures, GPO/buying-group relationships and account-management processes.",
        charts: [
          { title: "Primary wholesaler relationship tenure", kind: "bar", unit: "%", base: "Applicable pharmacy respondents", rows: [{ label: "Less than 1 year", value: 4.3 }, { label: "3-4 years", value: 17.4 }, { label: "5-9 years", value: 30.4 }, { label: "10+ years", value: 47.8 }] },
        ],
      },
      "Wholesaler Selection Drivers": {
        insight: "Economics are clearly the strongest wholesaler-selection driver. However, more than one-quarter of Pharmacy respondents prioritize delivery reliability, demonstrating that attractive pricing is insufficient if supply continuity is compromised. The strongest wholesaler proposition combines competitive economics, reliable fulfillment, broad product access and operational execution.",
        charts: [
          { title: "#1 Wholesaler selection criterion", kind: "bar", unit: "%", base: "Applicable pharmacy respondents", rows: [{ label: "Net drug cost / rebates / discounts", value: 65.2 }, { label: "Timeliness & reliability of deliveries", value: 26.1 }, { label: "Broad product access", value: 4.3 }, { label: "Access to limited-distribution drugs", value: 4.3 }] },
        ],
      },
      "Satisfaction & Customer Advocacy": {
        insight: "Incumbent satisfaction is high. A challenger wholesaler is therefore unlikely to win an account by simply matching current performance. Competitive displacement generally requires a clear and measurable advantage in economics, access, service or operational support.",
        charts: [
          { title: "Pharmacy wholesaler recommendation ratings", kind: "pie", unit: "%", base: "Applicable pharmacy respondents", rows: [{ label: "9 / 10 rating", value: 69.6 }, { label: "8 / 10 rating", value: 30.4 }] },
        ],
      },
      "Qualitative Customer Experience": {
        insight: "Wholesaler value is assessed through both financial and operational performance. The qualitative feedback particularly reinforces product availability, on-time delivery, inventory continuity, communication, drug-shortage management and ease of ordering.",
      },
      "Switching Dynamics": {
        insight: "One of the clearest findings is the combination of high satisfaction, long tenure, high switching difficulty and low switching intention. Together, these factors create substantial incumbent protection.",
        charts: [
          { title: "Switching difficulty vs. three-year switching likelihood", kind: "bar", unit: "/7", base: "Valid responses by segment; average score (1-7)", series: ["Switching difficulty", "3-year switching likelihood"], rows: [{ label: "Pharmacy", value: 6.1, comparison: 2.1 }, { label: "Hospital / Health System", value: 6, comparison: 1.75 }] },
        ],
      },
      "Formal Reviews & RFP Behavior": {
        insight: "Formal review activity should not automatically be interpreted as churn risk. In this sample, RFPs more commonly function as mechanisms to benchmark commercial terms, validate incumbent competitiveness, renegotiate pricing, review service performance and meet procurement-governance requirements.",
        charts: [
          { title: "Outcome of most recent wholesaler review - Pharmacy", kind: "bar", unit: "%", base: "Applicable pharmacy respondents", rows: [{ label: "Conducted RFP and renewed incumbent", value: 78.3 }, { label: "Renewed incumbent without formal RFP", value: 17.4 }, { label: "Conducted RFP and switched wholesaler", value: 4.3 }] },
        ],
      },
      "GPO & Buying Group Dynamics": {
        insight: "Hospital pharmaceutical procurement operates through an interconnected ecosystem: Health System -> GPO -> Wholesaler -> Pharmaceutical Economics & Supply. Buying-group selection is even more explicitly economics-driven than wholesaler selection; relationships display strong satisfaction, switching complexity and low expected churn.",
        charts: [
          { title: "#1 Buying-group selection criterion - Pharmacy", kind: "bar", unit: "%", base: "Applicable pharmacy respondents", rows: [{ label: "Net drug cost / rebates / discounts", value: 92.3 }, { label: "Franchise requirement", value: 7.7 }] },
        ],
      },
      "Illustrative Respondent Profiles": {
        insight: "Long tenure, GPO integration, supply reliability and high switching complexity combine to create a significant competitive moat around the incumbent.",
      },
      "Overall Case Study Takeaway": {
        insight: "Challengers seeking share are likely to require a combination of material economic advantage, differentiated operational value and low-friction migration support.",
      },
    },
  },
};
