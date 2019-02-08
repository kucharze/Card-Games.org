const WebSocket = require('ws');


//Model classes

const Card = require('../common/Card.js');

const Deck = require('../common/Deck.js');

const Pile = require('../common/Pile.js');

const Player = require('../common/Player.js');


let deck = new Deck();


deck.shuffle();
while (deck.isTopCardAnEight()){
  deck.shuffle();
}

let pile = new Pile();

pile.acceptACard(deck.dealACard());


let players = [];


players.push(new Player(deck));

players.push(new Player(deck));



let webSockets = [];

let clientCounter = 0;


let socket = new WebSocket.Server({port:3000}, () => {console.log("Server Started");});


socket.on('connection', function(ws) {

  play(ws);

}
);



function cardPicked(myPlayerNumber) {
    let Eight = deck.isTopCardAnEight();

    let drawnCard = deck.dealACard();

    players[myPlayerNumber].add(drawnCard);



    let obj = {};

    obj.status = "You selected card " + drawnCard.getValue() + drawnCard.getSuit();

    obj.numberOfOpponentCards = players[1-myPlayerNumber].getHandCopy().length;

    obj.pileTopCard = pile.getTopCard();

    obj.pileAnnouncedSuit = pile.getAnnouncedSuit();

    obj.yourCards = players[myPlayerNumber].getHandCopy();

    obj.readyToPlay = false;


    webSockets[myPlayerNumber].send(JSON.stringify(obj));



    if(isAnEight) {
    obj.status = "Your turn. Suit is: " + pile.getAnnouncedSuit();

    obj.numberOfOpponentCards = players[myPlayerNumber].getHandCopy().length;
    obj.pileTopCard = pile.getTopCard();

    obj.pileAnnouncedSuit = pile.getAnnouncedSuit();

    obj.yourCards = players[1-myPlayerNumber].getHandCopy();

    obj.readyToPlay = true;



    webSockets[1-myPlayerNumber].send(JSON.stringify(obj));

    } else {
    obj.status = "Your turn";

    obj.numberOfOpponentCards = players[myPlayerNumber].getHandCopy().length;

    obj.pileTopCard = pile.getTopCard();

    obj.pileAnnouncedSuit = "";

    obj.yourCards = players[1-myPlayerNumber].getHandCopy();

    obj.readyToPlay = true;


    webSockets[1-myPlayerNumber].send(JSON.stringify(obj));

    }
}



function cardSelected(message, myPlayerNumber) {

   

 let tempObj = JSON.parse(message);

    let announcedSuit = tempObj.announcedSuit;

    let card = tempObj.card;

    
    let tempCard = new Card(card.suit, card.value);

    let hand = players[myPlayerNumber].getHandCopy();


    
   //Remove the card selected by client from Player's hand
 
    let index = 0;

    for(let i = 0; i < hand.length; i++) {

      if(hand[i].suit == tempCard.suit && hand[i].value == tempCard.value) {

        index = i;

        break;

      }

    }

    players[myPlayerNumber].remove(index); // Could be 1


    pile.acceptACard(tempCard);

    let isAnEight = false;

    if (tempCard.getValue() == "8") {

        isAnEight = true;

        pile.setAnnouncedSuit(tempCard.getSuit());

    }



    let obj = {};


    if(players[myPlayerNumber].isHandEmpty()) {
        obj.status = "Congratulations, You won";

        obj.numberOfOpponentCards = players[1-myPlayerNumber].getHandCopy().length;

        obj.pileTopCard = pile.getTopCard();

        obj.pileAnnouncedSuit = pile.getAnnouncedSuit();

        obj.yourCards = players[myPlayerNumber].getHandCopy();

        obj.readyToPlay = false;


        webSockets[myPlayerNumber].send(JSON.stringify(obj));



        obj.status = "Sorry you lost";

        obj.numberOfOpponentCards = players[myPlayerNumber].getHandCopy().length;

        obj.pileTopCard = pile.getTopCard();

        obj.pileAnnouncedSuit = pile.getAnnouncedSuit();

        obj.yourCards = players[1-myPlayerNumber].getHandCopy();

        obj.readyToPlay = false;


        webSockets[1-myPlayerNumber].send(JSON.stringify(obj));
    } 

      else if(players[1-myPlayerNumber].isHandEmpty()) {
        obj.status = "Congratulations, You won";

        obj.numberOfOpponentCards = players[myPlayerNumber].getHandCopy().length;

        obj.pileTopCard = pile.getTopCard();

        obj.pileAnnouncedSuit = pile.getAnnouncedSuit();

        obj.yourCards = players[1-myPlayerNumber].getHandCopy();

        obj.readyToPlay = false;


        webSockets[1-myPlayerNumber].send(JSON.stringify(obj));


        obj.status = "Sorry you lost";

        obj.numberOfOpponentCards = players[1-myPlayerNumber].getHandCopy().length;

        obj.pileTopCard = pile.getTopCard();

        obj.pileAnnouncedSuit = pile.getAnnouncedSuit();

        obj.yourCards = players[myPlayerNumber].getHandCopy();

        obj.readyToPlay = false;


        webSockets[myPlayerNumber].send(JSON.stringify(obj));


    }
      else {
        if (isAnEight){
            obj.status = "Your turn. Suit is: " + announcedSuit;

            obj.numberOfOpponentCards = players[myPlayerNumber].getHandCopy().length;

            obj.pileTopCard = pile.getTopCard();

            obj.pileAnnouncedSuit = announcedSuit;

            obj.yourCards = players[1-myPlayerNumber].getHandCopy();

            obj.readyToPlay = true;


            webSockets[1-myPlayerNumber].send(JSON.stringify(obj));

        } else {
            obj.status = "Your Turn.";

            obj.numberOfOpponentCards = players[myPlayerNumber].getHandCopy().length;

            obj.pileTopCard = pile.getTopCard();

            obj.pileAnnouncedSuit = announcedSuit;

            obj.yourCards = players[1-myPlayerNumber].getHandCopy();

            obj.readyToPlay = true;


            webSockets[1-myPlayerNumber].send(JSON.stringify(obj));
        }
    
}
}



function play(ws) {
    if(!webSockets.includes(ws)) {
        webSockets.push(ws);
        webSockets[webSockets.indexOf(ws)].userNumber=clientCounter++;
    }
    if(clientCounter==1) {

let obj = {};
        obj.status = "waiting for player to join";

        obj.numberOfOpponentCards = players[1-clientCounter].getHandCopy().length;

        obj.pileTopCard = pile.getTopCard();

        obj.pileAnnouncedSuit = pile.getAnnouncedSuit();

        obj.yourCards = players[clientCounter-1].getHandCopy();

        obj.readyToPlay = false;

        webSockets[clientCounter-1].send(JSON.stringify(obj));

    } else if(clientCounter==2){
        let obj = {};

        obj.status = "Your turn";

        obj.numberOfOpponentCards = players[0].getHandCopy().length;

        obj.pileTopCard = pile.getTopCard();

        obj.pileAnnouncedSuit = pile.getAnnouncedSuit();

        obj.yourCards = players[clientCounter-1].getHandCopy();

        obj.readyToPlay = true;


        webSockets[clientCounter-1].send(JSON.stringify(obj));

    }

     ws.on('message', function(data) {
       let userMessage = JSON.parse(data);

        if(userMessage.action == "cardPicked") {
            cardPicked(webSockets[webSockets.indexOf(ws)].userNumber);
        } else {
            cardSelected(data, webSockets[webSockets.indexOf(ws)].userNumber);
        }
    });

}
