//We shall contemplate truth by testing reality, via spec expectations.
describe("Find missing number two lists: ", function() {

  describe("Case for en empty list", function() {

    it("should return false for empty list", function() {
      expect(findEven([])).toEqual(false);
    });

  });

  describe("Case for lists with no even number", function() {

    it("should return false for [1, 3, 13]", function() {
      expect(findEven([1, 3, 13])).toEqual(false);
    });

    it("should return false for [3, 7, 9, 21]", function() {
      expect(findEven([3, 7,9, 21])).toEqual(false);
    });

    it("should return false for [7, 11, 27]", function() {
      expect(findEven([7, 11, 27])).toEqual(false);
    });

  });

  describe("Case for lists with a couple of even numbers", function() {

    it("should return [2 , 4, 6] for [1, 2, 3, 4, 5, 6]", function() {
      expect(findEven([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    it("should return [10, 28] for [9, 10, 11, 13, 21, 23,28]", function() {
      expect(findEven([9, 10, 11, 13, 21, 23, 28])).toEqual([10, 28]);
    });

    it("should return [102] for [5, 9, 11, 55, 79, 83, 102, 1001, 1002]", function() {
      expect(findEven([5, 9, 11, 55, 79, 83, 102, 1001, 1002])).toEqual([102, 1002]);
    });

  });

});