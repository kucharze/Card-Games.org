/**
 * Provide methods that use the system I/O to interact with the user.
 * This implementation uses the JavaScript window.prompt() method
 * for input (and some output) and window.alert() for (purely) output.
 */
class Warview {
    
    constructor(presenter) {
    this.presenter = presenter;
    this.topCard = null;
    this.topCardString = "";
    //this.errorString = "";
    document.getElementById("warreset").addEventListener("click", function(){presenter.resetGame();})
        
    //document.getElementById("deck").addEventListener("click", function(){presenter.cardPicked();})
    //document.getElementById("suitPicker").addEventListener("click", function() {presenter.suitPicked(event.target.id);});
    document.getElementById("yourdeck").addEventListener("click",function(){presenter.cardSelected(event.target.title);});
  }

  announceComputerWinner(){
    let CPUwinner = document.getElementById("warstatus");
    CPUwinner.innerHTML="Thanks for being a good loser";
    //CPUwinner.style="display: block";
  }

  announceHumanWinner(){
    let humanwin = document.getElementById("warstatus");
    humanwin.innerHTML="Congradulations! You win!";
    //humanwin.style="display: block";
  }

  displayComputerCard(hand){
     let cpu = document.getElementById("mycard");
     while(cpu.hasChildNodes()){
	   cpu.removeChild(cpu.lastChild);
      }
         let image=document.createElement("img");
         image.src ="./Images/"+hand[i].toString()+".png";
	       image.title=hand[i].toString();
	       image.class="card positionable";
	       image.style="left: "+  (15*i) + " px; z-index:" + i +"";
	       cpu.appendChild(image);
  }

  displayHumanCard(hand){
     let human = document.getElementById("yourcard");
     while(human.hasChildNodes()){
	       human.removeChild(human.lastChild);
      }
         let image=document.createElement("img");
         image.src ="./Images/"+hand[i].toString()+".png";
	       image.title=hand[i].toString();
	       image.class="card positionable";
	       image.style="left: "+  (15*i) + " px; z-index:" + i +"";
	       human.appendChild(image);
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

}