//your JS code here. If required.
function fizzbuzz(n) {
	let result = [];
	for(let i=1;i<=n;++i)
		{
			if(i%3 == 0 && i%5 == 0)
			{
			 result.push_back("FizzBuzz");
            }
			else if(i%3 == 0)
			{
				result.push_back("Fizz");
			}
			else if(i%5 == 0)
			{
				result.push_back("Buzz");
			}
			else {
				  result.push_back(to_string(i));
			}
		}
	return result;
}
let n = 100;
 
// Call the fizzBuzz function to get the result
let result = fizzBuzz(n);
 
// Print the result
console.log(result.join(' '));
