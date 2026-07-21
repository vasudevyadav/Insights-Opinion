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
    name: "Samuel",
    role: "VP, Edgbaston",
    quote: "Our manufacturing process improvements wouldn’t have been possible without the exceptional research we've received. Their analysis revealed inefficiencies in our production line, leading to cost-saving adjustments and increased productivity. The team's expertise and efficiency in data collection have provided us with insights that have truly transformed our operations. We credit these positive changes to the diligent work of Insights Opinion.",
    rating: 5,
    personImage: "/Testimonial-Icon.png",
  },
  {
    id: 2,
    name: "Mia",
    role: "Operations Manager, Leith, Edinburgh",
    quote: "Insights Opinion provided invaluable insights into the automotive market. Their detailed surveys and focus groups helped us understand our customer preferences better. Their team is undoubtedly professional, knowledgeable, and always meets our needs.",
    rating: 5,
    personImage: "/Testimonial-Icon.png",
  },
  {
    id: 3,
    name: "Thomas",
    role: "Director, Clifton",
    quote: "Their detailed surveys gave us a clear understanding of our guests' preferences, leading to more personalized services and higher customer satisfaction. We were able to adjust our offerings based on feedback, resulting in a significant increase in repeat bookings. Insights Opinion’s commitment to quality and accuracy has been helpful in refining our hospitality services, and we highly recommend them for any research needs.",
    rating: 5,
    personImage: "/Testimonial-Icon.png",
  },
  {
    id: 4,
    name: "Daniel",
    role: "VP - South Beach, Miami",
    quote: "Their team's expertise and dedication to quality data collection is truly unmatched. We highly recommend them for education sector research. They helped us conduct comprehensive surveys across educational institutions.",
    rating: 5,
    personImage: "/Testimonial-Icon.png",
  },
  {
    id: 5,
    name: "Samuel",
    role: "Marketing Manager - Didsbury, Manchester",
    quote: "Our financial market analysis was handled superbly by Insights Opinion and they delivered top-notch results for us. Their in-depth knowledge of the sector and meticulous approach ensured accurate data and actionable insights. We couldn't be more satisfied with their services.",
    rating: 5,
    personImage: "/Testimonial-Icon.png",
  },
  {
    id: 6,
    name: "James",
    role: "Operations Manager - Wicker Park",
    quote: "Insights Opinion provided exceptional support in our retail market research. Their thorough understanding of consumer behavior and data collection made a real difference in our strategy. Their professionalism and attention to detail are unmatched.",
    rating: 5,
    personImage: "/Testimonial-Icon.png",
  },
  {
    id: 7,
    name: "William",
    role: "Senior Manager - Capitol Hill",
    quote: "Working with Insights Opinion on our tech projects was a breeze. Their team's expertise in online and offline research methodologies helped us gather crucial data efficiently. They are reliable and deliver great results every time.",
    rating: 5,
    personImage: "/Testimonial-Icon.png",
  },
  {
    id: 8,
    name: "Henry",
    role: "Director - Beverly Hills",
    quote: "Working with Insights Opinion has truly transformed our real estate research efforts. Their targeted insights helped us identify a key market trend, leading us to a successful property launch. Their ability to provide actionable data has been a game-changer. Their team is not only reliable and professional but also consistently delivers excellent results that drive our success.",
    rating: 5,
    personImage: "/Testimonial-Icon.png",
  },
  {
    id: 9,
    name: "Jack",
    role: "VP - Brooklyn",
    quote: "Insights Opinion has been instrumental in conducting patient surveys for us. Their healthcare panel is extensive, and their recruitment process is seamless. I highly recommend their services for any healthcare research needs.",
    rating: 5,
    personImage: "/Testimonial-Icon.png",
  },
];

export const sliderTestimonials = sharedTestimonials.map((testimonial) => ({
  ...testimonial,
  link: "Read Full Customer Story",
  company: testimonial.name,
  author: testimonial.role,
  logo: testimonial.personImage,
}));
