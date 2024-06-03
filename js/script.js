// Chiedi all’utente il suo nome
    let yourName = prompt("Come ti chiami?")
    console.log(yourName);


// poi chiedi il suo cognome
    let yourSurname = prompt("Come fai di cognome?")
    console.log(yourSurname);


// poi chiedi il suo colore preferito
    let yourColor = prompt("Il tuo colore preferito?")
    console.log(yourColor);

// Infine scrivi sulla pagina nomecognomecolorepreferito23
    let password = 
    
    ` 
    ${yourName}${yourSurname}${yourColor}23

    `
    console.log(password);

    document.getElementById('id_password').innerHTML = (password)