/**
 * Setting up Crazy Eights human vs computer
 */
class Jackpres {
    /**
     * Initialize game by creating and shuffling the deck,
     * dealing one card (other than an 8) to the discard pile,
     * and dealing 7 cards to each player.
     */
    constructor() {
        //this.moves=0;
	    this.deck1 = new Deck();
	    this.deck1.shuffle();
        this.deck1.shuffle();
        this.cdeck=new Deck();
        this.cdeck.shuffle();
        this.cdeck.shuffle();
        
	    this.jview = new Jackview(this);
        this.jplayer=new Jackplayer(this.deck1,false);//the player
        this.dealer=new Jackplayer(this.cdeck,true);//the computer/dealer
    }
    
    hit(){
        this.jplayer.add(this.deck1.dealACard());
        this.jview.displayHumanHand(this.jplayer.getHandCopy());
        this.jplayer.findValue();
        //alert(this.jplayer.value);
        if(this.jplayer.value>21){
            //alert("Bust");\
            this.jview.displayMessage("You have busted");
            this.dealer.list[0].flip();
            this.jview.displayComputerHand(this.dealer.getHandCopy());
        }
    }
    
    stand(){
        alert("Player has decided to stand");
        this.dealer.list[0].flip();
        this.jview.displayComputerHand(this.dealer.getHandCopy());
        this.dealer.findValue();
        alert("dealer value is "+ this.dealer.value);
        var i=0;
        //while((this.dealer.value < 17) || (this.dealer.value > 21) ){
        while(i<2){
            alert("The computer is currently taking his turn");
            this.dealer.add(this.cdeck.dealACard());
            this.dealer.findValue();
            this.jview.displayComputerHand(this.dealer.getHandCopy());
            i++;
        }
        alert("The computer is done taking his turn");
        alert("The dealer hand value is now" +this.dealer.value);
        return;
    }
    
    checkValue(){
        this.dealer.findValue();
        this.jplayer.findValue();
    }

//Sets up the start of the game
 play(){//Set up for playing crazy eights
     this.jview.displayComputerHand(this.dealer.getHandCopy());
     this.jview.displayHumanHand(this.jplayer.getHandCopy());
     this.dealer.findValue();
     this.jplayer.findValue();
     return;
 }
    
    
    resetGame(){//Resets the game with a new deck and players
            this.jview.eraseHands();
            this.deck1=new Deck();
            this.cdeck=new Deck();
            this.deck1.shuffle();
            this.deck1.shuffle();
            this.cdeck.shuffle();
            this.cdeck.shuffle();
            //this.moves=0;
        
	       this.jplayer = new Jackplayer(this.deck1, false);
	       this.dealer = new Jackplayer(this.cdeck, true);
           //this.view.displayPileTopCard(this.pile.getTopCard());
            this.jview.displayComputerHand(this.dealer.getHandCopy());
            this.jview.displayHumanHand(this.jplayer.getHandCopy());
            
            //let humanwin = document.getElementById("announcer");
            //humanwin.style="display: none";
            return;
    }

}