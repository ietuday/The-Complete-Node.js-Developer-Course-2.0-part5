const {SHA256} = require('crypto-js');
// SHA-256 Cryptographic Hash Algorithm. A cryptographic hash 
// (sometimes called 'digest') is a kind of 'signature' for a text 
// or a data file. SHA-256 generates an almost-unique 256-bit (32-byte)
//  signature for a text.

const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

var password = '123456!@#$';

// var salt = bcrypt.genSaltSync(10, (err, salt) => {
//     bcrypt.hashSync(password, salt,(err, hash) =>{
//         console.log(hash);
//     });
// });

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$jN/l/Mr23NAu5RpurziEu.47O1qjIabWbUTGiBAxGOntTo2o35ga.';

bcrypt.compare('123456!@', hashedPassword, (err, result) => {
    console.log(result);
});





// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(`Token : ${token}`);

// var decoded = jwt.verify(token,'123abc');

// console.log("Decoded: ",decoded);



/*var message = 'I am user number 3';

var hash = SHA256(message).toString();

console.log(`Message : ${message}`);
console.log(`Hash: ${hash}`);

var data = {
    id: 4
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'something').toString()
};

token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();

var resultHash = SHA256(JSON.stringify(token.data) + 'something').toString();

if(resultHash === token.hash){
    console.log('Data was not changed');
}else{
    console.log('Data was change......Carefull');
    
}
*/




