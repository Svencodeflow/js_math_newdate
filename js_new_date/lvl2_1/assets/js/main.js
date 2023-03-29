const datumse = document.getElementById("date")
let datum = new Date()


console.log(datum);


function giveDate() {
    let text;

    text = `${datum.getDate()}-${datum.getMonth() + 1}-${datum.getFullYear()}`

    datumse.innerHTML = text
}