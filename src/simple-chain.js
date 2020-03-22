const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(value)
    return this
  },
  removeLink(pos) {
    if (pos != Math.round(pos) ||
    pos === '' ||
        isNaN(pos) ||
        this.chain[pos - 1] === undefined ) {
    this.chain = [];
    throw new Error();
    }
    this.chain.splice(pos - 1, 1);
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let str = '';
    for (let i = 0; i < this.chain.length; i++) {
      if (i === 0) {
        str += '( ' + this.chain[i] + ' )'
      } else {
        str += '~~( ' + this.chain[i] + ' )'
      }
    }
    this.chain = [];
    return str
  }
};

module.exports = chainMaker;
