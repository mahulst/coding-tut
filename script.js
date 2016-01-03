console.log(123);
addInputs = function () {
    input3.value = add(input1.value, input2.value);
}
add = function(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a + b;
}