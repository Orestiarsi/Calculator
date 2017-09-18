let nums = document.getElementsByClassName("num");
let box = document.getElementById("box");
let displayArray = [];
let clear = document.getElementById("clear");
let operators = document.getElementsByClassName("operators");
let firstEntry = [];
let equals = document.getElementById("equals");
// let secondEntry = {};

clear.addEventListener("click", function clearAll (){
  location.reload();
});
for (var i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", displayNum);
  function displayNum(){
    displayArray.push(event.target.value);
    box.value = displayArray.join("");
  }
}
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", displayOperators);
  function displayOperators(){
    firstEntry.push(displayArray.join(""));
    displayArray.push(event.target.value);
    box.value = displayArray.join("");
    //create secondEntry array and push everything in once = is clicked
    
}
    equals.addEventListener("click", displayEquals);
function displayEquals(){
  box.value = eval(box.value);
  }
}
