import React from 'react';
import { createRoot } from 'react-dom/client';
import { defineConfig, Studio } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '../../sanity/schemaTypes/index.js';

const config = defineConfig({
  name: 'ayyapaWoodWorks',
  title: 'Ayyapa Wood Works',
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'replace-with-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});

createRoot(document.getElementById('sanity-studio-root')).render(
  React.createElement(Studio, { config }),
);
