// ! CONFRONTO MAIL

// todo Chiedi all’utente la sua email

// todo controlla che sia nella lista di chi può accedere

// todo stampa un messaggio appropriato sull’esito del controllo.


// costante con il prompt input
// costante array con valori
// ciclo + if se ci sta il valore
// stampa in pagina


// ! test link
console.log('====== Sei dentro🤙 ======');


// * Dati di partenza

const stamp = document.querySelector('h2');

const userMail = prompt('Inserisci la tua mail');

const listMail = ['mariorossi@mail.com', 'giuseppeverdi@mail.com', 'claudiobianchi@mail.com', 'mariobrown@mail,com'];

let isUserMail = false;

for (let i = 0; i < listMail.length; i++){
  
  if(listMail[i] === userMail){
    isUserMail = true;
  }
  // console.log(listMail[i]);
}

if(isUserMail){
  stamp.innerText = 'User valido';
}
else{
  stamp.innerText = 'User non valido';
}



// ! Seguendo la lezzione di classe ci sono riuscito, a mente mia manco per il...............
