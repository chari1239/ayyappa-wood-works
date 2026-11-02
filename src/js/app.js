import { CONFIG, DEFAULT_WHATSAPP_MESSAGE, getWhatsAppUrl } from '../config.js';
import { demoCategories, demoProjects } from '../data/demoProjects.js';
import { createFilterableGallery, doorFilters, renderCategoryCards, slugify, woodworkFilters } from './gallery.js';
import { getCurrentLanguage, getStoredLanguage, setCurrentLanguage, setStoredLanguage, t } from './i18n.js';
import { createLightbox } from './modal.js';
import { fetchSanityContent } from './sanity.js';
import { getImageAlt, getImageUrl } from '../utils/image.js';

const state = {
  galleries: {},
  lightbox: null,
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

async function init() {
  const savedLanguage = getStoredLanguage();
  const initialLanguage = savedLanguage || 'en';

  setCurrentLanguage(initialLanguage);
  initNavigation();
  initLanguageControls();
  initContactLinks();
  initRevealAnimation();

  const content = await loadContent();
  const projects = sortByDisplayOrder(content.projects);
  const categories = content.categories;
  const doorProjects = projects.filter((project) => project.projectType === 'door');
  const woodworkProjects = projects.filter((project) => project.projectType === 'woodwork');
  const doorCategories = categories.filter((category) => category.type === 'door');
  const woodworkCategories = categories.filter((category) => category.type === 'woodwork');

  const heroProject = doorProjects.find((project) => project.categorySlug === 'main-doors') || doorProjects[0];
  setHeroImage(heroProject?.mainImage || demoProjects[0].mainImage);
  const aboutProject = doorProjects.find((project) => project.slug === 'floral-main-door-with-glass-sidelights') || doorProjects[1];
  setSectionImage('[data-about-image]', aboutProject?.mainImage, 'Custom wooden door installed in a home');
  const cncProject = woodworkProjects.find((project) => project.slug === 'inside-the-workshop-cnc-carving-in-progress') || woodworkProjects[0];
  setSectionImage('[data-cnc-image]', cncProject?.mainImage, 'CNC machine carving a wooden panel in the Ayyappa Wood Works workshop');
  renderCategoryCards(document.querySelector('[data-door-categories]'), buildDoorCategoryCards(doorCategories, doorProjects), 'door-designs');
  renderCategoryCards(document.querySelector('[data-woodwork-categories]'), woodworkCategories, 'wood-works');

  state.lightbox = createLightbox();

  state.galleries['door-designs'] = createFilterableGallery({
    container: document.querySelector('[data-door-gallery]'),
    filterContainer: document.querySelector('[data-door-filters]'),
    projects: doorProjects,
    filters: doorFilters,
    lightbox: state.lightbox,
  });

  state.galleries['wood-works'] = createFilterableGallery({
    container: document.querySelector('[data-woodwork-gallery]'),
    filterContainer: document.querySelector('[data-woodwork-filters]'),
    projects: woodworkProjects,
    filters: woodworkFilters,
    lightbox: state.lightbox,
  });

  initCategoryLinks();
  applyLanguage(initialLanguage, { persist: false });

  if (!savedLanguage) {
    openLanguagePrompt();
  }
}

async function loadContent() {
  try {
    const sanityContent = await fetchSanityContent();
    if (sanityContent?.projects?.length) {
      // Real Studio content fully replaces the demo portfolio, so no stock
      // demo images are mixed into the live sections.
      return {
        projects: sanityContent.projects,
        categories: sanityContent.categories || [],
      };
    }
  } catch (error) {
    console.warn('Sanity content could not be loaded. Using demo portfolio data instead.', error);
  }

  return {
    projects: demoProjects,
    categories: demoCategories,
  };
}

const DOOR_CARD_ORDER = ['main-doors', 'pooja-doors', 'double-doors', 'traditional-doors', 'modern-doors', 'carved-doors'];
const DOOR_STYLE_CARDS = { 'traditional-doors': 'traditional', 'modern-doors': 'modern' };

function buildDoorCategoryCards(categories, projects) {
  const bySlug = new Map(categories.map((category) => [category.slug, category]));
  const cards = [];

  DOOR_CARD_ORDER.forEach((slug) => {
    if (bySlug.has(slug)) {
      cards.push(bySlug.get(slug));
      return;
    }

    // Traditional and Modern are styles, not Studio categories: show the
    // card with a real project photo of that style instead of a stock image.
    const style = DOOR_STYLE_CARDS[slug];
    if (!style) return;
    const project = projects.find((item) => slugify(item.style) === style);
    const fallback = demoCategories.find((category) => category.slug === slug);
    if (project && fallback) {
      cards.push({
        title: fallback.title,
        slug,
        description: fallback.description,
        type: 'door',
        image: project.mainImage,
      });
    }
  });

  categories.forEach((category) => {
    if (!DOOR_CARD_ORDER.includes(category.slug)) cards.push(category);
  });

  return cards;
}

function setSectionImage(selector, image, fallbackAlt) {
  // Only Studio images (which carry an asset reference) replace the static
  // section photos; demo placeholder images have a plain URL instead.
  if (!image?.asset) return;
  const element = document.querySelector(selector);
  if (!element) return;
  element.src = getImageUrl(image, { width: 1100, quality: 80 });
  element.alt = getImageAlt(image, fallbackAlt);
}

function sortByDisplayOrder(items) {
  return [...items].sort((a, b) => (a.displayOrder ?? 9999) - (b.displayOrder ?? 9999));
}

function setHeroImage(image) {
  const heroMedia = document.querySelector('[data-hero-media]');
  const url = getImageUrl(image, { width: 1800, quality: 86 });
  heroMedia.style.backgroundImage = `linear-gradient(90deg, rgba(38, 21, 10, 0.74), rgba(38, 21, 10, 0.36)), url('${url}')`;
}

function initNavigation() {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const toggle = document.querySelector('[data-nav-toggle]');

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;
    nav.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });

  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  }, { passive: true });
}

function initLanguageControls() {
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-language-option]');
    if (!button) return;

    event.preventDefault();
    setLanguage(button.dataset.languageOption);
  });

  const promptBackdrop = document.querySelector('[data-language-prompt-backdrop]');
  const promptPanel = document.querySelector('[data-language-prompt-panel]');
  promptBackdrop?.addEventListener('click', () => {
    closeLanguagePrompt();
  });

  promptPanel?.addEventListener('click', (event) => {
    if (event.target.closest('[data-language-option]')) return;
    event.stopPropagation();
  });
}

function setLanguage(language, { persist = true } = {}) {
  const resolved = setCurrentLanguage(language);
  if (persist) {
    setStoredLanguage(resolved);
  }

  applyLanguage(resolved, { persist: false });
  closeLanguagePrompt();
}

function applyLanguage(language, { persist = false } = {}) {
  const resolved = setCurrentLanguage(language);
  if (persist) {
    setStoredLanguage(resolved);
  }

  document.documentElement.lang = resolved;
  document.title = t('meta.title');
  updateMetaTag('name', 'description', t('meta.description'));
  updateMetaTag('property', 'og:title', t('meta.title'));
  updateMetaTag('property', 'og:description', t('meta.description'));

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });

  updateLanguageState(resolved);

  Object.values(state.galleries).forEach((gallery) => gallery.refresh?.());
  state.lightbox?.refresh?.();
}

function updateLanguageState(language) {
  document.querySelectorAll('[data-language-option]').forEach((button) => {
    const isActive = button.dataset.languageOption === language;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function updateMetaTag(attribute, key, value) {
  const selector = `${attribute === 'name' ? 'meta[name' : 'meta[property'}="${key}"]`;
  const metaTag = document.querySelector(selector);
  if (metaTag) {
    metaTag.setAttribute('content', value);
  }
}

function openLanguagePrompt() {
  const prompt = document.querySelector('[data-language-prompt]');
  if (!prompt) return;
  prompt.classList.add('is-open');
  prompt.setAttribute('aria-hidden', 'false');
  prompt.querySelector('[data-language-option="en"]')?.focus();
}

function closeLanguagePrompt() {
  const prompt = document.querySelector('[data-language-prompt]');
  if (!prompt) return;
  prompt.classList.remove('is-open');
  prompt.setAttribute('aria-hidden', 'true');
}

function initCategoryLinks() {
  document.addEventListener('click', (event) => {
    const link = event.target.closest('[data-category-link]');
    if (!link) return;

    const target = link.dataset.galleryTarget;
    const gallery = state.galleries[target];
    if (!gallery) return;

    event.preventDefault();
    gallery.setFilter(link.dataset.filter);
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function initContactLinks() {
  const phoneValue = document.querySelector('[data-business-phone]');
  const whatsappValue = document.querySelector('[data-whatsapp-label]');
  const locationLink = document.querySelector('[data-business-location-link]');
  const callLink = document.querySelector('[data-call-link]');
  const whatsappLink = document.querySelector('[data-whatsapp-link]');
  const directionsLink = document.querySelector('[data-directions-link]');

  if (!phoneValue || !whatsappValue || !locationLink || !callLink || !whatsappLink || !directionsLink) return;

  const phone = CONFIG.BUSINESS_PHONE || '+91XXXXXXXXXX';
  const whatsapp = CONFIG.WHATSAPP_NUMBER || '+91XXXXXXXXXX';
  const cleanedPhone = phone.replace(/[^\d+]/g, '');
  const mapUrl = CONFIG.BUSINESS_LOCATION_URL || 'https://www.google.com/maps/search/?api=1&query=Ayyapa+Wood+Works';
  const mapLabel = t('contact.locationValue') || 'Open in Google Maps';

  phoneValue.textContent = phone;
  whatsappValue.textContent = formatWhatsAppNumber(whatsapp);
  locationLink.textContent = mapLabel;
  locationLink.href = mapUrl;
  locationLink.setAttribute('aria-label', mapLabel);
  callLink.href = `tel:${cleanedPhone}`;
  whatsappLink.href = getWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);
  directionsLink.href = mapUrl;
  directionsLink.textContent = t('contact.directionsCta') || 'Get Directions';
}

function formatWhatsAppNumber(number) {
  if (number === '91XXXXXXXXXX') return '+91 XXXXXXXXXX';
  return number.startsWith('+') ? number : `+${number}`;
}

function initRevealAnimation() {
  const elements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  elements.forEach((element) => observer.observe(element));
}
