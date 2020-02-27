module.exports = function countCats(arr) {
  let i = 0;
  arr.map(str => str.map(n => (n == "^^") ? i++ : 0));
  return i;
}

