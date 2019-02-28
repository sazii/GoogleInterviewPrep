//Anagram means; you can derive one string from another string using whole chars of the string  medicare => caremedi

// app1: sort both strings and look at they are equal or not

function isAnagram(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram('ayse', 'esya'));
console.log(isAnagram('selmr', 'elmas'));

//app2: calculate number of occurences of each char in one string.
// * store into an array ac to asciiCode
// * check the letters array if existed or not. And derement the value. if you reach zero it means you have more or you have different element!

function isAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;
  let letters = new Array(256);
  letters.fill(0);
  for (let  i = 0; i < str1.length; i++) {
    letters[str1.charCodeAt(i)]++;
  }
  for (let i = 0; i < str2.length; i++) {
    let asciiCode = str2.charCodeAt(i);
    console.log(str2[i], letters[asciiCode]);
    if (letters[asciiCode] === 0) return false;
    else letters[asciiCode]--;
  }
  return true;
}
console.log(isAnagram2('ayyyss', 'assyy'));
console.log(isAnagram2('selmr', 'elmas'));
