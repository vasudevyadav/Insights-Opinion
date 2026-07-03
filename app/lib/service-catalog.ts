export type ServiceCatalogItem = {
  title: string;
  slug: string;
  image: string;
};

export type ServiceCategory = {
  title: string;
  key: "quantitative" | "qualitative" | "support";
  href: string;
  services: ServiceCatalogItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Quantitative Research",
    key: "quantitative",
    href: "/quantitative-research",
    services: [
      {
        title: "Global Panel",
        slug: "global-panel",
        image: "/quality/cati-online.png",
      },
      {
        title: "CATI",
        slug: "cati",
        image: "/quality/cati-telephone.png",
      },
      {
        title: "CAPI",
        slug: "capi",
        image: "/quality/cati-computer.png",
      },
      {
        title: "CLT",
        slug: "clt",
        image: "/quality/cati-location.png",
      },
    ],
  },
  {
    title: "Qualitative Research",
    key: "qualitative",
    href: "/qualitative-research",
    services: [
      {
        title: "Focus Group Discussions",
        slug: "focus-group-discussions",
        image: "/core-slide.png",
      },
      {
        title: "In-Depth Reviews",
        slug: "in-depth-reviews",
        image: "/In-Depth-Interviews.jpg",
      },
      {
        title: "In-Home Usage Testings",
        slug: "in-home-usage-testings",
        image: "/In-Home-Usage-Testings.jpg",
      },
      {
        title: "Mystery Shopping",
        slug: "mystery-shopping",
        image: "/Mystery-Shopping.jpg",
      },
    ],
  },
  {
    title: "Support Services",
    key: "support",
    href: "/support-services",
    services: [
      {
        title: "Survey Programming",
        slug: "survey-programming",
        image: "/Survey-Programming.jpg",
      },
      {
        title: "Translation",
        slug: "translation",
        image: "/Translation.jpg",
      },
      {
        title: "Data Insights",
        slug: "data-insights",
        image: "/Data-Insights.jpg",
      },
    ],
  },
];

export const serviceDetailPath = (slug: string) =>
  `/quantitative-research/methods/${slug}`;

export type ServiceChild = ServiceCatalogItem & {
  id: string;
  href: string;
};

export type MainService = {
  id: string;
  title: string;
  slug: ServiceCategory["key"];
  href: string;
  children: ServiceChild[];
};

export function getServices(): MainService[] {
  return serviceCategories.map((category) => ({
    id: `service-${category.key}`,
    title: category.title,
    slug: category.key,
    href: category.href,
    children: category.services.map((service) => ({
      id: `${category.key}-${service.slug}`,
      ...service,
      href: serviceDetailPath(service.slug),
    })),
  }));
}
