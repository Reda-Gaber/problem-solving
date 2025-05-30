function findDifference(a, b) {
  let sumA = 1;
  let sumB = 1;

  for (let i = 0; i < a.length; i++)
    sumA *= a[i];

  for (let i = 0; i < b.length; i++)
    sumB *= b[i];

  return sumA > sumB ? sumA - sumB : sumB - sumA;
}