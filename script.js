//display number in text box
function displayNum(num){

    result.value+=num
}
//clear text box
function clearNum(){
    result.value=''
}
//evaluate expressions

function evaluateNum(){
    // exp=result.value
    // output=eval(exp)
    // result.value=output
    result.value=eval(result.value)
}

function removeNum(){
    result.value=result.value.slice(0,-1)
}