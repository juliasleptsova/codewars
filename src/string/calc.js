function calc(x){
    let num = [];
    let sum1 = 0,
        sum2 = 0;
    for (let i = 0; i < x.length; i++) {
        num.push(x[i].charCodeAt(0));
    }

    let total1 = [...num.join('')];
    for (let i = 0; i < total1.length; i++) {
        sum1 += +total1[i];
    }
    let total2 = num.concat();
    total2 = [...total2.join('')];
    for (let i = 0; i < total2.length; i++) {
        if (+total2[i] === 7) {
            total2[i] = 1;
        }
        sum2 += +total2[i];
    }

    return sum1 -sum2;
}

console.log(calc('abcdef'))