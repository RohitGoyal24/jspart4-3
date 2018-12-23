var evens = [2, 4, 6, 8];
var odds = [1, 3, 5, 7];
var primes = [2, 3, 5, 7, 11];

var all = [...primes, ...evens, ...odds];
var newPrimes = [...primes];
var jamesBond = {
    first: 'James',
    last: 'Bond',
    country: 'United States',
    city: 'New york',
    twitter: '@jamesbond'
};
var {
    first,
    last,
    country,
    city,
    twitter
} = jamesBond;

var players = ['paul', 'andy', 'darrell', 'jim'];
var [player1, player2, player3, player4] = players;