function add(num1, num2) {
    return num1 + num2;
}
function renderResult(result) {
    document.getElementById("result").innerHTML = result;
}
function addEventHandle() {
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    var result = add(num1, num2);
    renderResult(result);
}
function initEvent() {
    document.getElementById("addbtn").addEventListener("click", alert, false);
}

initEvent();

function res() {
    // document.getElementById("number1").innerHTML = "XXXX";
    alert("XXXX ");
}