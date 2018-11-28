function generateDiagonal(row, len) {
    // return an array containing the numbers in the nth diagonal of Pascal's triangle, to the specified length
    let n = row;
    console.log(n);
    let arr =[];

    for (let k = 0; k < len; k++) {
        let num = rFact(n)/(rFact(k)*rFact(n-k));
        n++;
        arr.push(num);
        console.log(num);
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
console.log(generateDiagonal(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(generateDiagonal(3, 7), [1, 4, 10, 20, 35, 56, 84]);