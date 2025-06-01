/*
Basic Math (Add or Subtract)
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"

*/

function calculate(str) {

    let value = str.split(/(plus|minus)/);

    let arr = value.map((item) => {
        if (item == 'plus') item = '+';
        if (item == 'minus') item = '-';

        return item;
    })


    let sum = Number(arr[0]);
    for (let i = 1; i < arr.length; i++){
        if (arr[i] == '+') sum += Number(arr[i+1]);
        if (arr[i] == '-') sum -= Number(arr[i+1]);
    }

    return sum.toString();
}


console.log(calculate("1plus2plus3plus4"))
console.log(calculate("1plus2plus3minus4"))
console.log(calculate("1plus20plus3minus4"))