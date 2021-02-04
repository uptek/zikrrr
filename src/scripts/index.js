import { Zikrrr } from './classes/Zikrrr';
import { data } from './lib/data';
import { updateContent } from './components/content';

const zikrrr = new Zikrrr(data);

updateContent(zikrrr.getRandomZikrrr().content);

if (module && module.hot) module.hot.accept();
