export type ExperienceProject = {
  id: string;
  name: string;
  brand: string;
  description: string;
  href?: string;
  logo?: { src: string; alt: string };
};

export type ExperienceCountry = {
  id: string;
  name: string;
  shortName: string;
  iso: string;
  longitude: number;
  latitude: number;
  labelPosition: "north" | "southWest" | "southEast";
  projects: ExperienceProject[];
};

// Country/project assignments use supplied career and case-study content only.
// Singapore and USA await confirmation. Original brand artwork can be added via logo.
export const experienceCountries: ExperienceCountry[] = [
  {
    id: "sri-lanka",
    name: "Sri Lanka",
    shortName: "Sri Lanka",
    iso: "LKA",
    longitude: 80.7718,
    latitude: 7.8731,
    labelPosition: "southWest",
    projects: [
      {
        id: "pickme-search",
        name: "PickMe Search Revamp",
        brand: "PickMe",
        description:
          "Reimagining search & discovery for Sri Lanka's leading food and market delivery app.",
        href: "/work/pickme-search-revamp",
      },
    ],
  },
  {
    id: "singapore",
    name: "Singapore",
    shortName: "Singapore",
    iso: "SGP",
    longitude: 103.8198,
    latitude: 1.3521,
    labelPosition: "southEast",
    projects: [],
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    shortName: "UAE",
    iso: "ARE",
    longitude: 53.8478,
    latitude: 23.4241,
    labelPosition: "north",
    projects: [
      {
        id: "du-mobile",
        name: "du Mobile",
        brand: "du",
        description:
          "Mobile and web application design for the UAE's telecom operator du Mobile, through Arimac.",
      },
    ],
  },
  {
    id: "usa",
    name: "United States",
    shortName: "USA",
    iso: "USA",
    longitude: -98.5795,
    latitude: 39.8283,
    labelPosition: "north",
    projects: [],
  },
];
