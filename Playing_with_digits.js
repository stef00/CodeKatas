function digPow(n, p) {
    const t = n.toString().split("").map(c => parseInt(c)).reduce(function (a, v, i) {        
        return a + v ** (i + p)
    }, 0)/n;
    return Number.isInteger(t) ? t : -1;

}


console.log(digPow(89, 1), 1)
console.log(digPow(92, 1), -1)
console.log(digPow(46288, 3), 51)
console.log(digPow(695, 2), 2);