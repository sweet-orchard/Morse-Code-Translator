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

const translateBtn = document.getElementById("translate");
translateBtn.addEventListener("click", () => {
    const input = document.querySelector(".textarea").value;

    let morseCode = '';

    for (let i = 0; i < input.length; i++){
        switch(input[i].toUpperCase()){
            case 'A':
                morseCode += '.- ';
                break;
            
            case 'B':
                morseCode += '-... ';
                break;

            case 'C':
                morseCode += '-.-. ';
                break;

            case 'D':
                morseCode += '-.. ';
                break;

            case 'F':
                morseCode += '..-. ';
                break;

            case 'G':
                morseCode += '--. ';
                break;

            case 'H':
                morseCode += '.... ';
                break;
            
            case 'I':
                morseCode += '.. ';
                break;

            case 'J':
                morseCode += '.--- ';
                break;

            case 'K':
                morseCode += '-.- ';
                break;

            case 'L':
                morseCode += '.-.. ';
                break;

            case 'M':
                morseCode += '-- ';
                break;

            case 'N':
                morseCode += '-. ';
                break;

            case 'O':
                morseCode += '--- ';
                break;

            case 'Q':
                morseCode += '--.- ';
                break;

            case 'R':
                morseCode += '.-. ';
                break;

            case 'S':
                morseCode += '... ';
                break;

            case 'T':
                morseCode += '- ';
                break;

            case 'U':
                morseCode += '..- ';
                break;

            case 'V':
                morseCode += '...- ';
                break;

            case 'W':
                morseCode += '.-- ';
                break;

            case 'X':
                morseCode += '-..- ';
                break;

            case 'Y':
                morseCode += '-.-- ';
                break;

            case 'Z':
                morseCode += '--.. ';
                break;
            
            case 'P':
                morseCode += '.--. ';
                break;
            case 'L':
                morseCode += '.-.. ';
                break;
            case 'E': 
                morseCode += '. ';
                break;
            case ' ':
                morseCode += '/ ';
                break;


            //numbers
            case '1':
                morseCode += '.---- ';
                break;

            case '2':
                morseCode += '..--- ';
                break;

            case '3':
                morseCode += '...-- ';
                break;

            case '4':
                morseCode += '....- ';
                break;

            case '5':
                morseCode += '..... ';
                break;

            case '6':
                morseCode += '-.... ';
                break;

            case '7':
                morseCode += '--... ';
                break;

            case '8':
                morseCode += '---.. ';
                break;

            case '9':
                morseCode += '----. ';
                break;

            case '0':
                morseCode += '----- ';
                break;

            case '.':
                morseCode += '.-.-.- ';
                break;

            case ',':
                morseCode += '--..-- ';
                break;

            case '?':
                morseCode += '..--.. ';
                break;

            case '!':
                morseCode += '-.-.-- ';
                break;

            default:
                morseCode += input[i];
                break;

        }
    }

    document.getElementById('myTextArea').value = morseCode;
}); 






