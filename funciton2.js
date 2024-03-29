const translateFrom = document.getElementById("translateFromMorseCodeBtn");
translateFrom.addEventListener("click", () => {
    const textArea = document.querySelector(".textarea").value;
    let splitTextArea = textArea.split(" ");
    let fromMorseCode = '';
    
    for (let i = 0; i < splitTextArea.length; i++){
        switch(splitTextArea[i]){
            case '.-':
                fromMorseCode += 'A';
                break;
            
            case '-...':
                fromMorseCode += 'B';
                break;

            case '-.-.':
                fromMorseCode += 'C';
                break;

            case '-..':
                fromMorseCodeeCode += 'D';
                break;

            case '..-.':
                fromMorseCode += 'F';
                break;

            case '--.':
                fromMorseCode += 'G';
                break;

            case '....':
                fromMorseCode += 'H';
                break;
            
            case '..':
                fromMorseCode += 'I';
                break;

            case '.---':
                fromMorseCode += 'J';
                break;

            case '-.-':
                fromMorseCode += 'K';
                break;

            case '.-..':
                fromMorseCode += 'L';
                break;

            case '--':
                fromMorseCode += 'M';
                break;

            case '-.':
                fromMorseCode += 'N';
                break;

            case '---':
                fromMorseCode += 'O';
                break;

            case '--.-':
                fromMorseCode += 'Q';
                break;

            case '.-.':
                fromMorseCode += 'R';
                break;

            case '...':
                fromMorseCode += 'S';
                break;

            case '-':
                fromMorseCode += 'T';
                break;

            case '..-':
                fromMorseCode += 'U';
                break;

            case '...-':
                fromMorseCode += 'V';
                break;

            case '.--':
                fromMorseCode += 'W';
                break;

            case '-..-':
                fromMorseCode += 'X';
                break;

            case '-.--':
                fromMorseCode += 'Y';
                break;

            case '--..':
                fromMorseCode += 'Z';
                break;
            
            case '.--.':
                fromMorseCode += 'P';
                break;
            case '.-..':
                fromMorseCode += 'L';
                break;
            case '.': 
                fromMorseCode += 'E';
                break;
            case '/':
                fromMorseCode += ' ';
                break;


            //numbers
            case '.----':
                fromMorseCode += '1';
                break;

            case '..---':
                fromMorseCode += '2';
                break;

            case '...--':
                fromMorseCode += '3';
                break;

            case '....-':
                fromMorseCode += '4';
                break;

            case '.....':
                fromMorseCode += '5';
                break;

            case '-....':
                fromMorseCode += '6';
                break;

            case '--...':
                fromMorseCode += '7';
                break;

            case '---..':
                fromMorseCode += '8';
                break;

            case '----.':
                fromMorseCode += '9';
                break;

            case '-----':
                fromMorseCode += '0';
                break;

            case '.-.-.-':
                fromMorseCode += '. ';
                break;

            case '--..--':
                fromMorseCode += ', ';
                break;

            case '..--..':
                fromMorseCode += '? ';
                break;

            case '-.-.--':
                fromMorseCode += '! ';
                break;

            default:
                fromMorseCode += splitTextArea[i];
                break;
                
        }
    }

    document.getElementById('myTextArea').value = fromMorseCode;
});


//copy to clipboard
const button = document.querySelector(".copy-link-button");
button.addEventListener("click", () => {
    let textArea = document.getElementById("myTextArea").value;
    console.log(textArea);

    navigator.clipboard.writeText(textArea);

    //appear the text
    const coppied = document.querySelector(".coppied");
    coppied.style.opacity = "1";
    coppied.style.display = "block";
    setTimeout(() => coppied.style.opacity = "0", 2000);
});
