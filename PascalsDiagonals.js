function generateDiagonal(row, len) {
    let arr =[];
    for (let k = 0; k < len; k++) {
        let num = rFact(row)/(rFact(k)*rFact(row-k));
        row++;
        arr.push(Math.round(num));
    }
    return arr;
}

function rFact(num) {
    if (num <= 0) {
        return 1;
    } else {
        return num * rFact(num - 1);
    }
}


console.log(generateDiagonal(2, 5), [1, 3, 6, 10, 15]);
// console.log(generateDiagonal(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(generateDiagonal(3, 7), [1, 4, 10, 20, 35, 56, 84]);