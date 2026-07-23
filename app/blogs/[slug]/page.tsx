import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogBySlug, getRelatedBlogs } from "@/data/blogData";
import BlogDetail from "@/app/components/blogs/blog-detail";
import BlogForm from "@/app/components/blogs/blogs-deta";
import { buildApiMetadata } from "@/lib/api-metadata";
import { getSheetSeo } from "@/lib/sheet-seo";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  const path = `/blogs/${slug}`;
  const sheetSeo = getSheetSeo(path);

  return blog
    ? buildApiMetadata(
        sheetSeo
          ? {
              ...blog.seo,
              metaTitle: sheetSeo.title,
              metaDescription: sheetSeo.description,
            }
          : blog.seo,
        {
          title: `${blog.title} | Insights Opinion`,
          description: blog.description,
          image: blog.image,
        },
        path
      )
    : {};
}

export default async function BlogSlugPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = await getRelatedBlogs(blog.id, 6);

  return (
    <section>
      <BlogDetail blog={blog} relatedBlogs={relatedBlogs} />
      <BlogForm />
    </section>
  );
}
