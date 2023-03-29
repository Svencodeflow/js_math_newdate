let date = new Date()

date.setFullYear(2222)
date.setDate(-5)
date.setMonth(9)

console.log(date);

document.write(date+"<br>")

let date2 = new Date()

date2.setFullYear(2123)
date2.setDate(-4)

console.log(date2);
document.write(date2+"<br>")


let date3 = new Date()

date3.setFullYear(2123)
date3.setDate(-4)
date3.setMonth(2)

console.log(date3);
document.write(date3+"<br>")


let date4 = new Date()

date4.setFullYear(2123)
date4.setDate(-25)
date4.setMonth(2)


console.log(date4);
document.write(date4+"<br>")




let date5 = new Date()

date5.setDate(date.getDate() + 30)

console.log(date5);
document.write(date5+"<br>")
