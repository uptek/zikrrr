import data from './lib/data.json';
import { App } from './classes/App';
import { updateContent } from './components/content';

const app = new App(data);
const tasbih = app.getRandom();
updateContent(tasbih.content);

if (module && module.hot) module.hot.accept();
