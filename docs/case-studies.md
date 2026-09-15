# Managing case studies

Edit `app/lib/case-studies-data.ts`. New report content is local. The shared loaders in
`app/lib/case-studies-api.ts` combine local reports with existing backend case studies.
Local reports appear first; duplicate slugs use the local version. A backend failure
leaves local reports available. Existing backend detail content retains its original layout.
The home section, case-study listing, detail pages and generated route inventory
use these loaders. Separate service-page promotional cards retain their existing source.

- Add an object to add a study; remove one to remove it.
- Give each study a unique numeric `id` and URL-safe `slug`.
- `title`, `description`, `category` and `image` control listing cards.
- Put cover images in `public/` and use a root-relative path in `image`.
- `overview` and `facts` introduce the detail page.
- Each `sections` entry adds an always-visible numbered report section with a `title`, `paragraphs` and/or `bullets`.
- Edit `app/lib/case-studies-visuals.ts` for pie charts, bar charts, summary metrics, procurement steps and insight callouts. Visual entries are keyed by study slug and section title; keep those keys in sync.
- Chart rows contain labels and numeric values. Percentage bars use a 0-100 scale, score bars use 0-7, and a `comparison` adds a second series. Always retain the relevant subgroup in `base`.
- `analysisNote` preserves sample and denominator qualifications.
- Text is rendered as plain React text, not raw HTML.
- Save to preview locally; rebuild/redeploy to update the production website.
- No PDFs are copied into public assets, embedded or linked.

## Source mapping

Two studies were prepared as web summaries from four supplied PDFs:

1. US Retina Pharmaceutical Distribution, GPO & MSO Study_Case_Study.pdf
   and US Retina Pharmaceutical Distribution, GPO & MSO Study_Presentation.pdf.
2. US_Pharma_Wholesaler_GPO_Case_Study_End_User.pdf
   and US_Pharma_Distribution_Research_Presentation_End_User.pdf.

These pages summarize objectives, methods, findings and implications; they are
not verbatim transcriptions of every table, illustrative profile or internal
survey/data-sheet reference. Existing healthcare artwork is reused for covers.
No client name is supplied in the source, so none is invented.

## Source discrepancies to resolve

The retina report and presentation disagree on several values. These values are
omitted from the web summary pending reconciliation with the research owner:

| Measure | Case study report | Presentation |
| --- | --- | --- |
| Interview length | Cover: 30-35 minutes; methodology: 15-20 minutes | 30-35 minutes |
| Leading GPO criterion: net economics | 95.8% | 91.7% |
| Leading GPO criterion: wholesaler access | 4.2% | 8.3% |
| Leading wholesaler criterion: rebates | 75.0% | 70.8% |
| Leading wholesaler criterion: inventory | 4.2% | 8.3% |

Use report precision for the pharmacy study; some presentation charts round
scores and percentages. All shares refer to surveyed respondents or applicable
subgroups, not national market shares. Question-level denominators are not
uniform and must not be inferred from overall sample size.

## Existing URLs

The combined catalogue preserves existing backend slugs alongside the new local
reports. Backend entries retain their original detail format, while local studies
use the chart-based report layout. Backend entries must remain published in the
backend for their URLs to resolve.
