/**
 * Setting up Crazy Eights human vs computer
 */
class Solpres {
    /**
     * Initialize game by creating and shuffling the deck,
     * dealing one card (other than an 8) to the discard pile,
     * and dealing 7 cards to each player.
     */
    constructor() {
        this.moves=0;
        this.actionCard=null;
        this.actionRow=null;
        this.deck = new Deck();
	    this.deck.shuffle();
        this.deck.shuffle();
	    this.solview = new Solview(this);
        
        //arrays for each row of cards
        this.row1=new Array(this.deck.dealACard(), this.deck.dealACard());
        this.row2=new Array(this.deck.dealACard(), this.deck.dealACard());
        this.row3=new Array(this.deck.dealACard(), this.deck.dealACard());
        this.row4=new Array(this.deck.dealACard(), this.deck.dealACard());
        this.row5=new Array(this.deck.dealACard(), this.deck.dealACard());
        
        for(var i=0; i<this.row1.length-1; i++){
            this.row1[i].flip();
        }
        for(var i=0; i<this.row2.length-1; i++){
            this.row2[i].flip();
        }
        for(var i=0; i<this.row3.length-1; i++){
            this.row3[i].flip();
        }
        for(var i=0; i<this.row4.length-1; i++){
            this.row4[i].flip();
        }
       for(var i=0; i<this.row5.length-1; i++){
            this.row5[i].flip();
        }

    }

//takes the string for a card and determines if the player's turn is over
//if it is complete the cycle of the players turn and the humans turn
 cardSelected(cardString,row){
     if(this.actionCard==null){
         this.actionCard=cardString;
         this.actionRow=row;
     }else{
        //let cards=find(actioncard);
         //let cardn=find(cardString);
     }
     
    return;
 }
    
    find(cardString){
        for(var i=1; i<6; i++){
            if(i==1){
                let row=this.row1;
            }
            if(i==2){
                let row=this.row2;
            }
            if(i==3){
                let row=this.row3;
            }
            if(i==4){
                let row=this.row4;
            }
            if(i==5){
                let row=this.row5;
            }
            for(var j=0; j<row.length-1; j++){
                if(row[j].toString()==cardString){
                    return row[j];
                }
            }
        }
    }

play(){//Set up the solitare game
     this.solview.displayRow(this.row1, 1);
     this.solview.displayRow(this.row2, 2);
     this.solview.displayRow(this.row3, 3);
     this.solview.displayRow(this.row4, 4);
     this.solview.displayRow(this.row5, 5);
     return;
 }
    
    resetGame(){//Resets the game with a new deck and players
        this.solview.eraseRows();
        this.deck=new Deck();
        this.moves=0;
        
	    this.deck.shuffle();
	    this.deck.shuffle();
        
        this.row1=new Array(this.deck.dealACard(), this.deck.dealACard());
        this.row2=new Array(this.deck.dealACard(), this.deck.dealACard());
        this.row3=new Array(this.deck.dealACard(), this.deck.dealACard());
        this.row4=new Array(this.deck.dealACard(), this.deck.dealACard());
        this.row5=new Array(this.deck.dealACard(), this.deck.dealACard());
        
        for(var i=0; i<this.row1.length-1; i++){
            this.row1[i].flip();
        }
        for(var i=0; i<this.row2.length-1; i++){
            this.row2[i].flip();
        }
        for(var i=0; i<this.row3.length-1; i++){
            this.row3[i].flip();
        }
        for(var i=0; i<this.row4.length-1; i++){
            this.row4[i].flip();
        }
       for(var i=0; i<this.row5.length-1; i++){
            this.row5[i].flip();
        }
        
        this.solview.displayRow(this.row1, 1);
        this.solview.displayRow(this.row2, 2);
        this.solview.displayRow(this.row3, 3);
        this.solview.displayRow(this.row4, 4);
        this.solview.displayRow(this.row5, 5);
        
        return;
    }

}