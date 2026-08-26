export const LIBRARY_PHASES = [
  "All",
  "Full Cycle",
  "Origination",
  "Feasibility",
  "Brand",
  "Finance",
  "Design",
  "Approvals",
  "Construction",
  "Operations",
  "Exit",
];

export const LIBRARY_RECORDS = [
  {
    id: "MW-CORE-001",
    slug: "project-track-record",
    title: "Marriott Weligama Project Track Record",
    shortTitle: "Project Track Record",
    description:
      "A concise retrospective record of the project from greenfield origination through development, operations and exit.",
    phase: "Full Cycle",
    type: "Project Summary",
    format: "PDF",
    date: "2026",
    pages: 2,
    evidenceStatus: "Reported",
    access: "Public",
    featured: true,
    fileUrl: null,
    thumbnail: null,
    relatedRoutes: ["/overview", "/development", "/operations", "/exit"],
    notes:
      "Selected transaction figures are presented as reported in the project record. The reported per-key value and return on investment require reconciliation against detailed transaction and equity cash-flow schedules.",
  },
  {
    id: "MW-CORE-002",
    slug: "inside-the-marriott-resort-master-document",
    title: "Inside the Marriott Resort — Master Document",
    shortTitle: "Master Project Narrative",
    description:
      "A detailed retrospective narrative covering the origination, design, construction and opening of the resort.",
    phase: "Full Cycle",
    type: "Project Narrative",
    format: "DOCX",
    date: null,
    pages: null,
    evidenceStatus: "Retrospective",
    access: "Restricted",
    featured: true,
    fileUrl: null,
    thumbnail: null,
    relatedRoutes: [
      "/development",
      "/design",
      "/construction",
      "/operations",
      "/lessons",
    ],
    notes:
      "The source contains informal language, placeholders and conflicting dates. Edited extracts are required before public release.",
  },
];