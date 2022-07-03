import { App } from './classes/App';
import { updateContent } from './components/content';

const app = new App();
const tasbih = app.getTasbihFromURL() || app.getRandomTasbih();

updateContent(tasbih);

if (module && module.hot) module.hot.accept();
