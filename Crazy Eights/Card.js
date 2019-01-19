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
  }
  getSuit() { return this.suit; }
  getValue() { return this.value; }
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

