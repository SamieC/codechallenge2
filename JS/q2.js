// function getArray
function getArray(begin, end) {
    if (begin > end) {
      [begin, end] 
    }
  
    // Create the array using Array.from() 
    return Array.from({ length: end - begin + 1 }, (_, i) => begin + i);
  }
  
// output
function displayArray(){
  const beginNum = document.getElementById('numberRange1').value;
  const endNum = document.getElementById('numberRange2').value;
  const numbersArray = getArray(beginNum, endNum);
  console.log(numbersArray); 
  document.getElementById('Result').innerHTML = `Result:${numbersArray}`;
}