function possiblePositions(str) {
    var boardX = ["a", "b", "c", "d", "e", "f", "g", "h"];
    var boardY = ["1", "2", "3", "4", "5", "6", "7", "8"];
    let str2 = str.split("");
    let pos;
    pos = [boardX.indexOf(str2[0]), boardY.indexOf(str2[1])];
    let posn = [];
    posn[0] = [pos[0] + 1, pos[1] + 2]; //
    posn[1] = [pos[0] - 1, pos[1] + 2]; //
    posn[2] = [pos[0] + 2, pos[1] + 1]; //
    posn[3] = [pos[0] + 2, pos[1] - 1]; //
    posn[4] = [pos[0] + 1, pos[1] - 2]; //
    posn[5] = [pos[0] - 1, pos[1] - 2]; //
    posn[6] = [pos[0] - 2, pos[1] + 1]; //
    posn[7] = [pos[0] - 2, pos[1] - 1]; //
    posn.sort();
    console.log(posn);
    
    var newarr = posn.filter(posizione => posizione[0] >= 0 && posizione[1] >= 0 && posizione[0] < 8 && posizione[1] < 8);
    console.log(newarr)
    // newarr.sort();
    console.log(newarr);

    var posizioni = newarr.map(position=> [boardX[position[0]], boardY[position[1]]].join(""));
    console.log(posizioni);

    return posizioni;
}

// console.log(possiblePositions("a1"), ["b3", "c2"]);
// console.log(possiblePositions("d4"), ["b5","c6", "e6", "f5","f3","e2","c2","b3"]);
console.log(possiblePositions("c3"), ['a2', 'a4', 'b1', 'b5', 'd1', 'd5', 'e2', 'e4']);