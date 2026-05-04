import { notFound } from "next/navigation";
import { getBlogBySlug, getRelatedBlogs } from "@/data/blogData";
import BlogDetail from "@/app/components/blogs/blog-detail";
import BlogForm from "@/app/components/blogs/blogs-deta";

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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