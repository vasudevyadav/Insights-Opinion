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
  sections: Record<string, { charts?: StudyChart[]; insight: string }>;
};

// Values are transcribed from the supplied research reports. Disputed retina
// selection percentages and interview duration remain omitted; see docs.
export const studyVisuals: Record<string, StudyVisuals> = {
  "us-retina-pharmaceutical-distribution-gpo-mso-study": {
    metrics: [{ value: "24", label: "Respondents" }, { value: "79.2%", label: "Pricing / rebates very or extremely influential" }, { value: "83.3%", label: "GPO determines primary wholesaler" }, { value: "75.0%", label: "Cencora / Besse / ASD primary wholesaler" }],
    flow: ["Practice / MSO", "GPO contracting", "Wholesaler", "Drug economics & supply"],
    sections: {
      "Research objectives": { insight: "Retina purchasing decisions connect practice ownership, contracting economics and dependable pharmaceutical access." },
      "Methodology & respondent profile": {
        insight: "The sample balances independent and MSO-affiliated practices, with respondents directly involved in procurement decisions.",
        charts: [{ title: "Practice ownership / affiliation", kind: "pie", unit: "%", base: "All 24 respondents", rows: [{ label: "Independent", value: 50 }, { label: "MSO-affiliated", value: 45.8 }, { label: "Hospital / Health System", value: 4.2 }] }],
      },
      "Practice economics & MSO affiliation": {
        insight: "Acquisition economics matter, while MSO participation also depends on operational support and preserving practice autonomy.",
        charts: [{ title: "Influence of wholesaler pricing / rebates", kind: "bar", unit: "%", base: "All 24 respondents", rows: [{ label: "Extremely influential", value: 25 }, { label: "Very influential", value: 54.2 }, { label: "Moderately influential", value: 20.8 }] }, { title: "MSO platform mix", kind: "bar", unit: "%", base: "MSO-affiliated practices", rows: [{ label: "Retina Consultants of America", value: 54.5 }, { label: "EyeCare Partners", value: 18.2 }, { label: "PRISM Vision Group", value: 9.1 }, { label: "Spectrum Vision Partners", value: 9.1 }, { label: "Other", value: 9.1 }] }],
      },
      "GPO relationships & purchasing decisions": {
        insight: "GPO relationships combine strong satisfaction, long tenure and low switching intent, reinforcing incumbent stability.",
        charts: [{ title: "Primary GPO for retina pharmaceuticals", kind: "pie", unit: "%", base: "Practices identifying a primary GPO", rows: [{ label: "Specialty / Vision Practice Network", value: 71.4 }, { label: "Onmark Vision", value: 23.8 }, { label: "Vizient", value: 4.8 }] }, { title: "Most recent GPO review outcome", kind: "bar", unit: "%", base: "Applicable GPO review responses", rows: [{ label: "RFP - renewed incumbent", value: 45.8 }, { label: "Renewed without formal RFP", value: 41.7 }, { label: "Switched due to MSO affiliation", value: 12.5 }] }],
      },
      "Wholesaler relationships & switching": {
        insight: "The GPO relationship is often the gateway to wholesaler share. Strong incumbent relationships create substantial switching friction.",
        charts: [{ title: "Primary retina wholesaler / distributor", kind: "pie", unit: "%", base: "All 24 respondents", rows: [{ label: "Cencora / Besse / ASD Healthcare", value: 75 }, { label: "McKesson", value: 25 }] }, { title: "High switching friction, low switching intent", kind: "bar", unit: "/7", base: "Valid responses for each relationship measure; average score (1-7)", series: ["Switching difficulty", "3-year switching likelihood"], rows: [{ label: "GPO", value: 5.9, comparison: 2 }, { label: "Wholesaler", value: 5.8, comparison: 2.1 }] }],
      },
      "Strategic implications": { insight: "Winning share requires economic advantage, upstream partnerships, reliable fulfillment and low-friction migration support." },
    },
  },
  "us-pharmaceutical-wholesaler-gpo-buying-group-customer-study": {
    metrics: [{ value: "30", label: "Respondents" }, { value: "65.2%", label: "Net economics ranked first by applicable pharmacy respondents" }, { value: "6.1/7", label: "Average pharmacy switching difficulty" }, { value: "78.3%", label: "RFP and incumbent renewal among applicable pharmacy respondents" }],
    flow: ["Pharmacy / Health system", "GPO / Buying group", "Primary wholesaler", "Rx supply & economics"],
    sections: {
      "Research objectives": { insight: "The research connects supplier economics, customer experience and switching behavior across the procurement ecosystem." },
      "Methodology & respondent profile": {
        insight: "Separate pharmacy and health-system pathways keep findings relevant to each procurement context.",
        charts: [{ title: "Respondent segmentation", kind: "pie", unit: "%", base: "All 30 respondents", rows: [{ label: "Pharmacy", value: 86.7 }, { label: "Hospital / Health System", value: 13.3 }] }, { title: "Pharmacy type profile", kind: "bar", unit: "%", base: "Applicable pharmacy respondents; rounded source percentages", rows: [{ label: "Independent specialty", value: 58 }, { label: "Independent community", value: 29 }, { label: "National chain", value: 8 }, { label: "Supermarket", value: 4 }] }],
      },
      "Wholesaler landscape & selection drivers": {
        insight: "Net economics lead supplier selection, but reliable delivery remains essential to a competitive value proposition.",
        charts: [{ title: "Primary wholesaler - Pharmacy", kind: "pie", unit: "%", base: "Applicable pharmacy respondents", rows: [{ label: "Cencora", value: 70.6 }, { label: "McKesson", value: 23.5 }, { label: "Cardinal Health", value: 5.9 }] }, { title: "Primary wholesaler - Hospital / Health System", kind: "bar", unit: "%", base: "Hospital / Health System respondents", rows: [{ label: "Cencora", value: 50 }, { label: "McKesson", value: 25 }, { label: "Cardinal Health", value: 25 }] }, { title: "Most important wholesaler selection criterion", kind: "bar", unit: "%", base: "Applicable pharmacy respondents", rows: [{ label: "Net drug cost / rebates / discounts", value: 65.2 }, { label: "Delivery timeliness & reliability", value: 26.1 }, { label: "Broad product access", value: 4.3 }, { label: "Limited-distribution drug access", value: 4.3 }] }, { title: "Primary wholesaler relationship tenure", kind: "bar", unit: "%", base: "Applicable pharmacy respondents; rounded percentages", rows: [{ label: "Less than 1 year", value: 4.3 }, { label: "3-4 years", value: 17.4 }, { label: "5-9 years", value: 30.4 }, { label: "10+ years", value: 47.8 }] }],
      },
      "Satisfaction & switching dynamics": {
        insight: "High satisfaction and substantial switching effort protect incumbents; challengers need a clear economic and operational advantage.",
        charts: [{ title: "Pharmacy wholesaler recommendation ratings", kind: "pie", unit: "%", base: "Applicable pharmacy respondents", rows: [{ label: "9 / 10 rating", value: 69.6 }, { label: "8 / 10 rating", value: 30.4 }] }, { title: "Switching difficulty vs. three-year intent", kind: "bar", unit: "/7", base: "Valid responses by segment; average score (1-7)", series: ["Switching difficulty", "3-year switching likelihood"], rows: [{ label: "Pharmacy", value: 6.1, comparison: 2.1 }, { label: "Hospital / Health System", value: 6, comparison: 1.75 }] }],
      },
      "Formal reviews, GPOs & buying groups": {
        insight: "Formal reviews frequently validate incumbents. Buying groups further concentrate attention on acquisition economics.",
        charts: [{ title: "Most recent wholesaler review outcome", kind: "bar", unit: "%", base: "Applicable pharmacy respondents", rows: [{ label: "RFP - renewed incumbent", value: 78.3 }, { label: "Renewed without formal RFP", value: 17.4 }, { label: "RFP - switched wholesaler", value: 4.3 }] }, { title: "Leading buying-group selection criterion", kind: "pie", unit: "%", base: "Applicable pharmacy respondents", rows: [{ label: "Net drug cost / rebates / discounts", value: 92.3 }, { label: "Franchise requirement", value: 7.7 }] }],
      },
      "Strategic implications": { insight: "Pair measurable economic value with dependable supply, specialty access and a practical transition plan." },
    },
  },
};
