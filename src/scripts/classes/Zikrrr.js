import { random } from '../lib/random';

export class Zikrrr {
  data = [];

  constructor(data) {
    this.data = data;
  }

  getRandomZikrrr() {
    return this.data[random(0, this.data.length)];
  }
}

export default Zikrrr;
