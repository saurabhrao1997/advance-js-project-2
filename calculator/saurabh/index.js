function getHistory(){
return document.getElementById("history_value").innerText;

}

function printHistory(num){
    document.getElementById("history_value").innerText=num;
}

function getOutput(){
    return document.getElementById("output_value").innerText;
    
    }
    
    function printOutput(num){

    if(num == ""){
        document.getElementById("output_value").innerText=num;
    }else{
          
        document.getElementById("output_value").innerText=getFormattedNumber(num);
    }







    }
    function getFormattedNumber(num){
           if(num =="-"){
               return "";

           }



        var n =Number(num);
        var value = n.toLocaleString("en");
        return value;

    }
    // printOutput("12330404")

    function reverseFormattedNumber(num){
        return Number(num.replace(/,/g,''))
    }

   // alert(reverseFormattedNumber(getOutput()));

    var oprator = document.getElementsByClassName("oprator");
    
    for(i=0;i<oprator.length;i++){
        oprator[i].addEventListener("click",function(){
            if(this.id == "clear"){
                printHistory("");
                printOutput("");
            } 

         else if(this.id == "backspace"){
              var output =reverseFormattedNumber(getOutput()).toString();
              if(output){
                  output =output.substr(0,output.length-1);
                  printOutput(output);
              }
          }
          else{
              var output =getOutput();
              var history =getHistory()



              if(output != ""){
                  output =reverseFormattedNumber(output);
                  history= history + output



                  if(this.id == "="){
                      var result =eval(history);
                      printOutput(result);
                      printHistory("");

                  }else{
                      history = history +this.id;
                      printHistory(history);
                      printOutput("");
                  }
              }
          }




        })
    }


    var number = document.getElementsByClassName("number");
    for(i=0;i<number.length;i++){
        number[i].addEventListener("click",function(){
         var output = reverseFormattedNumber(getOutput());
         if(output != NaN){
             output = output +this.id;
             printOutput(output)
         }
        })
    }

    