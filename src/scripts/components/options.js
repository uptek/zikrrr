import { updateContent } from './content';

const DOMStrings = {
  prev_zikr: '.prev-zikr',
  next_zikr: '.next-zikr',
  randomize_zikr: '.randomize-zikr',
  refresh_zikr: '.refresh-zikr',
};

const DOMElements = {
  prev_zikr: document.querySelector(DOMStrings.prev_zikr),
  next_zikr: document.querySelector(DOMStrings.next_zikr),
  randomize_zikr: document.querySelector(DOMStrings.randomize_zikr),
  refresh_hadith: document.querySelector(DOMStrings.refresh_zikr),
};

const updateRandomizeIcon = () => {
  const iconColor = localStorage.getItem('pausedIndex') == null ? '#fff' : '#000';
  DOMElements.randomize_zikr.setAttribute('fill', iconColor);
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
  DOMElements.randomize_zikr.addEventListener('click', () => {
    const wasRandomizerEnabled = localStorage.getItem('pausedIndex') === null;
    if (wasRandomizerEnabled) {
      if (intervalId) clearInterval(intervalId);
      localStorage.setItem('pausedIndex', app.index);
    } else {
      localStorage.removeItem('pausedIndex');
    }
    updateRandomizeIcon();
  });
  DOMElements.prev_zikr.addEventListener('click', () => {
    updateContent(app.getPreviousTasbih());
    if (localStorage.getItem('pausedIndex') != null) {
      localStorage.setItem('pausedIndex', app.index);
    }
  });
  DOMElements.next_zikr.addEventListener('click', () => {
    updateContent(app.getNextTasbih());
    if (localStorage.getItem('pausedIndex') != null) {
      localStorage.setItem('pausedIndex', app.index);
    }
  });
  // return;
  // DOMElements.refresh_hadith.addEventListener('change', (e) => {
  //   localStorage.setItem('refreshInterval', e.target.value);
  //   createInterval(app, localStorage.getItem('refreshInterval'));
  // });
};
export const renderElement = (app) => {
  updateRandomizeIcon();
  const interval = localStorage.getItem('refreshInterval') ?? 0;
  // DOMElements.refresh_hadith.value = interval;
  if (interval > 0) {
    createInterval(app, interval);
  }
  addEventListeners(app);
};

export default renderElement;
