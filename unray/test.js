describe('Unray', function() {
  it('can be instantiated', function() {
    expect(_([])).not.toEqual(undefined);
  });

  it('can left reduce', function() {
    var numbers = [2, 3, 4];
    var number = 1;
    var addition = function(x, y) { return x + y; }
    var numbersPlusNumber = 1 + 2 + 3 + 4;
    expect(_(numbers).reduce(addition, number)).toEqual(numbersPlusNumber);
  });
});