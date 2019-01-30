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
	    this.human=new Sniphuman(this.deck, this.pile, this.view);
	    this.cpu=new Snipcpu(this.deck, this.pile, this.view);
    }

//takes the string for a card and determines if the player's turn is over
 cardSelected(cardString){
     //alert("snip");
     //alert(cardString);
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
        //alert("Passing play to the computer");
        while(true){
            if(!this.snip && !this.snap){
                alert("snip");
                let pcard=this.pile.getTopCard();
                let hand=this.cpu.getHandCopy();
                alert("pcard: "+pcard);
                //alert("hand card: "+hand[1]);
                this.pile.acceptACard(hand[1]);
                this.cpu.remove(1);
                this.sview.displayComputerHand(this.cpu.getHandCopy());
                this.sview.displayPileTopCard(this.pile.getTopCard());
                this.snip=true;
                this.sview.displayMessage("Snip");
                this.cpu.played=true;
                
            }
            else if(this.snip && !this.snap){
                alert("snap");
                let pcard=this.pile.getTopCard();
                let hand=this.cpu.getHandCopy();
                let com=null;
                //alert(hand.length)
                for(var i=0; i<hand.length; i++){
                    //alert(hand[i]);
                    if(hand[i].getValue() == this.pile.getTopCard().getValue()){
                        alert("can play");
                        this.cpu.played=true;
                        alert("pcard: "+pcard);
                        //alert("hand card: "+hand[i]);
                        //com=hand[i];
                        this.pile.acceptACard(hand[i]);
                        this.cpu.remove(this.cpu.indexOf(hand[i]));
                        this.sview.displayComputerHand(this.cpu.getHandCopy());
                        this.sview.displayPileTopCard(this.pile.getTopCard());
                        this.snap=true;
                        this.sview.displayMessage("Snap");
                        break;
                    }
                }
                
                if(!this.cpu.played){
                    this.snip=false;
                    this.snap=false;
                    break;
                    this.cpu.played=false;
                }
            }
            else if(this.snip && this.snap){
                alert("snorum");
                let pcard=this.pile.getTopCard();
                let hand=this.cpu.getHandCopy();
                let com=null;
                for(var i=0; i<hand.length; i++){
                    //alert(hand[i]);
                    if(hand[i].getValue() == this.pile.getTopCard().getValue()){
                        alert("can play");
                        this.cpu.played=true;
                        //com=hand[i];
                        alert("pcard: "+pcard);
                        //alert("hand card: "+hand[i]);
                        this.pile.acceptACard(hand[i]);
                        this.cpu.remove(this.cpu.indexOf(hand[i]));
                        this.sview.displayComputerHand(this.cpu.getHandCopy());
                        this.sview.displayPileTopCard(this.pile.getTopCard());
                        this.snip=false;
                        this.snap=false;
                        alert("pcard after: "+this.pile.getTopCard());
                        //alert("hand card: "+hand[i]);
                        this.sview.displayMessage("Snorum");
                        this.cpu.played=true;
                        //alert("reset");
                        break;
                    }
                }
                
                if(!this.cpu.played){
                    this.snip=false;
                    this.snap=false;
                    break;
                    this.cpu.played=false;
                }
            }
            
        }
        this.sview.displayMessage("Your turn");
    }

//Sets up the start of the game
 play(){//Set up for playing crazy eights
     //alert("Loading up snip snap snorum");
     this.human.addCards();
     this.cpu.addCards();
     this.sview.displayPileTopCard(null);
     this.sview.displayComputerHand(this.cpu.getHandCopy());
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
	    
        this.human = new Sniphuman(this.deck, this.pile, this.view);
	    this.cpu = new Snipcpu(this.deck, this.pile, this.view);
        this.human.addCards();
        this.cpu.addCards();
        this.sview.displayPileTopCard(this.pile.getTopCard());
        this.sview.displayComputerHand(this.cpu.getHandCopy());
        this.sview.displayHumanHand(this.human.getHandCopy());
        
        return;
    }

}