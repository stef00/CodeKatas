function addAll(n) {
    let sum = 0;
    let tot = 0;
    let totArr = [];
    const fatt = rFact(n.length);
    console.log(fatt);

    for (let k = 0; k < fatt; k++) {
        let temp = n.slice(0);
        for (let i = n.length; i > 1; i--) {

            sum = temp.reduce(function (acc, v) {
                return acc + v
            }, 0);
            console.log(sum);
            tot += sum;
            temp.pop();
        }        
        console.log(n);
        
        n = shuffle(n)
        totArr.push(tot);
    }
    // let temp = totArr.reduce(function (acc, val) {
    //     console.log(acc);
    //     console.log(val);
        
    //     if (val < acc) {
    //         return acc
    //     } else {
    //         return val
    //     }
    // }, 0)
    // console.log(totArr);
    // console.log(temp);
    console.log(totArr);
    
    let prova = totArr.sort();
    console.log(totArr.sort() );
    
    console.log(totArr[1]);
    
}


function rFact(num) {
    if (num <= 0) {
        return 1;
    } else {
        return num * rFact(num - 1);
    }
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
// console.log(addAll([1,2,3], 9));
// console.log(addAll([1,2,3,4], 19));
console.log(addAll([1, 2, 3, 4, 5], 33));