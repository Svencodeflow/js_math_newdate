// computer Math.random() * 10 

// spieler über promt 

function game() {
    // console.log(window.prompt());
    let spieler = Number(window.prompt("Gebe eine Zahl zwischen 1-10 ein"))
    let computer = Math.round(Math.random() * 10)
    console.log(spieler);

    if (computer === spieler) {
        alert("Gewonnen. Deine Zahl: "+ spieler +" Computer Zahl: " + computer)
    } else if (spieler >= 11 || spieler <= 0 || isNaN (spieler)){
        alert("Du musst eine Zahl zwischen 1-10 eingeben")
    } else {
        alert("Leider Falsch. Deine Zahl: "+spieler+" Computer Zahl: " + computer)
    }
    console.log(typeof spieler === "number");
}

game()