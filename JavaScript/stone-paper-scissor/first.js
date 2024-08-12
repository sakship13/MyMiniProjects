let userScore=0;
let compScore=0;


let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let U=document.querySelector("#u");
let C=document.querySelector("#c");


choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        let userChoice= choice.getAttribute("id");
      
        playgame(userChoice);
     });
})
const generator= ()=>{
    const options=["rock","paper","scissors"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
    
}
const showWinnwer=( userWin,userChoice,compChoice)=>{
    if( userWin){
       
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        U.innerText=userScore;
    }
    else{
        
        msg.innerText=` you lose! ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
        compScore++;
        C.innerText=compScore;
    }
}
const drawGame=()=>{
   
    msg.innerText="Match is Draw!! play again";
    msg.style.backgroundColor = " #081b31";

}

const playgame=(userChoice)=>{
    console.log("your choice is=",userChoice);
    const compChoice=generator();
    console.log("computer choice is=",compChoice);
    
    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin=true;
        if(userChoice ==="rock"){
            userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice === "paper"){
            userWin= compChoice==="rock"?true:false;
        }
        else {
            userWin= compChoice==="rock"?false:true;
        }
        showWinnwer( userWin,userChoice,compChoice);
    }
  

 }





    

    

