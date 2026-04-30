import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/data/blogData";
import BlogDetail from "@/app/components/blogs/blog-detail";
import BlogForm from "@/app/components/blogs/blogs-deta";

export default async function BlogSlugPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);

    if (!blog) {
        notFound();
    }

    return (
        <section>
            <BlogDetail blog={blog} />
            <BlogForm />
        </section>
    );
}
