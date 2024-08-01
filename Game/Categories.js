const words = ["MOVIE", "ACTION", "STRIKE", "WORKERS"];
const clues = ["Transporting a letter.", "To play a charge.", "A holy man of a German Rule.", "We used to be dogs."];
const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
];
        var rowC = 0;
        var letC = 0;
        var errors= 0;
        var attempts=0;
        window.onload = function() {
            createKeyboard();
            start();
        }

        function start() {
            let clue=document.getElementById("Clue");
              clue.innerText=clues[rowC]
            for (let r = 0; r < words.length; r++) {
                let row = document.createElement("div");
                row.id="row"
                for (let c = 0; c < words[r].length; c++) {
                    let letter = document.createElement("span");
                    letter.id = r.toString() + "-" + c.toString();
                    letter.classList.add("letter");
                    letter.innerText = "⌴";
                    row.appendChild(letter);
                }
                document.getElementById("List").appendChild(row);
            }
            document.addEventListener("keyup", (e) => {
                press(e)
            })
        }
        function press(e){
          console.log(e)
          if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (letC < words[rowC].length) {
                let CurrLet = document.getElementById(rowC + "-" + letC);
                CurrLet.innerText = e.key.toUpperCase();
                letC += 1;
            }
        } 
        else if (e.code == "Backspace") {
            if (letC > 0) {
                letC -= 1;
                let CurrLet = document.getElementById(rowC + "-" + letC);
                CurrLet.innerText = "⌴";
            }
        }
        else if (e.code == "Enter") {
          if (letC==words[rowC].length) {
            let guess=""
            for (let c = 0; c < words[rowC].length; c++) {
              let CurrLet = document.getElementById(rowC.toString() + '-' + c.toString());
              guess += CurrLet.innerText;
            }
            if(guess==words[rowC]){
              function colourchange(c)
              {
                let CurrLet = document.getElementById((rowC-1).toString() + '-' + c.toString());
                CurrLet.classList.add("colour" + (rowC-1).toString());
                console.log(CurrLet.classList)
              }
              for (let c = 0; c < words[rowC].length; c++) {
                setTimeout(() => colourchange(c), 200*c);
              }
              rowC+=1
              letC=0
              if(rowC>=words.length){
                finish()
              }
              else{
                let clue=document.getElementById("Clue");
              clue.innerText=clues[rowC]
              }
            }
            else{
              attempts+=1
              document.getElementById("Attempts").innerText = "Failed Attempts: "+attempts.toString();
              for (let c = 0; c < words[rowC].length; c++) {
                let CurrLet = document.getElementById(rowC.toString() + '-' + c.toString());
                CurrLet.innerText="⌴"
                letC=0
              }
            }
          }
          }
        }
        function createKeyboard() {
          const keyboard = document.getElementById('Keyboard');
          keys.forEach(row => {
              const rowDiv = document.createElement('div');
              rowDiv.classList.add('krow');
              row.forEach(key => {
                  const keyDiv = document.createElement('div');
                  keyDiv.classList.add('key');
                  if (key === 'Enter' || key === '⌫') {
                      keyDiv.classList.add('special-key');
                  }
                  keyDiv.innerText = key;
                  keyDiv.addEventListener('click', () => handleKeyPress(key));
                  rowDiv.appendChild(keyDiv);
              });
              keyboard.appendChild(rowDiv);
          });
      }

      function handleKeyPress(key) {
        let keyCode, code, keyValue;

        if (key === 'Enter') {
            keyCode = 13;
            code = 'Enter';
            keyValue = 'Enter';
        } else if (key === '⌫') {
            keyCode = 8;
            code = 'Backspace';
            keyValue = 'Backspace';
        } else {
            keyCode = key.charCodeAt(0);
            code = 'Key' + key;
            keyValue = key;
        }

        const event = new KeyboardEvent('keyup', {
            key: keyValue,
            code: code,
            keyCode: keyCode,
            charCode: 0,
            bubbles: true,
            cancelable: true,
            composed: true
        });

        document.dispatchEvent(event);
      }
