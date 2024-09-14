const wordlist =[["MOVIE", "ACTION", "STRIKE", "WORKERS"],
["WINDOW", "GLASS", "MATERIAL", "FABRIC"],
["FLOWER", "ROSE", "WHITE", "EGG"],
["BUTTON", "SHIRT", "FORMAL", "PARTY"],
["FUNNY", "COMIC", "BATMAN", "ROBIN"],
["CHARIOT", "SOLDIER", "CANON", "ARSENAL"],
["NEEDLE", "SEWING", "MACHINE", "OILED"],
["OFFICE", "COMEDY", "STANDING", "DESK"],
["KARATE", "KID", "STUDENT", "SENSEI"],
["PROGRAM", "WEDDING", "RECEPTION", "NETWORK"],
["ANY", "TIME", "BOOK", "CHOICE"],
["SUDOKU","NEWSPAPER","ARTICLE","COLUMN"],
["SOUL","LIFE","LOVE","MATE"],
["NUMBER","MEASURE","ESTIMATE","FEEL"],
["FINALE","SEASON","FALL","END"],
["MOTORWAY","VELOCITY","POSITION","LANE"],
["ANIMAL","INSECT","FLIGHT","DOMESTIC"],
["TOUCAN","NIGHTINGALE","EAGLE","EGRET"],
["SHIRT","TOP","PANTS","SHOES"],
["TOAST","TABLE","EVENING","GUEST"],
["RING","GROOM", "MAID","DINNER"],
["DENIM","MAGENTA","AMBER","RED"],
["AFROBEAT","TRAP","POP","POLKA"],
["THREE","ELEVEN","NINE","EIGHT"],
["GRASSHOPPER","ROACH","HONEYBEE","EARWIG"],
["SPEECH","HOST","TOAST","TRICKS"],
["TRAMPOLINE", "EQUESTRIAN", "NORDIC", "CRICKET"],
["SPORT", "TRIES", "SHOW", "WEARS"],
["MOTORCYCLE", "EXCAVATOR", "ROWBOAT", "TRAM"],
["DEALER", "RIVER", "RUSH", "HAND"],
["OVER", "RIVER", "ROAD", "DEMO"],
["DESIRE", "ENVY", "YEARN", "NEED"],
["LIFELESS", "SOULLESS", "SAD", "DULL"],
["NECK", "KNEE", "EARS", "SKIN"],
["RAID", "DOOM", "MANHUNT", "TETHER"],
["FIELD", "DIVES", "STRIKER", "REF"],
["EROTICA", "ACTION", "NOIR", "ROMANCE"],
["LEMUR", "ROAM", "MINKS", "SOUL"],
["POST", "TELEGRAM", "MAILS", "STAMP"],
["LEAF", "FLOWER", "ROOTS", "SEPAL"],
["ELEPHANT", "TOWER", "ROYAL", "LANE"],
["DAHLIA", "AZELIA", "ALLIUM", "MARIGOLD"],
["TONIC", "CIDER", "RUM", "MERLOT"],
["DEW", "WATER", "RAPIDS", "SPILLED"],
["TOLL", "LICENSE", "EXHAUST", "TICKET"],
["YAW", "WEIGHT", "TIME", "ENERGY"],
["RIB", "BONE", "ENTRAIL", "LIVER"],
["RAIL", "LINKAGES", "STATIONS", "SIGNALLER"]
]

const cluelist =[["Transporting a letter", "To play a charge", "A holy man before a German Rule", "We used to be dogs"],
["To earn a deer", "Well wishes to a donkey", "Little Mermaid with little gloss", "An awesome building material"],
["The ooze of the mistake", "ρρρ", "An attack between us", "Breaking a leg is an L"],
["The rear is really heavy", "Superman to Kryptonite", "To create everything", "Golf average with a golf stand"],
["A joyous joint", "Repulsion at a domain", "Money machine in an embargo", "As opposed to give out"],
["Burning violent protestors", "Being even more purchased", "Tin above", "To burn everything"],
["To require it blunt", "How a pig could fly", "Potatoes served with a lustre", "Getting the graphite's attention"],
["'Dancing on Ice' would just be 'dancing'","To arrive with a note", "Spiderman maker ringing a bell", "Spanish is in Donkey Kong"],
["Delevingne's Drink","Goat joke", "Deforming the broth", "Detect the alpha"],
["Supporter of a weight","Eddy and Ed's friend in a hospital section", "Sequel to a dreamy film", "Sum effort"],
["Neon","Put myself in handcuffs", "Peep is alright", "Pak frost"],
["Not quite a military takeover","Novel relaxing place for each","Decorative way to reduce the population","If you can't text 'em, ___"],
["Dissolver that can't let off steam","Fibs with a failure in it","How you start a tennis match","Where in I"],
["North brown","I am cast certain","Shuffle teatimes","Iron with a Spanish Guy"],
["Beer made of fish limb","Poseidon's offspring","To flip off everyone","Zed's position"],
["Pick between a ditch and a protein supplement","French bike town","Propose a charge","Lois of a narrrow road"],
["Either shopping centre","Belonging to a religious category","Failed Bulb","Possible shape-type of controller toggle"],
["(You) are also able to","Wind contains day's twin","A chronically online fish and chips snatcher","Are out of regret"],
["Cher with a hot drink","Addressing Parker's initial","Overlap of a pot with insects","To send away a sludge"],
["A holy man that has a foot fetish","Swifty that doesn't like red","Doubling something","To estimate a golf stand"],
["Between a bell and a circle","Space for a note","Mother's identification","A closeby sound"],
["Hideout is myself being","When a sorcerer comes in","Heard that was with Johnny","Education of adult movies"],
["A rhythm with frizzy hair","A backwards part","Initially pretty overpowered","To ask questions to vehicles"],
["Melt thrice and EE","L=2n","Nickel and Neon","Take the head of fight down a notch"],
["Mardi buyer","Approach got uninstalled","Pooh bear's favourite food simply is","Fake hear for your audio receptors"],
["Untangle cheeps","Sounds like someone got drenched from the mains","Adressing a saint","Three Calvin Kleins"],
["Train bus next to Mario's ex", "A front to end request to Ian", "Neither Tom, ____, nor Harry", "Cramp gear"],
["Start of itself plugged in", "Change rites", "The greatest without man", "Winning on the side of your head"],
["To shuffle around cars", "Used to be bien with anonymous browsing", "A ship that argues", "Ton of random access memory"],
["Backwards way of asking to fit new lead", "Mispronounced writher", "Between a high and speed", "Solo head of Dagobah"],
["Open up Rover", "Rover with input instead of output", "Rover habitat", "Mix more Dover without Rover"],
["Des's anger", "French by vendetta", "An arbitrary year", "Doublee Ned"],
["A reduced chi", "Without South Korea's capital", "Kapital's pair's reflection", "Model without Mohammad"],
["Two of these leads to a draw", "Back to the start of neek", "Brontë character's surnames", "Snow sport nitrogen"],
["Violent movie helper", "Partake in yoga vocal", "To track down and kill a male", "Tea with Heather"],
["Passed tense of feel", "Division of Spanish", "To knock 10 pins off a woman", "i - e riff"],
["Mint chocolate with a chicken masala", "Mix of cation", "Not 'yes we is'", "Common era civilisation"],
["The French gift to Baby Jesus", "mmmm", "Minimum kill streak", "Foot base"],
["Original soundtrack of P", "Weight of a TV display", "Your losses after April", "Ampere in the church"],
["Grassland fail", "If Florence was", "A Joey Elliot", "The entirety of September"],
["Stir then pale", "To haul an error", "E.G. Lizzie, Charlie, Willie", "Los Angeles neon"],
["Roald's Heath", "Hazel without the head with Internal affairs", "The entirety of a Hemsworth", "To form a union with a precious metal"],
["A lot to steal", "Her side the other way", "Wasn't our rumour", "Baby Jesus gift went down"],
["Gross D", "Ate in a world record", "To sing fast about your inner demons", "To drop a molten poisonous metal"],
["Harry Potter monster isn't very graphic", "To detect hair bugs", "Previous partner fact checked", "To mark it as correct"],
["Why have an impression", "To remain in anticipation", "I am Titanium", "Life on the inside"],
["Out of a Ribena", "Be in on the reverse", "Retinal mix up", "To spend a life with a mistake"],
["Are with a beer", "A connection for a long time", "Analysis of data with charged particles", "To communicate with hands to a French-goer"]

]
const hintslist=[["Alphabet","To play a role is to...","A holy man is abbreviated","Miserable ___ is a dog type"],
["A female deer","textify 'well wishes","Ariel is the little mermaid","What are most houses made of?"],
["The movement of a river is a type of ooze","The letter is rho","Word for 'attack' inside word for 'us'","'Break off' an 'L'"],
["Unit of mass","Superman's symbol","'Create' or 'put together'","Golf terms"],
["Bodily Joint",".com, .net, .io etc","Money machine is an abbreviation","Oppose each word"],
["Burning really really badly","Comparative suffix used weirdly","Double synonyms","Burn with intent"],
["alt. To require it boring","A female pig","Potato serving format","Onomatopoeia"],
["It wouldn't be 'on ice'", "Musical note", "Stan Lee made spiderman", "Spanish 'is'"],
["Cara Delevingne is a model/actress", "Two synonyms", "Deform as in metal", "Alpha in the Latin Alphabet"],
["A supporter is a prefix", "What is the midpoint of 'Ed' and 'Eddy'", "A sequel to Inception", "Sum as in total"],
["Neon is 'Ne' on the periodic table", "alt. I am from Bangkok", "A famous 'Peep'", "Dish containing Pak"],
["The first part is a prefix","3 words linked","Pun on pun","How else do you communicate?"],
["To steam is also to vent","A failure is a grade","Points of a tennis match","A word inside another"],
["Cardinal directions","e.g 'Johnny Depp as Jack sparrow'","Shuffle letters","Iron is 'Fe' on the periodic table"],
["Ale is a beer","Poseiden is the god of what","'To flip off' is associated with a letter","Where is 'Z' in the alphabet"],
["A moat is a ditch","French for bikes is velo","To posit is to propose","Superman's girlfriend"],
["American term for shopping centre","A sect denotes the latter half","What a bulb produces","A controller toggle can either be concave or..."],
["2-tin","Night-in","E girl e.g","Are as a stand-in for 'r'"],
["Tea is a hot drink","How do you start a letter","Ants are the insects","To send away is to shoo"],
["Toes area part of a feet","'Swift' alternative with an animal","If something is double, it's ___","A tee is a stand in golf"],
["Conceptual midpoint","A musical note","How else might one say both words","A loud sound is also a...?"],
["A fox lives in a hideout","Synonym for sorcerer and for entrance","Depp","PG-13 isn't an adult movie"],
["A drum makes a rythm","Spelling backwards","Text talk it all","A survey is also called"],
["What can you melt away from three","So L is what?","What are these on the periodic table?","Caesar cipher"],
["A buyer shops and hence is a","Uninstall a part of approach","Simply is means to __?","What are your audio receptors"],
["Anagram","What does hosed sound like","You start a letter with dear or?","Three is a prefix"],
["Mario's ex is Pauline","Move r to the end of request","Tom, Dick, or Harry","A crick is a cramp"],
["A port is where you plug stuff in", "Anagram","It's a movie name","A w is a win"],
["Shuffle is a synonym for something","Ça va?","A type of ship","T is short for Ton"],
["To fit again is to re-","Mispronounce writher","Conceptual midpoint","From Star Wars"],
["Rover is enclosed by a letter","I to O","Where would you find a rover","Take away letters in rover"],
["Anger synonym","By is 'en' in French","nth term","E is twice"],
["Chi is life","Seoul is a pun","Das Kapital","Mo is a shorthand for mohammed"],
["__ & __ means they're tied", "Move letters around", "Jane Eyre", "Ski+Nitrogen"],
["R-rating", "Do what", "A man ___", "T+ Heather"],
["'Passed' but for 'feel'", "Div Español", "10 pins as in bowling pins", "Switch out 'i' in riff"],
["Aero+tika", "Anagram", "No, I, are", "Romans"],
["The in french+myrrh", "m's arranged in a_?", "Kill Streak- k.s.", "Just a pun"],
["OST", "TV is Telly", "May what?", "St what?"],
["Lea is a grassland", "Flo for Florence" , "Kangagroo TS", "Sep"],
["'then pale' is an anagram", "Tow is to hall", "Lizzie died recently", "Abbreviate both"],
["Roald as in Dahl","Take away 'H' from Hazel","Liam","To marry"],
["To nick","Swap 'her' and 'side'","Take out 'our'","Myrr is a gift to baby Jesus"],
]
const difflist =[["Y","G","P","B"],["Y","B","P","G"],["G","Y","P","B"],["Y","P","G","B"],["Y","P","B","G"],["B","P","Y","G"],["G","Y","B","P"],["P","B","Y","G"],["G","Y","B","P"],["Y","G","B","P"],["G","P","B","Y"],["P","G","B","Y"],["Y","B","G","P"],["G","B","Y","P"],["G","P","B","Y"],["Y","P","G","B"],["P","B","G","Y"],["G","P","Y","B"],["Y","P","G","B"],["P","B","Y","G"],["G","B","Y","P"], ["G","B","Y","P"],["B","Y","G","P"],["B","G","Y","P"],["G","Y","B","P"],["Y","G","B","P"],["P","G","Y","B"],["P","G","Y","B"],["B","P","Y","G"],["P","B","Y","G"],["Y","B","G","P"],["Y","P","B","G"],["Y","G","P","B"],["P", "B", "G", "Y"],["P", "B", "Y", "G"],["Y", "G", "P", "B"], ["P", "Y", "G", "B"], ["P", "B", "G", "Y"],["Y", "G", "B", "P"],["Y", "G", "P", "B"],["B", "P", "G", "Y"],["Y", "P", "B", "G"],["B", "Y", "G", "P"],["G", "B", "P", "Y"],["B", "G", "P", "Y"],["P", "G", "Y", "B"],["P", "B", "Y", "G"],["B", "G", "Y", "P"]]
const topiclist=["","","","","","","","","","","","","","","","","","Birds","Clothing","Dinner Party","Wedding", "Colours", "Music Genres", "Numbers", "Insects", "Dinner Party","Olympic Sports", "Wearing clothes", "Transport","Poker","Things that run","Wanting emotion","Boring", "Body Parts","Video Games","Football","Genres","Captial Puns","Postage","Plant parts","London Underground names", "Flowers","Alcohol"]
const day =  Math.floor((new Date() - new Date('2024-08-05')+3600000) / (1000 * 60 * 60 * 24));
const words = wordlist[day];
const hints = hintslist[day];
const clues = cluelist[day];
const colours =difflist[day];
const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
];
        var letC = 0;
        var type = true;
        var errors= 0;
        function getstate() {
          const arrayString = localStorage.getItem('state');
          return arrayString ? JSON.parse(arrayString) : [[3,3,3,3],day, [-1,-1,-1,-1]];
        }
        function savestate(array) {
          localStorage.setItem('state', JSON.stringify(array));
        }
      var state = getstate();
      if(day!=state[1]){
        state=[[3,3,3,3],day, [-1,-1,-1,-1]]
      }
      var rowC = state[2].indexOf(-1);
      var attempts=state[0];
      function fetch(){
        const stuff = document.getElementsByClassName("row");
        console.log(stuff);
        for (let r = 0; r < stuff.length; r++) {
            const letterElement = stuff[r].querySelector('.letter');
            const idValue = letterElement?.id.split('-')[0];
            const idNumber = idValue !== undefined ? parseInt(idValue, 10) : null;
    
            // Ensure the comparison is between numbers
            if (idNumber === rowC) {
                return stuff[r];
            }
        }
    }
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
                  if (!row.classList.contains("Selected")){
                    let clue=document.getElementById("Clue");
                    clue.classList.remove("bg"+colours[rowC])
                    if(state[2][this.querySelector('.letter')?.id.split('-')[0] !== undefined ? parseInt(this.querySelector('.letter').id.split('-')[0], 10) : null]!=-1){
                      type=false
                    }
                    else{
                      type=true
                    }
                    if(state[2][rowC]==-1){
                    for (let c = 0; c < words[rowC].length; c++) {
                      let CurrLet = document.getElementById(rowC.toString() + '-' + c.toString());
                      CurrLet.classList.remove("white")
                      CurrLet.innerText=""
                      letC=0
                    }
                  }
                    rowC=this.querySelector('.letter')?.id.split('-')[0] !== undefined ? parseInt(this.querySelector('.letter').id.split('-')[0], 10) : null;
                    let selectedElements = document.getElementsByClassName("Selected");
                    while (selectedElements.length > 0) {
                        selectedElements[0].classList.remove("Selected");
                    }
                    row.classList.add("Selected");
                    document.getElementById("Attempts").innerText = "Attempts Remaining: "+attempts[rowC].toString();
                    if(attempts[rowC]==0){
                      document.getElementById("Attempts").innerText = "Last Chance Hint: "+hints[rowC]
                    }
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
              fetch().classList.add("Selected")
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
            if(attempts[rowC]==0){
              document.getElementById("Attempts").innerText = "Last Chance Hint: "+hints[rowC]
            }
            else if(rowC==-1){
              setTimeout(() => openResults(), 2000);
              finish()
              document.getElementById("Attempts").innerText = "Attempts";
            }
            else{
              document.getElementById("Attempts").innerText = "Attempts Remaining: "+attempts[rowC].toString();
            }
        }

document.addEventListener("keyup", (e) => {
  if (type==true){
    press(e);
  }
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
              fetch().classList.remove("Selected")
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
                fetch().classList.add("Selected")
                document.getElementById("Attempts").innerText = "Attempts Remaining: "+attempts[rowC].toString();
                let clue=document.getElementById("Clue");
                clue.classList.add("bg"+colours[rowC])
                clue.innerText=clues[rowC]
              }
            }
            else{
              attempts[rowC]-=1
              document.getElementById("Attempts").innerText = "Attempts Remaining: "+attempts[rowC].toString();
              if(attempts[rowC]==0){
                document.getElementById("Attempts").innerText = "Last Chance Hint: "+hints[rowC]
              }
              else if (attempts[rowC]==-1){
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
                state[2][rowC]=1+Math.max(...state[2])
                fetch().classList.remove("Selected")
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
                  fetch().classList.add("Selected")
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
        const attemptText = attempt === -1 ? 'Missed' : attempt === 0 ? 'Hint used' : attempt + ' attempts to spare';
        return `${emoji}: ${attemptText}`;
    });

    let Category = document.createElement("p");
    Category.innerHTML="The topic was: "+topiclist[day]
    scoreList.appendChild(Category);
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
            const attemptText = attempt === -1 ? 'Missed' : attempt === 0 ? 'Hint used' : attempt + ' attempts to spare';
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
