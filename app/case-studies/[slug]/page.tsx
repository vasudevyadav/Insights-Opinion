import { notFound } from "next/navigation";
import CaseStudyDetail from "@/app/components/case-studies/detail/case-study-detail";
import {
  getCaseStudyBySlug,
  getRelatedCaseStudies,
} from "@/app/lib/case-studies-data";

export default async function CaseStudySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <CaseStudyDetail
      caseStudy={caseStudy}
      relatedCaseStudies={getRelatedCaseStudies(slug, 2)}
    />
  );
}
