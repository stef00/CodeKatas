function isPangram(string) {
    let str = string.split("").filter(c => c != " " && c != ".");
    let reg = "abcdefghijklmnopqrstuvwxyz".split("");
    for (let i = 0; i < reg.length; i++) {
        for (let j = 0; j < str.length; j++) {
            let alfa = reg[i];
            let stringa = str[j];
            if (alfa == stringa) {
                reg.splice(i,1, "");
            }
        }
    }
    if(!reg.join(""))
        return true;
    else return false;
}


var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string), true);
var string = "This is not a pangram."
console.log(isPangram(string), false);