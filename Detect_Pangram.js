function isPangram(string) {
    let str = string.toLowerCase().split("").filter(c => c.match(/[a-z.]+/));
    let reg = "abcdefghijklmnopqrstuvwxyz".split("");
    for (let i = 0; i < reg.length; i++) {
        for (let j = 0; j < str.length; j++) {
            let alfa = reg[i];
            let stringa = str[j];
            if (alfa == stringa) {
                reg.splice(i, 1, "");
            }
        }
    }   
    if (!reg.join(""))
        return true;
    else return false;
}

function isPangram(string){
    return "abcdefghijklmnopqrstuvwxyz".split('').every(function(e) {
      return string.toLowerCase().indexOf(e) >= 0;
    });
  }

var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string), true);
var string = "This is not a pangram."
console.log(isPangram(string), false);
var string = "Pack my box with five dozen liquor jugs.";
console.log(isPangram(string), true);