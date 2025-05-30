function multiply(number) {
  let len = number.toString();
  if (number === 0) 
    return number * 5 ** 1;

  if (number < 0)
    return number * 5 ** (len.length - 1);

  return number * 5 ** len.length;
}

