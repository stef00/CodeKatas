function dateNbDays(money, amount, rate) {

    let years = 0;
    let months = 0;
    let days = 0;
    let rDay = rate / 360;
    while (money <= amount) {
        money += (rDay * money) / 100;
        days++;
    }
    // years = Math.floor(days / 360);
    // console.log(years);
    // console.log(days);

    // // months = Math.floor(days / 30 - 12 * years);
    // months = days % years;
    // console.log(months);

    // let giorni = days - years * 12 * 30 - months * 30;
    // console.log(giorni);

    var myDate = new Date("2016-01-11");
  

    myDate.setDate(days+1);
    return myDate.toJSON().slice(0,10);
    





}



console.log(dateNbDays(4281, 5087, 2), "2024-07-03");
console.log(dateNbDays(100, 150, 2), "2035-12-26");
console.log(dateNbDays(4620, 5188, 2), "2021-09-19");
console.log(dateNbDays(9999, 11427, 6), "2018-03-13");
console.log(dateNbDays(3525, 4822, 3), "2026-04-18");
console.log(dateNbDays(5923, 6465, 6), "2017-06-10");
console.log(dateNbDays(4254, 4761, 8), "2017-05-22");
console.log(dateNbDays(1244, 2566, 4), "2033-11-04");
console.log(dateNbDays(6328, 7517, 5), "2019-05-25");
console.log(dateNbDays(2920, 3834, 2), "2029-06-03");
console.log(dateNbDays(7792, 8987, 4), "2019-07-09");