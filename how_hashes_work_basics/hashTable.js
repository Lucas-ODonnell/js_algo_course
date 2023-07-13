import { colors } from "./colors.js";
//simple example of hash tables. Not realistic
//Idea is to have some idea of how it works at an elementary level
class HashTable {
  constructor(size = 499) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(k, v) {
    let hashedKeyPosition = this._hash(k);
    if (!this.keyMap[hashedKeyPosition]) {
      this.keyMap[hashedKeyPosition] = [];
    }
    this.keyMap[hashedKeyPosition].push([k, v]);
    return;
  }
  get(k) {
    let hashedKeyPosition = this._hash(k);
    if (this.keyMap[hashedKeyPosition]) {
      for (let i = 0; i < this.keyMap[hashedKeyPosition].length; i++) {
        if (this.keyMap[hashedKeyPosition][i][0] === k)
          return this.keyMap[hashedKeyPosition][i][1];
      }
    }
    return undefined;
  }
  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keys.includes(this.keyMap[i][j][0])) {
            keys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keys;
  }
  values() {
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!values.includes(this.keyMap[i][j][1])) {
            values.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return values;
  }
}
let hash = new HashTable();
colors.forEach((color) => {
  hash.set(color[0], color[1]);
});
