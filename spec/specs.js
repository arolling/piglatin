describe("pigLatin", function () {
  it("will add ay at the end of a word beginning with a vowel", function() {
    expect(pigLatin("Assert")).to.equal("Assertay");
  });

  it("will move the first consonant to the end of the word before adding ay", function() {
    expect(pigLatin("word")).to.equal("ordway");
  });

  it("will move the first group of consonants", function() {
    expect(pigLatin("trade")).to.equal("adetray");
  });

  it("will include u when moving q", function() {
    expect(pigLatin("quash")).to.equal("ashquay");
  });


});
