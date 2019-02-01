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
        this.deck = new Soldeck();
	    this.deck.shuffle();
        this.deck.shuffle();
        this.extra=new Soldeck();
        this.extra.shuffle();
        this.extra.shuffle();
	    this.solview = new Solview(this);
        
        //arrays for each row of cards
        this.row1=new Array(this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard());
        this.row2=new Array(this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard());
        this.row3=new Array(this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard());
        this.row4=new Array(this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard());
        this.row5=new Array(this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard());
        
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
        this.decksadded=0;
    }

//takes the string for a card and determines if the player's turn is over
//if it is complete the cycle of the players turn and the humans turn
 cardSelected(cardString,row){
     //alert(cardString);
     let c=null;
     if(cardString==""){//A face down card was clicked on
         this.solview.displayMessage("That card is currently not flipped up");
         return;
     }
     let card=this.find(cardString,row);
         if(card==null){
             alert("Error card is null");
             return;
         }
     else{
         if(this.actionCard==null){     
            this.actionCard=card;
            //alert("The action card is: "+this.actionCard);
            this.actionRow=row
            return;
         
        }else{
            if(this.actionCard.sValue > card.sValue){
                this.solview.displayMessage("That is an illegal move");
            }
            else{
                ///*
                if(this.actionRow=="row1"){
                    for(var i=0; i<this.row1.length; i++){
                        if(this.row1[i] == this.actionCard){
                            this.row1.splice(i);
                        }
                    }
                }
                else if(this.actionRow=="row2"){
                    for(var i=0; i<this.row2.length; i++){
                        if(this.row2[i] == this.actionCard){
                            this.row2.splice(i);
                        }
                    }
                }
                else if(this.actionRow=="row3"){
                    for(var i=0; i<this.row3.length; i++){
                        if(this.row3[i] == this.actionCard){
                            this.row3.splice(i);
                        }
                    }
                }
                else if(this.actionRow=="row4"){
                    for(var i=0; i<this.row4.length; i++){
                        if(this.row4[i] == this.actionCard){
                            this.row4.splice(i);
                        }
                    }
                }
                else if(this.actionRow=="row5"){
                    for(var i=0; i<this.row5.length; i++){
                        if(this.row5[i] == this.actionCard){
                            this.row5.splice(i);
                        }
                    }
                }
                //*/
                
                if(row=="row1"){
                    this.row1.push(this.actionCard);
                    
                }
                if(row=="row2"){
                    this.row2.push(this.actionCard);
                    
                }
                if(row=="row3"){
                    this.row3.push(this.actionCard);
                    
                }
                if(row=="row4"){
                    this.row4.push(this.actionCard);
                    
                }
                if(row=="row5"){
                    this.row5.push(this.actionCard);
                    
                }
                
                
            }
            this.checkFlips();
            this.actionCard=null;
            this.actionRow=null;
            
            this.solview.displayRow(this.row1, 1);
            this.solview.displayRow(this.row2, 2);
            this.solview.displayRow(this.row3, 3);
            this.solview.displayRow(this.row4, 4);
            this.solview.displayRow(this.row5, 5);
        }
     }
     
    return;
 }
    
    dealNewCards(){
        this.row1.push(this.deck.dealACard());
        this.row2.push(this.deck.dealACard());
        this.row3.push(this.deck.dealACard());
        this.row4.push(this.deck.dealACard());
        this.row5.push(this.deck.dealACard());
        
        this.solview.displayRow(this.row1, 1);
        this.solview.displayRow(this.row2, 2);
        this.solview.displayRow(this.row3, 3);
        this.solview.displayRow(this.row4, 4);
        this.solview.displayRow(this.row5, 5);
        
        this.solview.eraseDeck();
        this.decksadded++;
    }
    
    find(cardString,rowNum){
        //let r = null;
        //let option=null;
        let num=rowNum;
        //alert("Cardstrings = "+cardString);
        var r=null;
        if(num == "row1"){
            //alert("going for row 1");
            r=this.row1;
        }
        else if(rowNum == "row2"){
            //alert("going for row 2");
            r=this.row2;
        }
        else if(rowNum=="row3"){
            //alert("going for row 3");
            r=this.row3;
        }
        else if(rowNum=="row4"){
            //alert("going for row 4");
            r=this.row4;
        }
        else if(rowNum=="row5"){
            //alert("going for row 5");
            r=this.row5;
        }
        
        //alert("r= "+r);
        for(var i=0; i<r.length; i++){
            //alert(i+" "+r[i].toString());
            if(r[i].toString()==cardString){
                return r[i];
            }
        }
        return null;
    }
    
    checkFlips(){
        
        
        if(this.row1[this.row1.length-1].flipped){
            this.row1[this.row1.length-1].flip();
        }
        
        if(this.row2[this.row2.length-1].flipped){
            this.row2[this.row2.length-1].flip();
        }
        
        if(this.row3[this.row3.length-1].flipped){
            this.row3[this.row3.length-1].flip();
        }
        
        
        if(this.row4[this.row4.length-1].flipped){
            this.row4[this.row4.length-1].flip();
        }
        
        if(this.row5[this.row5.length-1].flipped){
            this.row5[this.row5.length-1].flip();
        }
        
        /*
        for(var i = 0; i<this.row1.length; i++){
            if(!this.row1[i].flipped){
                break;
            }
            if(i=this.row1.length-1){
                if(this.row1[i].flipped){
                    this.row1[i].flip();
                }
            }
        }
        
        for(var i=0; i<this.row2.length; i++){
            if(!this.row2[i].flipped){
                break;
            }
            if(i=this.row2.length-1){
                if(this.row2[i].flipped){
                    this.row2[i].flip();
                }
            }
        }
        
        for(var i=0; i<this.row3.length; i++){
            if(!this.row3[i].flipped){
                break;
            }
            if(i=this.row3.length-1){
                if(this.row3[i].flipped){
                    this.row3[i].flip();
                }
            }
        }
        
        for(var i=0; i<this.row4.length; i++){
            if(!this.row4[i].flipped){
                break;
            }
            if(i=this.row4.length-1){
                if(this.row4[i].flipped){
                    this.row4[i].flip();
                }
            }
        }
        
        for(var i=0; i<this.row5.length; i++){
            if(!this.row5[i].flipped){
                break;
            }
            if(i=this.row5.length-1){
                if(this.row5[i].flipped){
                    this.row5[i].flip();
                }
            }
        }
        */
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
        this.deck=new Soldeck();
        this.extra=new Soldeck();
        this.moves=0;
        
	    this.deck.shuffle();
	    this.deck.shuffle();
        this.extra.shuffle();
        this.extra.shuffle();
        
        //arrays for each row of cards
        this.row1=new Array(this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard());
        this.row2=new Array(this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard());
        this.row3=new Array(this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard());
        this.row4=new Array(this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard());
        this.row5=new Array(this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard());
        
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
        this.solview.addDecks(this.decksadded);
        this.decksadded=0;
        
        return;
    }

}