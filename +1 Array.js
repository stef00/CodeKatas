function upArray(arr){
    if(arr.every(c=> c>=0))
    {
        let num = arr.join("");
        num++;
        return Array.from(num.toString()).map(Number);
    }
    else return null;
  }


console.log(upArray([2,3,9]), [2,4,0]);
console.log(upArray([4,3,2,5]), [4,3,2,6]);
console.log(upArray([1,-9]), null);
