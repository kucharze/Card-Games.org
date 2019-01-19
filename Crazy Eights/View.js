/**
 * Provide methods that use the system I/O to interact with the user.
 * This implementation uses the JavaScript window.prompt() method
 * for input (and some output) and window.alert() for (purely) output.
 */
class View {
  constructor(presenter) {
	//alert("called");
    this.presenter = presenter;
    this.topCard = null;
    this.topCardString = "";
    this.errorString = "";
   document.getElementById("deck").addEventListener("click", function(){
		presenter.cardPicked();})
   document.getElementById("suitPicker").addEventListener("click", function() { 
	   presenter.suitPicked(event.target.id);});
    document.getElementById("yourHand").addEventListener("click",function(){
	   presenter.cardSelected(event.target.title);});
  }

  announceComputerWinner(){
    let CPUwinner = document.getElementById("announcer");
    CPUwinner.textContent="Thanks for being a good loser";
    CPUwinner.style="display: block";
  }

  announceHumanWinner(){
    let humanwin = document.getElementById("announcer");
    humanwin.textContent="Congradulations! You win!";
    humanwin.style="display: block";
  }

  displayComputerHand(hand){
     let cpu = document.querySelector("#myHand");
     while(cpu.hasChildNodes()){
	 cpu.removeChild(cpu.lastChild);
      }
  for(let i=0; i<hand.length; i++){
      let image=document.createElement("img");
	image.src ="./back.png";
	//image.title=hand[i].toString();
	image.class="card positionable";
	image.style="left: "+  (15*i) + " px; z-index:" + i +"";
	cpu.appendChild(image);
   }

  }

  displayHumanHand(hand){
     let human = document.querySelector("#yourHand");
     while(human.hasChildNodes()){
	 human.removeChild(human.lastChild);
      }
     for(let i=0; i<hand.length; i++){
         let image=document.createElement("img");
	 image.src ="./"+hand[i].toString()+".png";
	 image.title=hand[i].toString();
	 image.class="card positionable";
	 image.style="left: "+  (15*i) + " px; z-index:" + i +"";
	 human.appendChild(image);
   }
  }

  //display the top card of the pile
  displayPileTopCard(card){
	let table=document.querySelector("#table");
	table.removeChild(document.getElementById("pile"));
	let pile = document.getElementById("pile")
         this.topCard=Card;
	 let image=document.createElement("img");
	 image.src ="./"+card.toString()+".png";
	image.id="pile";
	 image.title=this.topCard;
	 image.class="card positionable";
	 //image.style="left: "+  (15*i) + " px; z-index:" + i +"";
	 table.appendChild(image);
  }

//makes the suit picker vissible
  displaySuitPicker(){
     document.getElementById("suitPicker").style= " display: block";
   }

   displayWrongCardMsg(cardstring){
	alert("Can't play that card, try again");
   }

  //makes the suit picker invisible again
   undisplaySuitPicker(){
     document.getElementById("suitPicker").style= " display: none";
   }

}

  /**
   * Display a "wrong card" message (at the next opportunity).
  displayWrongCardMsg(cardString) {
    this.errorString = "Bad input '" + cardString + "'. Please try again.";
  }
*/