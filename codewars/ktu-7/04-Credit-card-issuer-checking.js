/*

Given a credit card number we can determine who 
the issuer/vendor is with a few basic knowns.

Complete the function getIssuer() that will use the values
 shown below to determine the card issuer for a given card 
 number. If the number cannot be matched then the function 
 should return the string Unknown.
|---------------------------------------------------|
| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |
|---------------------------------------------------|


Examples
getIssuer(4111111111111111) == "VISA"
getIssuer(4111111111111) == "VISA"
getIssuer(4012888888881881) == "VISA"
getIssuer(378282246310005) == "AMEX"
getIssuer(6011111111111117) == "Discover"
getIssuer(5105105105105100) == "Mastercard"
getIssuer(5105105105105106) == "Mastercard"
getIssuer(9111111111111111) == "Unknown"
*/


function getIssuer(number) {

    let nums = number.toString().match(/(\b34|\b37|\b6011|\b51|\b52|\b53|\b54|\b55|\b4)/g);
    let len = number.toString().length;


    if (nums == '6011' && len == 16) return 'Discover';
    if (nums == '4' && (len == 13 || len == 16)) return 'VISA';
    if ((nums == '34' || nums == '37') && len == 15) return 'AMEX';
    if ((nums > 50 && nums < 56) && len == 16) return 'Mastercard';
    else return 'Unknown'

}

console.log(getIssuer(4111111111111111));
console.log(getIssuer(4111111111111));
console.log(getIssuer(4012888888881881));
console.log(getIssuer(378282246310005));
console.log(getIssuer(6011111111111117));
console.log(getIssuer(5105105105105100));
console.log(getIssuer(5105105105105106));
console.log(getIssuer(9111111111111111));

