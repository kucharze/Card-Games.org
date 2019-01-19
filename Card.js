/**
 * A single playing card.
 */
class Card {

  // Instance variables
  //   suit: Suit of this card (String)
  //   value: Numeric or face value of this card (String)
  //   pixelOffset: Display parameter (Number; distance each card in a hand 
  //                is offset from its neighbors)

  constructor (aSuit, aValue) {
      this.suit = aSuit;
      this.value = aValue;
      this.pixelOffset = 15;
      this.flipped=false;
      this.cardValue = 0;
      this.sValue = 0;
      this.setValues(aValue);
  }
    
    setValues(aValue){
        if(aValue=="k"){
            this.cardValue=10;
            this.sValue=13;
        }
     // /*
        else if(aValue=="j"){
            this.cardValue=10;
            this.sValue=11;
        }
        else if(aValue=="q"){
            this.cardValue=10;
            this.sValue=12;
        }
        else if(aValue=="a"){
            this.cardValue=11;
            this.sValue=1;
        }
        else{
            this.cardValue=aValue;
            this.sValue=aValue;
        }
      //*/
    }
    
  getSuit() { return this.suit; }
  getValue() { return this.value; }
    
    flip(){
        this.flipped=!this.flipped;
    }
  /**
   * Return a string representation of this card.
   */
  toString() {
    return this.value + this.suit ;
  }
  /**
   * Return relative URL of this card (assumes certain folder structure).
   */
  getURL() { 
    return "../images/PlayingCards/" + this.toString() + ".png";
  }
  /**
   * Return relative URL of back of this (or any) card 
   * (assumes certain folder structure).
   */
  getBackURL() { 
    return "../images/PlayingCards/back.png";
  }
}

