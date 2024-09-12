// take all selector
const generateOtp= document.querySelector("#generateOtp");
const showOtp = document.querySelector("#showOTP");
const inputOtp = document.querySelector("#inputOTP");
const numberBtn = document.querySelectorAll(".number-btn");
const crossBtn = document.querySelector(".cross-btn");
const deleteBtn = document.querySelector(".delete-btn");
const submitBtn = document.querySelector(".submit-btn");
const successNotify = document.querySelector(".success-notification");
const failedNotify = document.querySelector(".failed-notification");
const tryAttempt = document.querySelector(".try-attempt");
const tryLefttotal = document.querySelector("#tryLeft");



generateOtp.addEventListener("click", ()=>{
    let randomNumber = Math.floor(Math.random()*9000 + 1000);
    showOtp.value= randomNumber;

    for(let i = 0; i < numberBtn.length; i++){
        numberBtn[i].addEventListener("click", function() {
            inputOtp.value += numberBtn[i].innerText;
        })
    }
    deleteBtn.addEventListener("click", ()=>{
        inputOtp.value="";
    })
    crossBtn.addEventListener("click", ()=>{
        inputOtp.value = inputOtp.value.slice(0, -1);
    })
    submitBtn.addEventListener("click", ()=>{
        if(showOtp.value==inputOtp.value){
            successNotify.style.display="block";
            failedNotify.style.display="none";
            tryAttempt.style.display="none";
        }else{
            failedNotify.style.display="block";
            successNotify.style.display="none";
            tryAttempt.style.display="none";
    
            let tryLeft = tryLefttotal.innerText;
            tryLeft = parseInt(tryLeft);
            if(tryLeft>0){
                tryLeft--;
                tryLefttotal.innerText = tryLeft;
            }
            if(tryLeft==0){
                submitBtn.disabled=true;
                submitBtn.classList.add("disable");
                generateOtp.disabled=true;
                generateOtp.classList.add("disable");
                failedNotify.style.display="none";
                successNotify.style.display="none";
                tryAttempt.style.display="block";
    
            } else{
                submitBtn.classList.remove("disable");
                generateOtp.classList.remove("disable");
            }
        }
    })
})