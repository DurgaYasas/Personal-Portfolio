import type { UserFlowBlock, UserJourneyBlock } from "./types";

// Transcribed from the original journey and flow diagrams extracted from the
// supplied fleet case-study PDF. Preserve wording, including source grammar.
// Reaction values describe the source face pictograms, not measured scores.
export const ingeniiTrackingJourney: UserJourneyBlock = {
  type: "user-journey",
  id: "ingenii-user-journey-attributes",
  caption: "Entity tracking journey",
  phases: [
    {
      id: "select-vehicle",
      title: "Select vehicle",
      activity: "Select vehicle from the vehicle panel",
      thought: "Entities are lined up and can search of needed.",
      reaction: "smile",
      opportunity:
        "Could use a filter for entity status. I needed to find entities which are on the move and parked.",
    },
    {
      id: "view-attributes",
      title: "View attributes",
      activity:
        "After selecting a vehicle, browse through the attributes from the attributes panel.",
      thought:
        "Necessary attributes are there, but the text size and presentation is less helpful.",
      reaction: "neutral",
      opportunity:
        "The fonts and the indications should be enhanced for better clarity.",
    },
    {
      id: "previous-records",
      title: "View & edit previous records of attributes",
      activity:
        "Mouseover the attribute and click the appearing dropdown to view the previous records",
      thought:
        "Mouseover and found the dropdown. I can find the edit from mouseover too.",
      reaction: "smile",
      opportunity: "Edit fields could improve usability.",
    },
    {
      id: "tracking-records",
      title: "Select date range and view tracking record of an entity",
      activity:
        "Close the vehicle attribute panel and click tracking records cta and select the required vehicle and time frame",
      thought:
        "Why do i have to go back and click a separate button to view this? It is the a whole workaround.",
      reaction: "frown",
      opportunity:
        "Instead of clicking a different button and come through a separate flow to view the tracks, the tracking records could be made to obtained from the same flow of viewing entity",
    },
    {
      id: "tracking-segments",
      title: "View each segment of tracking journey based on time",
      activity:
        "Select the required segment of the tracking journey based on time range.",
      thought:
        "I clicked the segments, but it was difficult with the UI components to identify the information such as duration and distance covered. Also took me a while to find where to click to view the whole journey",
      reaction: "surprised",
      opportunity:
        "There should be a whole redesign of ths section. Proper segmentation is required for tracking. Remove unnecessary elements.",
    },
    {
      id: "playback",
      title: "View playback of the recorded journey",
      activity:
        "When the segment is selected the track record of the entity is displayed with the playback controls.",
      thought:
        "Its ok with playback of the tracking journey. The attribute graph has a very poor ui. Cannot distinguish data at all.",
      reaction: "surprised",
      opportunity: "Need to have a clean graph with elements.",
    },
  ],
};

export const ingeniiEventsJourney: UserJourneyBlock = {
  type: "user-journey",
  id: "ingenii-user-journey-events",
  caption: "Event details journey",
  phases: [
    {
      id: "select-vehicle",
      title: "Select vehicle",
      activity: "Select vehicle from the vehicle panel",
      thought: "Entities are lined up and can search of needed.",
      reaction: "smile",
      opportunity:
        "Could use a filter for entity status. I needed to find entities which are on the move and parked.",
    },
    {
      id: "load-events",
      title: "Select dates and load events of an entity",
      activity:
        "Close the vehicle attribute panel and click events cta and select the required vehicle and time frame from the modal.",
      thought:
        "I have to go back again to the same panel where tracking CTA exists",
      reaction: "neutral",
      opportunity:
        "The fonts and the indications should be enhanced for better clarity.",
    },
    {
      id: "view-event",
      title: "View each event",
      activity: "Select an event notification from the event list",
      thought:
        "Can select the event from the list categorized under date. But it is less usable as it can be selected only from a checkbox.",
      reaction: "neutral",
      opportunity:
        "The entire row can be given to select instead from a checkbox.",
    },
    {
      id: "event-details",
      title: "View event details and event location",
      activity:
        "When the event notification is selected the event location is shown as a location tag in the map. The event details are shown alongside the notification segment.",
      thought:
        "Important info such as geo location and description are provided but not aligned and segmented. Also cannot distinguish the event types.",
      reaction: "frown",
      opportunity:
        "Its better to align the info in an organized way with different fonts and colors. The info are too cluttered. Also better to categorize each event type icon wise.",
    },
  ],
};

// Coordinates use a 1000 × 950 layout; every title box is 64 units high.
// Edge points preserve the source's branches and shared date-selection route.
// The same nodes and edges become a readable linked outline on narrow screens.
export const ingeniiUserFlow: UserFlowBlock = {
  type: "user-flow",
  id: "ingenii-user-flow",
  caption: "Fleet tracking flow",
  nodes: [
    { id: "start", title: "Start", kind: "start", x: 90, y: 20, width: 130 },
    {
      id: "tracking-page",
      title: "Enter tracking page",
      x: 50,
      y: 150,
      width: 210,
    },
    {
      id: "geofence",
      title: "View Geo fence",
      kind: "highlight",
      details: ["Select and view", "Create", "Edit/Delete"],
      x: 320,
      y: 60,
      width: 200,
    },
    {
      id: "select-entity",
      title: "Select an entity",
      details: ["Select from panel", "Search", "Filter"],
      x: 320,
      y: 240,
      width: 200,
    },
    {
      id: "attributes",
      title: "View attributes",
      details: ["Edit"],
      x: 590,
      y: 240,
      width: 175,
    },
    {
      id: "tracking-history",
      title: "Tracking history",
      x: 805,
      y: 150,
      width: 170,
    },
    { id: "events", title: "Events", x: 805, y: 350, width: 170 },
    {
      id: "date-range",
      title: "Select Date range",
      x: 50,
      y: 550,
      width: 200,
    },
    {
      id: "view-tracking-history",
      title: "View Tracking history",
      details: ["Select from panel", "Search", "Filter"],
      x: 320,
      y: 490,
      width: 200,
    },
    {
      id: "tracking-segment",
      title: "View tracking segment",
      kind: "highlight",
      details: ["View stats in graph", "View tracking playback"],
      x: 590,
      y: 490,
      width: 210,
    },
    {
      id: "view-event-history",
      title: "View Event history",
      details: ["Select from list", "View single event"],
      x: 320,
      y: 750,
      width: 200,
    },
  ],
  edges: [
    { from: "start", to: "tracking-page", points: [[155, 84], [155, 150]] },
    {
      from: "tracking-page", to: "geofence",
      points: [[260, 182], [290, 182], [290, 92], [320, 92]],
    },
    {
      from: "tracking-page", to: "select-entity",
      points: [[260, 182], [290, 182], [290, 272], [320, 272]],
    },
    { from: "select-entity", to: "attributes", points: [[520, 272], [590, 272]] },
    {
      from: "attributes", to: "tracking-history",
      points: [[765, 272], [785, 272], [785, 182], [805, 182]],
    },
    {
      from: "attributes", to: "events",
      points: [[765, 272], [785, 272], [785, 382], [805, 382]],
    },
    {
      from: "tracking-history", to: "date-range",
      points: [[975, 182], [990, 182], [990, 450], [150, 450], [150, 550]],
    },
    {
      from: "events", to: "date-range",
      points: [[890, 414], [890, 450], [150, 450], [150, 550]],
    },
    {
      from: "date-range", to: "view-tracking-history",
      points: [[250, 582], [285, 582], [285, 522], [320, 522]],
    },
    {
      from: "date-range", to: "view-event-history",
      points: [[250, 582], [285, 582], [285, 782], [320, 782]],
    },
    {
      from: "view-tracking-history", to: "tracking-segment",
      points: [[520, 522], [590, 522]],
    },
  ],
};
