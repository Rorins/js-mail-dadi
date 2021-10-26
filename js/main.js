/*creo array con lista email*/
const email = ["ciao@mail.it","arrivederci@mail.it","miao@mail.it"];
/*richiesta all'utente dell'email*/
const emailUser = prompt("inserisci email");
/*Creo un boolean che setto a falso e poi diventerà vero una volta trovata l'email*/
let accessGranted = false;
/*faccio loop per scorrere l'array fino alla fine della sua lunghezza e se l'email coincide in un qualunque momento il boolean diventa vero*/
for (i=0; i < email.length; i++){
    if (emailUser === email[i]){
        accessGranted = true;
    }
}

/*se il boolean è vero allora entri se no stai fuori*/
if (accessGranted === true){
    alert("Access granted")
} else {
    alert("Access denied")
}

/*Numeri generati per giocatore e computer */
const playerScore = Math.floor(Math.random() * 6) + 1;
const computerScore = Math.floor(Math.random() * 6) + 1;
console.log(`Your score is ${playerScore}, your opponent's is ${computerScore}`)

/*Se giocatore ha score più alto vince, se più basso perde altrimenti pareggia */
if (playerScore > computerScore){
    alert("You Win!")
} else if (playerScore < computerScore){
    alert("You Lose!")
} else {
    alert("Draw")
}
