//*********** */ valid-palindrome *********

/*******************************
 * Valid Palindrome
Write a JavaScript function called isPalindrome that takes a string as input and returns true if the
string is a palindrome otherwise return false.A palindrome is a word, phrase, number, or other
sequence of characters that reads the same forward and backward, ignoring punctuation, case, and
spacing.
 * 
 ************************************  */

const isPalindrome = (str) => {
    // Remove punctuation, convert to lowercase, and remove spacing
    const formattedStr = str.replace(/[\W_]/g, "").toLowerCase();

    // Reverse the string
    const reversedStr = formattedStr.split("").reverse().join("");

    // Check if the reversed string matches the original string
    return formattedStr === reversedStr;
}

// Testing the function
console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal: Panama"));