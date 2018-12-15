function evenNumbers(array, number) {
    let temp = array.filter(c => {
        return c % 2 == 0 || c == 0;
    })
    const rem = temp.length-number;
    for (let i = 0; i < rem; i++) {
        temp.shift()         
    }
    return temp
}


console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);
// console.log(evenNumbers([2, 7, 9, 0, -8, 5, -6, -4, 2, 3 ,0], 5), [-8, -6, -4, 2, 0]);