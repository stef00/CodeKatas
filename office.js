function outed(meet, boss) {
    const entries = Object.entries(meet);
    let sum = 0;
    entries.forEach(element => {
        if (element[0] != boss) {
            sum += element[1]
        } else {
            sum += element[1] * 2;
        }
    });
    let media = sum / entries.length;
    if (media <= 5) {
        return "Get Out Now!";
    } else {
        return "Nice Work Champ!";
    }
}

console.log(outed({
    'tim': 0,
    'jim': 2,
    'randy': 0,
    'sandy': 7,
    'andy': 0,
    'katie': 5,
    'laura': 1,
    'saajid': 2,
    'alex': 3,
    'john': 2,
    'mr': 0
}, 'laura'), 'Get Out Now!');
console.log(outed({
    'tim': 1,
    'jim': 3,
    'randy': 9,
    'sandy': 6,
    'andy': 7,
    'katie': 6,
    'laura': 9,
    'saajid': 9,
    'alex': 9,
    'john': 9,
    'mr': 8
}, 'katie'), 'Nice Work Champ!');
console.log(outed({
    'tim': 2,
    'jim': 4,
    'randy': 0,
    'sandy': 5,
    'andy': 8,
    'katie': 6,
    'laura': 2,
    'saajid': 2,
    'alex': 3,
    'john': 2,
    'mr': 8
}, 'john'), 'Get Out Now!');