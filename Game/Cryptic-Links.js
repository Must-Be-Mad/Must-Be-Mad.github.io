const wordlist =[["MOVIE", "ACTION", "STRIKE", "WORKERS"],
["WINDOW", "GLASS", "MATERIAL", "FABRIC"],
["FLOWER", "ROSE", "WHITE", "EGG"],
["BUTTON", "SHIRT", "FORMAL", "PARTY"],
["FUNNY", "COMIC", "BATMAN", "ROBIN"],
["CHARIOT", "SOLDIER", "CANON", "ARSENAL"],
["NEEDLE", "SEWING", "MACHINE", "OILED"]
]
const cluelist =[["Transporting a letter", "To play a charge", "A holy man before a German Rule", "We used to be dogs"],
["To earn a deer", "Well wishes to a donkey", "Little Mermaid with little gloss", "An awesome building material"],
["The ooze of the mistake", "ρρρ", "An attack between us", "Breaking a leg is an L"],
["The rear is really heavy", "Pain within a holy man", "To create everything", "Golf average with a golf stand"],
["A joyous joint", "Repulsion at a domain", "Money machine in an embargo", "As opposed to give out"],
["Burning violent protestors", "Being even more purchased", "Tin above", "To burn everything"],
["To require it blunt", "How a pig could fly", "Potatoes served with a lustre", "Getting the graphite's attention"]
]
const day =  Math.floor((new Date() - new Date('2024-08-05')) / (1000 * 60 * 60 * 24));
const words = wordlist[day];
const clues = cluelist[day];
const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
];
        var letC = 0;
        var errors= 0;

        function getstate() {
          const arrayString = localStorage.getItem('state');
          console.log(arrayString)
          return arrayString ? JSON.parse(arrayString) : [[5,5,5,5],day, 0];
        }
        function savestate(array) {
          localStorage.setItem('state', JSON.stringify(array));
          console.log(array)
        }
    
      var state = getstate();
      if(day!=state[1]){
        state=[[5,5,5,5],day, 0]
      }

      var rowC = state[2];
      var attempts=state[0];

      console.log(state)
        window.onload = function() {
            createKeyboard();
            start();
            share();
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
                    letter.innerText = "";
                    row.appendChild(letter);
                }
                document.getElementById("List").appendChild(row);
            }
            document.addEventListener("keyup", (e) => {
                press(e)
            })
            for (let r = 0; r < words.length; r++) {
             if (r<rowC){
              function colourchange(c)
              {
                let CurrLet = document.getElementById((r).toString() + '-' + c.toString());
                CurrLet.innerText=words[r][c]
                CurrLet.classList.add("colour" + (r).toString());
              }
              for (let c = 0; c < words[r].length; c++) {
                setTimeout(() => colourchange(c), 200*c);
              }
             }
            }
            if(rowC>=4){
              clue.innerText=clues[3]
              setTimeout(() => openResults(), 2000);
              finish()
              document.getElementById("Attempts").innerText = "Attempts Remaining: "+attempts[rowC-1].toString();
            }
            else{
              document.getElementById("Attempts").innerText = "Attempts Remaining: "+attempts[rowC].toString();
            }
        }
        function press(e){
          console.log(e)
          if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (letC < words[rowC].length) {
                let CurrLet = document.getElementById(rowC + "-" + letC);
                CurrLet.innerText = e.key.toUpperCase();
                CurrLet.classList.add("white")
                letC += 1;
            }
        } 
        else if (e.code == "Backspace") {
            if (letC > 0) {
                letC -= 1;
                let CurrLet = document.getElementById(rowC + "-" + letC);
                CurrLet.innerText = "";
                CurrLet.classList.remove("white")
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
              }
              for (let c = 0; c < words[rowC].length; c++) {
                setTimeout(() => colourchange(c), 200*c);
              }
              rowC+=1
              letC=0
              if(rowC>=words.length){
                setTimeout(() => openResults(), 2000);
                
                finish()
              }
              else{
                document.getElementById("Attempts").innerText = "Attempts Remaining: "+attempts[rowC].toString();
                let clue=document.getElementById("Clue");
              clue.innerText=clues[rowC]
              }
            }
            else{
              attempts[rowC]-=1
              if (attempts[rowC]==0){
                function colourchange(c)
                {
                  let CurrLet = document.getElementById((rowC-1).toString() + '-' + c.toString());
                  CurrLet.innerText=words[rowC-1][c]
                  CurrLet.classList.add("colour" + (rowC-1).toString());
                }
                for (let c = 0; c < words[rowC].length; c++) {
                  setTimeout(() => colourchange(c), 200*c);
                }
                attempts[rowC]-=1
                rowC+=1
                let clue=document.getElementById("Clue");
              clue.innerText=clues[rowC]
                letC=0
                if(rowC>=words.length){
                  setTimeout(() => openResults(), 2000);
                  
                  finish()
                }
              }
              for (let c = 0; c < words[rowC].length; c++) {
                let CurrLet = document.getElementById(rowC.toString() + '-' + c.toString());
                CurrLet.classList.remove("white")
                CurrLet.innerText=""
                letC=0
              }
              document.getElementById("Attempts").innerText = "Attempts Remaining: "+attempts[rowC].toString();
            }
          }
          savestate([attempts,day,rowC]);
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
      function finish() {
        const scoreList = document.getElementById('ScoreList');
        for (let c = 0; c < attempts.length; c++){
            let listItem = document.createElement("p");
            if (attempts[c]>=0){
            listItem.textContent = attempts[c].toString() +' attempts to spare';
            }
            else{
              listItem.textContent = 'You did not get this word';
            }
            scoreList.appendChild(listItem);
        }
      }
      function share() {
        document.getElementById("shareButton").addEventListener('click', () => {
          if (navigator.share) {
            navigator.share({
              title: `I solved Cryptic Links #${(day + 1).toString()}`,
              text:  `I solved Cryptic Links #${(day + 1).toString()}\n\n` +
            `🟨: ${attempts[0] < 0 ? 'missed' : attempts[0] + ' attempts to spare'}\n` +
             `🟩: ${attempts[1] < 0 ? 'missed' : attempts[1] + ' attempts to spare'}\n` +
             `🟦: ${attempts[2] < 0 ? 'missed' : attempts[2] + ' attempts to spare'}\n` +
             `🟪: ${attempts[3] < 0 ? 'missed' : (attempts[3] || '0') + ' attempts to spare'}\n\n`,
              url: "https://must-be-mad.github.io/Game/Cryptic-Links.html"
            }).then(() => {
              console.log('Thanks for sharing!');
            }).catch((error) => {
              console.error('Something went wrong sharing the content', error);
            });
          } else {
            alert('Web Share API not supported in your browser.');
          }
        });
      }
