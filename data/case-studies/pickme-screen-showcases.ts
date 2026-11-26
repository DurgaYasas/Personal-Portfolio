import type { ScreenShowcasePresentation } from "./types";

// Source coordinates display the original UI without the flattened annotations.
// The complete, unchanged boards remain available through each figure's link.
const previous: ScreenShowcasePresentation = {
  panels: [
    { id: "outlets", title: "Outlet results", frame: "phone", crop: { x: 284, y: 174, width: 576, height: 1144 } },
    { id: "items", title: "Item results", frame: "phone", crop: { x: 1060, y: 174, width: 574, height: 1144 } },
  ],
};

export const pickmeScreenShowcases: Record<string, ScreenShowcasePresentation> = {
  "previous-search-screens": previous,
  "outlet-centric-before": previous,
  "grouped-suggestions-before": {
    layout: "detail",
    panels: [{ id: "previous", title: "Previous suggestions", frame: "phone", crop: { x: 468, y: 201, width: 594, height: 1204 } }],
  },
  "grouped-suggestions-exploration": {
    panels: [
      { id: "wireframe", title: "Wireframe", frame: "phone", crop: { x: 100, y: 129, width: 426, height: 1002 } },
      { id: "variant-1", title: "Variant 1", frame: "phone", crop: { x: 726, y: 150, width: 444, height: 986 } },
      { id: "variant-2", title: "Variant 2", frame: "phone", crop: { x: 1388, y: 150, width: 445, height: 986 } },
    ],
  },
  "grouped-suggestions-final": {
    layout: "detail",
    panels: [{
      id: "testing", title: "Variant 3 · Finalised for testing", frame: "phone",
      crop: { x: 548, y: 242, width: 648, height: 1382 },
      annotationMasks: [
        { x: 969, y: 428, width: 227, height: 23 },
        { x: 548, y: 623, width: 23, height: 22 },
        { x: 1125, y: 717, width: 71, height: 23 },
      ],
      notes: [
        { title: "Cuisine suggestions", text: "Introduction of a new type of suggestion called Cuisine.", anchor: 0.14 },
        { title: "Recognisable at a glance", text: "Introduction of outlet logos and general dish/item placeholder images.", anchor: 0.28 },
        { title: "Three clear groups", text: "Categorising suggestions based on three types.", anchor: 0.36 },
      ],
    }],
  },
  "outlet-centric-exploration": {
    panels: [
      { id: "compact", title: "Wireframe 1", frame: "phone", crop: { x: 294, y: 104, width: 553, height: 1151 } },
      { id: "banner", title: "Wireframe 2", frame: "phone", crop: { x: 1089, y: 106, width: 535, height: 1150 } },
    ],
  },
  "result-component-first-variant": {
    panels: [
      { id: "wireframe", title: "Wireframe", frame: "component", crop: { x: 164, y: 216, width: 510, height: 426 } },
      { id: "variant-1", title: "Variant 1", frame: "component", crop: { x: 1074, y: 138, width: 770, height: 615 } },
    ],
  },
  "result-component-other-variants": {
    panels: [
      { id: "variant-2", title: "Variant 2", frame: "component", crop: { x: 61, y: 131, width: 741, height: 609 } },
      { id: "variant-3", title: "Variant 3", frame: "component", crop: { x: 1096, y: 133, width: 764, height: 588 } },
    ],
  },
  "outlet-centric-final": {
    layout: "sequence", connectorLabel: "View branches",
    panels: [
      { id: "results", title: "Search results", frame: "phone", crop: { x: 246, y: 113, width: 578, height: 1268 }, annotationMasks: [{ x: 772, y: 926, width: 52, height: 24, color: "#e6f2fc" }] },
      { id: "branches", title: "Results from three branches", frame: "phone", crop: { x: 1098, y: 109, width: 576, height: 1274 } },
    ],
  },
  "outlet-centric-component": {
    layout: "detail",
    panels: [{
      id: "variant-4", title: "Variant 4 · Finalised for testing", frame: "component",
      crop: { x: 170, y: 132, width: 946, height: 948 },
      notes: [
        { title: "A familiar visual transition", text: "We considered the importance to have a smooth transform from the existing component to the redesigned one based on the visual appearance." },
        { title: "Relevant dishes first", text: "Dishes/Items are shown based on popularity and Order history." },
      ],
    }],
  },
  "explore-all-items": {
    layout: "detail",
    panels: [{
      id: "explore", title: "Explore all items", frame: "component",
      crop: { x: 239, y: 160, width: 890, height: 289 },
      annotationMasks: [{ x: 1096, y: 250, width: 33, height: 24, color: "#f4f6f8" }],
      notes: [{ title: "More to discover", text: 'If the results are more than 4, a CTA will be shown as “Explore all items…”' }],
    }],
  },
  "view-more-branches": {
    layout: "detail",
    panels: [{
      id: "closest", title: "Closest branch first", frame: "component",
      crop: { x: 229, y: 141, width: 784, height: 864 },
      annotationMasks: [{ x: 842, y: 953, width: 171, height: 26, color: "#f5f8ff" }],
      notes: [{ title: "Other branches, one action away", text: "Showing the closest outlet for the user based on the results and categorise the rest of the branches with a CTA.", anchor: 0.95 }],
    }],
  },
  "prominent-search-bar-final": {
    panels: [
      { id: "previous", title: "Previous", frame: "phone", crop: { x: 259, y: 109, width: 532, height: 1145 } },
      { id: "revamp", title: "Revamp", frame: "phone", crop: { x: 1161, y: 109, width: 501, height: 1145 } },
    ],
  },
  "result-component-refinements": {
    panels: [
      { id: "compact", title: "Compact outlet header", frame: "component", crop: { x: 153, y: 179, width: 502, height: 387 } },
      { id: "banner", title: "Outlet banner", frame: "component", crop: { x: 933, y: 86, width: 505, height: 551 }, annotationMasks: [{ x: 1418, y: 273, width: 20, height: 24 }], notes: [{ title: "Continue into the outlet", text: "Navigating to outlet will show all the relevant dishes inside the outlet." }] },
    ],
  },
  "result-variants-after-testing": {
    panels: [
      { id: "outlet-cuisine", title: "Outlet & cuisine search", frame: "component", crop: { x: 205, y: 102, width: 598, height: 691 } },
      { id: "dish", title: "Dish search", frame: "component", crop: { x: 1120, y: 289, width: 598, height: 500 } },
    ],
  },
  "search-results-after-testing": {
    panels: [
      { id: "outlet", title: "Outlet search", frame: "phone", crop: { x: 78, y: 129, width: 434, height: 930 } },
      { id: "cuisine", title: "Cuisine search", frame: "phone", crop: { x: 752, y: 127, width: 433, height: 930 } },
      { id: "dish", title: "Dish search", frame: "phone", crop: { x: 1406, y: 127, width: 434, height: 930 } },
    ],
  },
  "search-flow-after-testing": {
    layout: "branch", connectorLabel: "Choose a suggestion",
    panels: [
      { id: "suggestions", title: "Search suggestions", frame: "phone", crop: { x: 123, y: 344, width: 296, height: 678 }, annotationMasks: [{ x: 410, y: 402, width: 9, height: 24 }, { x: 410, y: 532, width: 9, height: 24 }, { x: 410, y: 587, width: 9, height: 23 }] },
      { id: "cuisine", title: "Cuisine search", frame: "phone", crop: { x: 620, y: 254, width: 237, height: 532 }, notes: [{ title: "Explore branches", text: "Branches CTA will be shown for the cuisine and dish search." }] },
      { id: "dish", title: "Dish search", frame: "phone", crop: { x: 937, y: 254, width: 235, height: 526 }, notes: [{ title: "Explore branches", text: "Branches CTA will be shown for the cuisine and dish search." }] },
      { id: "outlet", title: "Outlet search", frame: "phone", crop: { x: 1273, y: 452, width: 307, height: 684 }, notes: [{ title: "All matching branches", text: "In an outlet search, all branches needs to be specifically shown to select while making the most closest one on top." }] },
    ],
  },
};
