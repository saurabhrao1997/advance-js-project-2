var seconds =00;
var tens =00;
var min =00;
var appendTens =document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var appendMins = document.getElementById("min");



var appendStart = document.getElementById("button_start")
var appendStop = document.getElementById("button_stop")
var appendreset = document.getElementById("button_reset")



// console.log(appendTens)
// console.log(appendSeconds)
// console.log(appendStart)
// console.log(appendStop)
// console.log(appendreset)



// let interval;

// function startTimer(){
//     tens++;
//     console.log(tens)
//     if(tens < 9){
//         appendTens.innerHTML = "0" +tens;

//     }
//     if(tens > 9){
//         appendTens.innerHTML = tens;

//     }
//     if(tens > 99){
//         seconds++;
//         appendSeconds.innerHTML="0" + seconds;
//         tens =0;
//         appendTens.innerHTML="0" + tens
//     }

//     if(seconds > 9){
//         appendSeconds.innerHTML =seconds;


//     }






// }
var timer = false;

function start(){
 timer = true;
setInterval(stopWatch,10)
  






}
function stop(){
    timer = false;

}

function reset(){
    timer = false;
    var seconds =00;
    var tens =00;
    var min =00;

     appendTens.innerHTML=tens;
     appendSeconds.innerHTML=seconds;
     appendMins.innerHTML=min;
}


function stopWatch(){

if(timer == true){
    tens = tens+1;

if(tens < 9 ){
    appendTens.innerHTML ="0" + tens;  
}



    if(tens > 99){
        tens =0;
    seconds = seconds +1;
    if(seconds <= 9){

        appendSeconds.innerHTML = "0" + seconds;
    }else{
        appendSeconds.innerHTML =  seconds;

         if(seconds == 60){
             seconds =0;
             min = min +1
             appendMins.innerHTML = min

         }



    }
   
        
    }

    
   
    appendTens.innerHTML =tens
    
}





}


//setInterval(saurabh,10)

function saurabh(){
    tens++
    console.log(tens)
}