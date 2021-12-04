function numbres(val) {
    //Displays in the DOM the value we are pressing
    document.querySelector('#outcome').value += val;
}


function equal() {
    //Captures the written value and performs the addition, subtraction, multiplication, and division operation
    let inputs = document.querySelector('#outcome').value;
    let output = eval(inputs);
    document.querySelector('#outcome').value = output;
}

function clearResult() {
    //Deletes the entries
    document.querySelector('#outcome').value = ' ';

}