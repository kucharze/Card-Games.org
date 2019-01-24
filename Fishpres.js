/**
 * Setting up Crazy Eights human vs computer
 */
class Fishpres {
    /**
     * Initialize game by creating and shuffling the deck,
     * dealing one card (other than an 8) to the discard pile,
     * and dealing 7 cards to each player.
     */
    constructor() {
        this.moves=0;
	    this.deck = new Deck();
	    this.deck.shuffle();
	    while(this.deck.isTopCardAnEight()){
            this.deck.shuffle();
	    }
	    this.pile = new Pile();
	    //this.pile.acceptACard(this.deck.dealACard());
	    this.fview = new Fishview(this);
        
	    this.human = new HumanPlayer(this.deck, this.pile, this.fview);
	    this.computer = new ComputerPlayer(this.deck, this.pile, this.fview);
    }

 cardPicked(){
   this.human.cardPicked();
   this.completeBothTurns();
 }

 completeBothTurns(){
     if(this.human.isHandEmpty()){
         this.fview.announceHumanWinner();
     }
     else{
         this.computer.fish();
         if(this.computer.isHandEmpty()){
             this.fview.announceComputerWinner();
         }
     }
     
    if(this.human.isHandEmpty()){
	   this.fview.announceHumanWinner();
	   return;
    }
    this.computer.takeATurn();
    if(this.computer.isHandEmpty()){
	   this.fview.announceComputerWinner();
    }
    return;
 }
    
    fish(cardstring){
        alert(cardstring);
        let card=this.human.fish(cardstring);
        alert(card);
        if(card==null){
            return;
        }
        if(!this.computer.give(card)){
            this.human.cardPicked();
        }
    }
    
    removeDups(){
        if(this.human.hasDuplicate()){
            alert("removing duplicates");
        }
        else{
            alert("There are no Duplicats");
        }
    }

//Sets up the start of the game
 play(){
   this.fview.displayComputerHand(this.computer.getHandCopy());
   this.fview.displayHumanHand(this.human.getHandCopy());
   return;
 }
    
    resetGame(){
        //alert("attempting to reset");
        this.fview.eraseHands();
        this.deck=new Deck();
        this.moves=0;
        
	    this.deck.shuffle();
	    this.deck.shuffle();
	    
	    this.pile = new Pile();
	    //this.pile.acceptACard(this.deck.dealACard());
	    this.human = new HumanPlayer(this.deck, this.pile, this.fview);
	    this.computer = new ComputerPlayer(this.deck, this.pile, this.fview);
        
        //this.fview.displayPileTopCard(this.pile.getTopCard());
        this.fview.displayComputerHand(this.computer.getHandCopy());
        this.fview.displayHumanHand(this.human.getHandCopy());
        return;
    }


}