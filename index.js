//*********** */ palindrome-checker *********

/*******************************
 * Valid Palindrome
Write a JavaScript function called isPalindrome that takes a string as input and returns true if the
string is a palindrome otherwise return false.A palindrome is a word, phrase, number, or other
sequence of characters that reads the same forward and backward, ignoring punctuation, case, and
spacing.
 * 
 ************************************  */ 

const isPalindrome = (string) => {
    const regex = /[\W_]/g;

    const lowerCaseWithRemove = string.toLowerCase().replace(regex, "");
    const reverseLowerCase = lowerCaseWithRemove.split("").reverse().join("");

    return lowerCaseWithRemove === reverseLowerCase;
};

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));