function bandNameGenerator (str) {
  let = result = str.slice(0, 1).toUpperCase() + str.slice(1)

  if (str[0] === str.slice(-1))
    result += str.slice(1)
  else 
    result = 'The ' + result;

  return result
}