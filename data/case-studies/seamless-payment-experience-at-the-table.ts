import type { SourceCaseStudy } from "./types";

// Transcribed from the supplied Carbonmade HTML export. Preserve the source wording.
// Research tables were supplied separately; other source image positions remain.
// Role and period are omitted because the source does not state them.
export const seamlessPaymentExperience: SourceCaseStudy = {
  title: "Seamless Payment Experience at the Table",
  subtitle: "Bill sharing app case study",
  tags: ["Payments"],
  source: {
    fileName: "Seamless Payment Experience at the Table - Durga Yasas.html",
    url: "https://durgayasas.carbonmade.com/seamless-payment-experience-at-the-table",
  },
  sections: [
    {
      id: "problem-statement",
      title: "Problem Statement",
      blocks: [
        {
          type: "paragraph",
          text: "Paying bills at restaurants is often slow, awkward, and inconsistent across cultures. Patrons want fast, transparent, and trusted ways to settle their bills without waiting for staff — while restaurants need confidence that every seat at the table has actually paid before it turns over.",
        },
      ],
    },
    {
      id: "goal",
      title: "Goal",
      blocks: [
        {
          type: "paragraph",
          text: "Design a mobile-based table payment solution that enables QR-based bill access, flexible bill splitting, culturally adaptive tipping, and fast, trusted payment completion for every participant — without requiring a dedicated app download.",
        },
      ],
    },
    {
      id: "research-and-findings",
      title: "Research & Findings",
      blocks: [
        {
          type: "subsection",
          id: "competitor-benchmarking-findings",
          title: "Competitor benchmarking:",
          blocks: [
            {
              type: "table",
              id: "competitor-benchmarking",
              caption: "Competitor benchmarking",
              variant: "comparison",
              headers: [
                "App / Service",
                "Region",
                "QR Payment",
                "Bill Splitting",
                "Tipping",
                "Trust & Security",
                "Cultural Adaptation",
                "Notes",
              ],
              rows: [
                [
                  "ToastTab",
                  "USA",
                  "✅",
                  "✅ (by seat/item)",
                  "✅ (percentages)",
                  "Strong (POS-integrated)",
                  "❌ (US-focused)",
                  "Business-first UX",
                ],
                [
                  "Sunday App",
                  "USA / Europe",
                  "✅",
                  "✅ (equal)",
                  "✅ (percentages)",
                  "High (wallets supported)",
                  "❌",
                  "Polished, diner-focused",
                ],
                [
                  "PayPay",
                  "Japan",
                  "✅",
                  "❌",
                  "❌ (no tipping)",
                  "Very strong (trusted wallet)",
                  "✅ (Japan norms)",
                  "Super popular in Japan",
                ],
                [
                  "FavePay",
                  "Singapore / SE Asia",
                  "✅",
                  "❌",
                  "❌",
                  "Medium (wallet loyalty)",
                  "❌",
                  "Cashback focus",
                ],
                [
                  "Zomato Pay",
                  "India / Middle East",
                  "✅",
                  "✅",
                  "✅ (As percentages)",
                  "Medium (requires Zomato app)",
                  "Partial (India/ME norms)",
                  "Part of dining ecosystem",
                ],
              ],
            },
            {
              type: "paragraph",
              text: "Key conclusion: Most competitors support QR-based payment plus tipping, but almost none adapt splitting or tipping conventions to local culture — and none solve for a browser-first, no-download experience while still supporting rich splitting logic.",
              emphasis: ["Key conclusion:"],
            },
          ],
        },
        {
          type: "paragraph",
          text: "User Research: 6 participants across USA, Japan, and the Middle East. Given the small sample size, findings below are read as directional signal rather than statistically significant data, and are flagged for validation in a larger follow-up study",
          emphasis: ["User Research:"],
        },
        {
          type: "table",
          id: "user-research",
          caption: "User Research findings",
          variant: "research",
          headers: ["Theme", "Finding"],
          rows: [
            [
              "Preferred payment method",
              "4 of 6 preferred mobile wallet; 2 of 6 preferred card",
            ],
            [
              "Frequency of bill splitting",
              "3 of 6 split sometimes; 2 of 6 often; 1 of 6 rarely",
            ],
            [
              "Preferred split method",
              "3 of 6 wanted itemized; 2 of 6 equal split; 1 of 6 custom",
            ],
            [
              "Tipping culture",
              "4 of 6 expected tipping; 1 of 6 optional; 1 of 6 no-tip norm",
            ],
            [
              "Preferred tipping method",
              "3 of 6 preferred percentage presets; 2 of 6 custom; 1 of 6 no tip",
            ],
            ["Would download a dedicated app to pay", "Only 1 of 6"],
            [
              "Prior QR payment experience",
              "4 of 6 had used QR payment before",
            ],
          ],
        },
        {
          type: "subsection",
          id: "key-findings",
          title: "Key Findings:",
          blocks: [
            {
              type: "list",
              items: [
                "Most participants do not want to download a dedicated app to pay once.",
                "QR familiarity is fairly high, but tolerance for a forced app install is low.",
                "Bill-splitting preference is genuinely mixed (itemized, equal, custom) — no single method covers most users.",
                "Tipping norms differ meaningfully by region: expected in the USA and Middle East, but potentially awkward or unnecessary in Japan.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          id: "representative-quotes",
          title: "Representative Quotes:",
          blocks: [
            {
              type: "quotes",
              variant: "featured",
              items: [
                {
                  text: "“I don’t want to download an app just to pay once.”",
                  attribution: "— Middle East, 29",
                },
                {
                  text: "“Tipping isn’t common here — it can feel rude.”",
                  attribution: "— Japan, 34",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "approach-and-rationale",
      title: "The Approach and Its Rationale",
      blocks: [
        {
          type: "subsection",
          id: "conductor-led-approach",
          title: '"Conductor-Led" Approach',
          blocks: [
            {
              type: "paragraph",
              text: "The approach is based on common real-world dining behavior, where bill settlement is typically conducted by one person. A conductor-led split lets one person organize the bill and generate payment links for the rest of the table — reducing sync conflicts and saving time for diners and restaurants alike. The QR code displayed at the table or on the bill is designed to nudge one person to scan and lead.",
            },
          ],
        },
        {
          type: "subsection",
          id: "browser-first-solution",
          title: "Browser-First Solution",
          blocks: [
            {
              type: "paragraph",
              text: "Since users were reluctant to download a dedicated app (only 1 of 6 in research), a browser-first solution removes that friction entirely — payment starts the moment the QR is scanned.",
            },
          ],
        },
        {
          type: "subsection",
          id: "cultural-adaptation",
          title: "Focus on Cultural Adaptation",
          blocks: [
            {
              type: "paragraph",
              text: "The flow adapts tipping prompts and splitting defaults to local norms, to avoid confusion or unintentional offense across regions.",
            },
          ],
        },
        {
          type: "subsection",
          id: "flexible-splitting",
          title: "Flexible Splitting",
          blocks: [
            {
              type: "paragraph",
              text: "Equal, itemised, and custom splitting are all supported to reflect the different group dynamics observed in research.",
            },
          ],
        },
        {
          type: "subsection",
          id: "transparency-and-sync-up",
          title: "Transparency and Sync-Up",
          blocks: [
            {
              type: "paragraph",
              text: "Every participant can see what they owe, what's been paid, and what's outstanding — communicated clearly across the shared link so no one is left chasing a payment status manually.",
            },
          ],
        },
      ],
    },
    {
      id: "user-flows",
      title: "User Flows",
      blocks: [
        {
          type: "figure",
          id: "conductor-led-payment-flow",
          caption: "Conductor-Led Payment Flow",
          sourceImage: {
            url: "https://carbon-media.accelerator.net/0000000mwIt/6RNQyMvzTRUdgLkaO0NP45;1920x556.png?auto=webp",
            width: 1920,
            height: 556,
          },
        },
        {
          type: "figure",
          id: "shared-payment-link-flow",
          caption: "Sharable Payment Link Flow (for added participants)",
          sourceImage: {
            url: "https://carbon-media.accelerator.net/0000000mwIt/9x5EQ1pc4Kagq5vRTBVKFt;1920x495.png?auto=webp",
            width: 1920,
            height: 495,
          },
        },
      ],
    },
    {
      id: "wireframes-qr-scan",
      title: "Wireframes",
      blocks: [
        {
          type: "paragraph",
          text: "Full wireframe set for the conductor-led and shared-link flows. New screens addressing failure states and merchant-side visibility follow in the sections below.",
        },
        {
          type: "figure",
          id: "qr-code-scan",
          caption: "QR code scan",
          sourceImage: {
            url: "https://carbon-media.accelerator.net/0000000mwIt/85nmifbG7G7fwNuUoNZdgD;1920x728.png?auto=webp",
            width: 1920,
            height: 728,
          },
        },
      ],
    },
    {
      id: "wireframes-payment-and-splitting",
      title: "Wireframes",
      blocks: [
        {
          type: "figure",
          id: "pay-the-bill-entirely",
          caption: "Pay the Bill Entirely",
          sourceImage: {
            url: "https://carbon-media.accelerator.net/0000000mwIt/4HZ41O07tNRfHU6P8HQuIS;1920x693.png?auto=webp",
            width: 1920,
            height: 693,
          },
        },
        {
          type: "figure",
          id: "item-split",
          caption: "Item Split",
          sourceImage: {
            url: "https://carbon-media.accelerator.net/0000000mwIt/eNtNhGfEdfZb2g8wCNMmev;1920x717.png?auto=webp",
            width: 1920,
            height: 717,
          },
        },
        {
          type: "paragraph",
          text: "Diners select individual items, assign them to participants, and pay their itemized share.",
        },
        {
          type: "figure",
          id: "equal-split",
          caption: "Equal Split",
          sourceImage: {
            url: "https://carbon-media.accelerator.net/0000000mwIt/40nrCj6mi2TdVu2adowhbD;1920x580.png?auto=webp",
            width: 1920,
            height: 580,
          },
        },
        {
          type: "paragraph",
          text: "Bill is divided evenly across the number of people the conductor specifies.",
        },
        {
          type: "figure",
          id: "custom-split",
          caption: "Custom Split",
          sourceImage: {
            url: "https://carbon-media.accelerator.net/0000000mwIt/gKH7RlORTbzexYwMexV2i1;1920x934.png?auto=webp",
            width: 1920,
            height: 934,
          },
        },
        {
          type: "paragraph",
          text: "Conductor assigns a custom amount per participant, with the remaining balance tracked live.",
        },
        {
          type: "subsection",
          id: "shared-link-participant-screens",
          title: "Shared-Link Participant Screens",
          blocks: [
            {
              type: "figure",
              id: "shared-link-equal-split",
              caption:
                "Equal split by an added person through the shared payment link",
              sourceImage: {
                url: "https://carbon-media.accelerator.net/0000000mwIt/41Bevpm6N71dMtgT70kynw;1920x1720.png?auto=webp",
                width: 1920,
                height: 1720,
              },
            },
            {
              type: "paragraph",
              text: "Equal split, as seen by a participant who joins via the shared payment link.",
            },
            {
              type: "figure",
              id: "shared-link-item-split",
              caption:
                "Item split by an added person through the shared payment link",
              sourceImage: {
                url: "https://carbon-media.accelerator.net/0000000mwIt/06nbVTb3Mp1b8cpROtYwxZ;1920x1266.png?auto=webp",
                width: 1920,
                height: 1266,
              },
            },
            {
              type: "figure",
              id: "shared-link-custom-split",
              caption:
                "Custom split by an added person through the shared payment link",
              sourceImage: {
                url: "https://carbon-media.accelerator.net/0000000mwIt/lqVuZcXhS2deBjQTVkpped;1920x1603.png?auto=webp",
                width: 1920,
                height: 1603,
              },
            },
            {
              type: "figure",
              id: "adding-tips",
              caption: "Adding tips",
              sourceImage: {
                url: "https://carbon-media.accelerator.net/0000000mwIt/3T80CQIkckpf4pJFWBt8ZK;1920x1920.png?auto=webp",
                width: 1920,
                height: 1920,
              },
            },
          ],
        },
      ],
    },
    {
      id: "value-impact",
      title: "Value iImpact",
      blocks: [
        {
          type: "paragraph",
          text: "Faster Checkout: Reduces wait time from ~10 minutes (waiting for staff) to under 2 minutes.",
          emphasis: ["Faster Checkout:"],
        },
        {
          type: "paragraph",
          text: "Convenient Splitting: Eliminates the awkwardness of one person paying and chasing others later.",
          emphasis: ["Convenient Splitting:"],
        },
        {
          type: "paragraph",
          text: "Cultural Sensitivity: Adaptive tipping options (percentages, round-up, or no tip) respect regional norms.",
          emphasis: ["Cultural Sensitivity:"],
        },
        {
          type: "paragraph",
          text: "Transparency & Trust: Itemized bills plus secure payment logos build confidence in fairness and safety.",
          emphasis: ["Transparency & Trust:"],
        },
        {
          type: "paragraph",
          text: "Flexibility: No app download required. Works instantly via browser after scanning QR.Convenience: Step by step organised process",
          emphasis: ["Flexibility:"],
        },
      ],
    },
    {
      id: "failure-states-design",
      title: "Failure States",
      blocks: [
        {
          type: "paragraph",
          text: "The screens below shows the possible failure states occurs in the flow.",
        },
        {
          type: "figure",
          id: "failure-states",
          sourceImage: {
            url: "https://carbon-media.accelerator.net/0000000mwIt/jdJtaVs18DucIno1YwFF9w;1920x1406.png?auto=webp",
            width: 1920,
            height: 1406,
          },
        },
      ],
    },
    {
      id: "merchant-and-restaurant-side-considerations",
      title: "Merchant & Restaurant-Side Considerations",
      blocks: [
        {
          type: "paragraph",
          text: "The restaurant staff need enough visibility to close a table confidently, without needing a dedicated dashboard for a lightweight web-based tool.",
        },
        {
          type: "paragraph",
          text: "Live table status: A single status list per table for the staff that uses same components already used in the conductor's view for consistency. This loads as a lightweight web view staff can pull up on the POS tablet or their own phone by table number instead of a separate app.",
          emphasis: ["Live table status:"],
        },
        {
          type: "paragraph",
          text: 'Table closure rule: A table can only be marked "settled" once 100% of the bill total is collected, preventing a "good enough" partial close.',
          emphasis: ["Table closure rule:"],
        },
        {
          type: "paragraph",
          text: "Staff override: If a participant walks out without paying, staff retain the ability to manually close the table (e.g., charge a default card on file, or flag for follow-up) — the product should not block operations if a diner fails to pay.",
          emphasis: ["Staff override:"],
        },
        {
          type: "paragraph",
          text: "POS reconciliation: Payments recorded through the QR flow sync back to the existing POS/order system, so this doesn't become a second source of truth.",
          emphasis: ["POS reconciliation:"],
        },
        {
          type: "figure",
          id: "merchant-table-status",
          sourceImage: {
            url: "https://carbon-media.accelerator.net/0000000mwIt/ihLboLvRPznbJuCMhhgjBQ;1400x1194.png?auto=webp",
            width: 1400,
            height: 1194,
          },
        },
        {
          type: "paragraph",
          text: "This is a little description underneath your image.",
        },
      ],
    },
    {
      id: "security-and-trust-design",
      title: "Security & Trust Design",
      blocks: [
        {
          type: "paragraph",
          text: 'The shareable payment link is the most sensitive surface in this product as anyone holding it can attempt to interact with the bill, so it needs explicit safeguards rather than relying on a general "secure payments" badge.',
        },
        {
          type: "paragraph",
          text: "Scoped links: Each link is scoped to one bill and one session only, and cannot be reused after the table is settled.",
          emphasis: ["Scoped links:"],
        },
        {
          type: "paragraph",
          text: "Time-bound expiry: Links expire after a defined window (e.g., end of the dining session) to limit exposure if forwarded or leaked.",
          emphasis: ["Time-bound expiry:"],
        },
        {
          type: "paragraph",
          text: "No stored value exposure: The link grants access to view/pay a specific amount — it never exposes saved card details or grants broader account access.",
          emphasis: ["No stored value exposure:"],
        },
        {
          type: "paragraph",
          text: "Tamper visibility: Any attempt to alter a split amount outside the defined bill total is rejected before payment, not just flagged after the fact.",
          emphasis: ["Tamper visibility:"],
        },
      ],
    },
    {
      id: "accessibility-considerations",
      title: "Accessibility Considerations",
      blocks: [
        {
          type: "paragraph",
          text: "Minimum 44x44pt tap targets on all payment actions, given this flow is often used in low-light restaurant settings and by a wide age range of diners.",
        },
        {
          type: "paragraph",
          text: "High-contrast text for all monetary values — the number a user is about to pay should never be the hardest thing to read on the screen.",
        },
        {
          type: "paragraph",
          text: "Language selection is offered at the very first step, before any bill information is shown, so non-native speakers aren't navigating financial decisions in an unfamiliar language.",
        },
        {
          type: "paragraph",
          text: "Screen-reader labeling on split/tip controls, since these are the two decision points most likely to cause a costly mistake if mis-tapped.",
        },
      ],
    },
    {
      id: "value-impact-hypothesized-outcomes",
      title: "Value Impact — Hypothesized Outcomes",
      blocks: [
        {
          type: "paragraph",
          text: "Faster checkout: Expected to reduce wait time from the typical 10 minutes (waiting for staff) to under 2 minutes — to be validated via task-completion timing in usability testing.",
          emphasis: ["Faster checkout:"],
        },
        {
          type: "paragraph",
          text: "Convenient splitting: Removes the awkwardness of one person paying up front and chasing others afterward.",
          emphasis: ["Convenient splitting:"],
        },
        {
          type: "paragraph",
          text: "Cultural sensitivity: Adaptive tipping options (percentage, round-up, or no tip) are designed to respect regional norms rather than imposing a single default.",
          emphasis: ["Cultural sensitivity:"],
        },
        {
          type: "paragraph",
          text: "Transparency & trust: Itemised bills, scoped payment links, and clear status per participant are intended to build confidence in fairness and security.",
          emphasis: ["Transparency & trust:"],
        },
        {
          type: "paragraph",
          text: "Flexibility: No app download required. The flow works instantly in-browser after a QR scan.",
          emphasis: ["Flexibility:"],
        },
      ],
    },
    {
      id: "future-recommendations",
      title: "Future Recommendations — Hypothesised Outcomes",
      blocks: [
        {
          type: "subsection",
          id: "hypothetical-test-plan",
          title: "Hypothetical Test Plan",
          blocks: [
            {
              type: "paragraph",
              text: "Method: Recruit 5–7 participants across different regions and run lightweight think-aloud sessions.",
              emphasis: ["Method:"],
            },
            {
              type: "paragraph",
              text: "Metrics: Task completion time (target <90 sec), error rate (e.g., wrong split, tip confusion), and SUS score for perceived ease of use.",
              emphasis: ["Metrics:"],
            },
            {
              type: "paragraph",
              text: "Scenarios to test: Equal split vs. itemized split; tipping behavior across cultures; recovery from a declined payment or expired link.",
              emphasis: ["Scenarios to test:"],
            },
          ],
        },
      ],
    },
    {
      id: "suggested-kpis",
      title: "Suggested KPIs",
      blocks: [
        {
          type: "paragraph",
          text: "Speed & efficiency: Average time to complete payment; % reduction in checkout time vs. staff-assisted baseline",
          emphasis: ["Speed & efficiency:"],
        },
        {
          type: "paragraph",
          text: "Adoption & usage: QR scan-to-payment conversion rate; % of diners completing payment without staff assistance",
          emphasis: ["Adoption & usage:"],
        },
        {
          type: "paragraph",
          text: "Bill-splitting behavior: % of transactions completed as split payments; distribution across equal / itemized / custom",
          emphasis: ["Bill-splitting behavior:"],
        },
        {
          type: "paragraph",
          text: "Revenue & tips: Average tip per transaction; tipping rate variance by region",
          emphasis: ["Revenue & tips:"],
        },
        {
          type: "paragraph",
          text: "Retention: Repeat usage rate within a defined period (loyalty signal)",
          emphasis: ["Retention:"],
        },
        {
          type: "paragraph",
          text: 'Reliability: Failed/retried payment rate; unresolved "unpaid share" rate per table',
          emphasis: ["Reliability:"],
        },
      ],
    },
  ],
};
