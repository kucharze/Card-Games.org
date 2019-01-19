/**
 * Provide methods that use the system I/O to interact with the user.
 * This implementation uses the JavaScript window.prompt() method
 * for input (and some output) and window.alert() for (purely) output.
 */
class Solview {
    
    constructor(presenter) {
    this.presenter = presenter;
    this.topCard = null;
    this.topCardString = "";
    this.errorString = "";
    
    document.getElementById("solreset").addEventListener("click", function(){presenter.resetGame();});
    //document.getElementById("yourHand").addEventListener("click", function(){presenter.cardSelected(event.target.title);});
  }

  announceHumanWinner(){
    let humanwin = document.getElementById("announcer");
    humanwin.textContent="Congradulations! You win!";
    humanwin.style="display: block";
  }
    
    displayRow(row, num){
        let card=document.getElementById("row"+num);
        
        while(card.hasChildNodes()){
            card.removeChild(card.lastChild);
        }
        for(var i=0; i<row.length; i++){
            if(!row[i].flipped){
                let image=document.createElement("img");
                image.src ="./Images/"+row[i].toString()+".png";
	            image.title=row[i].toString();
	            image.class="card positionable";
                image.style="left: "+ (15*i) + " px; z-index:" + i +"";
                card.appendChild(image);
            }else{
                let image=document.createElement("img");
                image.src ="./Images/cardback.png";
	            image.title=row[i].toString();
	            image.class="card positionable";
                image.style="left: "+ (15*i) + " px; z-index:" + i +"";
                card.appendChild(image);
            }

        }
    }
    
    eraseRows(){
        let row1=document.getElementById("row1");
        let row2=document.getElementById("row2");
        let row3=document.getElementById("row3");
        let row4=document.getElementById("row4");
        let row5=document.getElementById("row5");
        while(row1.hasChildNodes()){
            row1.removeChild(row1.lastChild);
        }
        while(row2.hasChildNodes()){
	       row2.removeChild(row2.lastChild);
        }
        while(row3.hasChildNodes()){
	       row3.removeChild(row3.lastChild);
        }
        while(row4.hasChildNodes()){
	       row4.removeChild(row4.lastChild);
        }
        while(row5.hasChildNodes()){
	       row5.removeChild(row5.lastChild);
        }
    }

   displayWrongCardMsg(cardstring){
	   alert("That play is invalid try again");
   }

}
