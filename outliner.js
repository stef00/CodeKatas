function findOutlier(integers) {
    //your code here
    let odd = [];
    let even = [];
    return integers.reduce(function (i, val) {
        if (val % 2) {
            odd.push(val);
        } else {
            even.push(val);
        }
        return odd.length < even.length;
    }, 0) ? odd[0] : even[0];
}

console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2, 6, 8, 10, 3]), 3)
console.log(findOutlier([0, 0, 3, 0, 0]), 3)
console.log(findOutlier([1, 1, 0, 1, 1]), 0)