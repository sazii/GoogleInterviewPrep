//gets string as input; builds trie from string
function Trie(text){
  this.root = new TrieNode();
  this.build(text);
}

Trie.prototype.build = function(text){
  let words = text.split(' ' || '.' || ',');
  for (let i = 0; i < words.length; i++) {
    this.root.addWord(words[i]);
  }
};

//checks the trie contains a word with the given prefix.
Trie.prototype.contains = function(prefix){
  let trie = this.root; // it will be updated.
  for (let i = 0; i < prefix.length; i++) {
    trie = trie.getChild(prefix[i]); // looks; children of child // Guzelllll!!!!
    if (!trie) return false;
  }
  return true;
};

function TrieNode(char){
  this.char = char || null; // the character stored in this node;
  this.children = {}; //children of the node in the trie
                      //like hashmap: key: character value: TrieNode
  this.terminates = false;
}

TrieNode.prototype.getChar = function(){
  return this.char;
};

// finds a child node that has the char argument as its data
TrieNode.prototype.getChild = function(char){
  return this.children[char];
};

// returns if the node represents the end of a complete word.
TrieNode.prototype.terminates = function(){
  return this.terminates;
};

TrieNode.prototype.setTerminates = function(bool){
  this.terminates = bool;
};

//Add word to the node, and recursively create the child nodes.
TrieNode.prototype.addWord = function(word){
  if (!word) return;
  let firstChar = word.charAt(0);
  let childNode = this.getChild(firstChar);
  if (!childNode){
    childNode = new TrieNode(firstChar);
    this.children[firstChar] = childNode;
  }
  if (word.length > 1) childNode.addWord(word.substring(1));
  else childNode.setTerminates(true);
};

let text = 'Sazi geldi saz';
let trie = new Trie(text);
console.log(trie.contains('gl'));
