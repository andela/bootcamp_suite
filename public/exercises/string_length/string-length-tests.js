//We shall contemplate truth by testing reality, via spec expectations.
describe("String Lengths in arrays ", function() {

  describe("Case for a single string", function() {

    it("should return [6] for `Godson`", function() {
      expect(stringLength('Godson')).toEqual([6]);
    });

    it("should return [3] for `Mia`", function() {
      expect(stringLength('Mia')).toEqual([3]);
    });

  });

  describe("Case for an array of strings", function() {

    it("should return [4,5] for ['Adam','Frankel']", function() {
      expect(stringLength(['Adam','Frankel'])).toEqual([4,7]);
    });

    it("should return [7, 6, 5] for ['Michael', 'Curtis', 'Faith']", function() {
      expect(stringLength(['Michael', 'Curtis', 'Faith'])).toEqual([7, 6, 5]);
    });

  });

});