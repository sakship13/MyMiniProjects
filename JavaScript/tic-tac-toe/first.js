let btn = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let msg1=document.querySelector(".msg-container");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#newgame");
let turnO=true;
const winningpattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];

msg1.classList.add("hide");
for (const btns of btn) {
    
    btns.addEventListener("click",()=>{
        if(turnO){
         btns.style.color="#694F8E";
     btns.innerText="X";
     turnO=false;
        }
        else{
         btns.style.color="#000000";
           btns.innerText="O";

           turnO=true;
        }
        btns.disabled=true;
       
        if (!checkWinner() && checkDraw()) {
         msg1.classList.remove("hide");
         msg.innerText = "The Match is Draw!!!!!";
     }
        
        
    });
    
    }
    
    resetbtn.addEventListener("click",()=>{
        for(let btns of btn){
            btns.innerText="";
          }
    });
    const showWinner=(winner)=>{
      
        msg1.classList.remove("hide");
        msg.innerText=`The Game Winner Is Player ${winner}`;
    };

     const checkWinner=()=>{
        for (const pattern of winningpattern) {

            let post1 = btn[pattern[0]].innerText;
            let post2= btn[pattern[1]].innerText;
            let post3= btn[pattern[2]].innerText;
         if(post1 != "" && post2 != "" && post3 != ""){
            if(post1 === post2 && post2 === post3){
               showWinner(post1);
               return true;
               }
            }
            
        } 
        return false;
     };
   // msg1.classList.remove("hide");
  // msg.innerText=`Match Is Draw!!`;
     newbtn.addEventListener("click",()=>{
        msg1.classList.add("hide");
        for(let btns of btn){
          btns.innerText="";
          btns.disabled=false;
        }
     });
     const checkDraw = () => {
      for (const btns of btn) {
          if (btns.innerText === "") {
              return false;
          }
      }
      return true;
  };
   

    

    

