// author Sandy Vanderbleek

function _(array) {
  var unray = {};
  unray.prototype = array.prototype;
  unray.nativeObject = array;
  unray.nativeType = "array";
  
  unray.reduce = function reduce(binaryOperator, accumulator) {
    if(!array.length) return undefined;
    for(var index = 0; index < array.length; index++)
      accumulator = binaryOperator(accumulator, array[index]);
    return accumulator;
  }

  unray.map = function map(fn) {
    var mapper = function(mapped, next) { return mapped.push(fn(next)); }
    reduce(mapper, _([]));
  }
  
  return unray;
}




