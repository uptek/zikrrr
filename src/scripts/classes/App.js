import data from '../data/data.json';
import { random } from '../lib/random';
import { getParam } from '../lib/getParam';

export class App {
  constructor() {
    this.data = data;
  }

  getRandomTasbih() {
    return this.data[random(0, this.data.length)];
  }

  getTasbishByIndex(i) {
    if (i < 0 || i >= this.data.length) return false;
    i = parseInt(i, 10);
    return this.data[i];
  }

  getTasbihById(id = 0) {
    if (id.isNaN === true) {
      return '';
    }

    id = parseInt(id, 10);

    return this.data.find((tasbih) => tasbih.id === id);
  }

  getTasbihFromURL() {
    const id = getParam('id');

    if (!id) return false;

    return this.getTasbihById(id);
  }
}

export default App;
