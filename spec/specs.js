describe("pigLatin", function () {
  it("will add ay at the end of a word beginning with a vowel", function() {
    expect(pigLatin("ice")).to.equal("iceay");
  });
  it("will move the first consonant to the end of the word before adding ay", function() {
    expect(pigLatin("word")).to.equal("ordway");
  });




});
