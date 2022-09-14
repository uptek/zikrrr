import { App } from './classes/App';
import { updateContent } from './components/content';
import { renderElement } from './components/options';

const app = new App();
const pausedIndex = localStorage.getItem('pausedIndex');
app.index = pausedIndex;
const tasbih =
  app.getTasbishByIndex(pausedIndex) ||
  app.getTasbihFromURL() ||
  app.getRandomTasbih();

updateContent(tasbih);
renderElement(app);

if (module && module.hot) module.hot.accept();
