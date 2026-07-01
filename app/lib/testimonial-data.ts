export type TextTestimonial = {
  id: number;
  type: "text";
  quote: string;
  name: string;
  role: string;
  company: string;
  personImage: string;
};

export type VideoTestimonial = {
  id: number;
  type: "video";
  title: string;
  name: string;
  role: string;
  company: string;
  poster: string;
  personImage: string;
  videoUrl?: string;
};

export type Testimonial = TextTestimonial | VideoTestimonial;

export const testimonials: Testimonial[] = [
  {
    id: 1,
    type: "text",
    quote:
      "Insights Opinion gave us a clear understanding of our customers and helped our team make confident, evidence-based decisions.",
    name: "Thomas",
    role: "Research Director",
    company: "Clifton",
    personImage: "/Testimonial-Icon.png",
  },
  {
    id: 2,
    type: "video",
    title: "How dependable fieldwork improved our research outcomes",
    name: "Sarah",
    role: "Head of Consumer Insights",
    company: "Global Consumer Brand",
    poster: "/healthcare.jpg",
    personImage: "/Testimonial-Icon.png",
    // Add a local MP4/WebM path or an embeddable YouTube/Vimeo URL here.
    videoUrl: "",
  },
  {
    id: 3,
    type: "text",
    quote:
      "The project team combined responsive communication with strong quality controls. Every market was delivered consistently and on schedule.",
    name: "Michael",
    role: "Senior Market Research Manager",
    company: "International Healthcare Group",
    personImage: "/Testimonial-Icon.png",
  },
  {
    id: 4,
    type: "video",
    title: "A client perspective on working with Insights Opinion",
    name: "Priya",
    role: "Regional Insights Lead",
    company: "Technology Services Company",
    poster: "/home-banner.png",
    personImage: "/Testimonial-Icon.png",
    // Add a local MP4/WebM path or an embeddable YouTube/Vimeo URL here.
    videoUrl: "",
  },
  {
    id: 5,
    type: "text",
    quote:
      "Their practical recommendations made the research easy to use internally and helped us align stakeholders around the next steps.",
    name: "Daniel",
    role: "Director of Strategy",
    company: "B2B Services Group",
    personImage: "/Testimonial-Icon.png",
  },
  {
    id: 6,
    type: "text",
    quote:
      "From questionnaire review to final delivery, the team remained proactive, transparent, and focused on the business question.",
    name: "Emma",
    role: "Customer Experience Lead",
    company: "Consumer Products Company",
    personImage: "/Testimonial-Icon.png",
  },
];
