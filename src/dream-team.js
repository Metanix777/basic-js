module.exports = function createDreamTeam(arr) {
  let str = "";
  try{
    arr.map(n => (typeof(n) == "string") ? str += n.trim()[0].toUpperCase() : "");
    return str.split("").sort().join("");
  }catch {
    return false;
  }
};


