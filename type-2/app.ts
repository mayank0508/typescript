function combine(
  n1: number | string,
  n2: number | string,
  resultConversion: string
) {
  let result; // this is a important optimization for performance reasons
  if (
    (typeof n1 === 'number' && typeof n2 === 'number') ||
    resultConversion === 'as-number'
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

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedNames = combine('max', 'me', 'as-text');
console.log(combinedNames);
