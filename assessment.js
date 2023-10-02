function isPalindrome(str) {
  // Check if the input is a string
  if (typeof str !== 'string') {
    return { error: `The given value: "${str}" is not a string! The expected data type of the value is string.` };
  }

  let cleanString = str.replace(/\W+|_/g, "").toLowerCase();
  let reversedString = cleanString.split("").reverse().join("");
  
  return { isPalindrome: cleanString === reversedString, input: str, reversedString: reversedString };
}

//input
let input = "a man, a plan. a canal panama";

//call function
let result = isPalindrome(input);


if (result.error) {
  console.log(result.error);
} else if (result.isPalindrome) {
  console.log(`The given string: "${result.input}" is an example of a palindrome, the reversed value is: "${result.reversedString}".`);
} else {
  console.log(`The given string: "${result.input}" is not an example of a palindrome.`);
}