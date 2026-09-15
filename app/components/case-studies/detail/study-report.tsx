import type { CaseStudy } from "@/app/lib/case-studies-data";
import { studyVisuals, type StudyChart } from "@/app/lib/case-studies-visuals";

const colors = ["#173e58", "#4b79cc", "#1bb5a5", "#f38a2b", "#8baac7"];
const format = (value: number, unit: string) => `${value}${unit}`;

function Chart({ chart }: { chart: StudyChart }) {
  const total = chart.rows.reduce((sum, row) => sum + row.value, 0);
  let offset = 0;
  const stops = chart.rows.map((row, i) => {
    const start = offset;
    offset += row.value / total * 100;
    return `${colors[i % colors.length]} ${start}% ${offset}%`;
  });
  return (
    <figure className="min-w-0 rounded-xl border border-[#dce5ed] bg-white p-4 sm:p-6">
      <figcaption className="text-base font-bold leading-snug text-[#173e58]">{chart.title}</figcaption>
      <p className="mt-2 text-xs leading-5 text-slate-500">Base: {chart.base}</p>
      {chart.kind === "pie" ? (
        <div className="my-6 flex flex-col items-center gap-6">
          <div aria-hidden="true" className="h-48 w-48 shrink-0 rounded-full sm:h-56 sm:w-56" style={{ background: `conic-gradient(${stops.join(",")})` }} />
          <ul className="w-full space-y-3 text-sm">
            {chart.rows.map((row, i) => <li key={row.label} className="flex items-start gap-2"><span aria-hidden="true" className="mt-1 h-3 w-3 shrink-0 rounded-sm" style={{ background: colors[i % colors.length] }} /><span className="flex-1">{row.label}</span><strong>{format(row.value, chart.unit)}</strong></li>)}
          </ul>
        </div>
      ) : (
        <div className="mt-6 space-y-5">
          {chart.series && <div className="flex flex-wrap gap-3 text-xs">{chart.series.map((label, i) => <span key={label} className="flex items-center gap-2"><span aria-hidden="true" className="h-3 w-3" style={{ background: i ? colors[3] : colors[1] }} />{label}</span>)}</div>}
          {chart.rows.map(row => <div key={row.label}>
            <p className="mb-2 text-sm font-medium">{row.label}</p>
            {[row.value, ...(row.comparison === undefined ? [] : [row.comparison])].map((value, i) => <div key={i} className="mb-2 flex items-center gap-3">
              <div aria-hidden="true" className="h-5 flex-1 overflow-hidden rounded-sm bg-[#eef3f8]"><div className="h-full" style={{ width: `${value / (chart.unit === "%" ? 100 : 7) * 100}%`, background: i ? colors[3] : colors[1] }} /></div>
              <span className="w-16 shrink-0 text-right text-xs font-bold"><span className="sr-only">{chart.series?.[i]}: </span>{format(value, chart.unit)}</span>
            </div>)}
          </div>)}
          <p className="text-right text-xs text-slate-500">{chart.unit === "%" ? "Scale: 0-100%" : "Scale: 0-7; responses rated 1-7"}</p>
        </div>
      )}
    </figure>
  );
}

export default function StudyReport({ study }: { study: CaseStudy }) {
  const visuals = studyVisuals[study.slug];
  return (
    <article className="min-w-0 overflow-hidden rounded-2xl border border-[#dce5ed] bg-white text-[#18344e] shadow-sm">
      <header className="border-b-4 border-[#1bb5a5] bg-[#f5f9fb] p-5 sm:p-10 lg:p-12">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.16em]"><span className="text-[#168e84]">Research findings report</span><span>Insights Opinion</span></div>
        <h2 className="mt-8 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{study.title}</h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">{study.overview}</p>
        {visuals && <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">{visuals.metrics.map((metric, i) => <div key={metric.label} className="rounded-lg border border-[#dce5ed] bg-white p-4 sm:p-5"><p className="text-3xl font-bold sm:text-4xl" style={{ color: colors[i] }}>{metric.value}</p><p className="mt-3 text-xs leading-5 text-slate-600">{metric.label}</p></div>)}</div>}
      </header>
      <div className="p-5 sm:p-10 lg:p-12">
        <h3 className="mb-4 text-lg font-bold">Study at a glance</h3>
        <table className="w-full border-collapse text-left text-sm"><thead className="bg-[#1b3b5d] text-white"><tr><th scope="col" className="p-3">Parameter</th><th scope="col" className="p-3">Details</th></tr></thead><tbody>{study.facts.map(fact => <tr key={fact.label} className="border-b border-[#dce5ed] odd:bg-[#f5f9fb]"><th scope="row" className="w-1/3 p-3 align-top font-semibold">{fact.label}</th><td className="p-3 leading-6">{fact.value}</td></tr>)}</tbody></table>
        {visuals && <ol aria-label="Procurement ecosystem" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{visuals.flow.map((step, i) => <li key={step} className="flex items-center gap-3 rounded-md p-4 text-sm font-semibold text-white" style={{ background: colors[i] }}><span className="opacity-60">0{i + 1}</span>{step}</li>)}</ol>}
      </div>
      {study.sections.map((section, index) => {
        const visual = visuals?.sections[section.title];
        return <section key={section.title} className="border-t border-[#dce5ed] p-5 sm:p-10 lg:p-12">
          <div className="mb-6 flex items-start gap-4"><span className="pt-1 text-sm font-bold tracking-widest text-[#168e84]">{String(index + 1).padStart(2, "0")}</span><h3 className="text-xl font-bold sm:text-2xl">{section.title}</h3></div>
          <div className="space-y-4 text-sm leading-7 sm:text-base">{section.paragraphs?.map(p => <p key={p}>{p}</p>)}{section.bullets && <ul className="list-disc space-y-2 pl-5 marker:text-[#1bb5a5]">{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}</div>
          {visual?.charts && <div className={`mt-8 grid gap-5 ${visual.charts.length > 1 ? "lg:grid-cols-2" : ""}`}>{visual.charts.map(chart => <Chart key={chart.title} chart={chart} />)}</div>}
          {visual && <aside className="mt-6 border-l-4 border-[#1bb5a5] bg-[#edf7f9] px-5 py-4 text-sm leading-7"><strong className="mr-2 text-xs tracking-wider">KEY INSIGHT</strong>{visual.insight}</aside>}
        </section>;
      })}
      <footer className="border-t border-[#dce5ed] bg-[#f5f9fb] p-5 text-xs leading-6 text-slate-600 sm:px-10"><strong>Research note: </strong>{study.analysisNote}</footer>
    </article>
  );
}
