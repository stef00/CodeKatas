function sqInRect(lng, wdth) {
    //your code here
    if (lng == wdth) return null;
    let result = [];
    let temp;
    const totSq = lng * wdth;
    console.log(totSq);
    if (lng < wdth) {
        result.push(lng);
        result.push(wdth - lng);
    } else {
        result.push(wdth);
        result.push(lng - wdth);
    }

    temp = totSq - (result[0] ** 2 + result[1] ** 2);

    console.log(temp);
    let i = 0;
    console.log(i);
    while (i < temp) {
        console.log(temp);
        let t = Math.sqrt(temp - i);
        console.log(t);
        if (Number.isInteger(t)) {
            result.push(t);
            console.log(i);
            console.log(t);
            console.log(temp);
            console.log(result);
            temp = temp - Math.pow(t, 2);
            console.log(temp);
            console.log(i);
            i=0
        }
        i++;
    }
    console.log(temp);
    if (temp == 1) {
        result.push(temp)
    }
    return result
}


// console.log(sqInRect(5, 5), null)
// console.log(sqInRect(5, 3), [3, 2, 1, 1])
// console.log(sqInRect(3, 5), [3, 2, 1, 1])
console.log(sqInRect(20, 14), [14, 6, 6, 2, 2, 2])