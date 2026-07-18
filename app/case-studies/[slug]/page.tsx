import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyDetail from "@/app/components/case-studies/detail/case-study-detail";
import {
  fetchCaseStudies,
  fetchCaseStudy,
  getRelatedCaseStudies,
} from "@/app/lib/case-studies-api";
import { buildApiMetadata } from "@/lib/api-metadata";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await fetchCaseStudy(slug);

  return caseStudy
    ? buildApiMetadata(
        caseStudy.seo,
        {
          title: `${caseStudy.title} | Insights Opinion`,
          description: caseStudy.description,
          image: caseStudy.image,
        },
        `/case-studies/${slug}`
      )
    : {};
}

export default async function CaseStudySlugPage({
  params,
}: CaseStudyPageProps) {
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
      relatedCaseStudies={getRelatedCaseStudies(caseStudies, slug, 3)}
    />
  );
}
