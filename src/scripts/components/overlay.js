import { updateContent } from './content';

const DOMStrings = {
  overlay: '.app__overlay',
  show_options: '.app__show-options',
  overlay_container: '.app__overlay__container',
  close_options: '.app__overlay__close',
  pause_zikr: '.pause-zikr',
  refresh_hadith: '.refresh-hadith',
};

const DOMElements = {
  show_options: document.querySelector(DOMStrings.show_options),
  close_options: document.querySelector(DOMStrings.close_options),
  pause_zikr: document.querySelector(DOMStrings.pause_zikr),
  overlay: document.querySelector(DOMStrings.overlay),
  refresh_hadith: document.querySelector(DOMStrings.refresh_hadith),
};

let intervalId;

const createInterval = (app, interval) => {
  interval = parseInt(interval, 10);
  if (intervalId) clearInterval(intervalId);
  if (interval === 0) return;
  intervalId = setInterval(() => {
    updateContent(app.getRandomTasbih());
  }, interval * 60000);
};

const addEventListeners = (app) => {
  DOMElements.show_options.addEventListener('click', () => {
    DOMElements.overlay.style.display = 'grid';
  });
  DOMElements.overlay.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  DOMElements.close_options.addEventListener('click', () => {
    DOMElements.overlay.style.display = 'none';
  });
  DOMElements.pause_zikr.addEventListener('click', (e) => {
    DOMElements.refresh_hadith.disabled = e.target.checked;
    if (e.target.checked) {
      if (intervalId) clearInterval(intervalId);
      localStorage.setItem('pausedIndex', app.index);
    } else {
      localStorage.removeItem('pausedIndex');
    }
  });
  DOMElements.refresh_hadith.addEventListener('change', (e) => {
    localStorage.setItem('refreshInterval', e.target.value);
    createInterval(app, localStorage.getItem('refreshInterval'));
  });
};

export const renderElement = (app) => {
  DOMElements.pause_zikr.checked = localStorage.getItem('pausedIndex') ?? false;
  const interval = localStorage.getItem('refreshInterval') ?? 0;
  DOMElements.refresh_hadith.value = interval;
  if (interval > 0) {
    createInterval(app, interval);
  }
  addEventListeners(app);
};

export default renderElement;
