function search(string ,key) {
  let count = 0;


  for (let i = 0; i < string.length; i++)
    if (string[i].toLowerCase() === key.toLowerCase())
      count++;


  return count;
}