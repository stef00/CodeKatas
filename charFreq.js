// function solve(s) {

//     let obj = {};
//     let temp = false;
//     s.split("").forEach(function (val) {
//         console.log(val);
//         if (obj[val]) {
//             obj[val]++;
//         } else {
//             obj[val] = 1;
//         }
//     });
//     console.log(obj);
//     s.split("").forEach(function (val, i, arr) {
//         console.log(val);
//         console.log(obj[arr[i]]);
//         if (obj[arr[i]] == obj[arr[i + 1]] - 1 || obj[arr[i]] - 1 == obj[arr[i + 1]] || Object.entries(obj).length == 1) {
//             temp = true;
//             break;
//         }
//         console.log(temp);

//     });

//     console.log(temp);

//     return temp;
// }

function solve(s) {

    let arr = [];
    let temp = false;
    s.split("").forEach(function (val, i) {
        console.log(val);
        if (arr[val]) {
            arr[val]++;
        } else {
            arr[val] = 1;
        }
    });
    console.log(arr);


        for (let arg in arr) {
            console.log(arr[arg]);
            
        }

    console.log(temp);

}

// console.log(solve('aaaa'), true);
// console.log(solve('abba'), false);
// console.log(solve('abbba'), true);
console.log(solve('aabbcc'), false)
// console.log(solve('aaaabb'), false)
// console.log(solve('aabcde'), true);
// console.log(solve('aabbccddd'), true);
// console.log(solve('abcde'), true);
// console.log(solve('aaabcde'), false)
// console.log(solve('abbccc'), false)