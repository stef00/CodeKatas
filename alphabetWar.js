function alphabetWar(fight) {
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
    let puntiL = 0;
    let puntiR = 0;
    let red = fight.split("").reduce(function (i, v) {
        if (v.match(/[wpbs]/)) {
            puntiL += leftP[v];
        } else if (v.match(/[mqdz]/)) {
            puntiR += rightP[v];
        }
        return puntiL - puntiR;
    }, 0);
    if (red > 0) {
        return "Left side wins!";
    } else if (red < 0) {
        return "Right side wins!"
    } else if (red == 0) {
        return "Let's fight again!";
    }
}


console.log(alphabetWar("z"), "Right side wins!");
console.log(alphabetWar("zdqmwpbs"), "Let's fight again!");
console.log(alphabetWar("zzzzs"), "Right side wins!");
console.log(alphabetWar("wwwwww"), "Left side wins!");