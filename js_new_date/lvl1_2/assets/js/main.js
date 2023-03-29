let monate = [
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

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];


let date = new Date()

console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth() + " Monat");
console.log(date.getDay() + " Tag");
console.log(date.getHours() + " Stunden");
console.log(date.getMinutes() + " Minuten");

document.getElementById("day").innerHTML = wochenTag[date.getDay()]
document.getElementById("hours").innerHTML = date.getHours()
document.getElementById("minutes").innerHTML = date.getMinutes()
document.getElementById("seconds").innerHTML = date.getSeconds()



