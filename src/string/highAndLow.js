function highAndLow(numbers){
    let newNum = numbers.split(" ");
    let min = Infinity;
    let max = -Infinity;
    for(let i = 0; i < newNum.length; i++){
        if (min > +newNum[i]){
            min = +newNum[i];
        }
        if (max < +newNum[i]) {
            max = +newNum[i];
        }

    }
    console.log(max + ' ' + min)
    return max + ' ' + min;
}
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")