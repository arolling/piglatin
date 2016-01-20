describe("pigLatin", function () {
  it("will add ay at the end of a word beginning with a vowel", function() {
    expect(pigLatin("equate")).to.equal("equateay");
  });

  it("will move the first consonant to the end of the word before adding ay", function() {
    expect(pigLatin("subsequent")).to.equal("ubsequentsay");
  });

  it("will move the first group of consonants", function() {
    expect(pigLatin("trade")).to.equal("adetray");
  });

  it("will include u when moving q", function() {
    expect(pigLatin("squash")).to.equal("ashsquay");
  });

});

describe("sentenceHandler", function() {
  // it("will split a sentence into separate words", function() {
  //   expect(sentenceHandler("Hi my name is")).to.eql(["Hi", "my", "name", "is"]);
  // });

  it("will Latinize each separate word", function() {
    expect(sentenceHandler("Hi our name is")).to.eql(["iHay", "ouray", "amenay", "isay"]);
  });

});
