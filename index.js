const input1 = document.querySelector("#numCard1");
const input2 = document.querySelector("#numCard2");
const createBtn = document.getElementById("createBtn");
const resetBtn = document.getElementById("resetBtn");

//init input
input1.value=0;
input2.value=0;

const Card1 = (num)=>{
    const deck = [];
    const deckEle = document.querySelector(".deck1");

    const deckCreate = (num)=>{    
        for(let i = 0 ; i < num ; i++){
            let randNum = Math.floor(Math.random() * 100);
            deck.push(randNum);
        }
        deck.sort((a,b)=>a-b);
    }

    deckCreate(num);

    deck.map((num)=>{
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
        deckEle.appendChild(card);
    })

    return deck;
}

const Card2 = (num)=>{
    const deck = [];
    const deckEle = document.querySelector(".deck2");

    const deckCreate = (num)=>{    
        for(let i = 0 ; i < num ; i++){
            let randNum = Math.floor(Math.random() * 100);
            deck.push(randNum);
        }
        deck.sort((a,b)=>a-b);
    }

    deckCreate(num);

    deck.map((num)=>{
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
        deckEle.appendChild(card);
    })

    return deck;
}

createBtn.addEventListener("click", (e)=>{
    Card1(input1.value);
    Card2(input2.value);
})

resetBtn.addEventListener("click", (e)=>{
    document.querySelector(".deck1").innerHTML = "";
    document.querySelector(".deck2").innerHTML = "";
})