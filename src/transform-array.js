module.exports = function transform(arr) {
    if(!Array.isArray(arr))  throw "Error";
    let arrRes = arr.map((el, i, mas) => {
        let res;
        res = (el === '--double-next')? mas[i+1]: (el === '--double-prev')? mas[i-1]: el;
        return res;
    });

    if (arrRes.indexOf('--discard-next')>0) arrRes.splice(arrRes.indexOf('--discard-next'),2);
    else if (arrRes.indexOf('--discard-prev')>0) arrRes.splice(arrRes.indexOf('--discard-prev')-1,2);
    
    return arrRes;
    
}

