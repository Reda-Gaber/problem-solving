function stringClean(s){
  let sum = "";
  
  for(let i = 0; i < s.length; i++)
  {
    if ((+s[i] + 0) === +s[i] && s[i] !== " ") continue;
    sum += s[i];
  }
  
  return sum;
}

console.log(stringClean("! ! 9sddf9d"));