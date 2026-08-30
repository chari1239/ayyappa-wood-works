# AGENTS.md

## Project Overview

- Project name: Ayyapa Wood Works
- Purpose: Portfolio website for a woodwork business
- Primary business focus: Custom wooden door designs
- Secondary focus: Other woodwork such as windows, furniture, pooja mandirs, staircases, partitions and custom work

## Architecture

- Frontend technology: HTML, CSS and vanilla JavaScript served by Vite.
- JavaScript architecture: ES modules under `src/js/` with separate modules for app initialization, gallery rendering, lightbox modal behavior and Sanity fetching.
- CSS approach: Single stylesheet at `src/styles/main.css` using CSS variables, responsive breakpoints and component-style class names.
- Sanity CMS architecture: Sanity Studio lives in the `sanity/` workspace folder with schemas in `sanity/schemaTypes/`.
- Demo data: `src/data/demoProjects.js` exports demo categories and projects so the website works before CMS setup.
- Sanity data: `src/js/sanity.js` fetches `project` and `category` documents only when `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET` are configured.
- Frontend/Sanity connection: `src/js/app.js` calls `fetchSanityContent()`. If Sanity returns usable content, the site renders that data. If Sanity is missing or fails, demo data is used.
- Image handling: `src/utils/image.js` centralizes Sanity image CDN URLs, resizing, quality and modern format handling. Demo images use remote URLs directly.

## Design Guidelines

- Use a premium Indian woodwork aesthetic.
- Prefer warm cream/off-white backgrounds, dark brown typography and wood-inspired accents.
- Door photography should be the primary visual focus.
- Design responsive/mobile-first layouts that work on desktop, tablet and mobile.
- Use an elegant serif font for major headings and a clean modern sans-serif for body text.
- Keep spacing generous and layouts calm.
- Use subtle hover and reveal animations only; avoid excessive motion.
- Avoid unnecessary UI or framework complexity.
- Preserve the premium studio feel rather than making the site look like a generic contractor template.

## Content Rules

- Do not invent business claims.
- Do not invent years of experience.
- Do not invent awards.
- Do not invent customer numbers or project counts.
- Keep business information configurable through `src/config.js` and environment variables.
- Door designs are the primary portfolio category and should receive the most design attention.
- Placeholder contact details must remain clearly replaceable until real details are provided.

## CMS Rules

- Sanity project structure lives under `sanity/`.
- Available schemas: `project` and `category`.
- Project fields: `title`, `slug`, `mainImage`, `galleryImages`, `category`, `description`, `woodType`, `style`, `featured`, `displayOrder`.
- Category fields: `title`, `slug`, `description`, `image`, `type`.
- Category type values: `door` and `woodwork`.
- New categories should be added as Sanity `category` documents and assigned the correct `type`.
- New projects should reference a category so the frontend can decide whether they belong in Door Designs or Other Wood Works.
- Sanity image URLs are generated only through `src/utils/image.js`.
- Do not download Sanity images locally.
- Add alt text to Sanity images for accessibility and SEO.

## Development Rules

- Run the website locally with `npm run dev`.
- Run a production build with `npm run build`.
- Preview the production build with `npm run preview`.
- Run Sanity Studio with `npm run sanity:dev` after configuring `sanity/.env`.
- Frontend environment variables use the `VITE_` prefix and are documented in `.env.example`.
- Sanity Studio environment variables are documented in `sanity/.env.example`.
- The site must keep working with demo data when Sanity credentials are missing.
- Before finishing changes, verify imports, build behavior, navigation links, gallery filtering, lightbox behavior, mobile navigation, WhatsApp links and image alt text.

## Coding Guidelines

- Keep the implementation simple.
- Prefer reusable components/functions.
- Avoid unnecessary dependencies.
- Do not introduce a frontend framework unless there is a strong reason.
- Keep Sanity-specific code isolated.
- Keep business configuration centralized.
- Maintain responsive behavior.
- Optimize images through responsive sizes, lazy loading and Sanity CDN helpers.
- Avoid breaking existing functionality.
- Preserve user changes and do not rewrite working parts unnecessarily.

## Future Codex Context

Future Codex prompts may ask for:

- New gallery categories
- New Sanity schemas
- New sections
- SEO improvements
- Design changes
- Image optimization
- Deployment
- WhatsApp/contact changes
- New portfolio functionality

Future Codex sessions MUST read `AGENTS.md` before making changes.

If a future user request conflicts with `AGENTS.md`, follow the user's explicit current request, then update `AGENTS.md` to reflect the new direction.

## Change Log

### 2026-08-23

- Initial project created
- Added responsive portfolio website
- Added demo project and category data
- Added Sanity CMS foundation
- Added reusable gallery and lightbox behavior
- Added centralized configuration for Sanity and contact details
- Added AGENTS.md
