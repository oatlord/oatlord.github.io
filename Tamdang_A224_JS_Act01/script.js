const btnCount = document.getElementById("btnCount")
const txtCounter = document.getElementById("count") 

btnCount.addEventListener("click", () => {
    // console.log("Clicked")
    // console.log(txtCounter.textContent)
    var prevCount = txtCounter.textContent;
    prevCount++;
    txtCounter.textContent = prevCount;
    // var prevCount = txtCounter.textContent;
    // var limit = 10;
    
    // if (prevCount == limit) {
    //     prevCount = 0;
    // } else {
    //     prevCount++;
    // }
    
    txtCounter.textContent = prevCount;
    
})