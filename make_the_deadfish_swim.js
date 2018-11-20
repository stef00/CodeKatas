function parse(data) {
    let arr =[];
    data.split("").reduce(function (i, v) {
        if (v == "i") {
            return ++i;
        } else if (v == "d") {
            return --i;
        } else if (v == "s") {
           return  i * i;
        } else if (v == "o") {
            arr.push(i);
            return i;
        }else{
            return i;
        }
    }, 0);
    return arr;
}


// function parse(data) {
//     let datas = data.split("");
//     let i = 0;
//     for (let v of datas) {
//         if (v == "i") {
//             i++;
//         } else if (v == "d") {
//             i--;
//         } else if (v == "s") {
//             i = i * i;
//         } else if (v == "o") {
//             return i;
//         }
//     }
// }
console.log(parse("iiisdoso"), [8, 64]);