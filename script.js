/**
 * Below this text is where we can put our code for the assignments:*/


function add (a, b) {
    return a + b;
};







/**

 YOU CAN IGNORE TEXT BELOW THIS LINE
 */

function addInputs () {
    var value1 = parseInt(input1.value) || 0;
    var value2 = parseInt(input2.value) || 0;
    input3.value = add(value1, value2);
};

function multiplyInputs () {
    var value1 = parseInt(input1.value) || 0;
    var value2 = parseInt(input2.value) || 0;
    input3.value = multiply(value1, value2);
};