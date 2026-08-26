export type SharedTestimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: 5;
  personImage: string;
};

export const sharedTestimonials: SharedTestimonial[] = [
  {
    id: 1,
    name: "Client name",
    role: "Title, Company",
    quote: "Testimonial quote pending client approval.",
    rating: 5,
    personImage: "/Testimonial-Icon.png",
  },
  {
    id: 2,
    name: "Client name",
    role: "Title, Company",
    quote: "Testimonial quote pending client approval.",
    rating: 5,
    personImage: "/Testimonial-Icon.png",
  },
  {
    id: 3,
    name: "Client name",
    role: "Title, Company",
    quote: "Testimonial quote pending client approval.",
    rating: 5,
    personImage: "/Testimonial-Icon.png",
  },
];

export const sliderTestimonials = sharedTestimonials.map((testimonial) => ({
  ...testimonial,
  company: testimonial.name,
  author: testimonial.role,
}));
