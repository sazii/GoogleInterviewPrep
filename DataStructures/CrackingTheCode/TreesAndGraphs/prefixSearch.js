//prefix search
//input: a book(given as two things: bookid and a string of english text) and a string seach for
//output: an array of the character indices for every word in the book that begins with that string.

// example
// const book = {
//   id:1,
//   text: 'Once upon a time , there was a book with words . The book had not been catalouged, but would catch the eyes of onllokers nonetheless'}
//  findWordsStartingWith(book, 'the') should return [18, 47, 97]

let tries = {};
function buildTrie (text){
  const trie = {};
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++){
    let node = trie;
    const starting = i;
    //seperates word by word
    while (text[i] && text[i] !== ' ' && text[i] !== ',' && text[i] !== '.'){
      const char = text[i];
      node[char] = node[char] || {indexes: []};// obj in obj
      node[char].indexes.push(starting);
      node = node[char];//builds obj in obj
      i++;
    }
  }
  return trie;
}

function fiendOrCreateTrie(book){
  if (!tries.hasOwnProperty(book.id)){
    tries[book.id] = buildTrie(book.text);
  }
  return tries[book.id];
}

function findWordsStartingWith(book, prefix){
  prefix = prefix.toLowerCase();
  const trie = fiendOrCreateTrie(book);
  console.log(trie);
  let node = trie;
  for (let i = 0; i < prefix.length; i++){
    const char = prefix[i];
    node = node[char];//creates obj in obj; We should know the node. call the field of the each node!!!!
    console.log(char, node);
    if (!node) return [];
  }
  return node.indexes;
}

let book = {text: 'saziye geldi saz', id: 1};

console.log(findWordsStartingWith(book, 'saz'));
