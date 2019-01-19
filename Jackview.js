/**
 * Provide methods that use the system I/O to interact with the user.
 * This implementation uses the JavaScript window.prompt() method
 * for input (and some output) and window.alert() for (purely) output.
 */
class Jackview {
    constructor(jpres) {
    this.jpres = jpres;
    this.topCard = null;
    this.topCardString = "";
    //document.getElementById("reset").addEventListener("click", function(){presenter.resetGame();})
        
    document.getElementById("JDeck").addEventListener("click", function(){jpres.hit();});
    document.getElementById("jackreset").addEventListener("click", function(){jpres.resetGame();});
    //document.getElementById("playerhand").addEventListener("click",function(){presenter.cardSelected(event.target.title);});
  }

  announceComputerWinner(){
    let CPUwinner = document.getElementById("announcer");
    CPUwinner.textContent="Dealer wins. Thanks for being a good loser";
    CPUwinner.style="display: block";
  }

  announceHumanWinner(){
    let humanwin = document.getElementById("announcer");
    humanwin.textContent="Congradulations! You win!";
    humanwin.style="display: block";
  }

  displayComputerHand(hand){
     let cpu = document.querySelector("#dealerhand");
     while(cpu.hasChildNodes()){
	 cpu.removeChild(cpu.lastChild);
      }
  for(let i=0; i<hand.length; i++){
      let image=document.createElement("img");
      if(!hand[i].flipped){
	       image.src ="./Images/"+hand[i].toString()+".png";
	       image.title=hand[i].toString();
	       image.class="card positionable";
	       image.style="left: "+  (15*i) + " px; z-index:" + i +""; 
      }else{
	    image.src ="./Images/cardback.jpg";
	    image.title=hand[i].toString();
	    image.class="card positionable";
	    image.style="left: "+  (15*i) + " px; z-index:" + i +" hieght:10px";
      }
	   cpu.appendChild(image);
   }
  }

  displayHumanHand(hand){
     let human = document.querySelector("#playerhand");
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
    
    displayMessage(message){
        let mes=document.getElementById("jackstatus");
        mes.innerHTML=message;
    }
    
  /**
   * Block user from playing.
   
  blockPlay() {
    // Capture and ignore all clicks
      document.getElementById("JDeck").removeEventListener("click",function(){jpres.hit();},true);
    //document.body.addEventListener("click", this.clickBlocker, true);
    // Dim the cards to indicate that play is blocked.
    //this.allCardsDiv.style.opacity = 0.5;
  }
  /**
   * Unblock user from playing.
   
  unblockPlay() {
    // Remove capturing listener
    document.body.removeEventListener("click", event.stopPropagation(), true);
    // Undim the cards to indicate that play is no longer blocked.
    //this.allCardsDiv.style.opacity = 1.0;
  }
    */
    eraseHands(){
        let human=document.getElementById("playerhand");
        let computer=document.getElementById("dealerhand");
        while(human.hasChildNodes()){
            human.removeChild(human.lastChild);
        }
        while(computer.hasChildNodes()){
	       computer.removeChild(computer.lastChild);
        }
    }

}