
//takes string input returns boolean output
/*bruteForce app:
* Look at char by char
* if you meet the same char return false else return true
* First char: n Second char: n-1 third char: n-2 Worse Case = n(n+
1)/2 --> O(n^2)
/ More elegant one:
* we have 256 ascii chars. we build an array length 256 indicating each element a char.
* We start to sign our chars of the given string val as true in charset array.
* If we met any true in charset er return true else return false.
* Time Complexity: we just traverse the string in worst case we need traverse the whole string so O(n)
*/

function hasUniqueChars(str) {
   let asciiCharSet = new Array(256);
   for (let i = 0; i < str.length; i++) {
     let asciiCode = str.charCodeAt(i);
     if (asciiCharSet[asciiCode]) return false;
     asciiCharSet[asciiCode] = true;
   }
   return true;
}

console.log(hasUniqueChars('aaabbb'));
