function expandedForm(num) {
    // Your code here
    let arr = num.toString().split('');
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }
    console.log(arr);
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != "0") {
            console.log(arr[i]);
            let temp = arr[i] * Math.pow(10, arr.length - 1 - i);
            console.log(temp);
            if (i != arr.length - 1)
                str += temp + " + ";
            else
                str += temp;
            console.log(str);
        }
    }
    console.log(str);

    return str;
}

function expandedForm(num) {
    let str = num.toString().split('').map(s => s = parseInt(s)).reduce(function (prev, curr, i, arr) {
        return curr != 0 ? prev + curr * Math.pow(10, arr.length - 1 - i) + (i != (arr.length - 1) ? " + " : "") : prev;
    }, "");
    if (str[str.length - 2] == '+') {
        return str.slice(0, str.length - 3)
    }
    return str;
}

// function expandedForm(num) {
//     return num.toString().split('').map(s => s = parseInt(s)).reduce(function (prev, curr, i, arr) {
//         return curr != 0 ? prev + curr * Math.pow(10, arr.length - 1 - i) + (i != (arr.length - 1) ? " + " : "") : prev;
//     }, "");
// }

console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70300), '70000 + 300 + 4');

console.log(expandedForm(90000), '90000');