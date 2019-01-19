/**
 * Provide methods that use the system I/O to interact with the user.
 * This implementation uses the JavaScript window.prompt() method
 * for input (and some output) and window.alert() for (purely) output.
 */
class Fishview {
    constructor(presenter) {
	//alert("called");
    this.presenter = presenter;
    this.topCard = null;
    this.topCardString = "";
    this.errorString = "";
    document.getElementById("fishreset").addEventListener("click", function(){presenter.resetGame();});
        
    //document.getElementById("deck").addEventListener("click", function(){presenter.cardPicked();})
    
    document.getElementById("fuserhand").addEventListener("click",function(){presenter.fish(event.target.title);});
        
    //document.getElementById("yourHand").addEventListener("click",function(){presenter.cardSelected(event.target.title);});
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
     let cpu = document.getElementById("cpuhand");
     while(cpu.hasChildNodes()){
	   cpu.removeChild(cpu.lastChild);
      }
    for(let i=0; i<hand.length; i++){
        let image=document.createElement("img");
	   image.src ="./Images/cardback.jpg";
	   image.class="card positionable";
	   image.style="left: "+  (15*i) + " px; z-index:" + i +" hieght:10px";
	   cpu.appendChild(image);
    }
  }

  displayHumanHand(hand){
     let human = document.getElementById("fuserhand");
     while(human.hasChildNodes()){
	 human.removeChild(human.lastChild);
      }
     for(let i=0; i<hand.length; i++){
         let image=document.createElement("img");
	 image.src ="./Images/"+hand[i].toString()+".png";
	 image.title=hand[i].toString();
	 image.class="card positionable";
	 image.style="left: "+  (15*i) + " px; z-index:" + i +"";
	 human.appendChild(image);
   }
  }
    
    eraseHands(){
        let human=document.querySelector("#yourHand");
        let computer=document.querySelector("#myHand");
        while(human.hasChildNodes()){
            human.removeChild(human.lastChild);
        }
        while(computer.hasChildNodes()){
	       computer.removeChild(computer.lastChild);
        }
    }

  //display the top card of the pile
  displayPileTopCard(card){
	let table=document.querySelector("#table");
	table.removeChild(document.getElementById("pile"));
	let pile = document.getElementById("pile")
         this.topCard=Card;
	 let image=document.createElement("img");
	 image.src ="./images/"+card.toString()+".png";
	image.id="pile";
	 //image.title=this.topCard.getValue();
	 image.class="card positionable";
	 //image.style="left: "+  (15*i) + " px; z-index:" + i +"";
	 table.appendChild(image);
  }

   displayDupCardMsg(){
	   alert("Your hand contains a duplicate. Please place down all duplicates");
   }
    
    displayWrongCardMsg(){
	   alert("Null card is being played");
   }

}