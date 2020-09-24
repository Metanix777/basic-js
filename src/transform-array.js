module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    let res = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i+1] === '--discard-prev') continue;
        switch (arr[i]) {
            case '--discard-prev': continue;
                break;
            case '--discard-next': i++;
                break;   
            case '--double-next': res.push(arr[i+1]);
                break;
            case '--double-prev': res.push(arr[i-1]);
                break;
            default: res.push(arr[i]);
                break;
        }
    };
    return res;   
}
