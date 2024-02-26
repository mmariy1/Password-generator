const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

/* Fetching elements */

passwordOneEl = document.getElementById("passwordOne-el")
passwordTwoEl = document.getElementById("passwordTwo-el")


/* Random password function */ 
/* steps: Math random to select a random number
turn each number into an index to get the elements
put all the random selected indexes into one big password */

function generator() {
    let passwordOne = ""
    let passwordTwo = ""
    for (let i = 0; i < 16; i++) {
        let passwordIndex = Math.floor(Math.random() * characters.length);
        passwordOne += characters[passwordIndex];
    }
    for (let i = 0; i < 16; i++) {
        let passwordIndex = Math.floor(Math.random() * characters.length);
        passwordTwo += characters[passwordIndex];
    }
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo
    
}