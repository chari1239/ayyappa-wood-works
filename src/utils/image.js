import imageUrlBuilder from '@sanity/image-url';

let builder = null;

export function configureImageBuilder(client) {
  builder = client ? imageUrlBuilder(client) : null;
}

export function getImageAlt(image, fallback = 'Ayyapa Wood Works project image') {
  if (!image) return fallback;
  return image.alt || image.caption || fallback;
}

export function getImageUrl(image, options = {}) {
  const { width = 900, quality = 82, height } = options;

  if (!image) return '';
  if (typeof image === 'string') return image;
  if (image.url) return image.url;

  if (builder && image.asset) {
    let request = builder.image(image).width(width).quality(quality).auto('format');
    if (height) request = request.height(height).fit('crop');
    return request.url();
  }

  return '';
}

export function getImageSrcSet(image, widths = [480, 720, 960, 1280, 1600]) {
  if (!image || (typeof image !== 'string' && image.url)) {
    const baseUrl = getImageUrl(image);
    if (baseUrl && !builder) return '';
  }

  if (!builder || typeof image === 'string' || image.url) return '';

  return widths
    .map((width) => `${getImageUrl(image, { width })} ${width}w`)
    .join(', ');
}
