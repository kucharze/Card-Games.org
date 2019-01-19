/**
 * Setting up Crazy Eights human vs computer
 */
class Presenter {
  
    /**
     * Initialize game by creating and shuffling the deck,
     * dealing one card (other than an 8) to the discard pile,
     * and dealing 7 cards to each player.
     */
    constructor() {
	this.deck = new Deck();
	this.deck.shuffle();
	while(this.deck.isTopCardAnEight()){
	  this.deck.shuffle();
	}
	this.pile = new Pile();
	this.pile.acceptACard(this.deck.dealACard());
	this.view = new View(this);
	this.human = new HumanPlayer(this.deck, this.pile, this.view);
	this.computer = new ComputerPlayer(this.deck, this.pile, this.view);
    }

 cardPicked(){
   this.human.cardPicked();
   this.completeBothTurns();
 }

//takes the string for a card and determines if the player's turn is over
//if it is complete the cycle of the players turn and the humans turn
 cardSelected(cardString){
   if(this.human.cardSelected(cardString)){
	this.completeBothTurns();
     }
    return;
 }

 completeBothTurns(){
   if(this.human.isHandEmpty()){
	this.view.announceHumanWinner();
	return;
    }
    this.computer.takeATurn();
    if(this.computer.isHandEmpty()){
	this.view.announceComputerWinner();
     }
     return;
 }

//Sets up the start of the game
 play(){
   this.view.displayPileTopCard(this.pile.getTopCard());
   this.view.displayComputerHand(this.computer.getHandCopy());
   this.view.displayHumanHand(this.human.getHandCopy());
   return;
 }

//Callback after suit picked passed through to human object for processing.
 suitPicked(suit){
   if(this.human.suitPicked(suit)){
	this.completeBothTurns();
    }
    return;
 }

}