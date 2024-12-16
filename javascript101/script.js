console.log('Hello RNN24');

// 1. Variables
let name; //simple definition
let email = 'jongturkson@gmail.com'; // string
let num1 = 4; // integer
let iGood = true; // boolean
let caMark = 23.5; // This is float
let Phonenumber = 683837236; // not good practice, start with lowercase

// 2. Comments
// This is a line comment
/*
This is a block comment
It can have multiple lines
*/

// 3. Operations
let a = 4;
let b = 2;
let sum = a + b;
let diff = a - b;
let product = a * b;
let quotient = a / b;
console.log('The sum of '+a+' and '+b+' is '+sum);

// 4. STRING OPERATIONS,
console.log('HELLO'+'world');
console.log(0+'0');

// 5. CONDITIONS
if (a>b){
    console.log(a+' is greater than '+b);
} else if (a<b){
    console.log(a+' is less than '+b);
} else {
    console.log(a+' is equal to '+b);
}

//LOGICAL OR, LOGICAL AND (||, &&, i=)
let password = 'password';

if (email == 'jongturkson@gmail.com' && password == 'password'){
    console.log('User exist and is authenticated');
} else if (email == 'jongturkson@gmail.com' && password != 'password'){
    console.log('Invalid password');
} else {
    console.log('Invalid email or password');
}

let number = 3;
switch(number) {
    case 1:
        console.log('Number is 1');
        break;
    case 2:
        console.log('Number is 2');
        break;
    default:
        console.log('Number is neither 1 nor 2');

}

// 6. ARRAYS AND OBJECTS
let evenNumbers = [2, 4, 6, 8, undefined, null];
console.log(evenNumbers[2]);
console.log(evenNumbers[4]);
console.log(evenNumbers);

let fruits = ['pawpaw', 'banana', 'fufu', 'coconut'];
// how to delete elements from array delete fruits[2];
// TODO: Delete fufu from the list so we have only 3 elements
fruits.slice();
console.log(fruits);
console.clear();
let footballPlayer = {
    name: 'Vincent Aboubakar',
    age: 32,
    nickName: 'AbouBae',
    position: 'Center-Forward',
    club: 'Sivar Spor',
    nationality: 'Cameroonian',

    transfer: function (newClub){
        console.log(this.nickName+' was transferred');
        this.club = newClub;

    }
}
console.log(footballPlayer.club);
console.log(footballPlayer.nickName);
footballPlayer.transfer('Man U');
console.log(footballPlayer.club);
// TODO: Delete the age from the footballPlayer object

// 7. LOOPS 
console.clear();
let startDay = 1;
let endDay = 3;
let tasks = ['Javascript', 'React', 'React Native'];
for (i = startDay; i<= endDay; i++){
    console.log('I am in day ' + i + ' of ReactNative bootcamp I am learning '+tasks[i-1]);
}


while (startDay <= endDay){
    console.log('I am in day'+ startDay +'of ReactNative bootcamp I am learning '+tasks[startDay-1]);
    startDay++;
}

console.clear();
// 8. FUNCTIONS
function add(a, b=0){ //if b is not given the the default value is 0
    return a+b;
}

console.log(add(7, 3));
console.log(add(5));
/* TODO: Read about and practice
    array references(map, filter, some, find, splice, includes),
    template literals
*/

