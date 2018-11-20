function upArray(arr) {
    console.log(arr);
    if (arr.length > 0) {
        if (arr.every(c => c >= 0 && c < 10)) {
            if (arr.length - 11 > 0) {
                // if (arr[arr.length - 11] != 0) {
                var arr2 = arr.splice(arr.length - 10, 10);
                console.log(arr);
                console.log(arr2);
                var num = arr2.join("");
                num++;
                console.log(num)
                return arr.concat(Array.from(num.toString()).map(Number));
            } else {
                var num = arr.join("");
                num++;
                return Array.from(num.toString()).map(Number);
            }
        } else return null;
    } else return null;
}

// console.log(upArray([2, 3, 91]), [2, 4, 0]);
// console.log(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
// console.log(upArray([1, -9]), null);
// console.log(upArray([]), null);
// console.log(upArray([9,2,2,3,3,7,2,0,3,6,8,5,4,7,7,5,8,0,7,5,3,2,6,7,8,4,2,4,2,6,7,8,7,4,5,2,1]), [9,2,2,3,3,7,2,0,3,6,8,5,4,7,7,5,8,0,7,5,3,2,6,7,8,4,2,4,2,6,7,8,7,4,5,2,2]);
console.log(upArray([9, 7, 0, 7, 9, 0, 6, 2, 6, 1, 7, 5, 9]), [9, 7, 0, 7, 9, 0, 6, 2, 6, 1, 7, 6, 0]);