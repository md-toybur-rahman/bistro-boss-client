/**
 * 
 * 1. install stripe and react stripe js
 * 2. create a checkout form with card element (card element contains: card number, expiration date, cvs, zip code)
 * 3. create account on stripe and get the publishable key PK.
 * 4. get card information
 * 5. create a payment method
 * 6. use test card to test payment
 * 7. on the server side: install stripe: npm install --save stripe
 * 8. create a payment intent api with payment method types: ['card']
 *      make sure you provide amount in cents (multiply price with 100)
 * 9. call payment intent api to get client secret and store it a state
 * 10. use confirmCardPayment api with client secret card info
 * 
 * */ 

console.log(2 + '2' - 1);
console.log(typeof(2 + '2' - 1));
console.log(typeof null);
console.log(0.1 + 0.2);