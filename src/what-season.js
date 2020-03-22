module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!date.getUTCDate() || date.prototype !== new Date().prototype) throw new Error();
  
  let dateMonth = date.getMonth()+1;
  return ((dateMonth>0 && dateMonth<3)||dateMonth==12)? "winter": (dateMonth>=3 && dateMonth<6)? "spring": (dateMonth>=6 && dateMonth<9)? "summer": "autumn";
};



