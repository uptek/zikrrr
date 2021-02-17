import { random } from '../lib/random';

export class App {
  constructor(data) {
    this.data = data;
  }

  getRandom() {
    return this.data[random(0, this.data.length)];
  }

  getById(id) {
    return this.data.find((tasbih) => tasbih.id === id);
  }
}

export default App;
