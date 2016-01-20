var pigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (var i = 0; i < 11; i++) {
    var vowel = word.startsWith(vowels[i]);
    if (vowel === true) {
      break;
    } else {
      break;
    }
  }


  if ( vowel === false ) {
    var firstLetter = word.slice(0,1);
    var word = word.slice(1);
    word += firstLetter;
    console.log(word);
  }
  return word + 'ay';
}
