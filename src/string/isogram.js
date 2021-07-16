function isIsogram(str) {
    str = str.toLowerCase();

    const obj = {};
    for (let char of str) {
        obj[char] = obj[char] + 1 || 1;
    }
    let keys = Object.keys(obj);

    for(let i = 0; i < keys.length; i++) {
        if (obj[keys[i]] > 1) {
            return false;
        }

    }
    return  true;

}

console.log(isIsogram('aaass'));
console.log(isIsogram('asdf'));
