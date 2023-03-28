function Solve(val) {
  var v = document.getElementById('res');
  v.value += val;
}
function Result() {
  var number1 = document.getElementById('res').value;
  var number2 = eval(number1);
  document.getElementById('res').value = number2;
}
function Clear() {
  var inp = document.getElementById('res');
  inp.value = '';
}
function Back() {
  var ev = document.getElementById('res');
  ev.value = ev.value.slice(0,-1);
}