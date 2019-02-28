// you have a method isSubstring; it checks if one word is substring of another. Given two strings, s1 and s2, check if s2 is rotation of s1 using only one call to substring. For example; waterbottle ==> erbottlewat.
 // ayse => seay  when we concatanate the ayse with itsel ayseayse; any rotation of ayse will be substring of it!

 function isRotation(str1, str2) {
   if (str1.length !== str2.length) return false;
   let str1str1 = str1 + str1;
   return str1str1.includes(str2);
 }

 console.log(isRotation('ayse', 'seay'));
 console.log(isRotation('erbottlewa', 'waterbottl'));
