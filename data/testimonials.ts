export type SharedTestimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: 5;
  personImage: string;
};

// Approved testimonial content is pending. Keep exactly three neutral slots and
// do not attach customer identities, avatars, or story links without consent.
export const sharedTestimonials: SharedTestimonial[] = [1, 2, 3].map((id) => ({
  id,
  name: "Customer name placeholder",
  role: "Designation / company placeholder",
  quote: "Quote placeholder — approved testimonial text pending client supply.",
  rating: 5,
  personImage: "",
}));

export const sliderTestimonials = sharedTestimonials.map((testimonial) => ({
  ...testimonial,
  link: "",
  company: testimonial.name,
  author: testimonial.role,
  logo: "",
}));
