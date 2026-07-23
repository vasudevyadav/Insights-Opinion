import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyDetail from "@/app/components/case-studies/detail/case-study-detail";
import {
  fetchCaseStudies,
  fetchCaseStudy,
  getRelatedCaseStudies,
} from "@/app/lib/case-studies-api";
import { buildApiMetadata } from "@/lib/api-metadata";
import { getSheetSeo } from "@/lib/sheet-seo";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await fetchCaseStudy(slug);
  const path = `/case-studies/${slug}`;
  const sheetSeo = getSheetSeo(path);

  return caseStudy
    ? buildApiMetadata(
        sheetSeo
          ? {
              ...caseStudy.seo,
              metaTitle: sheetSeo.title,
              metaDescription: sheetSeo.description,
            }
          : caseStudy.seo,
        {
          title: `${caseStudy.title} | Insights Opinion`,
          description: caseStudy.description,
          image: caseStudy.image,
        },
        path
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
