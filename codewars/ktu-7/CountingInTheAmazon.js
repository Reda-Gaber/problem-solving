//////////////////////////////////////////////////////////////
/*
The Arara is an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

1 = anane
2 = adak
3 = adak anane
4 = adak adak
5 = adak adak anane
6 = adak adak adak
7 = adak adak adak anane
8 = adak adak adak adak
Take a given number and return the Arara's equivalent.
*/
//////////////////////////////////////////////////////////////

function countArara(n) {
  let countDown = n;
  let fin = [];

  while (countDown > 0) {
    if (countDown > 1) {
      fin.push("adak");
      countDown -= 2;
    } else {
      fin.push("anane");
      countDown -= 1;
    }
  }

  return fin.join(" ");
}
console.log(countArara(4));
console.log(countArara(7));
console.log(countArara(8));
