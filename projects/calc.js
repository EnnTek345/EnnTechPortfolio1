const display = document.getElementById('user-input');
function calculate(x){
    display.value = display.value + x
    // display.value += x
}

function answer(){
    try{
        display.value = eval(display.value)
    }

    catch(error){
        alert("Enter a valid number")
    }
}


function clearr(){
    display.value = " ";
}

function del(){
    display.value = display.value.slice(0,-1)
}

   