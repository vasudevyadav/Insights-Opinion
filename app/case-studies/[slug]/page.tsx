import { notFound } from "next/navigation";
import CaseStudyDetail from "@/app/components/case-studies/detail/case-study-detail";
import {
  fetchCaseStudies,
  fetchCaseStudy,
  getRelatedCaseStudies,
} from "@/app/lib/case-studies-api";

export default async function CaseStudySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [caseStudy, caseStudies] = await Promise.all([
    fetchCaseStudy(slug),
    fetchCaseStudies(),
  ]);

  if (!caseStudy) {
    notFound();
  }

  return (
    <CaseStudyDetail
      caseStudy={caseStudy}
      relatedCaseStudies={getRelatedCaseStudies(caseStudies, slug, 2)}
    />
  );
}
