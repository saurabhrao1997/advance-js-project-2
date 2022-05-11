const slider = document.getElementById("slider")

slider.addEventListener("input",calculateTip)





const billInput = document.getElementById("bill");
billInput.addEventListener("change",calculateTip)
function calculateTip(){
    let bill = parseFloat(billInput.value);
let tipPersent =slider.value



let totalTip =parseInt((bill *(tipPersent/100)))


let total = parseInt(bill +totalTip )


document.getElementById("tip_Amount").textContent =`\Rs ${totalTip}`
document.getElementById("total_Amount").textContent=`\Rs ${total}`
document.getElementById("tip_persent").textContent =`${tipPersent} %`

}
