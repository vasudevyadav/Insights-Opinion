# Proposed 301 Redirect Map

Review this map before DNS cutover. Every entry is configured as a permanent redirect in `next.config.ts`.

| Current/legacy URL | New canonical URL |
| --- | --- |
| `/sample-page` | `/` |
| `/news-and-updates` | `/blogs` |
| `/global-panel` | `/service/global-panel` |
| `/about-us-2` | `/about-us` |
| `/thankyou` | `/thank-you` |
| `/case-study` | `/case-studies` |
| `/data-protection-gdpr-compliance` | `/privacy-policy` |
| `/market-research-company-in-india` | `/local` |
| `/insight` | `/blogs` |
| `/blog` | `/blogs` |
| `/our-story` | `/about-us` |
| `/leadership` | `/about-us/leadership` |
| `/research-expertise/consumer-research` | `/research/consumer-research` |
| `/research-expertise/b2b-research` | `/research/b2b-research` |
| `/research-expertise/healthcare-research` | `/research/healthcare-research` |
| `/research-expertise/market-research-company-in-new-york` | `/local` |
| `/case-study/automative-industry` | `/case-studies/automotive-industry` |
| `/case-study/automotive-industry` | `/case-studies/automotive-industry` |
| `/case-study/healthcare-industry-diabetes` | `/case-studies/healthcare-industry-diabetes` |
| `/case-studies/healthcare-industry-diabetes-2` | `/case-studies/healthcare-industry-diabetes` |
| `/case-study/chemical-industry` | `/case-studies/chemical-industry` |
| `/case-study/telecom-industry` | `/case-studies/telecom-industry` |
| `/case-study/healthcare-industry` | `/case-studies` |
| `/case-studies/automative-industry` | `/case-studies/automotive-industry` |
| `/service/survey-programing` | `/service/survey-programming` |
| `/terms-and-conditions` | `/terms` |
| `/our-team` | `/our-teams` |
| `/our-team/:slug` | `/our-teams/:slug` |

Service aliases generated from `app/lib/legacy-service-routes.ts` must also be reviewed with this list before launch.
