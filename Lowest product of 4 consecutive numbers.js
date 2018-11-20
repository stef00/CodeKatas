function lowestProduct(input) {
    let mol_a = [];
    if (input.length < 4)
        return "Number is too small";
    let arr = input.split("");
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let mol = 0;
        if (i < arr.length - 3) {
            mol = arr[i] * arr[i + 1] * arr[i + 2] * arr[i + 3];
            mol_a.push(mol);
        }
    }
    let min = Math.min(...mol_a);
    return min;


}
function lowestProduct(input) {
    let mol_a = [];
    if (input.length < 4)
        return "Number is too small";
    let arr = input.split("");
    console.log(arr);
    return arr.reduce(function (_, _, ind, a) {
        let mol = 0;
        if (ind < a.length - 3) {
            mol = a[ind] * a[ind + 1] * a[ind + 2] * a[ind + 3];
            mol_a.push(mol);
        }
        console.log(Math.min(...mol_a));
        // console.log(num);
        
        return Math.min(...mol_a);
    }, 0);
}




console.log(lowestProduct("123456789"), 24);
console.log(lowestProduct("234567899"), 120);
console.log(lowestProduct("2345611117899"), 1);
console.log(lowestProduct("333"), "Number is too small");
console.log(lowestProduct("1234111"), 4, "Numbers should be consecutives");