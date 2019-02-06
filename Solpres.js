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
     if(card==null){//Null card error
         this.solview.displayMessage("Error cannot find chosen card")
         return;
     }
     else{
         if(!this.placing){
             let value=0;
            //this.actionCard=card;
             alert("Trying to remove cards");
             let j=0;
             //Find pos of card to make changes to selected row
             if(row=="row1"){
                 //alert("Pos: "+cardPos);
                // alert("length = "+this.row1.length);
                 for(var i =cardPos; i<this.row1.length; i++){
                     //alert("i="+i);
                     j=++i;
                     i--;
                     alert("j "+j);
                     if(i==this.row1.length-1){
                         //this.actionCards.push(this.row5[i]); 
                         break;
                     }
                     if(this.row1[i].getSValue() != this.row1[j].getSValue()+1){
                         alert("Move fail");
                         alert("card 1 "+ this.row1[i] + " card 2 "+this.row1[j]);
                         alert("Value 1 "+ this.row1[i].getSValue() + " value 2 "+this.row1[j].getSValue());
                         this.solview.displayMessage("That card cannot be moved");
                         return;
                     }
                 }
             }
             else if(row=="row2"){
                 //alert("length = "+this.row2.length);
                 for(var i =cardPos; i<this.row2.length; i++){
                     //alert("i="+i);
                     j=++i;
                     i--;
                     alert("j "+j);
                     if(i==this.row2.length-1){
                         break;
                     }
                     if(this.row2[i].getSValue() != this.row2[j].getSValue()+1){
                         alert("Move fail");
                         alert("card 1 "+ this.row2[i] + " card 2 "+this.row2[j]);
                         alert("Value 1 "+ this.row2[i].getSValue() + " value 2 "+this.row2[j].getSValue());
                         this.solview.displayMessage("That card cannot be moved");
                         return;
                     }
                 }
             }
             else if(row=="row3"){
                 //alert("Pos: "+cardPos);
                 //alert("length = "+this.row3.length);
                 for(var i =cardPos; i<this.row3.length; i++){
                     //alert("i="+i);
                     j=++i;
                     i--;
                     alert("j "+j);
                     if(i==this.row3.length-1){
                         break;
                     }
                     if(this.row3[i].getSValue() != this.row3[j].getSValue()+1){
                         alert("Move fail");
                         alert("card 1 "+ this.row3[i] + " card 2 "+this.row3[j]);
                         alert("Value 1 "+ this.row3[i].getSValue() + " value 2 "+this.row3[j].getSValue());
                         this.solview.displayMessage("That card cannot be moved");
                         return;
                     }
                 }
             }
             else if(row=="row4"){
                 //alert("Pos: "+cardPos);
                 //alert("length = "+this.row4.length);
                 for(var i =cardPos; i<this.row4.length; i++){
                     //alert("i="+i);
                     j=++i;
                     i--;
                     alert("j "+j);
                     if(i==this.row4.length-1){
                         break;
                     }
                     
                     if(this.row4[i].getSValue() != this.row4[j].getSValue()+1){
                         alert("Move fail");
                         alert("card 1 "+ this.row4[i] + " card 2 "+this.row4[j]);
                         alert("Value 1 "+ this.row4[i].getSValue() + " value 2 "+this.row4[j].getSValue());
                         this.solview.displayMessage("That card cannot be moved");
                         return;
                     }
                 }
             }
             else if(row=="row5"){
                // alert("Pos: "+cardPos);
                 //alert("length = "+this.row5.length);
                 for(var i =cardPos; i<this.row5.length; i++){
                     //alert("i="+i);
                     j=++i;
                     i--;
                     alert("j "+j);
                     if(i==this.row5.length-1){
                         break;
                     }
                     if(this.row5[i].getSValue() != this.row5[j].getSValue()+1){
                         alert("Move fail");
                         alert("card 1 "+ this.row5[i] + " card 2 "+this.row5[j]);
                         alert("Value 1 "+ this.row5[i].getSValue() + " value 2 "+this.row5[j].getSValue());
                         this.solview.displayMessage("That card cannot be moved");
                         return;
                     }
                 }
             }
             else if(row=="row6"){
                 //alert("Pos: "+cardPos);
                 //alert("length = "+this.row6.length);
                 for(var i =cardPos; i<this.row6.length; i++){
                     //alert("i="+i);
                     j=++i;
                     i--;
                     alert("j "+j);
                     if(i==this.row6.length-1){
                         break;
                     }
                     if(this.row6[i].getSValue() != this.row6[j].getSValue()+1){
                         alert("Move fail");
                         alert("card 1 "+ this.row6[i] + " card 2"+this.row6[j]);
                         alert("Value 1 "+ this.row6[i].getSValue() + " value 2"+this.row6[j].getSValue());
                         this.solview.displayMessage("That card cannot be moved");
                         return;
                     }
                 }
             }
             
             this.actionRow=row
             this.placing=true;
             this.actionPos=cardPos;
             this.solview.displayMessage("Select row to place cards at");
             
            return;
        }else{
            //alert("Row card value "+card.sValue);
            
            let movable=true;//Boolean to determine if we are making a legal move currently false for testing
            let value=card.getSValue();
            
            //Run checks to make sure the move that we are making is legal
            if(this.actionRow=="row1"){ 
                //alert("Card to move "+this.row1[this.actionPos].sValue);
                if(this.row1[this.actionPos].getSValue() == value-1){
                    movable=true;
                }else{
                    movable=false;
                }
            }
            else if(this.actionRow=="row2"){
                //alert("Card to move "+this.row2[this.actionPos].sValue);
                if(this.row2[this.actionPos].getSValue() == (value-1)){
                    movable=true;
                }else{
                    movable=false;
                }
            }
            else if(this.actionRow=="row3"){
                //alert("Card to move "+this.row3[this.actionPos].sValue);
                if(this.row3[this.actionPos].getSValue() == (value-1)){
                    movable=true;
                }else{
                    movable=false;
                }
            }
            else if(this.actionRow=="row4"){
                //alert("Card to move "+this.row4[this.actionPos].sValue);
                if(this.row4[this.actionPos].getSValue() == (value-1)){
                    movable=true;
                }else{
                    movable=false;
                }
            }
            else if(this.actionRow=="row5"){
                //alert("Card to move "+this.row5[this.actionPos].sValue);
                if(this.row5[this.actionPos].getSValue() == (value-1)){
                    movable=true;
                }else{
                    movable=false;
                }
            }
            else if(this.actionRow=="row6"){
                //alert("Card to move "+this.row6[this.actionPos].sValue);
                if(this.row6[this.actionPos].getSValue() == (value-1) ){
                    movable=true;
                }else{
                    movable=false;
                }
            }
            //this.actionCards[0].sValue != card.sValue-1
            alert("Movable= "+movable);
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
                //alert("moving");
            
            let mrow=new Array();
            if(this.actionRow=="row1"){
                for(var i=this.actionPos; i<this.row1.length; i++){
                    mrow.push(this.row1[i]);
                }
            }else if(this.actionRow=="row2"){
                for(var i=this.actionPos; i<this.row2.length; i++){
                    mrow.push(this.row2[i]);
                }
            }else if(this.actionRow=="row3"){
                for(var i=this.actionPos; i<this.row3.length; i++){
                    mrow.push(this.row3[i]);
                }
            }else if(this.actionRow=="row4"){
                for(var i=this.actionPos; i<this.row4.length; i++){
                    mrow.push(this.row4[i]);
                }
            }else if(this.actionRow=="row5"){
                for(var i=this.actionPos; i<this.row5.length; i++){
                    mrow.push(this.row5[i]);
                }
            }else if(this.actionRow=="row6"){
                for(var i=this.actionPos; i<this.row6.length; i++){
                    mrow.push(this.row6[i]);
                }
            }
            
            alert("row= "+mrow);
                if(row=="row1"){
                    for(var i=0; i<mrow.length; i++){
                        this.row1.push(mrow[i]);
                    }
                }
                if(row=="row2"){
                    for(var i=0; i<mrow.length; i++){
                        this.row2.push(mrow[i]);
                    }
                }
                if(row=="row3"){
                    for(var i=0; i<mrow.length; i++){
                        this.row3.push(mrow[i]);
                    }
                }
                if(row=="row4"){
                    for(var i=0; i<mrow.length; i++){
                        this.row4.push(mrow[i]);
                    }
                }
                if(row=="row5"){
                    for(var i=0; i<mrow.length; i++){
                        this.row5.push(mrow[i]);
                    }
                }
                if(row=="row6"){
                    for(var i=0; i<mrow.length; i++){
                        this.row6.push(mrow[i]);
                    }
                }
            
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
                
            this.checkFlips();
            //this.actionCard=null;
            this.actionRow=null;
            this.actionCards.splice(0);
            this.placing=false;
            this.solview.displayMessage("Select cards to have moved");
            
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
        this.solview.displayMessage("Welcome to Spider Solitare");
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