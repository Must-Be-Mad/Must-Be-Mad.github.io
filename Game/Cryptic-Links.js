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
["The rear is really heavy", "Superman to Kryptonite", "To create everything", "Golf average with a golf stand"],
["A joyous joint", "Repulsion at a domain", "Money machine in an embargo", "As opposed to give out"],
["Burning violent protestors", "Being even more purchased", "Tin above", "To burn everything"],
["To require it blunt", "How a pig could fly", "Potatoes served with a lustre", "Getting the graphite's attention"]
]
const difflist =[["Y","G","P","B"],["Y","B","P","G"],["G","Y","P","B"],["Y","P","G","B"],["Y","P","B","G"],["B","P","Y","G"],["G","Y","B","P"]]
const day =  Math.floor((new Date() - new Date('2024-08-05')) / (1000 * 60 * 60 * 24));
const words = wordlist[day];
const clues = cluelist[day];
const colours =difflist[day];
const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
];
        var letC = 0;
        var errors= 0;
        function getstate() {
          const arrayString = localStorage.getItem('state');
          return arrayString ? JSON.parse(arrayString) : [[4,4,4,4],day, [-1,-1,-1,-1]];
        }
        function savestate(array) {
          localStorage.setItem('state', JSON.stringify(array));
        }
      var state = getstate();
      if(day!=state[1]){
        state=[[4,4,4,4],day, [-1,-1,-1,-1]]
      }
      var rowC = state[2].indexOf(-1);
      var attempts=state[0];
        window.onload = function() {
            createKeyboard();
            start();
            share();
        }

        function start() {
            let clue=document.getElementById("Clue");
            for (let r = 0; r < words.length; r++) {
                let row = document.createElement("div");
                row.classList.add("row");
                row.onclick = function() {
                  if (!row.classList.contains("Selected") && state[2][Array.from(document.getElementsByClassName("row")).indexOf(row)]==-1){
                    let clue=document.getElementById("Clue");
                    clue.classList.remove("bg"+colours[rowC])
                    for (let c = 0; c < words[rowC].length; c++) {
                      let CurrLet = document.getElementById(rowC.toString() + '-' + c.toString());
                      CurrLet.classList.remove("white")
                      CurrLet.innerText=""
                      letC=0
                    }
                    rowC=Array.from(document.getElementsByClassName("row")).indexOf(row)
                    let selectedElements = document.getElementsByClassName("Selected");
                    while (selectedElements.length > 0) {
                        selectedElements[0].classList.remove("Selected");
                    }
                    row.classList.add("Selected");
                    document.getElementById("Attempts").innerText = "Attempts Remaining: "+attempts[rowC].toString();
                    clue.classList.add("bg"+colours[rowC])
                    clue.innerText=clues[rowC]
                  }
                }
                for (let c = 0; c < words[r].length; c++) {
                    let letter = document.createElement("span");
                    letter.id = r.toString() + "-" + c.toString();
                    letter.classList.add("letter");
                    letter.classList.add(colours[r]);
                    letter.innerText = "";
                    row.appendChild(letter);
                }
                document.getElementById("List").appendChild(row);
            }
            if (rowC!=-1){
              clue.classList.add("bg"+colours[rowC])
              clue.innerText=clues[rowC]
              document.getElementsByClassName("row")[rowC].classList.add("Selected")
            }
            else{
              clue.classList.add("Selected")
              clue.innerText="Puzzle Solved!"
            }



            for (let r = 0; r < words.length; r++) {
             if (state[2][r]>=0){
              function colourchange(c)
              {
                let CurrLet = document.getElementById((r).toString() + '-' + c.toString());
                CurrLet.innerText=words[r][c]
                CurrLet.classList.add("bg" + colours[r]);
              }
              for (let c = 0; c < words[r].length; c++) {
                setTimeout(() => colourchange(c), 200*c);
              }
             }
            }
            if(rowC==-1){
              setTimeout(() => openResults(), 2000);
              finish()
              document.getElementById("Attempts").innerText = "Attempts";
            }
            else{
              document.getElementById("Attempts").innerText = "Attempts Remaining: "+attempts[rowC].toString();
            }
        }

document.addEventListener("keyup", (e) => {
    press(e);
});

function press(e) {
    const key = e.key.toUpperCase();  // Convert to uppercase to handle both layouts
    const code = e.code;

    // Handle alphabetic keys (A-Z)
    if (code >= "KeyA" && code <= "KeyZ") {
        if (letC < words[rowC].length) {
            let CurrLet = document.getElementById(`${rowC}-${letC}`);
            CurrLet.innerText = key;
            CurrLet.classList.add("white");
            letC += 1;
        }
    }
    // Handle Backspace
    else if (code === "Backspace") {
        if (letC > 0) {
            letC -= 1;
            let CurrLet = document.getElementById(`${rowC}-${letC}`);
            CurrLet.innerText = "";
            CurrLet.classList.remove("white");
        }
    }
    // Handle Enter
    else if (code === "Enter") {
          if (letC==words[rowC].length) {
            let guess=""
            for (let c = 0; c < words[rowC].length; c++) {
              let CurrLet = document.getElementById(rowC.toString() + '-' + c.toString());
              guess += CurrLet.innerText;
            }
            if(guess==words[rowC]){
              function colourchange(c)
              {
                let CurrLet = document.getElementById((temp).toString() + '-' + c.toString());
                CurrLet.classList.add("bg" + colours[temp]);
              }
              temp=rowC
              for (let c = 0; c < words[rowC].length; c++) {
                setTimeout(() => colourchange(c), 200*c);
              }
              let clue=document.getElementById("Clue")
              clue.classList.remove("bg"+colours[rowC])
              state[2][rowC]=1+Math.max(...state[2])
              document.getElementsByClassName("row")[rowC].classList.remove("Selected")
              rowC = state[2].indexOf(-1);
              clue.classList.add("bg"+colours[rowC])
              letC=0
              if(rowC==-1){
                
                let clue=document.getElementById("Clue")
                clue.classList.add("Selected")
                clue.innerText="Puzzle Solved!"
                setTimeout(() => openResults(), 2000);
                
                finish()
              }
              else{
                document.getElementsByClassName("row")[rowC].classList.add("Selected")
                document.getElementById("Attempts").innerText = "Attempts Remaining: "+attempts[rowC].toString();
                let clue=document.getElementById("Clue");
                clue.classList.add("bg"+colours[rowC])
                clue.innerText=clues[rowC]
              }
            }
            else{
              attempts[rowC]-=1
              if (attempts[rowC]==0){
                function colourchange(c)
                {
                  let CurrLet = document.getElementById((temp).toString() + '-' + c.toString());
                  CurrLet.innerText=words[temp][c]
                  CurrLet.classList.add("bg" + colours[temp]);
                }
                temp=rowC
                for (let c = 0; c < words[rowC].length; c++) {
                  setTimeout(() => colourchange(c), 200*c);
                }
                attempts[rowC]-=1
                state[2][rowC]=1+Math.max(...state[2])
                document.getElementsByClassName("row")[rowC].classList.remove("Selected")
                let clue=document.getElementById("Clue")
              clue.classList.remove("bg"+colours[rowC])
                rowC = state[2].indexOf(-1);
                clue.classList.add("bg"+colours[rowC])
                letC=0
                if(rowC==-1){
                  let clue=document.getElementById("Clue")
                  clue.classList.add("Selected")
                  clue.innerText="Puzzle Solved!"
                  setTimeout(() => openResults(), 2000);
                  
                  finish()
                }
                else{
                  document.getElementsByClassName("row")[rowC].classList.add("Selected")
                document.getElementById("Clue").classList.add("bg"+colours[rowC])
                document.getElementById("Attempts").innerText = "Attempts Remaining: "+attempts[rowC].toString();
                let clue=document.getElementById("Clue");
              clue.innerText=clues[rowC]
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
          savestate(state);
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
        const emojiMap = {
          'Y': '🟨',
          'G': '🟩',
          'B': '🟦',
          'P': '🟪'
      };
      const resultLines = [0,1,2,3].map(i => {
        index=state[2].indexOf(i)
        const colorChar = colours[index];
        const emoji = emojiMap[colorChar];
        const attempt = attempts[index];
        const attemptText = attempt < 0 ? 'missed' : attempt + ' attempts to spare';
        return `${emoji}: ${attemptText}`;
    });

        for (let c = 0; c < attempts.length; c++){
            let listItem = document.createElement("p");
            listItem.innerHTML=resultLines[c]
            scoreList.appendChild(listItem);
        }
      }
      function constructText(day, attempts, colours, num) {
        const emojiMap = {
            'Y': '🟨',
            'G': '🟩',
            'B': '🟦',
            'P': '🟪'
        };
    
        const resultLines = [0,1,2,3].map(i => {
            index=num.indexOf(i)
            const colorChar = colours[index];
            const emoji = emojiMap[colorChar];
            const attempt = attempts[index];
            const attemptText = attempt < 0 ? 'missed' : attempt + ' attempts to spare';
            return `${emoji}: ${attemptText}`;
        });
    
        return `I solved Cryptic Links #${(day + 1).toString()}\n\n${resultLines.join('\n')}\n\n`;
    }
      function share() {
        document.getElementById("shareButton").addEventListener('click', () => {
          if (navigator.share) {
            navigator.share({
              title: `I solved Cryptic Links #${(day + 1).toString()}`,
              text:  constructText(day, attempts, colours, state[2]),
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