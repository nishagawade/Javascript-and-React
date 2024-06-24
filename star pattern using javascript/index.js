const starEls = document.querySelectorAll(".fa-star");
const emojisEL = document.querySelectorAll(".far");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

starEls.forEach((starEl , index)=>{
    starEl.addEventListener("click", ()=>{
        updateRating(index)
    })
})


function updateRating(index){
    starEls.forEach((starEl, idx)=>{
        if(idx < index + 1){
            starEl.classList.add('active');
        }else{
            starEl.classList.remove('active')
        }
    })
}

updateRating(0);