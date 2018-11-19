function maxRot(n) {

    let arr = n.toString().split("");
    
    //1
    var firstElement = arr.shift();
    arr.push(firstElement);
    var primo = arr.join("");

    //2
    let rimosso = arr.splice(1,1);
    arr.push(rimosso[0]);
    
    var secondo = arr.join("");
    //3
    rimosso = arr.splice(2,1);
    arr.push(rimosso[0]);

    var terzo = arr.join("");
    //4
    rimosso = arr.splice(3,1);
    arr.push(rimosso[0]);
    var quarto = arr.join("");

    return Math.max(primo, secondo, terzo, quarto);
   
}

console.log(maxRot(38458215), 85821534);
console.log(maxRot(195881031), 988103115);
console.log(maxRot(896219342), 962193428);
console.log(maxRot(69418307), 94183076);