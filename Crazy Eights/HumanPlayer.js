/**
 * Interact with the human player to obtain their desired play.
 */
class HumanPlayer extends Player {

    constructor(deck, pile, view) {
	super(deck);
        this.deck = deck;
	this.pile = pile;
	this.view = view;
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
	    return false;  // Call cardPicked() after user selects a different card
	}
	else {//card is eligible to play
	    this.remove(this.list.indexOf(card));
	    this.pile.acceptACard(card);
	    this.view.displayPileTopCard(card);
	    this.view.displayHumanHand(this.getHandCopy());
	    if (card.getValue() === "8") {//user played an eight
		this.view.displaySuitPicker();
		return false;
		// Continue after user picks a suit.
	    }
	    return true;
	}

    }

  suitPicked(suit){
       if (!(suit === "c" || suit === "d" ||
          suit === "h" || suit === "s")) {
          return false; // Have the user pick different suit.
	}
      this.pile.setAnnouncedSuit(suit);
      this.view.undisplaySuitPicker();
	return true;
  }

}