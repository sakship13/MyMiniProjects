
const URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const fromCurr = document.querySelector('.from select'); 
const toCurr= document.querySelector('.to select'); 
const exchanged=document.querySelector('.msg')
const btn=document.querySelector('.ratebtn');
let selects = document.querySelectorAll('.dropdown select');



for(let select of selects){
  for(code in countryList){
    
    let newOption = document.createElement("option");
    newOption.innerText=code;
    newOption.value=code;
    if(select.name==="from" && code==="USD"){
      newOption.selected="selected";
    }else if(select.name==="To" && code==="INR"){
      newOption.selected="selected";
    }
    select.append(newOption);
    select.addEventListener("change",(evt)=>{
      updateFlag(evt.target);
      
    });
  }
}
const updateExchangeRate= async()=>{
  let amount =document.querySelector('.amount input');
      let amtval=amount.value;
      if(amtval===""||amtval<0){
        amount.value="1";
        amtval=1;
      } 
      let fromCurrency = fromCurr.value.toLowerCase();
    let toCurrency = toCurr.value.toLowerCase();

    let newURL = `${URL}/${fromCurrency}.json`;
    try {
      let response = await fetch(newURL);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      let req = await response.json();
      const exchangeRate = req[fromCurrency][toCurrency];
      const convertedAmount = amtval * exchangeRate;
      exchanged.innerText = `${amtval} ${fromCurrency.toUpperCase()} = ${convertedAmount} ${toCurrency.toUpperCase()}`;
  } catch (error) {
      console.error("Error fetching the exchange rate:", error);
      exchanged.innerText = "Error fetching the exchange rate. Please try again later.";
  }
     
};

const updateFlag=(element)=>{
  let currcode=element.value;
  let countryCode=countryList[currcode];
  let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
  let img=element.parentElement.querySelector("img");
  img.src=newsrc;
 
};

btn.addEventListener("click",(evt)=>{
  evt.preventDefault();
  console.log("fetching..");
  updateExchangeRate();
});
window.addEventListener("load",()=>{
  updateExchangeRate();
});
