function getPINs(observed) {

    var combos = [];
    var neighbors = {
        "0": ["8"],
        "1": ["2", "4"],
        "2": ["1", "3", "5"],
        "3": ["2", "6"],
        "4": ["1", "5", "7"],
        "5": ["2", "4", "6", "8"],
        "6": ["3", "5", "9"],
        "7": ["4", "8"],
        "8": ["5", "7", "9", "0"],
        "9": ["6", "8"]
    };
    var strDigits = observed.toString().split("");

    getCombos(strDigits, 0, "");
    return combos;


    // Depth first combinatorial traversal
    function getCombos(digits, idx, curCombo) {

        // Get possible candidates
        var curDigit = digits[idx];
        console.log(curDigit);
        var candidates = new Set(neighbors[curDigit]);
        candidates.add(curDigit);
        console.log(candidates);
        
        // console.log(digits, idx, curCombo, candidates); // Pretty cool
        console.log(digits.length - 1);
        
        candidates.forEach(idx == digits.length - 1 ? reachedEnd : goDeeper);

        // (Avoiding anon funcs)
        function reachedEnd(candidate) {
            combos.push(curCombo + candidate);
        }

        function goDeeper(candidate) {
            getCombos(digits, idx + 1, curCombo + candidate)
        }
    }
}



var expectations = {
    // "8": ["5", "7", "8", "9", "0"],
    // "12": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
    "369": ["339", "366", "399", "658", "636", "258", "268", "669", "668", "266", "369", "398", "256", "296", "259", "368", "638", "396", "238", "356", "659", "639", "666", "359", "336", "299", "338", "696", "269", "358", "656", "698", "699", "298", "236", "239"]
};

for (var pin in expectations) {
    console.log(pin);
    console.log(getPINs(pin), expectations[pin].sort(), 'PIN: ' + pin);
}