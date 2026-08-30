import { createClient } from '@sanity/client';
import { CONFIG, HAS_SANITY_CONFIG } from '../config.js';
import { configureImageBuilder } from '../utils/image.js';

const projectQuery = `*[_type == "project"] | order(coalesce(displayOrder, 9999) asc, _createdAt desc) {
  title,
  "slug": slug.current,
  mainImage,
  galleryImages,
  category->{title, "slug": slug.current, type, description, image},
  description,
  woodType,
  style,
  featured,
  displayOrder
}`;

const categoryQuery = `*[_type == "category"] | order(title asc) {
  title,
  "slug": slug.current,
  description,
  image,
  type
}`;

export function getSanityClient() {
  if (!HAS_SANITY_CONFIG) return null;

  const client = createClient({
    projectId: CONFIG.SANITY_PROJECT_ID,
    dataset: CONFIG.SANITY_DATASET,
    apiVersion: CONFIG.SANITY_API_VERSION,
    useCdn: true,
  });

  configureImageBuilder(client);
  return client;
}

export async function fetchSanityContent() {
  const client = getSanityClient();
  if (!client) return null;

  const [projects, categories] = await Promise.all([
    client.fetch(projectQuery),
    client.fetch(categoryQuery),
  ]);

  return {
    projects: projects.map(normalizeProject),
    categories: categories.map(normalizeCategory),
  };
}

function normalizeCategory(category) {
  return {
    title: category.title,
    slug: category.slug,
    description: category.description || '',
    type: category.type,
    image: category.image,
  };
}

function normalizeProject(project) {
  const category = project.category || {};

  return {
    title: project.title,
    slug: project.slug,
    projectType: category.type || 'door',
    category: category.title || 'Door Designs',
    categorySlug: category.slug || 'door-designs',
    woodType: project.woodType || 'Custom wood',
    style: project.style || '',
    featured: Boolean(project.featured),
    displayOrder: project.displayOrder ?? 9999,
    description: project.description || '',
    mainImage: project.mainImage,
    galleryImages: project.galleryImages || [],
  };
}
