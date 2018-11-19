function maxRot(n) {
    let arr = n.toString().split("");
    let arr_pos =[n];
    for (i = 0; i < arr.length -1; i++) {
        let rimosso = arr.splice(i, 1);
        arr.push(rimosso[0]);
        arr_pos.push(arr.join(""));
    }
    console.log(arr_pos)
    return Math.max(...arr_pos);
}

console.log(maxRot(38458215), 85821534);
console.log(maxRot(195881031), 988103115);
console.log(maxRot(896219342), 962193428);
console.log(maxRot(69418307), 94183076);