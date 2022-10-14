// ! GIOCO DEI DADI

// todo Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

// todo Stabilire il vincitore, in base a chi fa il punteggio più alto.

/* Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve? */



// ! test link
console.log('====== Sei dentro a dadi🤙 ======');

// all'evento CLICK mi devi generare 2 numeri casuali (1 - 6): 1 per UTENTE 1 per PC. Poi li devi CONFRONTARE tra loro. il numero MAGGIORE sarà STAMPATO in pagina


// evento click

// generare il numero casuale per UTENTE

// generare il numero casuale per PC

// Confronto dei numeri casuali

// stampa vincitore

// ! Dati
const btnStart = document.querySelector('button');
  console.log(btnStart);

const stamp = document.querySelector('h2');
  console.log(stamp);

// const min = 1;
const max = 6;

let numUser, numPc, winner;


// ! LOGICA

  btnStart.addEventListener('click', function (){
    // console.log('cliccato');
    
    //* estrazione per User
    numUser = Math.floor(Math.random() * max) +1;
    console.log('numUser--->', numUser);
    
    // * estrazione per Pc
    numPc = Math.floor(Math.random() * max) +1;
    console.log('numPc--->', numPc);

    // * selezione vincitore
    if(numUser > numPc){
      winner = 'Vince UTENTE'
    }
    else if( numUser < numPc){
      winner = 'Vince COMPUTER'
    }
    else{
      winner = 'Parità, Lancia di nuovo!'
    }

    stamp.innerText = winner;
  });