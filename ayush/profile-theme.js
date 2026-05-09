  const themeBtn = document.getElementById('themeBtn');
  const themeLabel = document.getElementById('themeLabel');
  const avatarImages = Array.from(document.querySelectorAll('.profile-avatar-img'));
  const themeMedia = window.matchMedia('(prefers-color-scheme: dark)');

  function getResolvedTheme(theme) {
    if (theme === 'auto') return themeMedia.matches ? 'dark' : 'light';
    return theme;
  }

  function updateAvatarImages() {
    const currentTheme = localStorage.getItem('synthrun-theme') || 'auto';
    const resolvedTheme = getResolvedTheme(currentTheme);
    avatarImages.forEach((img) => {
      const lightSrc = img.dataset.light;
      const darkSrc = img.dataset.dark;
      const nextSrc = resolvedTheme === 'dark' ? darkSrc : lightSrc;
      if (nextSrc && img.getAttribute('src') !== nextSrc) {
        img.setAttribute('src', nextSrc);
      }
    });
  }

  function setTheme(theme) {
    if (theme === 'auto') {
      document.body.removeAttribute('data-theme');
      themeLabel.textContent = 'Auto';
    } else {
      document.body.setAttribute('data-theme', theme);
      themeLabel.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
    }
    localStorage.setItem('synthrun-theme', theme);
    updateAvatarImages();
  }

  function cycleTheme() {
    const current = localStorage.getItem('synthrun-theme') || 'auto';
    const next = current === 'auto' ? 'dark' : current === 'dark' ? 'light' : 'auto';
    setTheme(next);
  }

  setTheme(localStorage.getItem('synthrun-theme') || 'auto');

  if (typeof themeMedia.addEventListener === 'function') {
    themeMedia.addEventListener('change', () => {
      if ((localStorage.getItem('synthrun-theme') || 'auto') === 'auto') {
        updateAvatarImages();
      }
    });
  } else if (typeof themeMedia.addListener === 'function') {
    themeMedia.addListener(() => {
      if ((localStorage.getItem('synthrun-theme') || 'auto') === 'auto') {
        updateAvatarImages();
      }
    });
  }

  themeBtn.addEventListener('click', () => {
    cycleTheme();
  });

  document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented) return;
    const key = event.key.toLowerCase();
    const tag = (event.target && event.target.tagName) ? event.target.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || event.metaKey || event.ctrlKey || event.altKey) return;
    if (key === 't') {
      cycleTheme();
    }
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
