import { CONFIG, DEFAULT_WHATSAPP_MESSAGE, getWhatsAppUrl } from '../config.js';
import { demoCategories, demoProjects } from '../data/demoProjects.js';
import { createFilterableGallery, doorFilters, renderCategoryCards, woodworkFilters } from './gallery.js';
import { getCurrentLanguage, getStoredLanguage, setCurrentLanguage, setStoredLanguage, t } from './i18n.js';
import { createLightbox } from './modal.js';
import { fetchSanityContent } from './sanity.js';
import { getImageUrl } from '../utils/image.js';

const state = {
  galleries: {},
  lightbox: null,
};

document.addEventListener('DOMContentLoaded', init);

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

  setHeroImage(doorProjects[0]?.mainImage || demoProjects[0].mainImage);
  renderCategoryCards(document.querySelector('[data-door-categories]'), doorCategories, 'door-designs');
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
    if (sanityContent) {
      return {
        projects: sanityContent.projects?.length ? sanityContent.projects : demoProjects,
        categories: mergeCategories(sanityContent.categories || [], demoCategories),
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

function mergeCategories(sanityCategories, fallbackCategories) {
  if (!sanityCategories.length) return fallbackCategories;

  const bySlug = new Map(fallbackCategories.map((category) => [category.slug, category]));
  sanityCategories.forEach((category) => bySlug.set(category.slug, category));
  return Array.from(bySlug.values());
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
