//your JS code here. If required.
function fizzbuzz(n) {
	for(let i=1;i<=n;++i)
		{
			if(i%3 == 0 && i%5 == 0)
			{
			alert("FizzBuzz");
            }
			else if(i%3 == 0)
			{
				alert("Fizz");
			}
			else if(i%5 == 0)
			{
				alert("Buzz");
			}
			else {
				  alert(i));
			}
		}
}
let n = 20;
 
// Call the fizzBuzz function to get the result
let result = fizzBuzz(n);
 
// Print the result
console.log(result.join(' '));
