import { App } from './classes/App';
import { updateContent } from './components/content';

const app = new App();
const tasbih = app.getRandomTasbih();

updateContent(tasbih.content);

if (module && module.hot) module.hot.accept();
