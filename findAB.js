function findAB(numbers,c){
    //coding and coding...
    let arr =[];
    for(let n of numbers){
        for (let i = numbers.indexOf(n)+1; i < numbers.length; i++) {
            const element = numbers[i];
            if(n*element==c){
                arr.push(n);
                arr.push(element);
                return arr;
            }else return null;
            
        }
    }
  
  }

console.log(findAB([1,2,3],3), [1,3]);
console.log(findAB([1,2,3],6), [2,3]);
console.log(findAB([1,2,3],7), null);
console.log(findAB([1,2,3,6],6), [1,6]);
console.log(findAB([1,2,3,4,5,6],15), [3,5]);
console.log(findAB([0,0,2],4), null);
console.log(findAB([0,0,2,2],4), [2,2]);
console.log(findAB([-3,-2,-2,-1,0,1,2,3,4],4), [-2,-2]);
console.log(findAB([-3,-2,-2,-1,0,1,2,3,4],0), [-3,0]);
console.log(findAB([-3,-2,-1,0,1,2,3,4],4), [1,4]);