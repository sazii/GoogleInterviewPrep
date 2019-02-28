//bruteforce app:
//* traverse the string; check that if includes found
// * change it with wanted
// js string dynamic so there is no need to calculate the length of new composed string

function replace(str, found, wanted) {
  if (found === null) return;
  for (var i = 0; i < str.length - found.length; i++) {
    if (str.slice(i, i + found.length) === found) {
      str = str.slice(0, i) + wanted + str.slice(i + found.length);
    }
  }
  return str;
}

console.log(replace('asli gel buraya', ' ', '%20'));
