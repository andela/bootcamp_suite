//We shall contemplate truth by testing reality, via spec expectations.
describe("Produce the reverse order of a word: ", function() {

  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(findReverse('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(findReverse('anna')).toEqual(true);
    });

    it("should return true for `kayak`", function() {
      expect(findReverse('kayak')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(findReverse('civic')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(findReverse('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(findReverse('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(findReverse('misc')).toEqual('csim');
    });

  });

});