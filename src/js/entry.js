if (/^\/studio(?:\/|$)/.test(window.location.pathname)) {
  document.title = 'Ayyapa Wood Works | Sanity Studio';
  document.body.innerHTML = '<div id="sanity-studio-root"></div>';
  document.body.style.cssText = 'margin: 0; min-width: 320px; min-height: 100vh;';
  import('./studio.js');
} else {
  import('./app.js');
}
