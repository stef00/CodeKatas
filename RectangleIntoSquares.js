function sqInRect(lng, wdth) {
    //your code here
    if (lng == wdth) return null;
    let result =[];
    const totSq = lng * wdth;
    console.log(totSq);
    if(lng<wdth){
        result.push(lng);
    }else
    {
        result.push(wdth);
    }
    let temp = totSq - result[0]**2;
    console.log(temp);

    let temp2=temp/3;
    console.log(temp2);
    
    
    console.log(result);
    
}


// console.log(sqInRect(5, 5), null)
console.log(sqInRect(5, 3), [3, 2, 1, 1])
// console.log(sqInRect(3, 5), [3, 2, 1, 1])
console.log(sqInRect(20, 14), [14, 6, 6, 2, 2, 2])