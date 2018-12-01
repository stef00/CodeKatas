function alphabetWar(fight) {
    console.log(fight);
    const leftP = {
        w: 4,
        p: 3,
        b: 2,
        s: 1
    }
    const rightP = {
        m: 4,
        q: 3,
        d: 2,
        z: 1
    }
    const convslr = {
        w: 'm',
        p: 'q',
        b: 'd',
        s: 'z'
    }
    const convsrl = {
        m: 'w',
        q: 'p',
        d: 'b',
        z: 's'
    }
    let puntiL = 0;
    let puntiR = 0;
    console.log(fight);

    //conversione
    let conv = fight.split("").map(function (val, i, arr) {
        console.log(val);
        console.log(i);
        if (val != 't' && val != 'j') {
            if (arr[i - 1] == 't' && arr[i + 1] == 'j' || arr[i - 1] == 'j' && arr[i + 1] == 't') {} else {
                if (arr[i - 1] == 't' || arr[i + 1] == 't') { //t=>left
                    if (convsrl[val]) {
                        return convsrl[val];;
                    }
                }
                if (arr[i - 1] == 'j' || arr[i + 1] == 'j') { //t=>lef
                    if (convslr[val]) {
                        return convslr[val];
                    }
                }
            }
        }
        return val;
    });
    //punti
    let res = conv.reduce(function (i, v) {
        if (v.match(/[wpbs]/)) {
            puntiL += leftP[v];
        } else if (v.match(/[mqdz]/)) {
            puntiR += rightP[v];
        }
        return puntiL - puntiR;
    }, 0);
    if (res > 0) {
        return "Left side wins!";
    } else if (res < 0) {
        return "Right side wins!"
    }
    return "Let's fight again!";


}

console.log( alphabetWar("z") , "Right side wins!" );
console.log( alphabetWar("tz") , "Left side wins!" );
console.log(alphabetWar("jz"), "Right side wins!");
console.log(alphabetWar("zt"), "Left side wins!");
console.log(alphabetWar("sj"), "Right side wins!");
console.log(alphabetWar("azt"), "Left side wins!");
console.log(alphabetWar("tzj"), "Right side wins!");
console.log(alphabetWar("jbdt"), "Let's fight again!");
console.log(alphabetWar("wololooooo"), "Left side wins!");
console.log(alphabetWar("zdqmwpbs"), "Let's fight again!");
console.log(alphabetWar("ztztztzs"), "Left side wins!");