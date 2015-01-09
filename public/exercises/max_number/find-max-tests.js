//We shall contemplate truth by testing reality, via spec expectations.
describe("Find maximum number in a list: ", function() {

  describe("Case for en empty list", function() {

    it("should return null for empty list", function() {
      expect(findMax([])).toEqual(null);
    });

  });

  describe("Case for list with one entry", function() {

    it("should return 2 for [2]", function() {
      expect(findMax([2])).toEqual(2);
    });

    it("should return 15 for [15]", function() {
      expect(findMax([15])).toEqual(15);
    });

    it("should return 7 for [7]", function() {
      expect(findMax([7])).toEqual(7);
    });
    
  });

  describe("Case for list with multiple entries", function() {

    it("should return 5 for [2, 3, 5]", function() {
      expect(findMax([2, 3, 5])).toEqual(5);
    });

    it("should return 30 for [2, 30, 15, 4]", function() {
      expect(findMax([2, 30, 15, 4])).toEqual(30);
    });

    it("should return 90 for [7, 10, 56, 30, 90, 34, 2, 12]", function() {
      expect(findMax([7, 10, 56, 30, 90, 34, 2, 12])).toEqual(90);
    });
    
  });

});