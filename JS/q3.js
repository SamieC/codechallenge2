// function primeNumbers
function getPrimes(numbers) {
    const primes = [];
  
    // Iterate Through Numbers
    for (const num of numbers) {
      if (num <= 1) continue;
  
      // Check for divisibility by 2 
      if (num % 2 === 0 && num !== 2) continue;
  
      // loop iteration 
      let isPrime = true;
      const limit = Math.sqrt(num);
      for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0 || num % (i + 2) === 0) {
          isPrime = false;
          break;
        }
      }
        // Add Prime Numbers
      if (isPrime) {
        primes.push(num);
      }
    }
  
    return primes;
  }
  
 // output
function displayPrimeNumbers(){ //callback to display the function
  const numbersArray = document.getElementById('input_q3').value;//set variable to get the input from the HTML
  const primeNumbers = getPrimes(numbersArray);//set variable for the result of the function
  console.log(primeNumbers); //display locally-not woking
  document.getElementById('Result').innerHTML = `Result:${primeNumbers}`;//used to sendthe result of the var(primenumber) back to HTML
}