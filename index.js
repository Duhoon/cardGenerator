const input1 = document.querySelector("#numCard1");
const input2 = document.querySelector("#numCard2");
const inputArr = [input1, input2];
const createBtn = document.getElementById("createBtn");
const resetBtn = document.getElementById("resetBtn");

//init input
input1.value=0;
input2.value=0;

const Deck = function (_deckClassName){
    this.cards = [];
    this.cardsNum = 0;
    this.deckEle = document.querySelector(_deckClassName);

    this.createCards = (num)=>{    
        for(let i = 0 ; i < num ; i++){
            let randNum = Math.floor(Math.random() * 100);
            this.cards.push(randNum);
        }
        this.cards.sort((a,b)=>a-b);
    };

    const createCardsCallback = (num)=>{
        let card = document.createElement("div");
            card.classList.add(...["card", "back"]);

            card.addEventListener("click", (e)=>{
                if (e.currentTarget !== e.target) return;
                let thisCard = e.target;
                thisCard.classList.toggle("back");
            })

            let paragraph = document.createElement("p");
            paragraph.textContent = num;

            card.appendChild(paragraph);
            this.deckEle.appendChild(card);
    }

    this.createCardsAtDocument = ()=>{this.cards.map(createCardsCallback)};

    this.resetCards = ()=>{
        this.cards = [];
        this.deckEle.innerHTML = "";
    }
}

const deckArr = [new Deck(".deck1"), new Deck(".deck2")];

createBtn.addEventListener("click", (e)=>{
    deckArr.map((deck, idx)=>{
        deck.createCards(inputArr[idx].value);
        deck.createCardsAtDocument();
    })
})

resetBtn.addEventListener("click", (e)=>{
    deckArr.forEach((deck)=>{
        deck.resetCards();
    })
})