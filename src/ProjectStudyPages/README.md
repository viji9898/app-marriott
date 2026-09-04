# Project Study Pages

This directory contains the standalone implementation for each detailed Project Study page.

## Structure

```text
ProjectStudyPages/
├── ProjectStudyPage.jsx
├── index.js
└── development-land-selection/
    ├── studyData.js
    ├── imageData.js
    ├── LandSelectionStudyPage.jsx
    ├── StudySection.jsx
    ├── CriteriaMatrix.jsx
    └── LandAssemblyDiagram.jsx
```

`ProjectStudyPage.jsx` is the shared preparation page used until a study has an individual implementation.

`index.js` maps a study ID to its individual React page component. Component registration stays separate from content data so study records remain serializable.

Each study folder owns:

- One `studyData.js` record using the common Project Study schema.
- Optional serializable media collections in `imageData.js`.
- One page component responsible for that study's composition.
- Any visual or section components unique to that study.

Shared Project Studies index components remain in `src/components/studies/`. The central `src/data/projectStudies.js` file is a registry that imports standalone records into one uniform collection for navigation, filtering, routing and future vectorization.

## Adding a study

1. Create a kebab-case folder named `{stage}-{study-slug}`.
2. Export one plain data object from `studyData.js` using the existing record shape.
3. Import that record into `src/data/projectStudies.js` and add it to `PROJECT_STUDIES`.
4. Add a standalone page component when the study is ready to publish.
5. Register that component by study ID in `ProjectStudyPages/index.js`.
6. Keep React components, functions and other non-serializable values out of `studyData.js`.

## Image records

Keep image metadata in a study-local `imageData.js` file. Use stable IDs and structured fields for category, sequence, source URL, alternative text, location and capture metadata. Preserve both decimal and source DMS coordinates when supplied, and use ISO 8601 for `capturedAt`. Do not infer dimensions, captions, dates or locations that were not provided or verified.

Before changing a study, read `docs/project-studies/README.md`.
