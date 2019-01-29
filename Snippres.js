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
        this.snip=false;
        this.snap=false;
        
        
	    this.pile = new Pile();
	    //this.pile.acceptACard(this.deck.dealACard());
	    this.sview = new Snipview(this);
	    this.human=new HumanPlayer(this.deck, this.pile, this.view);
	    this.snipcpu=new Snipcpu(this.deck, this.pile, this.view);
    }

//takes the string for a card and determines if the player's turn is over
 cardSelected(cardString){
    // alert("snip");
     //alert("The pile is empty "+this.pile.isEmpty());
     alert(cardString);
     //let card=this.human.find(cardString);
     let card=this.pile.getTopCard();
     let hum=this.human.find(cardString);
     if(!this.snip){
         this.pile.acceptACard(hum);
         this.sview.displayMessage("Snip");
         this.sview.displayPileTopCard(hum);
         this.human.remove(this.human.indexOf(hum));
         this.sview.displayHumanHand(this.human.getHandCopy());
         this.snip=true;
     }
     else if(this.snip && !this.snap){
         if(card.getValue() == hum.getValue()){
             this.pile.acceptACard(hum);
             this.human.remove(this.human.indexOf(hum));
             this.sview.displayMessage("Snap");
             this.snap=true;
             this.sview.displayHumanHand(this.human.getHandCopy());
             this.sview.displayPileTopCard(hum);
         }
         else{
             this.sview.displayMessage("Cannot play that card "+hum);
         }
     }
     else if(this.snip && this.snap){
         if(card.getValue() == hum.getValue()){
             this.pile.acceptACard(hum);
             this.human.remove(this.human.indexOf(hum));
             this.sview.displayMessage("Snorum. You may now start the next round");
             this.sview.displayHumanHand(this.human.getHandCopy());
             this.sview.displayPileTopCard(hum);
             this.snip=false;
             this.snap=false;
         }
         else{
             this.sview.displayMessage("Cannot play that card");
         }
     }
     
    return;
 }
    
    comTurn(){
        alert("Passing play to the computer");
        while(true){
            let pcard=this.pile.getTopCard();
            if(!this.snip){
                alert("snip");
                let hand=this.snipcpu.getHandCopy();
                this.pile.acceptACard(hand[0]);
                this.snipcpu.remove(0);
                this.sview.displayComputerHand(this.snipcpu.getHandCopy());
                this.sview.displayPileTopCard(this.pile.acceptACard());
            }
            else if(this.snip && !this.snap){
                alert("snap");
            }
            else if(this.snip && this.snap){
                alert("snorum");
            }
            
           // if()
        }
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
        this.snap=false;
        this.snip=false;
        this.sview.displayMessage("Welcome to Snip Snap Snorum");
        
	    this.deck.shuffle();
        this.deck.shuffle();
        //this.date=null;
        //this.started=false;
	    this.pile = new Pile();
	    //this.pile.acceptACard(this.deck.dealACard());
	    
        this.human = new HumanPlayer(this.deck, this.pile, this.view);
	    this.computer = new ComputerPlayer(this.deck, this.pile, this.view);
        this.sview.displayPileTopCard(this.pile.getTopCard());
        this.sview.displayComputerHand(this.computer.getHandCopy());
        this.sview.displayHumanHand(this.human.getHandCopy());
        //this.view.undisplaySuitPicker();
        //let suit=document.getElementById("status");
        //suit.innerHTML="Welcome to Crazy Eights";
        //this.computer.countCards();
        return;
    }

}