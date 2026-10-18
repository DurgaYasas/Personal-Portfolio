import type { SourceCaseStudy } from "./types";

// Transcribed from the supplied 16-page PDF. Preserve the author's wording.
// Browser print headers, footers, and repeated navigation are not article text.
// Figure captions retain the source wording; original images will be supplied later.
export const pickmeSearchRevamp: SourceCaseStudy = {
  title: "PickMe Search Revamp",
  subtitle:
    "Reimagining search & discovery for Sri Lanka's leading food and market delivery app",
  role: "Senior UX Designer",
  period: "Sep 2023 - Present",
  tags: ["Super App", "Search UX", "UX Strategy"],
  source: { fileName: "Durga Yasas.pdf", pages: 16 },
  sections: [
    {
      id: "the-challenge",
      title: "The Challenge",
      blocks: [
        {
          type: "paragraph",
          text: "Revamp the search experience in Sri Lanka's leading super app, improving discoverability, search accuracy, and conversion rates for 1M+ active users across food delivery and market verticals.",
        },
      ],
    },
    {
      id: "overview",
      title: "Overview",
      blocks: [
        {
          type: "paragraph",
          text: "The PickMe search experience is a critical tool for users navigating the vast world of food delivery. Powered by the Elastic search engine, it offered two types of outcomes: suggestions and results — divided into outlets and dishes/items, supported by basic tagging. While functional, the existing mechanism lacked the finesse and intuitiveness that modern users expect.",
        },
        {
          type: "paragraph",
          text: 'This is where the "PickMe Search Revamp" began — a focused effort to overhaul the search experience, addressing gaps, enhancing usability, and creating a seamless journey for users to discover exactly what they crave.',
        },
        {
          type: "figure",
          id: "previous-search-screens",
          caption: "What PickMe Search screens used to be",
        },
      ],
    },
    {
      id: "why-the-previous-search-did-not-work",
      title: "Why the Previous Search Did Not Work",
      blocks: [
        {
          type: "paragraph",
          text: "For many PickMe users, the search experience often felt like a frustrating guessing game. Complaints piled up rapidly:",
        },
        {
          type: "quotes",
          items: [
            {
              text: '"Search is bad. It does not provide correct suggestions."',
            },
            {
              text: '"I see results from the same outlet / outlet range in dish search."',
            },
            { text: '"Does dish search actually exist?"' },
            { text: '"The results are irrelevant altogether."' },
          ],
        },
        {
          type: "paragraph",
          text: "These repeated concerns painted a clear picture: the search experience was not living up to expectations. It was time to transform it into something truly helpful and user-friendly.",
        },
      ],
    },
    {
      id: "opportunity-to-cash-in",
      title: "Opportunity to Cash In",
      blocks: [
        {
          type: "paragraph",
          text: "The recurring user frustrations presented a valuable opportunity to dig deeper and uncover the root causes of the search challenges. By investigating these concerns, we could identify meaningful enhancements — not just for our existing audience but also to attract new users who value intuitive and efficient search.",
        },
      ],
    },
    {
      id: "user-research",
      title: "User Research",
      blocks: [
        {
          type: "paragraph",
          text: "To gain a deeper understanding of existing user concerns and identify areas for improvement, we initiated focused user research. Our strategy involved conducting one-on-one interviews with PickMe Food's highly engaged users and non-Food users. We also ran quantitative analysis using the in-app analytics tool CleverTap to understand engagement of the existing search — including bounce rate, click rates, and order conversions.",
        },
        {
          type: "stats",
          items: [
            {
              value: "90%",
              label:
                "Participants got non relevant suggestions for the searched",
            },
            {
              value: "90%",
              label:
                "Participants were not happy of the suggestions over spell checks or relevancy",
            },
            { value: "70%", label: "Users selected Outlet over dish" },
            {
              value: "60%",
              label: "Participants explored using category bubbles",
            },
          ],
        },
      ],
    },
    {
      id: "important-insights-from-user-interviews",
      title: "Important Insights from User Interviews",
      blocks: [
        {
          type: "paragraph",
          text: "User interviews revealed key challenges including confusion between outlet branches, incomplete keyword matches, and a lack of personalised or structured results. Participants also emphasised the need for promoting relevant dishes and including visual cues like outlet logos.",
        },
        {
          type: "quotes",
          items: [
            {
              attribution: "IN_FDR_01 · Ramith",
              text: "“If a user is searching for a specific outlet that has particular food varieties, it would be beneficial for the system to recommend other outlets that also offer the same specific varieties.”",
            },
            {
              attribution: "IN_FDR_02 · Amila",
              text: "“Confusion with same outlet showing up with branch location and other without location.”",
            },
            {
              attribution: "IN_FDR_04 · Nimesh",
              text: "“Including branch locations or specific identifiers to help users distinguish between different branches.”",
            },
            {
              attribution: "IN_FDR_07 · Harshani",
              text: '“Buriyani-related results are not promoted when the user types "Buriy". She expects to see variations like Tandoori Chicken and BBQ Chicken Buriyani.”',
            },
            {
              attribution: "IN_FDR_08 · Dhammika",
              text: "“Having an order displaying outlet, dish or cuisine — a more structured way.”",
            },
            {
              attribution: "IN_FDR_09 · Ashey",
              text: '“When she typed "Cake", the expected suggestions were not prompted — she ended up searching the outlet instead. She likes when outlets show their logo and when different kinds of dishes are promoted.”',
            },
            {
              attribution: "IN_FDR_10 · Mohammad Aslam",
              text: '“There are spelling correction issues. Enhance the spell-check functionality to correct common misspellings and improve search accuracy. Repeated dish suggestions should be removed (such as "Ice Milo" and "Iced Milo").”',
            },
          ],
        },
      ],
    },
    {
      id: "planning-the-solution",
      title: "Planning the Solution",
      blocks: [
        {
          type: "paragraph",
          text: "The user research revealed critical gaps in both the functionality and experience of the search feature, prompting a two-pronged approach:",
        },
        {
          type: "cards",
          items: [
            {
              title: "Backend",
              text: "Initially, we assessed AI-powered search platforms including Algolia's NeuralSearch and Elastic's ELSER (Elastic Learned Sparse Encoder) to understand whether semantic/vector search could replace mere keyword-dependent matching. But after weighing implementation complexity, cost, and our dataset size (food items with short, ambiguous names like “kottu” or “devilled”), we determined that a hybrid approach was more appropriate. The goal is to improve keyword tagging quality first, while keeping vector search as a future-phase opportunity once we had cleaner training data.",
            },
            {
              title: "UX Front",
              text: "Complete overhaul of the search experience — reimagining the suggestion screen and components, redesigning result components, and revamping the entire search flow to be more intuitive and user-friendly.",
            },
          ],
        },
      ],
    },
    {
      id: "ux-solution",
      title: "UX Solution",
      blocks: [
        {
          type: "subsection",
          id: "grouped-suggestions",
          title: "Grouped Suggestions",
          number: "1",
          blocks: [
            {
              type: "paragraph",
              text: "Suggestions were broken into three distinct groups, making it easier for users to scan. Cuisine-based grouping was introduced to create a structured and intuitive search experience.",
            },
            {
              type: "subsection",
              id: "visual-clarity-with-logos",
              title: "Visual Clarity with Logos",
              blocks: [
                {
                  type: "paragraph",
                  text: "Logos were added to suggestion items so users can quickly identify outlets at a glance. After evaluation, we chose to bold the typed keyword rather than the autocomplete word — aligning with UX standards and handling complex SKU names better.",
                },
              ],
            },
            {
              type: "figure",
              id: "grouped-suggestions-before",
              label: "Before",
              caption: "Existing Design",
            },
            {
              type: "figure",
              id: "grouped-suggestions-exploration",
              label: "Exploration",
              caption: "Design Variants",
            },
            {
              type: "figure",
              id: "grouped-suggestions-final",
              label: "Final",
              caption: "Final Design for Testing",
            },
          ],
        },
        {
          type: "subsection",
          id: "outlet-centric-results",
          title: "Outlet-Centric Results",
          number: "2",
          blocks: [
            {
              type: "paragraph",
              text: "Analytics and research revealed a critical behavioural gap: frequent users heavily favoured the Outlet tab for both repeat orders and exploring new dishes, while the Dish tab saw minimal engagement — not by choice, but because poor suggestion quality had eroded trust. Users had quietly adopted outlet search as a workaround, bypassing dish search entirely.",
            },
            {
              type: "list",
              items: [
                "This gap guided the redesign of the results screen — the goal being a more balanced, user-friendly experience that could restore confidence in dish discovery.",
                "Rather than maintaining two separate result components, outlets and dishes were unified into a single, cohesive design — leveraging the familiar outlet-first mental model users already trusted.",
                "Dishes are introduced meaningfully alongside outlet results, applying the principle of progressive disclosure: users stay anchored to the familiar outlet-first structure while organically encountering relevant dish suggestions.",
                "This approach preserves user trust in outlet search while gradually improving the visibility and usability of dish results — shifting behaviour without disrupting it.",
              ],
            },
            {
              type: "figure",
              id: "outlet-centric-before",
              label: "Before",
              caption: "Existing Design",
            },
            {
              type: "figure",
              id: "outlet-centric-exploration",
              label: "Exploration",
              caption: "Design Variants",
            },
            {
              type: "figure",
              id: "outlet-centric-final",
              label: "Final",
              caption: "Final Design for Testing",
            },
            {
              type: "figure",
              id: "outlet-centric-component",
              label: "Final",
              caption: "Final component for testing",
            },
          ],
        },
        {
          type: "subsection",
          id: "progressive-disclosure",
          title: "Progressive Disclosure",
          number: "3",
          blocks: [
            {
              type: "paragraph",
              text: 'An "Explore all items…" CTA was introduced for scenarios with more than four results. For popular dishes like "kottu" appearing from multiple branches, we show the closest branch and add a "View more branches" CTA.',
            },
            {
              type: "figure",
              id: "explore-all-items",
              label: "Final",
              caption: "Explore all items CTA",
            },
            {
              type: "figure",
              id: "view-more-branches",
              label: "Final",
              caption: "View more branches CTA",
            },
          ],
        },
        {
          type: "subsection",
          id: "prominent-search-bar",
          title: "Prominent Search Bar",
          number: "4",
          blocks: [
            {
              type: "paragraph",
              text: "The search CTA was moved from a small navigation icon to a prominent, visible component on the home page — aligning with Fitts's Law and making search a central part of the experience.",
            },
            {
              type: "figure",
              id: "prominent-search-bar-final",
              label: "Final",
              caption: "Prominent Search Bar",
            },
          ],
        },
      ],
    },
    {
      id: "user-testing",
      title: "User Testing",
      blocks: [
        {
          type: "subsection",
          id: "moderated-usability-testing",
          title: "Moderated Usability Testing",
          blocks: [
            {
              type: "list",
              items: [
                "Identify pain points in the search flow (e.g., suggestions, interpreting results).",
                "Understand user expectations for Dish vs Outlet vs Cuisine search.",
                "Capture live confusion or delight moments.",
              ],
            },
            {
              type: "quotes",
              items: [
                {
                  text: "When searching for an outlet they want that outlet to be given priority to. They want to see other branches of that outlet in the same screen.",
                },
                { text: '"If a dish is searched give priority to dish items"' },
                {
                  text: '"When searching for an outlet they want that outlet to have all branches listed with the closest one."',
                },
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "unmoderated-remote-testing",
          title: "Unmoderated Remote Testing",
          blocks: [
            {
              type: "list",
              items: [
                "Observe natural usage patterns.",
                "Collect quantitative completion rates and time-on-task data.",
              ],
            },
            {
              type: "stats",
              items: [
                {
                  value: "80%",
                  label:
                    "could complete task of going through the suggestions categories without assistance.",
                },
                {
                  value: "60%",
                  label:
                    "users added the item to the cart from the search results page",
                },
                {
                  value: "60%",
                  label: "Of the users noticed the branches CTA",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "adjustments-after-user-testing",
      title: "Adjustments After User Testing",
      blocks: [
        {
          type: "paragraph",
          text: "Following user testing, we implemented targeted adjustments to address key pain points, focusing on improving visibility, prioritisation, and clarity.",
        },
        {
          type: "cards",
          items: [
            {
              title: "Outlet Banner Removed from Dish Results",
              text: "The outlet banner was removed from dish/item results while retained for outlet and cuisine components. This encourages users to focus on dish/item details and creates a clear visual differentiation between result types.",
            },
            {
              title: 'Enhanced "Branches" CTA',
              text: 'The "Branches" CTA colour was changed to a darker hue, increasing contrast and visibility — driven by user feedback that the CTA was initially overlooked.',
            },
            {
              title: "Show All Branches in Outlet Search",
              text: "When conducting an outlet-specific search, all available branches are now displayed prominently on the results screen sorted by proximity, rather than being categorised under a CTA — reflecting user intent alignment.",
            },
          ],
        },
      ],
    },
    {
      id: "analytics-and-kpis",
      title: "Analytics & KPIs",
      blocks: [
        {
          type: "paragraph",
          text: "To effectively measure the impact of the search revamp, we implemented CleverTap events to track user interactions and behaviours across the redesigned features. The following KPIs were established:",
        },
        {
          type: "cards",
          items: [
            {
              title: "Conversion Rate",
              text: "Tracks the percentage of users who engage with the homepage search component, perform a keyword search, and select a suggestion type — measuring how effectively the revamped design drives interaction.",
            },
            {
              title: "Task Completion Rate",
              text: "Measures the percentage of users who successfully complete a search journey by adding an item to their cart from the results page — reflecting the usability and efficiency of the new search flow.",
            },
            {
              title: "Time on Task",
              text: "Analyses the time users spend on the suggestion and results pages to identify whether the new design enables quick decision-making or creates friction points.",
            },
          ],
        },
        {
          type: "table",
          headers: ["Metric", "Before revamp", "After revamp"],
          rows: [
            ["Search-to-Order Conversion", "14.7%", "21.7%"],
            ["Dish search (Out of total search)", "21%", "29%"],
            ["Average Time to Find an Item", "42 sec", "25 sec"],
            [
              "Category bubble lead search (In contrary, other search methods have increased, indicating that users are leaning to other methods)",
              "76.7%",
              "69.4%",
            ],
          ],
        },
      ],
    },
    {
      id: "reflections-and-what-i-learned",
      title: "Reflections & What I Learned",
      blocks: [
        {
          type: "paragraph",
          text: "Trust is harder to rebuild than to maintain. The most notable insight from this revamp was discovering that low number of dish searches are not merely because of the organic behaviour of the users but significantly because of poor suggestion quality. That aspect had quietly eroded their confidence over time. This taught me to look beyond surface-level usage data and ask why a feature is underperforming before jumping to solutions.",
        },
        {
          type: "paragraph",
          text: "Designing with existing mental models beats fighting them. Rather than forcing users toward dish search, anchoring the redesign to the outlet-first structure they already trusted and introducing dish results progressively proved far more effective. I learned that the smoothest UX changes are often the ones users barely notice.",
        },
        {
          type: "paragraph",
          text: "Backend and UX are equally part of the user experience. A beautifully redesigned search screen would have failed without the parallel backend improvements to tagging and the search engine. This project reinforced that UX designers need to advocate for the full system, not just the visible layer.",
        },
        {
          type: "paragraph",
          text: "Test early, but stay curious after launch. User testing caught the Branches CTA visibility issue before release — something I wouldn't have predicted from research alone. It reminded me that assumptions always survive longer than they should, and that iteration doesn't stop at handoff.",
        },
      ],
    },
  ],
};
