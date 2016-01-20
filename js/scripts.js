var pigLatin = function(word) {
  var position = findVowel(word);

  var firstLetter = word.slice(0, position);
  var word = word.slice(position);
  word += firstLetter;
  console.log(word);
  return word + 'ay';
}

var findVowel = function(word) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (var position = 0; position < word.length; position++) {
    for (var i = 0; i < 11; i++) {
      var vowel = word.startsWith(vowels[i], position);
      if (vowel === true) {
        
        console.log(vowel, position, word);
        return position;
      }
    }
  }
}
