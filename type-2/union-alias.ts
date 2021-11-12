type Combineable = number | string;
type astypes = 'as-num' | 'as-text';

function combine(
  n1: Combineable,
  n2: Combineable,
  // resultConversion: 'as-num' | 'as-text', // these are called literal types
  resultConversion: astypes
) {
  let result; // this is a important optimization for performance reasons
  if (
    (typeof n1 === 'number' && typeof n2 === 'number') ||
    resultConversion === 'as-num'
    // typeof resultConversion === 'as-number'
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  //   if (resultConversion === 'as-number') {
  //     return +n1 + +n2;
  //   } else {
  //     return result.toString();
  //   }
  return result;
}

const combinedStringAges = combine('30', '26', 'as-num');
console.log(combinedStringAges);

const combinedAges = combine(30, 26, 'as-num');
console.log(combinedAges);

const combinedNames = combine('max', 'me', 'as-text');
console.log(combinedNames);
