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
	    while(this.deck.isTopCardAnEight()){
            this.deck.shuffle();
	    }
        
       //this.date=null;
        //this.started=false;
	    this.pile = new Pile();
	    this.pile.acceptACard(this.deck.dealACard());
	    this.sview = new Snipview(this);
	    this.human=new HumanPlayer(this.deck, this.pile, this.view);
	    this.computer=new ComputerPlayer(this.deck, this.pile, this.view);
    }

//takes the string for a card and determines if the player's turn is over
//if it is complete the cycle of the players turn and the humans turn
 cardSelected(cardString){
    if(!this.started){
         this.started=true;
         this.date=new Date();
     }
     if(this.human.cardSelected(cardString)){
         this.completeBothTurns();
     }
    return;
 }

 completeBothTurns(){
     this.moves++;
    if(this.human.isHandEmpty()){
       alert("You won in this many moves:"+this.moves);
        let elapsed=new Date() -this.date;
        //alert("You won in this much time "+elapsed);
	   this.view.announceHumanWinner();
	   return;
    }
    this.computer.takeATurn();
    if(this.computer.isHandEmpty()){
	this.view.announceComputerWinner();
     }
     if(this.deck.isEmpty()){
         this.deck=new Deck();
         while(this.deck.isTopCardAnEight()){
           this.deck.shuffle();
	     }
     }
     return;
 }

//Sets up the start of the game
 play(){//Set up for playing crazy eights
     //alert("Loading up snip snap snorum");
     //this.view.displayPileTopCard(this.pile.getTopCard());
     this.sview.displayComputerHand(this.computer.getHandCopy());
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
	    //this.pile = new Pile();
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