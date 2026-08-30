import { getWhatsAppUrl } from '../config.js';
import { getImageAlt, getImageSrcSet, getImageUrl } from '../utils/image.js';
import { t } from './i18n.js';

export function createLightbox() {
  const root = document.querySelector('[data-lightbox]');
  const panel = document.querySelector('[data-lightbox-panel]');
  const image = document.querySelector('[data-lightbox-image]');
  const category = document.querySelector('[data-lightbox-category]');
  const title = document.querySelector('[data-lightbox-title]');
  const wood = document.querySelector('[data-lightbox-wood]');
  const description = document.querySelector('[data-lightbox-description]');
  const whatsapp = document.querySelector('[data-lightbox-whatsapp]');
  const prev = document.querySelector('[data-lightbox-prev]');
  const next = document.querySelector('[data-lightbox-next]');
  const closeButtons = document.querySelectorAll('[data-lightbox-close]');

  let activeList = [];
  let activeIndex = 0;
  let lastFocused = null;

  function open(projects, index) {
    activeList = projects;
    activeIndex = index;
    lastFocused = document.activeElement;
    render();
    root.classList.add('is-open');
    root.setAttribute('aria-hidden', 'false');
    document.body.classList.add('has-lightbox');
    panel.focus();
  }

  function close() {
    root.classList.remove('is-open');
    root.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('has-lightbox');
    if (lastFocused) lastFocused.focus();
  }

  function move(direction) {
    if (!activeList.length) return;
    activeIndex = (activeIndex + direction + activeList.length) % activeList.length;
    render();
  }

  function render() {
    const project = activeList[activeIndex];
    if (!project) return;

    const url = getImageUrl(project.mainImage, { width: 1400, quality: 86 });
    image.src = url;
    image.alt = getImageAlt(project.mainImage, project.title);
    image.srcset = getImageSrcSet(project.mainImage, [640, 960, 1280, 1600]);
    image.sizes = '(max-width: 900px) 92vw, 58vw';
    category.textContent = project.category;
    title.textContent = project.title;
    wood.textContent = project.woodType || t('lightbox.fallbackWood');
    description.textContent = project.description || t('lightbox.fallbackDescription');
    whatsapp.href = getWhatsAppUrl(`Hello, I am interested in this design: ${project.title}.`);
    prev.setAttribute('aria-label', t('lightbox.previous'));
    next.setAttribute('aria-label', t('lightbox.next'));
    closeButtons.forEach((button) => button.setAttribute('aria-label', t('lightbox.close')));
  }

  closeButtons.forEach((button) => button.addEventListener('click', close));
  prev.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));

  document.addEventListener('keydown', (event) => {
    if (!root.classList.contains('is-open')) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
  });

  function refresh() {
    if (root.classList.contains('is-open')) {
      render();
    }
  }

  return { open, close, refresh };
}
