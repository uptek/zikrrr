import { App } from './classes/App';
import { updateContent } from './components/content';
import { renderElement } from './components/overlay';

const app = new App();
const pausedIndex = localStorage.getItem('pausedIndex');
const tasbih =
  app.getTasbishByIndex(pausedIndex) ||
  app.getTasbihFromURL() ||
  app.getRandomTasbih();

updateContent(tasbih);
renderElement(app);

if (module && module.hot) module.hot.accept();
