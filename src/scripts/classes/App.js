import data from '../data/data.json';
import { random } from '../lib/random';

export class App {
  constructor() {
    this.data = data;
  }

  getRandomTasbih() {
    return this.data[random(0, this.data.length)];
  }

  getTasbihById(id = 0) {
    return this.data.find((tasbih) => tasbih.id === id);
  }
}

export default App;
