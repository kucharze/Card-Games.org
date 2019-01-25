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
	    this.deck.shuffle();
	    
        this.pile = new Pile();
	    //this.pile.acceptACard(this.deck.dealACard());
	    this.fview = new Fishview(this);
        
        this.askCard=null;
        
	    this.human = new HumanPlayer(this.deck, this.pile, this.fview);
	    this.computer = new ComputerPlayer(this.deck, this.pile, this.fview);
    }

 cardPicked(){
   this.human.cardPicked();
    this.computer.cardPicked();
   this.completeBothTurns();
 }
    
    comTurn(){
        let card=this.computer.fish();
        this.fview.displayMessage("Do you have any "+card.getValue()+"'s")
        this.askCard=card;
    }
    
    sayNo(){
        if(this.human.hasValue(this.askCard.getValue())){
            alert("You have a card that you can play");
            return;
        }
        else{
            this.computer.cardPicked();
        }
        this.human.fish=true;
        this.fview.displayMessage("Pick a card to ask for");
    }
    
    fish(cardstring){
        if(!this.human.fish){
            if(this.human.give(cardstring,this.askCard)){
            this.computer.remove(this.computer.indexOf(this.askCard));
                this.fview.displayMessage("Pick a card to ask for");
                this.human.fish=true;
            }else{
                this.fview.displayWrongCardMsg();
            }
            return;
        }
        alert("We are fishing");
        //alert(cardstring);
        let card=this.human.find(cardstring);
        //alert(card);
        if(card==null){
            return;
        }
        if(!this.computer.give(card)){
            this.human.cardPicked();
        }
        else{
            this.human.remove(this.human.indexOf(card));
        }
        if(this.human.isHandEmpty()){
            this.fview.displayMessage("Player wins");
            return;
        }
        
        this.fview.displayHumanHand(this.human.getHandCopy());
        this.fview.displayComputerHand(this.computer.getHandCopy());
        this.human.fish=false;
        this.comTurn();
        //this.completeBothTurns();
    }
    
    removeDups(){
        if(this.human.hasDuplicate()){
            alert("removing duplicates");
            this.human.removeDups();
            this.fview.displayHumanHand(this.human.getHandCopy());
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