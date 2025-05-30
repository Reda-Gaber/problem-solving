function digitize(n) {
  let str = String(n);
  let sum = [];
  for (let i = str.length; i >= 0; i--)
  {
    Number(str[i]);
    if (str[i] >= 0) sum.push(Number(str[i]));
  }

  return sum;
}
