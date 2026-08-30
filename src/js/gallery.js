import { getImageAlt, getImageSrcSet, getImageUrl } from '../utils/image.js';
import { t } from './i18n.js';

export const doorFilters = [
  { label: 'All', slug: 'all' },
  { label: 'Main Doors', slug: 'main-doors' },
  { label: 'Pooja Doors', slug: 'pooja-doors' },
  { label: 'Double Doors', slug: 'double-doors' },
  { label: 'Traditional', slug: 'traditional-doors' },
  { label: 'Modern', slug: 'modern-doors' },
  { label: 'Carved', slug: 'carved-doors' },
];

export const woodworkFilters = [
  { label: 'All', slug: 'all' },
  { label: 'Windows', slug: 'windows' },
  { label: 'Furniture', slug: 'furniture' },
  { label: 'Pooja Mandirs', slug: 'pooja-mandirs' },
  { label: 'Staircases', slug: 'staircases' },
  { label: 'Partitions', slug: 'partitions' },
  { label: 'Custom Woodwork', slug: 'custom-woodwork' },
];

export function renderCategoryCards(container, categories, target) {
  container.innerHTML = categories
    .map((category) => {
      const src = getImageUrl(category.image, { width: 720, quality: 82 });
      const srcset = getImageSrcSet(category.image, [420, 640, 820]);
      const alt = getImageAlt(category.image, `${category.title} by Ayyapa Wood Works`);
      return `
        <a class="category-card" href="#${target}" data-category-link data-gallery-target="${target}" data-filter="${category.slug}">
          <img src="${src}" ${srcset ? `srcset="${srcset}"` : ''} sizes="(max-width: 700px) 90vw, 28vw" alt="${escapeHtml(alt)}" loading="lazy">
          <span class="category-card__shade"></span>
          <span class="category-card__content">
            <strong>${escapeHtml(category.title)}</strong>
            <small>${escapeHtml(category.description || '')}</small>
          </span>
        </a>`;
    })
    .join('');
}

export function createFilterableGallery({ container, filterContainer, projects, filters, lightbox }) {
  let activeFilter = 'all';
  let visibleProjects = [...projects];

  function renderFilters() {
    filterContainer.innerHTML = filters
      .map((filter) => `
        <button class="filter-button ${filter.slug === activeFilter ? 'is-active' : ''}" type="button" data-filter="${filter.slug}">
          ${escapeHtml(t(`filters.${filter.slug}`) || filter.label)}
        </button>`)
      .join('');
  }

  function renderGallery() {
    visibleProjects = activeFilter === 'all'
      ? [...projects]
      : projects.filter((project) => project.categorySlug === activeFilter || slugify(project.style) === activeFilter);

    if (!visibleProjects.length) {
      container.innerHTML = `<p class="empty-state">${escapeHtml(t('gallery.emptyState'))}</p>`;
      return;
    }

    container.innerHTML = visibleProjects
      .map((project, index) => renderGalleryCard(project, index))
      .join('');
  }

  function setFilter(slug) {
    activeFilter = slug || 'all';
    renderFilters();
    renderGallery();
  }

  function refresh() {
    renderFilters();
    renderGallery();
  }

  filterContainer.addEventListener('click', (event) => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    setFilter(button.dataset.filter);
  });

  container.addEventListener('click', (event) => {
    const button = event.target.closest('[data-project-index]');
    if (!button) return;
    lightbox.open(visibleProjects, Number(button.dataset.projectIndex));
  });

  renderFilters();
  renderGallery();

  return { setFilter, refresh };
}

function renderGalleryCard(project, index) {
  const src = getImageUrl(project.mainImage, { width: 900, quality: 84 });
  const srcset = getImageSrcSet(project.mainImage, [480, 720, 960, 1280]);
  const alt = getImageAlt(project.mainImage, project.title);
  const tallClass = index % 5 === 0 || index % 5 === 3 ? ' gallery-card--tall' : '';

  return `
    <article class="gallery-card${tallClass}">
      <button class="gallery-card__button" type="button" data-project-index="${index}" aria-label="${escapeHtml(t('lightbox.openDetails', { title: project.title }))}">
        <img src="${src}" ${srcset ? `srcset="${srcset}"` : ''} sizes="(max-width: 720px) 92vw, (max-width: 1100px) 45vw, 30vw" alt="${escapeHtml(alt)}" loading="lazy">
        <span class="gallery-card__overlay">
          <span class="gallery-card__category">${escapeHtml(project.category)}</span>
          <span class="gallery-card__title">${escapeHtml(project.title)}</span>
          <span class="gallery-card__meta">${escapeHtml(project.woodType || 'Custom wood')}</span>
        </span>
      </button>
    </article>`;
}

export function slugify(value = '') {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function escapeHtml(value = '') {
  return value
    .toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
