var pigLatin = function(word) {
  var position = findVowel(word);

  var firstLetter = word.slice(0, position);
  var word = word.slice(position);
  word += firstLetter;
//  console.log(position);
  return word + 'ay';
}

var findVowel = function(word) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (var position = 0; position < word.length; position++) {
    for (var i = 0; i < 11; i++) {
      var vowel = word.startsWith(vowels[i], position);
      if (vowel === true) {
        //console.log(vowels[i]);
        if (vowels[i] === "u" && word.charAt(position-1) === "q") {
          //console.log(i, position, word);
          return position + 1;
        } else {
          //console.log(vowel, position, word);
          return position;
        }
      }
    }
  }
}

var sentenceHandler = function(sentence) {
  var latinArray = [];
  var wordArray = sentence.split(" ");
  for (var i=0; i < wordArray.length; i++) {
    var latinWord = pigLatin(wordArray[i]);
    latinArray.push(latinWord);
  }
  return latinArray;
}

// END BUSINESS LOGIC

$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var word = $("input#latinInput").val();
    console.log(word)

    var latinWord = sentenceHandler(word);
    console.log(latinWord);

    var latinPhrase = latinWord.toString().replace(/,/g, " ");
    console.log(latinPhrase);
    $("#translatedText").text(latinPhrase);

  });
});
