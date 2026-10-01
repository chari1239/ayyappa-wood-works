import React from 'react';
import { createRoot } from 'react-dom/client';
import { defineConfig, Studio } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '../../sanity/schemaTypes/index.js';

const root = createRoot(document.getElementById('sanity-studio-root'));
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;

if (!projectId) {
  root.render(React.createElement(
    'main',
    { style: { padding: '2rem', fontFamily: 'sans-serif' } },
    React.createElement('h1', null, 'Sanity Studio is not configured'),
    React.createElement('p', null, 'Set VITE_SANITY_PROJECT_ID in the Vercel project environment variables, then redeploy.'),
  ));
} else {
const config = defineConfig({
  name: 'ayyapaWoodWorks',
  title: 'Ayyapa Wood Works',
  projectId,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});

  root.render(React.createElement(Studio, { config }));
}
