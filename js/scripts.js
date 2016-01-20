var pigLatin = function(word) {
  if ( (!word.startsWith("i")) || (!word.startsWith("e")) || (!word.startsWith("a")) || (!word.startsWith("o")) || (!word.startsWith("u")) ) {
  var firstLetter = word.slice(0,1);
  var word = word.slice(1);
  word += firstLetter;
  }
  return word + 'ay';
}
