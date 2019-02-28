// aaabbc --> abc
// input: str output: string
/* Brute force app:
/* traverse the string for first char; if you meet it, remove. And update the string. : O(n^2) but it dos not need additional buffer
*/

//without additional memory
function removeDuplicateChars(str) {
  if (str === null) return null;
  if (str.length < 2) return str;

  for (let i = 0; i < str.length; i++) {
    let j;
    for  (j = 0; j < str.length; j++) {
      if (i !== j && str[j] === str[i]) str = str.slice(0, j) + str.slice(j + 1);
    }
  }
  return str;
}

// console.log(removeDuplicateChars('aacd'));
// console.log(removeDuplicateChars('aaaa'));
// console.log(removeDuplicateChars(null));
// console.log(removeDuplicateChars('aaabbb'));
// console.log(removeDuplicateChars('abababa'));

// with addtional memory ; additional copy of string
function removeDuplicateChars2(str) {
  //if (str === null) return null;
  if (!str) return  ' ';
  if (str.length < 2) return str;
  let strArr = str.split('');
  str = strArr.filter((char, index) => index === str.indexOf(char)).join('');
  return str;
}

// console.log(removeDuplicateChars2('aacd'));
// console.log(removeDuplicateChars2('aaaa'));
// console.log(removeDuplicateChars2(null));
// console.log(removeDuplicateChars2());
// console.log(removeDuplicateChars2('aaabbb'));
// console.log(removeDuplicateChars2('abababa'));

//additional memory size; diff app. Sama app within the unique Chars.f
function removeDuplicateChars3(str) {
  if (!str) return null;
  if (str.length < 2 ) return str;
  var hit = new Array(256);
  for (let i = 0; i < 256; i++) {
    hit[i] = false;
  }
  hit[str[0]] = true;
  let found = 1;

  for (var i = 1; i < str.length; ++i) {
    //console.log(str, i, found, str.slice(0, found), str[i]);
    //console.log(i, str, str[i]);
    if (!hit[str[i]]) {
      str = str.slice(0, found) + str[i] + str.slice(found + 2);
      //console.log(str);
      found++;
      hit[str[i]] = true;
      i--;
    }
    //console.log(i, str, str[i]);
  }
  return str.slice(0, found);
}

console.log(removeDuplicateChars3('aacd'));
console.log(removeDuplicateChars3('aaaa'));
console.log(removeDuplicateChars3(null));
console.log(removeDuplicateChars3());
console.log(removeDuplicateChars3('aaabbb'));
console.log(removeDuplicateChars3('abababa'));
