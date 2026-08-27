# Project Study Page Standard

This document defines the required content, architecture and presentation for every detailed Project Study page on the Weligama Bay Marriott development website.

Copilot must read this document before creating, editing or reviewing any Project Study page.

## Purpose

Project Study pages form the detailed layer beneath the main development-stage pages:

1. Development record — concise account of each stage.
2. Project studies — detailed examination of a specific decision or delivery challenge.
3. Supporting record — documents, drawings and other evidence connected to the study.

A Project Study is a decision record, not a general article, blog post or marketing page. It should show what had to be decided, why it mattered, the constraints and alternatives, what was decided, who was responsible, how it was executed, the outcome and what the project subsequently taught.

## Required source discipline

Project Study content must be based on verified project information. Never invent dates, costs, measurements, parties, quotations, options considered, reasons, results, document titles, evidence classifications or download links.

If a detail cannot be verified, omit it, mark it for verification, use a clearly identified development placeholder or ask for the source. Do not silently convert an assumption into a factual statement.

## Voice and tone

Use a quietly confident, factual and restrained voice. The main narrative should be clear and project-focused. The “My role” section may use first person to distinguish personal responsibility from contributions by advisers, consultants, contractors, operators and capital partners.

Avoid promotional claims, emotional storytelling, hotel-marketing language, unqualified superlatives, heroic framing, claims of personal responsibility for collaborative work and generic conclusions unsupported by the project record.

## Standard route structure

Use lowercase, kebab-case stage routes:

```text
/development/{study-slug}
/design/{study-slug}
/construction/{study-slug}
/operations/{study-slug}
/exit/{study-slug}
```

## Required page structure

Every Project Study should contain these sections unless there is a documented reason to omit one:

1. **Breadcrumb** — `Project Studies / {Stage} / {Study title}` with every available segment linked.
2. **Study hero** — stage, study number, title, standfirst, genuine project image or graphic where available, relevant period or date and evidence status.
3. **Decision summary** — the decision, principal reasoning and result, with only verified numerical callouts.
4. **Contents navigation** — sticky desktop rail and a compact or horizontally scrollable mobile equivalent.
5. **Context** — only the information required to understand the decision.
6. **Constraints** — relevant land, planning, capital, programme, operator, infrastructure, procurement, construction, operational and time constraints.
7. **Options considered** — genuine alternatives only, presented as a comparison matrix, structured list, plan or diagram where appropriate.
8. **Decision taken** — what was decided, why, who approved or led it and which dependencies remained.
9. **Execution** — how the decision was implemented.
10. **My role** — precise verbs that distinguish personal responsibility from external contributions.
11. **Outcome** — verified measurable consequences or a non-quantified description where measurement is unavailable.
12. **Retrospective assessment** — measured judgment about what worked, what did not and what should have happened earlier.
13. **Supporting record** — genuine supporting material only.
14. **Related studies** — two to four full-card links with no nested interactive controls.
15. **Previous and next navigation** — logical movement through the development sequence.

## Supporting record model

Each evidence item should contain:

```js
{
  id,
  title,
  type,
  date,
  evidenceStatus,
  access,
  href
}
```

Permitted access states are `published`, `redacted`, `restricted` and `not-published`. Do not render a clickable action when `href` is unavailable.

## Evidence classifications

- **Contemporaneous record** — created during the relevant project period, such as a signed agreement, dated drawing, approval, cost plan or progress photograph.
- **Corroborated project record** — supported by more than one credible project source.
- **Retrospective project account** — a later account describing an earlier decision or event.
- **Unverified** — requires confirmation before publication and must not be presented publicly as fact.

## Recommended data model

Project Study content should be data-driven:

```js
{
  id: "land-selection",
  number: "01",
  slug: "land-selection",
  stage: "development",
  title: "Land Selection and Assembly",
  standfirst: "",
  route: "/development/land-selection",
  status: "published",
  evidenceStatus: "retrospective-project-account",
  featured: true,
  metadata: {
    periodLabel: "",
    periodValue: "",
    decisionDate: ""
  },
  hero: {
    image: "",
    alt: "",
    caption: ""
  },
  callouts: [],
  sections: [],
  evidence: [],
  relatedStudies: [],
  previousStudy: null,
  nextStudy: null
}
```

Adapt the schema only when a study genuinely requires another content type. Do not hard-code study-specific conditions into the reusable page component.

## Component architecture

Prefer reusable components such as `StudyHero`, `StudyMetadata`, `DecisionSummary`, `StudyContents`, `StudySection`, `OptionsComparison`, `CriteriaMatrix`, `StudyTimeline`, `StudyDiagram`, `RoleAndOutcome`, `EvidencePanel`, `EvidenceCard`, `RelatedStudies` and `StudyNavigation`.

A study-specific visual may be introduced when necessary, but the surrounding structure should remain consistent.

Detailed pages live under `src/ProjectStudyPages/`. Each published study should have a kebab-case `{stage}-{study-slug}` folder containing its plain serializable data record, standalone page component and study-specific visual components. `src/data/projectStudies.js` remains the central registry of uniform records, while `src/ProjectStudyPages/index.js` separately maps study IDs to React components. Do not place React components or functions in study data records.

## Design standard

Project Study pages should feel editorial, architectural, evidence-led, calm, institutional and precise. Use existing typography, colour tokens and spacing; warm neutral surfaces; fine dividers; clear grids; restrained accents and generous whitespace.

Avoid bright dashboard styling, generic SaaS cards, heavy shadows, glassmorphism, gradients, excessive rounding, unnecessary icons, stock hotel imagery, promotional lifestyle imagery and animation without informational value.

## Images and graphics

Prioritise genuine project material in this order: site photographs, construction photographs, drawings, plans, diagrams, maps and verified document extracts. Every image requires meaningful alt text. Captions should identify what the image shows and, where known, its date or project stage.

Do not use a generated visual as factual evidence. Generated visuals may explain a concept but must not be presented as an original project record.

## Tables and diagrams

Use a table for exact comparisons and a diagram for sequence, assembly, movement or relationships. Every table and diagram needs a clear textual equivalent or accessible description.

## Interaction rules

- Use semantic links for navigation and buttons only for actions.
- Never nest interactive controls.
- Provide visible keyboard-focus states and adequate touch targets.
- Respect `prefers-reduced-motion`.
- Account for the sticky header in anchor navigation.
- Do not create broken routes or clickable cards without valid destinations.
- Use the standard `Study in preparation` state for unavailable future studies.

## Responsive rules

Every study must work on large desktop, laptop, tablet and mobile. Verify no horizontal page overflow; readable hero content; usable tables and diagrams; accessible contents navigation; correct image crops; legible metadata; actionable evidence cards and adequate touch targets.

## Search and metadata

Every published study should define a page title, meta description, canonical route, Open Graph title and description, and an Open Graph image where available.

Suggested title: `{Study title} | Weligama Bay Marriott Development`.

## Completion checklist

- The route loads directly and through client-side navigation.
- The study appears correctly on `/project-studies`.
- All facts are supported by a project source.
- Personal responsibility is distinguished from external contributions.
- Constraints and risks are presented.
- Evidence classifications are accurate and no evidence links are fabricated.
- Contents anchors, breadcrumbs, related cards and previous/next links work.
- Keyboard-focus states are visible.
- Mobile has no horizontal overflow.
- Lint and the production build pass.
- No unrelated page is redesigned.