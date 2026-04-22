import BlogHero from "../components/blogs/blogs-hero";
import BlogList from "../components/blogs/blogs-list";
import BlogForm from "../components/blogs/blogs-deta";


export default async function Blogs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  return (
    <section>
      <BlogHero />
      <BlogList />
      <BlogForm />
    </section>
  );
}