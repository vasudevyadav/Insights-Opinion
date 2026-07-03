import type { Metadata } from "next";
import { getStaticMetadata } from "@/lib/static-seo";
import BlogHero from "../components/blogs/blogs-hero";
import BlogList from "../components/blogs/blogs-list";
import BlogForm from "../components/blogs/blogs-deta";
import { getBlogs } from "@/data/blogData";

export const metadata: Metadata = getStaticMetadata("blogs");

export default async function Blogs() {
  const blogs = await getBlogs();

  return (
    <section>
      <BlogHero />
      <BlogList blogs={blogs} />
      <BlogForm />
    </section>
  );
}