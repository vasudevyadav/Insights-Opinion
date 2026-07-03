import { notFound } from "next/navigation";
import ServiceChildPage from "@/app/components/services/service-child-page";
import { fetchChildServiceBySlug } from "@/app/lib/services-api";

export default async function MethodDetailPage({
  params,
}: {
  params: Promise<{ method: string }>;
}) {
  const { method } = await params;
  const result = await fetchChildServiceBySlug(method);

  if (!result) notFound();

  return (
    <ServiceChildPage
      slug={result.child.slug}
      data={result.child.content}
      parentService={result.service}
      parentContent={result.service.content}
    />
  );
}
