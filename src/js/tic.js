document.addEventListener("DOMContentLoaded", ()=>{
//---------------------------------tic tac toe
    var playerNbr=1;
    var NbrArray=[0, 0, 0, 0, 0, 0, 0, 0, 0];
    document.querySelector("button").addEventListener("click", restart);
    document.querySelector(".player1 h2").style.textDecoration = "underline";
    
    const lineArray=[".line012", ".line036", ".line048", ".line147", ".line258", ".line246", ".line345", ".line678"];
    const pandas = document.querySelectorAll(".panda");
    const pandaArray =Array.from(pandas);
    const boxArray = Array.from(document.querySelectorAll(".box"));
    
    for(let i=1; i<=boxArray.length; i++){
        document.querySelector(".box"+i).addEventListener("click", box);
    }
    
    function restart(){
        document.querySelector(".player"+playerNbr+" h2").style.textDecoration = "underline";
        NbrArray=[0, 0, 0, 0, 0, 0, 0, 0, 0];
        document.querySelector("button").style.display="none";
        document.querySelector(".h1").innerHTML = "Tic Tac Toe!";

        for(let i=0; i<lineArray.length; i++){
            document.querySelector(lineArray[i]).style.display="none";
        }
        for(let i=0; i<pandaArray.length; i++){
            pandas[i].setAttribute("src", "");
        }
        
        for(let i=1; i<=boxArray.length; i++){
            document.querySelector(".box"+i).addEventListener("click", box);
        }
    }	
    /*---------------------------------------------------------boxes---------------------------------------------------------*/
    function box(){
        let i=boxArray.indexOf(this);
        let boxNr=i+1;
        document.querySelector(".box"+boxNr+" .panda").style.display="block";
        if(playerNbr===1){
            document.querySelector(".box"+boxNr+" .panda").setAttribute("src", "../../assets/images/tic-tac-toe/panda1.png"); 
            NbrArray[i]=1;
            playerNbr=2;
            document.querySelector(".player2 h2").style.textDecoration = "underline";
            document.querySelector(".player1 h2").style.textDecoration = "none";
        }else{
            document.querySelector(".box"+boxNr+" .panda").setAttribute("src", "../../assets/images/tic-tac-toe/panda2.png");            
            NbrArray[i]=2;
            playerNbr=1;
            document.querySelector(".player1 h2").style.textDecoration = "underline";
            document.querySelector(".player2 h2").style.textDecoration = "none";
            document.querySelector(".box"+boxNr+" .panda").style.display="block";
        }
        victory();
    }
    /*-------------------------------------------------------victory-------------------------------------------------------*/
    
    function victory(){
        
        if(NbrArray[0]===NbrArray[1] && NbrArray[1]===NbrArray[2] && NbrArray[0]!==0){
            document.querySelector(".line012").style.display = "block";
            endGame();
        }else if(NbrArray[0]===NbrArray[3] && NbrArray[3]===NbrArray[6] && NbrArray[0]!==0){
            document.querySelector(".line036").style.display = "block";
            endGame();	
        }else if(NbrArray[0]===NbrArray[4] && NbrArray[4]===NbrArray[8] && NbrArray[0]!==0){
            document.querySelector(".line048").style.display = "block";
            endGame();	
        }else if(NbrArray[1]===NbrArray[4] && NbrArray[4]===NbrArray[7] && NbrArray[1]!==0){
            document.querySelector(".line147").style.display = "block";
            endGame();		
        }else if(NbrArray[2]===NbrArray[5] && NbrArray[5]===NbrArray[8] && NbrArray[2]!==0){
            document.querySelector(".line258").style.display = "block";
            endGame();
        }else if(NbrArray[6]===NbrArray[4] && NbrArray[4]===NbrArray[2] && NbrArray[2]!==0){
            document.querySelector(".line246").style.display = "block";
            endGame();
        }else if(NbrArray[3]===NbrArray[4] && NbrArray[4]===NbrArray[5] && NbrArray[3]!==0){
            document.querySelector(".line345").style.display = "block";
            endGame();
        }else if(NbrArray[6]===NbrArray[7] && NbrArray[7]===NbrArray[8] && NbrArray[6]!==0){
            document.querySelector(".line678").style.display = "block";
            endGame();
        }else if(NbrArray[0]!==0 && NbrArray[1]!==0 && NbrArray[2]!==0 && NbrArray[3]!==0 && NbrArray[4]!==0 && NbrArray[5]!==0 && NbrArray[6]!==0 && NbrArray[7]!==0 && NbrArray[8]!==0){
            document.querySelector("button").style.display = "block";
            document.querySelector(".h1").innerHTML = "It´s a tie!";
        }
    }
    /*-------------------------------------------------------------------End game-------------------------------------------------------------------*/
    function endGame(){

        for(let i=1; i<=boxArray.length; i++){
            document.querySelector(".box"+i).removeEventListener("click", box);
        }

        document.querySelector(".player1 h2").style.textDecoration = "none";
        document.querySelector(".player2 h2").style.textDecoration = "none";
        document.querySelector("button").style.display = "block";
        
        if(playerNbr===1){
            document.querySelector(".h1").innerHTML = "Victory for Player 2!";
        }else if(playerNbr===2){
            document.querySelector(".h1").innerHTML = "Victory for Player 1!";
        }
    }
});