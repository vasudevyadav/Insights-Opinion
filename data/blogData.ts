export interface BlogSection {
  id: string;
  heading: string;
  content?: string;
  bullets?: string[];
  isImage?: boolean;
  imageUrl?: string;
  imageLabel?: string;
  subItems?: { label: string; text: string }[];
}

export interface Blog {
  id: number;
  slug: string;
  category: string;
  tags: string[];
  type: string;
  date: string;
  time: string;
  title: string;
  description: string;
  image: string;
  intro?: string;
  sections?: BlogSection[];
  htmlContent?: string;
}

interface ApiPost {
  id: number;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string;
  thumbnail: string;
  date: string;
  author: string;
}

const API_URL =
  "https://reinventmedia.in/insightOpinion/wp-json/custom/v1/posts/";

function createSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function getBlogs(): Promise<Blog[]> {
  const res = await fetch(API_URL, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const json = await res.json();

  return json.data.map((post: ApiPost) => ({
    id: post.id,
    slug: createSlug(post.title),
    category: "Blog",
    tags: [],
    type: post.author || "Admin",
    date: formatDate(post.date),
    time: "",
    title: post.title,
    description: stripHtml(post.excerpt),
    image: post.thumbnail,
    intro: stripHtml(post.excerpt),
    htmlContent: post.content || post.slug,
  }));
}

export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
  const blogs = await getBlogs();
  return blogs.find((blog) => blog.slug === slug);
}

export async function getRelatedBlogs(
  currentId: number,
  limit = 6
): Promise<Blog[]> {
  const blogs = await getBlogs();
  return blogs.filter((blog) => blog.id !== currentId).slice(0, limit);
}