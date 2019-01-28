/**
 * Setting up Crazy Eights human vs computer
 */
class Snippres {
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
        
       //this.date=null;
        //this.started=false;
	    this.pile = new Pile();
	    //this.pile.acceptACard(this.deck.dealACard());
	    this.sview = new Snipview(this);
	    this.human=new HumanPlayer(this.deck, this.pile, this.view);
        
	    this.snipcpu=new Snipcpu(this.deck, this.pile, this.view);
    }

//takes the string for a card and determines if the player's turn is over
//if it is complete the cycle of the players turn and the humans turn
 cardSelected(cardString){
    // alert("snip");
     //alert("The pile is empty "+this.pile.isEmpty());
     if(this.pile.isEmpty()){
         let card=this.human.find(cardString);
         this.pile.acceptACard(card);
         this.human.remove(this.human.indexOf(card));
         this.sview.displayMessage("Snip");
         this.sview.displayPileTopCard(card);
     }
     else{
         this.pile.empty();
         this.sview.displayPileTopCard(this.pile.getTopCard());
     }
     
    return;
 }
    
    comTurn(){
        
    }

//Sets up the start of the game
 play(){//Set up for playing crazy eights
     //alert("Loading up snip snap snorum");
     this.sview.displayPileTopCard(null);
     this.sview.displayComputerHand(this.snipcpu.getHandCopy());
     this.sview.displayHumanHand(this.human.getHandCopy());
     return;
 }
    
    resetGame(){//Resets the game with a new deck and players
        this.sview.eraseHands();
        this.deck=new Deck();
        this.moves=0;
        
	    this.deck.shuffle();
        this.deck.shuffle();
        //this.date=null;
        //this.started=false;
	    this.pile = new Pile();
	    //this.pile.acceptACard(this.deck.dealACard());
	    
        this.human = new HumanPlayer(this.deck, this.pile, this.view);
	    this.computer = new ComputerPlayer(this.deck, this.pile, this.view);
        //this.view.displayPileTopCard(this.pile.getTopCard());
        this.sview.displayComputerHand(this.computer.getHandCopy());
        this.sview.displayHumanHand(this.human.getHandCopy());
        //this.view.undisplaySuitPicker();
        //let suit=document.getElementById("status");
        //suit.innerHTML="Welcome to Crazy Eights";
        //this.computer.countCards();
        return;
    }

}