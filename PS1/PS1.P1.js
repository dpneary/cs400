// Problem 1 (PS1.P1.js)
// Write a function that takes a string as its input and returns a new string that contains all of the
// letters in the original string, but in alphabetical order. Ignore punctuation and numbers. Test
// your function using the string ‘supercalifragilisticexpialidocious’.

const ordered = givenString => givenString.split('').sort().join('');

console.log(`Ordered: ${ordered(`supercalifragilisticexpialidocious`)}`);
