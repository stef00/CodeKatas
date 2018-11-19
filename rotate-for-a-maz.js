function maxRot(n) {

    let arr = n.toString().split("");
    console.log(arr);
    //1
    var firstElement = arr.shift();
    arr.push(firstElement);

    // let arr2 = arr.copyWithin(arr.length-1,0);
    // arr2.shift();
    console.log(arr);
    //2
    let rimosso = arr.splice(1,1);
    arr.push(rimosso[0]);
    
    
    console.log(arr)
    console.log(rimosso);
   
}

console.log(maxRot(38458215), 85821534);
// console.log(maxRot(195881031), 988103115);
// console.log(maxRot(896219342), 962193428);
// console.log(maxRot(69418307), 94183076);