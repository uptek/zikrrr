import data from '../data/data.json';
import { random } from '../lib/random';
import { getParam } from '../lib/getParam';

export class App {
  constructor() {
    this.data = data;
    this.index = 0;
  }

  getRandomTasbih() {
    this.index = random(0, this.data.length);
    return this.data[this.index];
  }

  getPreviousTasbih() {
    if (this.index <= 0) {
      this.index = this.data.length - 1;
    } else {
      this.index -= 1;
    }
    return this.data[this.index];
  }

  getNextTasbih() {
    if (this.index >= this.data.length) {
      this.index = 0;
    } else {
      this.index += 1;
    }
    return this.data[this.index];
  }

  getTasbihById(id = 0) {
    if (id.isNaN === true) {
      return '';
    }

    id = parseInt(id, 10);

    return this.data.find((tasbih) => tasbih.id === id);
  }

  getTasbishByIndex(i) {
    if (i < 0 || i >= this.data.length) return false;
    i = parseInt(i, 10);

    return this.data[i];
  }

  getTasbihFromURL() {
    const id = getParam('id');

    if (!id) return false;

    return this.getTasbihById(id);
  }
}

export default App;
