var fibonacci_series = require('../src/fibonacci_series.js');

describe('thousands_separators', function() {

  it('when input 1 it should print [0,1]', function() {
    var input = 1;
    var expectText = [0, 1];
    expect(fibonacci_series(input)).toEqual(expectText);
  });

  it('when input 2 it should print [0,1,1]', function() {
    var input = 2;
    var expectText = [0, 1, 1];
    expect(fibonacci_series(input)).toEqual(expectText);
  });

  it('when input 10 it should print [0,1,1]', function() {
    var input = 10;
    var expectText = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    expect(fibonacci_series(input)).toEqual(expectText);
  });

});
