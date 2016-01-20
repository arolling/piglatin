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
