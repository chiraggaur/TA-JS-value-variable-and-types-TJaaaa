/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0 ;


if  (bank_balance > amount) {
    amount = PHONE_PRICE + ACCESSORY_PRICE + ((PHONE_PRICE + ACCESSORY_PRICE) * TAX_RATE );
    bank_balance = bank_balance - amount ;
    alert ("yes i can affort it");
    // console.log(amount);

} else {
    alert ("i can't afford it");
    
}   


    // console.log(amount);
    // // limit_Remaining = SPENDING_THRESHOLD - amount ;
    // bank_balance = (bank_balance - amount) ;
    // amount += amount ; 
     
   
    // console.log ("purchase amount is $" + amount );

    // console.log (bank_balance);

// ⛑ Answer of the above will `$334.76`.
  // if (bank_balance > amount) {
    //     alert ("You can but it ");
    // } else {
    //     alert (" Out of budget ");
    // } 

        // limit_Remaining  = (SPENDING_THRESHOLD - amount ); 