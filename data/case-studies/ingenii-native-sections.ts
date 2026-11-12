import type {
  CompetitorAnalysisBlock,
  DesignSystemBlock,
  PersonaCollectionBlock,
} from "./types";

// The owner selected the new screenshot content over the older PDF content.
// These are authored case-study findings and personas, not live product data.
// Original competitor boards are used only as clipped logo artwork; all card
// headings, strengths, weaknesses, persona details and design tokens are HTML.
export const ingeniiCompetitors: CompetitorAnalysisBlock = {
  type: "competitor-analysis",
  id: "ingenii-competitors",
  items: [
    {
      id: "ingenii-competitor-analysis-3",
      name: "Fleetio",
      logo: {
        src: "/images/ingenii-fleet-tracker/competitor-analysis-3.png",
        alt: "Fleetio",
        crop: "board-header",
        width: 2880,
        height: 2880,
      },
      strengths: ["Contains all vehicles with indicators and status."],
      weaknesses: ["No vehicle attributes or tracking history shown"],
    },
    {
      id: "ingenii-competitor-analysis-1",
      name: "Motive",
      logo: {
        src: "/images/ingenii-fleet-tracker/competitor-analysis-1.png",
        alt: "Motive",
        crop: "board-header",
        width: 2880,
        height: 2880,
      },
      strengths: [
        "Contains all tracking logs covering all incidents and clear vehicle indicators with status.",
        "Provides location and media of vehicles",
      ],
      weaknesses: [
        "No vehicle list shown to select from the map.",
        "No attributes shown like fuel level, battery level, speed etc",
      ],
    },
    {
      id: "ingenii-competitor-analysis-2",
      name: "Verizon Connect",
      logo: {
        src: "/images/ingenii-fleet-tracker/competitor-analysis-2.png",
        alt: "Verizon Connect",
        crop: "board-header",
        width: 2880,
        height: 2880,
      },
      strengths: [
        "Geofencing, Events/notification and fuel monitoring features are present",
      ],
      weaknesses: [
        "Non vehicle assets tracking is not available.",
        "Other attributes such as Door status, Battery level, Street view are not available",
      ],
    },
  ],
};

export const ingeniiPersonas: PersonaCollectionBlock = {
  type: "personas",
  id: "ingenii-personas",
  items: [
    {
      id: "nihal-perera",
      name: "Nihal Perera",
      role: "Fleet Operations Manager",
      age: "42",
      summary: "Manages 60+ vehicles across 3 depots",
      goals: [
        "Real-time visibility of entire fleet at a glance",
        "Instant alert triage without deep navigation",
        "Generate KPI reports for management in seconds",
      ],
      painPoints: [
        "Dashboard overloaded — can't identify priority alerts quickly",
        "Has to train every new staff member for 2+ weeks on the platform",
        "Vehicle status icons are ambiguous and inconsistent",
      ],
    },
    {
      id: "dilini-fernando",
      name: "Dilini Fernando",
      role: "Route Dispatcher",
      age: "31",
      summary: "Coordinates 20+ drivers daily from HQ",
      goals: [
        "Assign and modify routes without leaving the map view",
        "Communicate schedule changes to drivers in real time",
        "Quickly locate the nearest available vehicle for urgent pickups",
      ],
      painPoints: [
        "Route assignment requires switching between 3 different screens",
        "No mobile-optimised view — uses desktop from her phone",
        "Alert notifications interrupt her workflow with no snooze or priority filter",
      ],
    },
  ],
};

export const ingeniiDesignSystem: DesignSystemBlock = {
  type: "design-system",
  id: "design-system",
  colors: [
    { name: "Background", value: "#0D1117" },
    { name: "Surface", value: "#161B22" },
    { name: "Primary Accent", value: "#1A76CA" },
    { name: "Secondary Accent", value: "#7C5CFC" },
    { name: "Alert / Danger", value: "#F87171" },
    { name: "Warning", value: "#FBBF24" },
    { name: "Foreground", value: "#F0F6FC" },
    { name: "Muted Text", value: "#8B949E" },
  ],
  typography: {
    name: "Inter",
    fontFamily: "Inter Variable",
    glyphs: "Åa",
    samples: [
      { role: "Display", text: "Fleet Overview" },
      { role: "Heading", text: "Active Vehicles" },
      { role: "Body", text: "Vehicle ID · Plate No." },
      { role: "Caption", text: "Last updated 2 mins ago" },
      { role: "Label", text: "ONLINE · IDLE · ALERT" },
    ],
  },
};
