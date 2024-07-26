// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223
function reverseNumber(number) {
  return Number(String(number).split("").reverse().join(""));
}
console.log('1:', reverseNumber(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run

function checkPalindrome(str) {
  const newStr = str.replace(" ", "");
  for (let i = 0; i < Math.trunc(newStr.length / 2); i++) {
    if (newStr.at(i) != newStr.at(newStr.length - 1 - i)) return false;
  }
  return true;
}
console.log('2:',checkPalindrome("madam"));
console.log('2:',checkPalindrome("nurses run"));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g

function stringCombinations(str) {
  const outputList = [];
  for (let i = 0; i < str.length; i++) {
    let temStr = "";
    for (let j = i; j < str.length; j++) {
      temStr += str.at(j);
      outputList.push(temStr);
    }
  }
  return outputList;
}
console.log('3:',stringCombinations("dog"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string

function sortString(str) {
  return str.split("").sort().join("");
}
console.log('4:',sortString("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox

function convertToUpper(str) {
  return str
    .split(" ")
    .map((s) => s.at(0).toUpperCase() + s.slice(1))
    .join(" ");
}
console.log('5:',convertToUpper("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

function findLongestWord(str) {
  let longest = "";
  const newList = str.split(" ");
  for (let i = 0; i < newList.length; i++) {
    if (newList[i].length > longest.length) {
      longest = newList[i];
    }
  }
  return longest;
}
console.log('6:',findLongestWord("Web Development Tutorial"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5

function countVowel(str) {
  const vowels = new Map([
    ["a", 0],
    ["e", 0],
    ["i", 0],
    ["o", 0],
    ["u", 0],
  ]);
  let count = 0;
  for (const char of str) {
    if (vowels.has(char)) {
      count++;
    }
  }
  return count;
}
console.log('7:',countVowel("The quick brown fox"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

function isPrime(num) {
  if (num < 2) return false;
  let root = Math.ceil(Math.sqrt(num));
  if (num === 2) return true;
  for (let i = 2; i <= root; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log('8:',isPrime(9));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.

function getType(arg) {
  return typeof arg;
}
console.log('9:',getType("type"));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function matrix(n) {
  outterMatrix = [];
  for (let i = 0; i < n; i++) {
    innerMatrix = [];
    for (let j = 0; j < n; j++) {
      if (j == i) {
        innerMatrix.push(1);
      } else {
        innerMatrix.push(0);
      }
    }
    outterMatrix.push(innerMatrix);
  }
  return outterMatrix;
}
console.log('10:',matrix(7));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4

function secondLandG(arr) {
  const newArr = [...new Set(arr.sort())];
  return [newArr[1], newArr[newArr.length - 2]];
}
console.log('11:',secondLandG([2, 3, 4, 4, 9, 2, 5, 7]));

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function checkPerfertNumber(num) {
  let sum = 0;
  for (let i = 1; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (num / i !== i) {
        sum += num / i;
      }
    }
  }
  return num === sum / 2;
}
console.log('12:',checkPerfertNumber(8128));

//13. Write a JavaScript function to compute the factors of a positive integer.

function getFactors(int) {
  const factor = [];
  for (let i = 1; i < Math.sqrt(int); i++) {
    if (int % i === 0) {
      factor.push(i);
      if (int / i !== i) {
        factor.push(int / i);
      }
    }
  }
  return factor.sort((a, b) => a - b);
}
console.log('13:',getFactors(36));

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1

function amountTocoins(amount, coins) {
  const outPut = [];
  for (let coin of coins) {
    while (amount >= coin) {
      outPut.push(coin);
      amount -= coin;
    }
  }
  return outPut;
}
console.log('14:',amountTocoins(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent
//     and b is the bases. Accept b and n from the user and display the result.

function getExponet(b, n) {
  return Math.pow(b, n);
}
console.log('15:',getExponet(2, 2));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function getUniqueChar(str) {
  const newArr = [...new Set(str.split(""))];
  return newArr.join("");
}
console.log('16:',getUniqueChar("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to get
//     the number of occurrences of each letter in specified string.

function getOccurences(str) {
  let newStr = str.replaceAll(' ','');
  const obj = {
    o: 1,
  };
  for (char of newStr) {
      if (obj.hasOwnProperty(char)) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
  }
  return obj;
}
console.log('17:',getOccurences("hello from the other side"));

// 18. Write a function for searching JavaScript arrays with a binary search. 
//     Note: A binary search searches by splitting an array into smaller and smaller 
//     chunks until it finds the desired value.
// 2, 6, 7, 8, 9, 11, 15, 26, 41
function binarySearch(target, array){
  const newArr = [...array.sort((a,b)=>(a-b))];
  let begin = 0; 
  let end  = newArr.length-1;
  while(begin<=end){   
    let mid = Math.floor((end+begin)/2);
    if (newArr[mid] === target){ 
      return mid;
    }
    if(target>newArr[mid]){  
      begin = mid +1; 
    }
    else{
      end = mid - 1;
    }
  }
  
  return null;
}
console.log('18:',(binarySearch(26,[15,2,9,41,26,6,7,8,11])));

// 19. Write a JavaScript function that returns array elements larger than a number. 
function arrElement(num, arr){
    return arr.filter((ele) => ele > num);
}
console.log('19:',arrElement(4,[1,2,3,4,5,6,7,8,9,10,15,20,25]));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function randomStringId(length, charList){
    let string = "";
    for(let i =0; i<length; i++){
        let randomChat = Math.floor(Math.random()*charList.length);
        string += charList.at(randomChat);
      }
    return string;
}
charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
console.log('20:',randomStringId(7,charList));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]
function getSubsets(arr, subsetLength) {
  let result = [];

  // Helper function to generate combinations using nested loops
  function generateCombinations(currentSubset, start) {
    if (currentSubset.length === subsetLength) { 
      result.push([...currentSubset]);
      return;
    }
    for (let i = start; i < arr.length; i++) { 
      currentSubset.push(arr[i]); 
      generateCombinations(currentSubset, i + 1);
      currentSubset.pop();
    }
  }
  generateCombinations([], 0); 
  return result;
}
const sampleArray = [1, 2, 3, 4];
const subsetLength = 2;
console.log('21',getSubsets(sampleArray, subsetLength));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter
// and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 
function countLetter(string, letter){
    let count = 0;
    for(let l of string){
        if(letter ===l){
            count ++;
        }
    }
    return count;
}
console.log('22:',countLetter('microsoft.com', 'o'));

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 
function firstNonRepeatChar(str){
    const count = {};
    for(let letter of str){  
        count[letter] =  (count[letter]||0) + 1; 
      }
    console.log(count);

    for(const char of str){
      if(count[char]===1){
        return char;
      }
    }
}
console.log('23:',firstNonRepeatChar('abacddbec'));


// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr){  
  let len = arr.length;
  for(let i = 0; i < len; i++){
    for(let j = 0; j < len - 1; j++){
      if(arr[j]<arr[j+1]){
        [arr[j],arr[j+1]] =  [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}
const bubbleArr= [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455,77,23, 234, 213];
console.log('24:', bubbleSort(bubbleArr));


// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
function longestCountry(countries){
    let longestCountry = '';
    for(let country of countries){
        if(country.length > longestCountry.length){
            longestCountry = country;
        }
    }
    return longestCountry;
}
console.log('25:',longestCountry(["Australia", "Germany", "United States of America"]));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function longestSubstring(str){
  let left, right, len =0;
  for(let i = 0; i< str.length-1;i++){
    for(let j = i+1; j< str.length;j++){
      if(str.at(i)===str.at(j) && j-i > len){
        left = i;
        right = j;
        len = right-left;
        break;
      }
    }
  }
  return str.slice(left,right+1);
}
console.log('26:',longestSubstring('abceaccdogmb'));

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or 
//longest symmetric factor problem is the problem of finding a maximum-length contiguous 
//substring of a given string that is also a palindrome. For example, 
//the longest palindromic substring of "bananas" is "anana". 
//The longest palindromic substring is not guaranteed to be unique; 
//for example, in the string "abracadabra", there is no palindromic substring 
//with length greater than three, but there are two palindromic substrings with 
//length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings 
//(that is, all substrings that are themselves palindromes and cannot be extended to 
//larger palindromic substrings) rather than returning only one substring or returning
// the maximum length of a palindromic substring.

function longestPalindrome(s) {
  if (s.length < 1) return "";

  let start = 0;
  let end = 0;

  function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i); // Odd length palindromes
    let len2 = expandAroundCenter(s, i, i + 1); // Even length palindromes
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

const testString1 = "bananas";
const testString2 = "abracadabra";
console.log('27',longestPalindrome(testString1)); 




// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function callBack(name, soundFunc ){
  return`${name} is ${soundFunc()}`
}
function soundFunc(){
  return 'making sound';
}
console.log('28:',callBack('Tom', soundFunc));


// 29. Write a JavaScript function to get the function name. 
function getFunctionName(func){
    return func.name;
}
function functionName(){
    return;
}
console.log('29:',getFunctionName(functionName));