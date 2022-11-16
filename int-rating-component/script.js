let rate = 0;

function rateHandler (){
    if(rate === 0){
        alert("Please rate us")
    }
    
    else {
        selectedRate.innerHTML = rate
        ratingState.style.display = "none";
        thankYouState.style.display = "block";
    }
}