import type { SourceCaseStudy } from "./types";

// Transcribed from the supplied 29-page PDF. Preserve the original wording.
// Original embedded design images are extracted once, including full images split by print pagination.
// Browser print headers, navigation, page counters and the copyright footer are excluded.
export const ingeniiFleetTracker: SourceCaseStudy = {
  title: "Revamping Ingenii Fleet Tracker",
  subtitle: "Fleet management and maintenance platform",
  tags: ["Fleet Tracking"],
  heroImage: {
    src: "/images/ingenii-fleet-tracker/cover.png",
    alt: "Overview of the redesigned Ingenii fleet tracking interface",
    width: 1920,
    height: 1048,
    background: "white",
  },
  source: {
    fileName: "- Durga Yasas.pdf",
    pages: 29,
    url: "https://durgayasas.carbonmade.com/ingenii-fleet-tracker-revamp",
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        {
          type: "paragraph",
          text: "Many companies who providing fleet management services do require a strong online platform which provides realtime updates and specifications of the vehicles they manage, with better usability and clarity. It is also required the admins of the fleet to retrieve accurate information organized and well presented whenever they require.",
        },
      ],
    },
    {
      id: "the-existing-design",
      title: "The Existing Design…",
      blocks: [
        {
          type: "figure",
          id: "ingenii-existing-design",
          image: {
            src: "/images/ingenii-fleet-tracker/existing-design.png",
            alt: "Original Ingenii fleet tracking platform before the redesign",
            width: 879,
            height: 464,
            background: "white",
          },
        },
      ],
    },
    {
      id: "projecting-solution",
      title: "Projecting Solution",
      blocks: [
        {
          type: "paragraph",
          text: "The existing platform has several issues with the flow and also with visual elements.",
        },
        {
          type: "paragraph",
          text: "One of the major issues in track was the adverse usability in obtaining and viewing tracking information.",
        },
      ],
    },
    {
      id: "design-process",
      title: "Design Process",
      blocks: [
        {
          type: "figure",
          id: "ingenii-design-process",
          image: {
            src: "/images/ingenii-fleet-tracker/design-process.png",
            alt: "Design process: Empathize, Define, Ideate, Prototype, Test",
            width: 1920,
            height: 620,
            background: "white",
          },
        },
      ],
    },
    {
      id: "competitor-analysis",
      title: "Competitor Analysis",
      blocks: [
        {
          type: "figure",
          id: "ingenii-competitor-analysis-1",
          image: {
            src: "/images/ingenii-fleet-tracker/competitor-analysis-1.png",
            alt: "First competitor analysis comparison of tracking functionality and usability",
            width: 2880,
            height: 2880,
            background: "white",
          },
        },
        {
          type: "figure",
          id: "ingenii-competitor-analysis-2",
          image: {
            src: "/images/ingenii-fleet-tracker/competitor-analysis-2.png",
            alt: "Second competitor analysis comparison of tracking functionality and usability",
            width: 2880,
            height: 2880,
            background: "white",
          },
        },
        {
          type: "figure",
          id: "ingenii-competitor-analysis-3",
          image: {
            src: "/images/ingenii-fleet-tracker/competitor-analysis-3.png",
            alt: "Third competitor analysis comparison of tracking functionality and usability",
            width: 2880,
            height: 2880,
            background: "white",
          },
        },
      ],
    },
    {
      id: "user-interviews",
      title: "User Interviews",
      blocks: [
        {
          type: "paragraph",
          text: "I interviewed 6 users who are currently engaged in tracking and fleet maintenance, including novice to expert level managers. Below are the questions with general answers received. The existing platform has several issues with the flow and also with visual elements.",
        },
        {
          type: "subsection",
          id: "interview-question-1",
          title:
            "What are the main goals you hope to achieve by using a real-time fleet tracking web app?",
          number: "1",
          blocks: [
            {
              type: "paragraph",
              text: '“My main goal is to ensure that all vehicles are being used efficiently and effectively and also reduce costs and improve productivity. I want to be able to see where each vehicle is at all times, so that I can make informed decisions about routing and dispatching."',
            },
          ],
        },
        {
          type: "subsection",
          id: "interview-question-2",
          title:
            "What metrics or KPIs do you track to measure the success of your fleet operations?",
          number: "2",
          blocks: [
            {
              type: "paragraph",
              text: '“My main goal is to ensure that all vehicles are being used efficiently and effectively and also reduce costs and improve productivity. I want to be able to see where each vehicle is at all times, so that I can make informed decisions about routing and dispatching."',
            },
          ],
        },
        {
          type: "subsection",
          id: "interview-question-3",
          title: "What is the average fleet and equipment capacity you manage?",
          number: "3",
          blocks: [
            {
              type: "paragraph",
              text: "“Vehicles usually ranges from 10 – 30. Have a possibility of expanding over 50. Equipments and drivers ranges from 10-20 and 20-50 respectively”",
            },
          ],
        },
        {
          type: "subsection",
          id: "interview-question-4",
          title:
            "How do you currently use the current fleet tracking web app, and what features do you find most useful or frustrating?",
          number: "4",
          blocks: [
            {
              type: "paragraph",
              text: "“The current app is useful for tracking vehicles and their progress, but it’s not very customisable. Also, it’s not very user-friendly and the data isn’t always accurate”",
            },
          ],
        },
        {
          type: "subsection",
          id: "interview-question-5",
          title:
            "Can you tell me about a specific challenge or problem that you faced while managing your fleet?",
          number: "5",
          blocks: [
            {
              type: "paragraph",
              text: "“Main problem was with viewing tracking history because of the poor UI experience and usability. Also the same usability and UI inconsistencies present in Events”",
            },
          ],
        },
        {
          type: "subsection",
          id: "interview-question-6",
          title: "What are the types of events do you usually gets?",
          number: "6",
          blocks: [
            {
              type: "paragraph",
              text: "“The geofence notification is the most frequent event notification. Apart from that the battery status and Device online/offline status are frequently received”",
            },
          ],
        },
        {
          type: "subsection",
          id: "interview-question-7",
          title: "In average, how many event notifications do you get?",
          number: "7",
          blocks: [
            {
              type: "paragraph",
              text: "“For active vehicles over 200 Km covering for a week gets 50-100 notifications per week”",
            },
          ],
        },
        {
          type: "subsection",
          id: "interview-question-8",
          title:
            "How often do you use the fleet tracking web app in a typical workday?",
          number: "8",
          blocks: [
            {
              type: "paragraph",
              text: '“I use the app multiple times a day, let’s say at least once a hour. Especially when I need to make decisions about tracking or event handling."',
            },
          ],
        },
      ],
    },
    {
      id: "user-personas",
      title: "User Personas",
      blocks: [
        {
          type: "paragraph",
          text: "Using the interview outcomes i constructed a user persona of a fleet managerLittle intro text",
        },
        {
          type: "subsection",
          id: "shehan-bandara",
          title: "1. Shehan Bandara",
          blocks: [
            {
              type: "paragraph",
              text: "Fleet Manager",
            },
            {
              type: "figure",
              id: "ingenii-persona-shehan-bandara",
              image: {
                src: "/images/ingenii-fleet-tracker/persona-shehan-bandara.png",
                alt: "Portrait supplied for the Shehan Bandara fleet-manager persona",
                width: 321,
                height: 322,
                background: "white",
              },
            },
            {
              type: "paragraph",
              text: "Gender: Male",
              emphasis: ["Gender:"],
            },
            {
              type: "paragraph",
              text: "Age: 25",
              emphasis: ["Age:"],
            },
            {
              type: "paragraph",
              text: "Experience: 1 Year",
              emphasis: ["Experience:"],
            },
            {
              type: "paragraph",
              text: "Location: Colombo",
              emphasis: ["Location:"],
            },
            {
              type: "subsection",
              id: "shehan-personality",
              title: "Personality",
              blocks: [
                {
                  type: "paragraph",
                  text: "Easily stressed, Punctual, Extrovert",
                },
              ],
            },
            {
              type: "subsection",
              id: "shehan-goals",
              title: "Goals",
              blocks: [
                {
                  type: "paragraph",
                  text: "Obtaining accurate data related to KPI, reduce fuel costs, optimise vehicle utilisation, Be alert on event notifications related to entity activities.",
                },
              ],
            },
            {
              type: "subsection",
              id: "shehan-hates",
              title: "Hates to…",
              blocks: [
                {
                  type: "list",
                  items: [
                    "Difficulty of obtaining high load of tracking details in an organized manner.",
                    "When UI elements are non appealing.",
                    "Read vehicle specs through widget panelObtaining accurate data related to KPI, reduce fuel costs, optimise vehicle utilisation, Be alert on event notifications related to entity activities.",
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "dasuni-perera",
          title: "2. Dasuni Perera",
          blocks: [
            {
              type: "paragraph",
              text: "Fleet Admin",
            },
            {
              type: "figure",
              id: "ingenii-persona-dasuni-perera",
              image: {
                src: "/images/ingenii-fleet-tracker/persona-dasuni-perera.png",
                alt: "Portrait supplied for the Dasuni Perera fleet-admin persona",
                width: 321,
                height: 322,
                background: "white",
              },
            },
            {
              type: "paragraph",
              text: "Gender: Female",
              emphasis: ["Gender:"],
            },
            {
              type: "paragraph",
              text: "Age: 28",
              emphasis: ["Age:"],
            },
            {
              type: "paragraph",
              text: "Experience: 3 Years",
              emphasis: ["Experience:"],
            },
            {
              type: "paragraph",
              text: "Location: Colombo",
              emphasis: ["Location:"],
            },
            {
              type: "subsection",
              id: "dasuni-personality",
              title: "Personality",
              blocks: [
                {
                  type: "paragraph",
                  text: "Perfectionist, Organised, Introvert",
                },
              ],
            },
            {
              type: "subsection",
              id: "dasuni-goals",
              title: "PersonalityGoals",
              blocks: [
                {
                  type: "list",
                  items: [
                    "Identify and filter vehicle statuses",
                    "To identify important vehicle specs in the first glance.",
                    "To see vehicle tracking timeline in segmented view with vehicle location and clear duration.Perfectionist, Organised, Introvert",
                  ],
                },
              ],
            },
            {
              type: "subsection",
              id: "dasuni-hates",
              title: "Hates To…",
              blocks: [
                {
                  type: "list",
                  items: [
                    "See large categories of information are cluttered and disorganised.",
                    "To read the tracking details and the graph sice the UI and data are so vague.",
                    "Read vehicle specs through widget panel",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "user-journey",
      title: "User Journey",
      blocks: [
        {
          type: "subsection",
          id: "journey-tracking-goals",
          title: "Goals & expectations:",
          blocks: [
            {
              type: "list",
              items: [
                "To search and view entity.",
                "To view attributes and stats",
                "To view tracking history",
              ],
            },
            {
              type: "figure",
              id: "ingenii-user-journey-attributes",
              image: {
                src: "/images/ingenii-fleet-tracker/user-journey-attributes.png",
                alt: "User journey for searching entities, viewing attributes and reviewing tracking history",
                width: 1024,
                height: 1024,
                background: "white",
              },
            },
          ],
        },
        {
          type: "subsection",
          id: "journey-events-goals",
          title: "Goals & expectations:",
          blocks: [
            {
              type: "paragraph",
              text: "To view events details",
            },
            {
              type: "figure",
              id: "ingenii-user-journey-events",
              image: {
                src: "/images/ingenii-fleet-tracker/user-journey-events.png",
                alt: "User journey for viewing event details",
                width: 1024,
                height: 880,
                background: "white",
              },
            },
          ],
        },
      ],
    },
    {
      id: "user-flow",
      title: "User Flow",
      blocks: [
        {
          type: "paragraph",
          text: "Based on the conclusions observed from the above methods, I created a user flow for the expected solution",
        },
        {
          type: "figure",
          id: "ingenii-user-flow",
          image: {
            src: "/images/ingenii-fleet-tracker/user-flow.png",
            alt: "Proposed user flow for the Ingenii fleet tracking platform",
            width: 1024,
            height: 812,
            background: "white",
          },
        },
      ],
    },
    {
      id: "wireframes",
      title: "Wireframes",
      blocks: [
        {
          type: "figure",
          id: "ingenii-wireframe-realtime-map-1",
          image: {
            src: "/images/ingenii-fleet-tracker/wireframe-realtime-map-1.png",
            alt: "Realtime tracking map wireframe, first view",
            width: 1578,
            height: 973,
            background: "white",
          },
        },
        {
          type: "figure",
          id: "ingenii-wireframe-realtime-map-2",
          image: {
            src: "/images/ingenii-fleet-tracker/wireframe-realtime-map-2.png",
            alt: "Realtime tracking map wireframe, second view",
            width: 1578,
            height: 973,
            background: "white",
          },
        },
        {
          type: "paragraph",
          text: "Realtime tracking map",
        },
        {
          type: "figure",
          id: "ingenii-wireframe-attribute-view",
          image: {
            src: "/images/ingenii-fleet-tracker/wireframe-attribute-view.png",
            alt: "Vehicle attribute view wireframe",
            width: 1578,
            height: 973,
            background: "white",
          },
        },
        {
          type: "paragraph",
          text: "Attribute View",
        },
        {
          type: "figure",
          id: "ingenii-wireframe-tracking-history-1",
          image: {
            src: "/images/ingenii-fleet-tracker/wireframe-tracking-history-1.png",
            alt: "Tracking history wireframe, first view",
            width: 1578,
            height: 973,
            background: "white",
          },
        },
        {
          type: "figure",
          id: "ingenii-wireframe-tracking-history-2",
          image: {
            src: "/images/ingenii-fleet-tracker/wireframe-tracking-history-2.png",
            alt: "Tracking history wireframe, second view",
            width: 1578,
            height: 973,
            background: "white",
          },
        },
        {
          type: "figure",
          id: "ingenii-wireframe-tracking-history-3",
          image: {
            src: "/images/ingenii-fleet-tracker/wireframe-tracking-history-3.png",
            alt: "Tracking history wireframe, third view",
            width: 1578,
            height: 973,
            background: "white",
          },
        },
        {
          type: "figure",
          id: "ingenii-wireframe-tracking-history-4",
          image: {
            src: "/images/ingenii-fleet-tracker/wireframe-tracking-history-4.png",
            alt: "Tracking history wireframe, fourth view",
            width: 1595,
            height: 983,
            background: "white",
          },
        },
        {
          type: "paragraph",
          text: "Tracking history",
        },
        {
          type: "figure",
          id: "ingenii-wireframe-events-history-1",
          image: {
            src: "/images/ingenii-fleet-tracker/wireframe-events-history-1.png",
            alt: "Events history wireframe, first view",
            width: 1638,
            height: 1009,
            background: "white",
          },
        },
        {
          type: "figure",
          id: "ingenii-wireframe-events-history-2",
          image: {
            src: "/images/ingenii-fleet-tracker/wireframe-events-history-2.png",
            alt: "Events history wireframe, second view",
            width: 1639,
            height: 1009,
            background: "white",
          },
        },
        {
          type: "figure",
          id: "ingenii-wireframe-events-history-3",
          image: {
            src: "/images/ingenii-fleet-tracker/wireframe-events-history-3.png",
            alt: "Events history wireframe, third view",
            width: 1638,
            height: 1009,
            background: "white",
          },
        },
        {
          type: "paragraph",
          text: "Events History",
        },
        {
          type: "figure",
          id: "ingenii-wireframe-geofence-1",
          image: {
            src: "/images/ingenii-fleet-tracker/wireframe-geofence-1.png",
            alt: "Geofence creation and view wireframe, first view",
            width: 1638,
            height: 1009,
            background: "white",
          },
        },
        {
          type: "figure",
          id: "ingenii-wireframe-geofence-2",
          image: {
            src: "/images/ingenii-fleet-tracker/wireframe-geofence-2.png",
            alt: "Geofence creation and view wireframe, second view",
            width: 1638,
            height: 1009,
            background: "white",
          },
        },
        {
          type: "paragraph",
          text: "Geo fence creation and view",
        },
      ],
    },
    {
      id: "usability-testing",
      title: "Usability Testing",
      blocks: [
        {
          type: "paragraph",
          text: "After the wireframes are complete, I tested a prototype with 4 different representatives to see their response to the usability of the new design.Little intro text",
        },
        {
          type: "subsection",
          id: "testing-tasks",
          title: "The tasks given to try:",
          blocks: [
            {
              type: "list",
              items: [
                "Selecting an entity and view attributes",
                "View tracking records of an entity over a given time period",
                "View event notifications over a time period",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "testing-responses",
          title: "Responses",
          blocks: [
            {
              type: "paragraph",
              text: "The participants were positive about the new clean UI enhancements done in vehicle lists and other features. Also Impressed about the low saturation map colors used.",
            },
            {
              type: "paragraph",
              text: "The new flows to Tracking history and Events were well received as it increased the usability and aesthetics.",
            },
          ],
        },
        {
          type: "subsection",
          id: "testing-suggestions",
          title: "Suggestions",
          blocks: [
            {
              type: "paragraph",
              text: "Some users suggested to include a miniature sub view of real time tracking for each entity which is to be shown on top of the map as a window.",
            },
            {
              type: "paragraph",
              text: "Also some suggestions elaborated the importance of including a feature to copy the location of the entity.",
            },
          ],
        },
      ],
    },
    {
      id: "design-kit",
      title: "Design Kit",
      blocks: [
        {
          type: "figure",
          id: "ingenii-design-kit-1",
          image: {
            src: "/images/ingenii-fleet-tracker/design-kit-1.png",
            alt: "Ingenii design kit, first foundation board",
            width: 1920,
            height: 1920,
            background: "white",
          },
        },
        {
          type: "figure",
          id: "ingenii-design-kit-2",
          image: {
            src: "/images/ingenii-fleet-tracker/design-kit-2.png",
            alt: "Ingenii design kit, second foundation board",
            width: 1920,
            height: 1920,
            background: "white",
          },
        },
        {
          type: "figure",
          id: "ingenii-design-kit-components",
          image: {
            src: "/images/ingenii-fleet-tracker/design-kit-components.png",
            alt: "Complete Ingenii design kit component collection",
            width: 1920,
            height: 9840,
            background: "white",
          },
        },
      ],
    },
    {
      id: "final-product",
      title: "Final Product",
      blocks: [
        {
          type: "subsection",
          id: "vehicle-panel",
          title: "Vehicle Panel",
          blocks: [
            {
              type: "paragraph",
              text: "Filter panel is introduced, to filter out the Mobility and Vehicle status. For better clarification each of the Mobility statuses are introduced with relavent icons.",
            },
            {
              type: "figure",
              id: "ingenii-final-vehicle-panel",
              image: {
                src: "/images/ingenii-fleet-tracker/final-vehicle-panel.png",
                alt: "Final vehicle list and mobility-status filter panel",
                width: 2879,
                height: 1908,
                background: "white",
              },
            },
            {
              type: "figure",
              id: "ingenii-final-vehicle-clusters",
              image: {
                src: "/images/ingenii-fleet-tracker/final-vehicle-clusters.png",
                alt: "Final map showing vehicle clusters",
                width: 2879,
                height: 1908,
                background: "white",
              },
            },
            {
              type: "paragraph",
              text: "Entities in proximity are shown as clusters when the map is zoomed out.",
            },
            {
              type: "figure",
              id: "ingenii-final-vehicle-mini-view",
              image: {
                src: "/images/ingenii-fleet-tracker/final-vehicle-mini-view.png",
                alt: "Vehicle mini view and location-copy feature",
                width: 1820,
                height: 650,
                background: "white",
              },
            },
            {
              type: "paragraph",
              text: "miniature sub view of real time tracking for each entity which is to be shown on top of the map as a window and location copy feature as suggested in user testing.",
            },
          ],
        },
        {
          type: "subsection",
          id: "widget-panel",
          title: "Widget Panel",
          blocks: [
            {
              type: "paragraph",
              text: "Widget panel UI is revamped with introducing Tracking and Events CTA included.",
            },
            {
              type: "paragraph",
              text: "The widget stats are categorised as cards and revamped as important values are highlighted using larger font faces and different colors.",
            },
            {
              type: "figure",
              id: "ingenii-final-widget-panel",
              image: {
                src: "/images/ingenii-fleet-tracker/final-widget-panel.png",
                alt: "Final vehicle widget panel with tracking and events actions",
                width: 2876,
                height: 1840,
                background: "white",
              },
            },
            {
              type: "figure",
              id: "ingenii-final-navigation-frame",
              image: {
                src: "/images/ingenii-fleet-tracker/final-navigation-frame.png",
                alt: "Static frame of general vehicle navigation from the supplied PDF",
                width: 1920,
                height: 1226,
                background: "white",
              },
            },
            {
              type: "paragraph",
              text: "General vehicle navigation animation",
            },
          ],
        },
        {
          type: "subsection",
          id: "tracking-widget-panel",
          title: "Tracking Widget Panel",
          blocks: [
            {
              type: "paragraph",
              text: "The new tracking panel will contain a filter panel and will have a segmented view of the vehicles journey to provide better clarity for user to identify journey milestones. It clearly depicts the mobility status the geo location and the duration for each milestone.",
            },
            {
              type: "figure",
              id: "ingenii-final-tracking-panel-1",
              image: {
                src: "/images/ingenii-fleet-tracker/final-tracking-panel-1.png",
                alt: "Final tracking widget and segmented journey, first view",
                width: 1820,
                height: 1164,
                background: "white",
              },
            },
            {
              type: "figure",
              id: "ingenii-final-tracking-panel-2",
              image: {
                src: "/images/ingenii-fleet-tracker/final-tracking-panel-2.png",
                alt: "Final tracking widget and segmented journey, second view",
                width: 1820,
                height: 1164,
                background: "white",
              },
            },
            {
              type: "figure",
              id: "ingenii-final-tracking-parameter-graph",
              image: {
                src: "/images/ingenii-fleet-tracker/final-tracking-parameter-graph.png",
                alt: "Redesigned tracking parameter graph",
                width: 1820,
                height: 1164,
                background: "white",
              },
            },
            {
              type: "paragraph",
              text: "The tracking parameter graph is revamped with improving the usability by clean design.",
            },
            {
              type: "figure",
              id: "ingenii-final-tracking-journey",
              image: {
                src: "/images/ingenii-fleet-tracker/final-tracking-journey.png",
                alt: "Expanded journey segment with its vehicle specifications and highlighted map route",
                width: 1820,
                height: 1164,
                background: "white",
              },
            },
            {
              type: "paragraph",
              text: "The tracking journey of the vehicle is segmented based on the mobility. When the segment is clicked it can be expanded to view the relavant specs of the segment. Also within the map, the journey is highlighted.",
            },
          ],
        },
      ],
    },
  ],
};
