function drawStairs(n) {
  let result = "";

  let i = 0;
  for (; i < n; i++)
  {
    if (i < n - 1)
      result += " ".repeat(i) + "I" + "\n";
    else
    result += " ".repeat(i) + "I";
  }

  return result;
}