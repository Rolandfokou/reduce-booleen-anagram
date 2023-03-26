// verifier le fonctionnement dun anagram

 function checkAnagram(string1,string2){
    return string1.toLowerCase().split("").sort().join("")=== string2.toLowerCase().split("").sort().join("");
 }

// const word1= "chien";
//word1.toLowerCase();