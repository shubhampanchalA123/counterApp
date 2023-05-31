// gettimg by html element

const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const displayValue = document.getElementById("displayValue");
const resetBtn   = document.getElementById("resetBtn");

// for decrement button

decrementBtn.addEventListener("click",()=>{
    const value = Number(displayValue.innerText);
    if(value > 0){
        displayValue.innerText=value-1;
    }else{
        alert("negative value is not allowed");
    }
});

// for increment button

incrementBtn.addEventListener("click",()=>{
    const value = Number(displayValue.innerText);
    if(value >= 10){
     alert("10+ value is not allowed");
    }else{
     displayValue.innerText = value +1;
    }
});

// buttom for reset value

resetBtn.addEventListener("click",()=>{
    displayValue.innerText = 0;
});

