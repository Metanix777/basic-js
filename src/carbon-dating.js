const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let k = 0.693/HALF_LIFE_PERIOD
  if(typeof sampleActivity !== 'string'){
    return false
  }if(/[a-zA-Z]/.test(sampleActivity)){
    return false
  }if(+sampleActivity <= 0 || +sampleActivity > MODERN_ACTIVITY){
    return false
  }else{
    return Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/k)
  }
}; 
