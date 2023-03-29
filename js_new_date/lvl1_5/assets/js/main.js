let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];


let d = new Date("2001,3,4")

console.log(list[d.getMonth()]);



let d1 = new Date("2019,12,24")

console.log(list[d1.getMonth()]);

let d2 = new Date("1410, 07, 15")

console.log(list[d2.getMonth()]);


// console.log(("2001,3,4")); //März
// console.log(monatsName("2019,12,24")); //Dezember
// console.log(monatsName("1410,07,15")); //Juli


