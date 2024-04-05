// Loop in between characters
function changeCase(text) {
    return text.split('').map(char => {
      // Convert lowercase to uppercase & uppercase to lowercase
      return String.fromCharCode(
        char === char.toLowerCase() ? char.toUpperCase().charCodeAt(0) : char.toLowerCase().charCodeAt(0)
      );
    }).join('');
  }
  
// output
function displayCase(){
  const text = document.getElementById('string1').value
  const convertedText = changeCase(text);
  console.log(convertedText); 
  document.getElementById('Result').innerHTML = `Result:${convertedText}`;
}
