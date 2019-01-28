/**
 * Interact with the human player to obtain their desired play.
 */
class Sniphuman extends Player {

    constructor(deck, pile, view) {
	    super(deck);
        this.deck = deck;
	    this.pile = pile;
	    this.view = view;
        this.fish=true;//True if it is the players turn to ask opponent for a card
    }

  cardPicked(){
    this.list.push(this.deck.dealACard());
    this.view.displayHumanHand(this.getHandCopy());
  }

  cardSelected(cardString){
	let card = this.find(cardString);
	
    //picked an ineligible card to play
	if ((card == null || !this.pile.isValidToPlay(card))) {
	    this.view.displayWrongCardMsg(cardString);
	    return false;  //Call cardPicked() after user selects a different card
	}
	else {//card is eligible to play
        let suit=card.getSuit();
	    this.remove(this.list.indexOf(card));
	    this.pile.acceptACard(card);
	    this.view.displayPileTopCard(card);
	    this.view.displayHumanHand(this.getHandCopy());
	    if (card.getValue() === "8") {//user played an eight
		  this.view.displaySuitPicker();
		  return false;
		// Continue after user picks a suit.
	    }
        this.view.displaySuit(card.getSuit());
	    return true;
	}
    }

}