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
        this.actionPos=0;
        this.actionCards=new Array();
        this.deck = new Soldeck();
	    this.deck.shuffle();
        this.deck.shuffle();
        this.extra=new Soldeck();
        this.extra.shuffle();
        this.extra.shuffle();
	    this.solview = new Solview(this);
        this.placing=false;
        
        //arrays for each row of cards
        this.row1=new Array(this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard());
        this.row2=new Array(this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard());
        this.row3=new Array(this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard());
        this.row4=new Array(this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard());
        this.row5=new Array(this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard());
        this.row6=new Array(this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard());
        
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
        for(var i=0; i<this.row6.length-1; i++){
            this.row6[i].flip();
        }
        this.decksadded=0;
    }

//takes the string for a card and determines if the player's turn is over
//if it is complete the cycle of the players turn and the humans turn
 cardSelected(cardPos,row){
     //alert(cardString);
     //return;
     //alert(cardString);
     let c=null;
     if(cardPos==""){//A face down card was clicked on
         this.solview.displayMessage("That card is currently not flipped up");
         return;
     }
     let card=this.find(cardPos,row);
     alert(card);
     //return;
     if(card==null){//Null card error
         alert("Error card is null");
         return;
     }
     else{
         if(!this.placing){
             let value=0;
            //this.actionCard=card;
             alert("we are trying to remove cards");
             
             //Find pos of card to make changes to selected row
             if(row=="row1"){
                 alert("Row 1");
                 
                 alert("Pos: "+cardPos);
                 for(var i =cardPos; i<this.row1.length; i++){
                     if(i==this.row1.length-1){
                         //this.actionCards.push(this.row5[i]); 
                         break;
                     }
                     
                     if(this.row1[i].sValue != this.row1[i].sValue-1){
                        //this.actionCards.push(this.row1[i]);
                         this.solview.displayMessage("That card cannot be moved");
                         //this.actionCards.splice(0);
                         return;
                     }
                 }
                 
                 //this.row1.splice(pos);
             }
             else if(row=="row2"){
                 //alert("Row2");
                 
                 //alert("Pos: "+cardPos);
                 for(var i =cardPos; i<this.row2.length; i++){
                     if(i==this.row2.length-1){
                         //this.actionCards.push(this.row5[i]); 
                         break;
                     }
                     
                     if(this.row2[i].sValue != this.row2[i].sValue-1){
                        //this.actionCards.push(this.row2[i]); 
                         this.solview.displayMessage("That card cannot be moved");
                         //this.actionCards.splice(0);
                         return;
                     }
                 }
                 
                 //this.row2.splice(pos);
             }
             else if(row=="row3"){
                 //alert("Row3");
                 
                 //alert("Pos: "+cardPos);
                 for(var i =cardPos; i<this.row3.length; i++){
                     if(i==this.row3.length-1){
                         //this.actionCards.push(this.row5[i]); 
                         break;
                     }
                     
                     if(this.row3[i].sValue != this.row3[i].sValue-1){
                        //this.actionCards.push(this.row3[i]); 
                         this.solview.displayMessage("That card cannot be moved");
                         //this.actionCards.splice(0);
                         return;
                     }
                 }
                 
                 //this.row3.splice(pos);
             }
             else if(row=="row4"){
                 alert("Row4");
                 
                 alert("Pos: "+cardPos);
                 for(var i =cardPos; i<this.row4.length; i++){
                     if(i==this.row4.length-1){
                         //this.actionCards.push(this.row5[i]); 
                         break;
                     }
                     
                     if(this.row4[i].sValue != this.row4[i].sValue-1){
                        //this.actionCards.push(this.row4[i]); 
                         this.solview.displayMessage("That card cannot be moved");
                         //this.actionCards.splice(0);
                         return;
                     }
                 }
                 
                 //this.row4.splice(pos);
             }
             else if(row=="row5"){
                 alert("Row5");
                 
                 alert("Pos: "+cardPos);
                 for(var i =cardPos; i<this.row5.length; i++){
                     if(i==this.row5.length-1){
                         //this.actionCards.push(this.row5[i]); 
                         break;
                     }
                     
                     if(this.row5[i].sValue != this.row5[i].sValue-1){
                        //this.actionCards.push(this.row5[i]); 
                         this.solview.displayMessage("That card cannot be moved");
                         //this.actionCards.splice(0);
                         return;
                     }
                 }
                 
                 //this.row5.splice(pos);
             }
             else if(row=="row6"){
                 alert("Row6");
                 
                 alert("Pos: "+cardPos);
                 for(var i =cardPos; i<this.row6.length; i++){
                     if(i==this.row6.length-1){
                         //this.actionCards.push(this.row5[i]); 
                         break;
                     }
                     
                     if(this.row6[i].sValue != this.row6[i].sValue-1){
                        //this.actionCards.push(this.row6[i]); 
                         this.solview.displayMessage("That card cannot be moved");
                         //this.actionCards.splice(0);
                         return;
                     }
                 }
                 
                 //this.row6.splice(pos);
             }
             
            //alert("The action card is: "+this.actionCard);
             this.actionRow=row
             this.placing=true;
             this.actionPos=cardPos;
             this.solview.displayMessage("Select row to place cards at");
             
             this.solview.displayRow(this.row1, 1);
             this.solview.displayRow(this.row2, 2);
             this.solview.displayRow(this.row3, 3);
             this.solview.displayRow(this.row4, 4);
             this.solview.displayRow(this.row5, 5);
             this.solview.displayRow(this.row6, 6);
             
            return;
         
        }else{
            alert("Row card value "+card.sValue);
            
            let movable=false;//Boolean to determine if we are making a legal move currently false for testing
            
            //Run checks to make sure the move that we are making is legal
            if(this.actionRow=="row1"){
                alert("Card to move "+this.row1[this.actionPos]);
                if(this.row1[this.actionPos].sValue != card.sValue-1){
                    movable=false;
                }
            }
            else if(this.actionRow=="row2"){
                alert("Card to move "+this.row2[this.actionPos]);
                if(this.row1[this.actionPos].sValue != card.sValue-1){
                    movable=false;
                }
            }
            else if(this.actionRow=="row3"){
                alert("Card to move "+this.row3[this.actionPos]);
                if(this.row1[this.actionPos].sValue != card.sValue-1){
                    movable=false;
                }
            }
            else if(this.actionRow=="row4"){
                alert("Card to move "+this.row4[this.actionPos]);
                if(this.row1[this.actionPos].sValue != card.sValue-1){
                    movable=false;
                }
            }
            else if(this.actionRow=="row5"){
                alert("Card to move "+this.row5[this.actionPos]);
                if(this.row1[this.actionPos].sValue != card.sValue-1){
                    movable=false;
                }
            }
            else if(this.actionRow=="row6"){
                alert("Card to move "+this.row6[this.actionPos]);
                if(this.row1[this.actionPos].sValue != card.sValue-1){
                    movable=false;
                }
            }
            //this.actionCards[0].sValue != card.sValue-1
            
            if(!movable){//if the move that we are making is not legal
                this.solview.displayMessage("Illeagal move select cards to move again");
                this.checkFlips();
                this.actionCard=null;
                this.actionRow=null;
                this.actionPos=0;
                this.actionCards.splice(0);
                this.placing=false;
                return;
            }
                alert("moving");
                ///*
                if(this.actionRow=="row1"){
                    this.row1.splice(this.actionPos);
                }
                else if(this.actionRow=="row2"){
                    this.row2.splice(this.actionPos);
                }
                else if(this.actionRow=="row3"){
                    this.row3.splice(this.actionPos);
                }
                else if(this.actionRow=="row4"){
                    this.row4.splice(this.actionPos);
                }
                else if(this.actionRow=="row5"){
                    this.row5.splice(this.actionPos);
                }
                
                else if(this.actionRow=="row6"){
                    this.row6.splice(this.actionPos);
                }
                //*/
                
                if(row=="row1"){
                    while(this.actionCards.length>0){
                        this.row1.push(this.actionCards.pop());
                    }
                }
                if(row=="row2"){
                    while(this.actionCards.length>0){
                        this.row2.push(this.actionCards.pop());
                    }
                }
                if(row=="row3"){
                    while(this.actionCards.length>0){
                         this.row3.push(this.actionCards.pop());
                    }
                }
                if(row=="row4"){
                    while(this.actionCards.length>0){
                        this.row4.push(this.actionCards.pop());
                    }
                    
                }
                if(row=="row5"){
                    while(this.actionCards.length>0){
                        this.row5.push(this.actionCards.pop());
                    }
                }
                if(row=="row6"){
                    while(this.actionCards.length>0){
                        this.row6.push(this.actionCarda.pop());
                    }
                }
                
            this.checkFlips();
            //this.actionCard=null;
            this.actionRow=null;
            this.actionCards.splice(0);
            this.placing=false;
            
            this.solview.displayRow(this.row1, 1);
            this.solview.displayRow(this.row2, 2);
            this.solview.displayRow(this.row3, 3);
            this.solview.displayRow(this.row4, 4);
            this.solview.displayRow(this.row5, 5);
            this.solview.displayRow(this.row6, 6);
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
        this.row6.push(this.deck.dealACard());
        
        this.solview.displayRow(this.row1, 1);
        this.solview.displayRow(this.row2, 2);
        this.solview.displayRow(this.row3, 3);
        this.solview.displayRow(this.row4, 4);
        this.solview.displayRow(this.row5, 5);
        this.solview.displayRow(this.row6, 6);
        
        this.solview.eraseDeck();
        this.decksadded++;
    }
    
    find(cardPos,rowNum){
        //let r = null;
        //alert("Cardstrings = "+cardString);
        var r=null;
        if(rowNum == "row1"){
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
        else if(rowNum=="row6"){
            //alert("going for row 5");
            r=this.row6;
        }
        
        //alert("r= "+r);
        //alert("the card found is "+r[cardPos]);
        return r[cardPos];
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
        
        if(this.row6[this.row6.length-1].flipped){
            this.row6[this.row6.length-1].flip();
        }
        
    }

play(){//Set up the solitare game
     this.solview.displayRow(this.row1, 1);
     this.solview.displayRow(this.row2, 2);
     this.solview.displayRow(this.row3, 3);
     this.solview.displayRow(this.row4, 4);
     this.solview.displayRow(this.row5, 5);
     this.solview.displayRow(this.row6, 6);
     return;
 }
    
    resetGame(){//Resets the game with a new deck and players
        this.solview.eraseRows();
        this.deck=new Soldeck();
        this.extra=new Soldeck();
        this.moves=0;
        this.actionCard=null;
        this.actionRow=null;
        this.actionPos=0;
        this.actionCards.splice(0);
        
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
        this.row6=new Array(this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard(), this.deck.dealACard());
        
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
        for(var i=0; i<this.row6.length-1; i++){
            this.row6[i].flip();
        }
        
        this.solview.displayRow(this.row1, 1);
        this.solview.displayRow(this.row2, 2);
        this.solview.displayRow(this.row3, 3);
        this.solview.displayRow(this.row4, 4);
        this.solview.displayRow(this.row5, 5);
        this.solview.displayRow(this.row6, 6);
        this.solview.addDecks(this.decksadded);
        this.decksadded=0;
        
        return;
    }

}