
// // Age Eligibility Checker --------------------------------

// let firstName = prompt(`Please enter your name:`)
// let age = prompt(`Please enter your age:`);
// age = Number(age);

// if(age >= 18){
//     console.log(`Hi ${firstName}, you are ${age} years old and you are eligible to vote.`);
// }else{
//     console.log(`Hi ${firstName}, you are below 18 years and you are not eligible to vote.`);
// }


// // Even or Odd Number Identifier ------------------------------

// let numb = prompt(`Please enter a number to check if it's an odd or even number`);
// numb = Number(numb);

// if(numb % 2 === 0){
//     console.log(`You entered ${numb}, and it's an even number.`)
// }else{
//     console.log(`You entered ${numb}, and it's an odd number.`)
// }


// // Vowel or Consonant Classifier --------------------------------

// let alphabet = prompt(`Please enter an alphabet to confirm if it's a consonant or a vowel sound:`);
// alphabet = alphabet.toLowerCase();
// if(alphabet === `a` || alphabet === `e` || alphabet === `i` || alphabet === `o` || alphabet === `u`){
//     console.log(`You entered ${alphabet}, and it's a vowel sound.`);
// }else{
//     console.log(`You entered ${alphabet}, and it's a consonant sound.`);
// }



// // Largest Number Finder --------------------------------------------

// let numb1 = prompt(`Please enter your first number`);
// let numb2 = prompt(`Please enetr your second number`);
// numb1 = Number(numb1);
// numb2 = Number(numb2);

// if(numb1 > numb2){
//     console.log(`You entered two numbers and your first number ${numb1} is greater than your second number ${numb2}.`);
// }else{
//     console.log(`You entered two numbers and your second number ${numb2} is greater than your first number ${numb1}.`);
// }


// // Simple Calculator ------------------------------------------------

// let firstNumber = prompt(`Please enter your first number:`);
// let operand = prompt(`Please enter an arithmetic operator +, -, * or /:`);
// let secondNumber = prompt(`Please enter your second number:`);
// firstNumber = Number(firstNumber);
// secondNumber = Number(secondNumber);

// if(operand === `+`){
//     console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`)
// }else if(operand === `-`){
//     console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`)
// }else if(operand === `*`){
//     console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`)
// }else if(operand === `/`){
//     console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`)
// }else{
//     console.log(`Please enter a valid number or operation.`)
// }



// // Day of the Week Printer -------------------------------------------------

// let dayNumber = prompt(`Please enter a number between 1 and 7 to know the name of the day of the week:`);
// dayNumber = Number(dayNumber);

// switch(dayNumber){
//     case 1: console.log(`You entered ${dayNumber} and it's Monday`)
//     break;

//     case 2: console.log(`You entered ${dayNumber} and it's Tuesday`)
//     break;

//     case 3: console.log(`You entered ${dayNumber} and it's Wednesday`)
//     break;

//     case 4: console.log(`You entered ${dayNumber} and it's Thursday`)
//     break;

//     case 5: console.log(`You entered ${dayNumber} and it's Friday`)
//     break;

//     case 6: console.log(`You entered ${dayNumber} and it's Saturday`)
//     break;

//     case 7: console.log(`You entered ${dayNumber} and it's Sunday`)
//     break;

//     default: console.log(`Please enter a valid number between 1 and 7.`)
// }



// // Grade Evaluator ---------------------------------------------------------
// let score = prompt(`Please enter your score:`);
// score = Number(score);

// switch(true){
//     case(score>= 70 && score <= 100): console.log(`You scored ${score} and you have an A`)
//     break;

//     case(score>= 60 && score < 70): console.log(`You scored ${score} and you have a B`)
//     break;

//     case(score>= 50 && score < 60): console.log(`You scored ${score} and you have a C`)
//     break;

//     case(score>= 45 && score < 50): console.log(`You scored ${score} and you have a D`)
//     break;

//     case(score>= 40 && score < 45): console.log(`You scored ${score} and you have an E`)
//     break;

//     case(score>= 0 && score < 40): console.log(`You scored ${score} and you have an F`)
//     break;

//     default: console.log(`Please enter a valid score`);
// }



// // Rock-Paper-Scissors Game ---------------------------------------------


// let computerPick = Math.floor(Math.random() * 3);
// let you = prompt(`Please pick between Rock, Paper or scissors`);

// switch(computerPick){
//     case 0: computerPick = `rock`
//     break;

//     case 1: computerPick = `paper`
//     break;

//     case 2: computerPick = `scissors`

// }

// switch(true){
//     case(computerPick == `rock` && you ==  `scissors`): console.log(`Computer choosed ${computerPick}, and you choosed ${you}, Computer Wins!!!`)
//     break;

//     case(computerPick === `scissors` && you ===  `paper`): console.log(`Computer choosed ${computerPick}, and you choosed ${you}, Computer Wins!!!`)
//     break;

//     case(computerPick === `paper` && you ===  `rock`): console.log(`Computer choosed ${computerPick}, and you choosed ${you}, Computer Wins!!!`)
//     break;

//     case(computerPick === `rock` && you ===  `rock` || computerPick === `paper` && you ===  `paper` || computerPick === `scissors` && you ===  `scissors`): console.log(`Computer choosed ${computerPick}, and you choosed ${you}, it's a Tie!!!`)
//     break;

//     case(you === `rock` && computerPick ===  `scissors`): console.log(`Computer choosed ${computerPick}, and you choosed ${you}, you Win!!!`)
//     break;

//     case(you === `scissors` && computerPick ===  `paper`): console.log(`Computer choosed ${computerPick}, and you choosed ${you}, you Win!!!`)
//     break;

//     case(you === `paper` && computerPick ===  `rock`): console.log(`Computer choosed ${computerPick}, and you choosed ${you}, you Win!!!`)
//     break;

//     default: console.log(`Invalid input, please try again`)

// }





// // Month Name Displayer ------------------------------------------------

// let monthNumber = prompt(`Please enter a number between 1 and 12 to know the name of the Month:`);
// monthNumber = Number(monthNumber);

// switch(monthNumber){
//     case 1: console.log(`You entered ${monthNumber} and it's January`)
//     break;

//     case 2: console.log(`You entered ${monthNumber} and it's February`)
//     break;

//     case 3: console.log(`You entered ${monthNumber} and it's March`)
//     break;

//     case 4: console.log(`You entered ${monthNumber} and it's April`)
//     break;

//     case 5: console.log(`You entered ${monthNumber} and it's May`)
//     break;

//     case 6: console.log(`You entered ${monthNumber} and it's June`)
//     break;

//     case 7: console.log(`You entered ${monthNumber} and it's July`)
//     break;

//     case 8: console.log(`You entered ${monthNumber} and it's August`)
//     break;

//     case 9: console.log(`You entered ${monthNumber} and it's September`)
//     break;

//     case 10: console.log(`You entered ${monthNumber} and it's October`)
//     break;

//     case 11: console.log(`You entered ${monthNumber} and it's November`)
//     break;

//     case 12: console.log(`You entered ${monthNumber} and it's December`)
//     break;

//     default: console.log(`Please enter a valid number between 1 and 12.`)
// }



// // Simple Menu ------------------------------------------------------

// let menu;

// console.log("Menu:");
// console.log("Option 1: Coconut Rice and Moi Moi");
// console.log("Option 2: Fried Rice and Dodo");
// console.log("Option 3: Plantain and Beans Pottage");
// console.log("Option 4: Yam and Egg Sauce");

// menu = prompt(`Please pick an option between 1 and 4`);
// menu = Number(menu);

// switch(menu){
//     case 1: console.log(`You picked Option 1: Coconut Rice and Moi Moi, it will be ready in 20 minutes.`)
//     break;

//     case 2: console.log(`You picked Option 2: Fried Rice and Dodo, it will be ready in 25 minutes.`)
//     break;

//     case 3: console.log(`You picked Option 3: Plantain and Beans Pottage, it will be ready in 40 minutes.`)
//     break;

//     case 4: console.log(`You picked Option 4: Yam and Egg Sauce, it will be ready in 10 minutes.`)
//     break;

//     default: console.log(`Please pick a valid option between 1 and 4.`)

// }



// // Number Summation ---------------------------------------------------

// let sum = 0;

// for (let i = 1; i <= 20; i++) {
//     console.log(i);
//     sum += i;
// }
// console.log(`The sum of all numbers from 1 to 20 is: ${sum}`);



// // Countdown Timer -----------------------------------------------------

// for(let i = 20; i >= 1; i--){
//     console.log(i);
// }



// // Multiplication Table Generator ----------------------------------------

// for(i = 1; i <= 12; i++){
//     console.log(`Multiplication Table for ${i}:`)

//     for(j = 1; j <= 12; j++){
//         let result = `${i} X ${j} = ${i * j}`;
//         console.log(result);
//     }
// }


// // Array Element Printer --------------------------------------------------

// let myArray = [`John`, `James`, `Anthony`, `Evans`, `Joseph`, `Esmi`];

// for(i = 0; i <= myArray.length; i++){
//     console.log(myArray[i])
// }


// // String Repeater ----------------------------------------------------

// let myString = `Evans`;

// for(i=1; i <= 10; i++){
//     console.log(myString);
// }



// // Greeter Function -----------------------------------------------------

// function greetings(name){
//     let myMessage = `Hi ${name}, you are welcome. Please let us konw how we can assist you today.`

//     return myMessage;
// }

// console.log(greetings(prompt(`What is your name?`)));




// // Area Calculator ----------------------------------------------

// function areaOfRectangle(lenght, width){
//     let result = ` the area of this Rectangle = ${lenght * width}`

//     return result
// }
// area = areaOfRectangle(prompt(`Enter lenght of Rectangle`), prompt(`Enter width of Rectangle`));

// console.log(area);




// // Palindrome Checker -------------------------------------------

// const word = prompt(`Please enter a word to check if it is a Palindrome:`);

// function palindrome(check){
//     const wordCheck = check.toLowerCase();

//     return wordCheck === wordCheck.split(``).reverse().join(``);
// }

// let reversedWord = palindrome(word)

// console.log(`is "${word}" a palindrome? ${reversedWord ? `Yes` : `No`}`);




// // Number Reverser -------------------------------------------------------

// const theNumber = prompt(`Please enter a number you want to reverse:`);

// function numbReverse(numb){
//     return numb.split(``).reverse().join(``);

// }

// console.log(numbReverse(theNumber));




// // Simple Sorting Function -------------------------------------------------

// let numberArray = [1, 3, 9, 15, 100, 5, 7, 0, 35, 17, 2, 32];

// function ascending(a, b){
//     return a - b;
// }

// function descending(a, b){
//     return b - a;
// }

// let ascendingOrder = numberArray.slice().sort(ascending);
// console.log(`These are the numbers in Ascending order: ${ascendingOrder}`);

// let descendingOrder = numberArray.slice().sort(descending);
// console.log(`And these are the numbers in Descending order: ${descendingOrder}`);



// Number Adder -------------------------------------------------

// function adder(numb1, numb2){
    
//     let sum = Number(numb1) + Number(numb2);
    
//     return sum
// }

// console.log(adder(prompt(`Enter first number`), prompt(`Enter second Number`)));





// // Word Length Checker ----------------------------------------------


// function wordLength(myWord){

//     return myWord.length;
// }

// let word = prompt(`Please enter a word:`)

// let wordCount = wordLength(word);

// console.log(`the word you entered is ${word}, and the legth is ${wordCount}`);





// // Age Difference Calculator --------------------------------------------

// function ageCalculator(user1BirthYear, user2BirthYear){

//     const currentYear = new Date().getFullYear();

//     const user1Age = currentYear - user1BirthYear;
//     const user2Age = currentYear - user2BirthYear;

//     const ageDifference = Math.abs(user1Age - user2Age);

//     return ageDifference;

// }

// let user1BirthYear  = prompt(`User 1 Please enter your birth year:`);
// let user2BirthYear  = prompt(`User 2 Please enter your birth year:`);

// let difference = ageCalculator(user1BirthYear, user2BirthYear);

// console.log(` User 1 birth year is ${user1BirthYear}, user 2 birth year is ${user2BirthYear}, and the age difference is ${difference} years`);



// // Temperature Converter ----------------------------------------------

// function temperatureConverter(celcius){

//     return (celcius * 9/5) + 32;
// }

// let temperature = prompt(`Please enter Temperature in Celcius:`);

// let fahrenheit = temperatureConverter(temperature);

// console.log(`${temperature} degree Celcius is equal to ${fahrenheit} degree Fahrenheit.`)





// // Currency Converter --------------------------------------------------

// let exchangeRate = 1250

// function currencyConverter(naira){
//     return (naira * exchangeRate);
// }

// let amount = prompt(`Please enter the amount of Dollar  you wish to convert to Naira:`)
// let converted = currencyConverter(amount);

// console.log(`Using the current exchage rate, ${amount} Dollar is equivilent to ${converted} Naira`);



// // Array Element Doubler ---------------------------------------------

// const elementDoubler = newArray => newArray.map(element => element * 2)


// let newArray = [1, 3, 9, 15, 100, 5, 7, 0, 35, 17, 2, 32];
// let doubledArray = elementDoubler(newArray);

// console.log(`the original Array is: ${newArray}`);
// console.log(`the doubled Array is ${doubledArray}`);




// // String Concatenation ----------------------------------------------------

// const stringConcat = (firstName, lastName) => fullName = firstName.concat(` `, lastName);

// let newString = stringConcat(prompt(`Enter First Name:`), prompt(`Enter Last Name:`));

// console.log(newString);



// // Even Number Filter -------------------------------------------------

// const evenArray = givenArray => givenArray.filter(element => element % 2 === 0);

// let newNumber = [2, 3, 6, 7, 10, 13, 15, 14, 18, 21, 24];

// let sortedArray = evenArray(newNumber);

// console.log(`The filtered Array is: ${sortedArray}`);





// // Word Splitter -----------------------------------------------------------

// const wordSplit = word => word.split(``);


// let newWord = prompt(`Please enter a word`);

// let splitedWord = wordSplit(newWord);
// console.log(`this is the splited word: ${splitedWord}`);




// // Number Multiplier -----------------------------------------------------

// const numbMultiplier = givenFactor => givenFactor * aNumber;

// let aNumber = 10;
// let givenFactor = prompt(`please enter a number you wish to multiply by ${aNumber}`);

// let multiplied = numbMultiplier(givenFactor);
// console.log(`The number you entered is ${givenFactor}, and when multiplied by ${aNumber} it is equal to ${multiplied}`)





// // Person Object ----------------------------------------------------

// let person = {
//     name: `Esmi Jason`,
//     age: 26,
//     occupation: `Student`
// };




// // Book Object ----------------------------------------------------

// let book = {
//     title: `Fantasy Island`,
//     author: `John Miles`,
//     genre: `Adventure`
// };



// // Animal Object ---------------------------------------------------------

// let animal = {
//     name: `Bottlenose Dolphin`,
//     species:`Tursiops truncatus`,
//     age: 20
// }



// // Product Object -----------------------------------------------------

// let product = {
//     name: `Macbook Pro`,
//     price: 1500,
//     description : {
//         color: `black`,
//         year: 2021,
//         processor: `M1 Chip`,
//         os: `macOS Sonoma`
//     }
// }



// // Address Object ----------------------------------------------

// let address = {
//     Street: `Ladipo Omotesho Cole`,
//     city: `Lagos`,
//     state: `Lagos`,
//     zipCode: 120445
// }



// // Number Sorter ----------------------------------------------------

// let newNumber = [2, 3, 6, 7, 10, 13, 15, 14, 18, 21, 24];


// let ascendingOrder = newNumber.slice().sort((a, b) => a - b);

// console.log("These are the numbers in ascending order:", ascendingOrder);





// // Word Finder -----------------------------------------------------

// const wordFinder = (theArray, word) => theArray.includes(word);
// const arrayToLowerCase = arr => arr.map(element => element.toLowerCase());

// let newArray = [`John`, `Gold`, `Wealth`, `Big`, `Throw` ];
// newArray = arrayToLowerCase(newArray);

// let newWord = prompt(`Please enter a word to check`);
// newWord = newWord.toLowerCase();

// let check = wordFinder(newArray, newWord);

// let result = check ? `The word you entered is ${newWord} and it exist in our array` : `The word you entered is ${newWord} and it does not exist in our array`;

// console.log(result);





// // Largest Number Finder --------------------------------------------

// const finder = arr => Math.max(...arr);

// let newNumber = [2, 3, 6, 7, 10, 13, 15, 14, 18, 21, 24];

// let result = finder(newNumber);

// console.log(`The largest number in the array is: ${result}`);





// // Duplicate Remover ---------------------------------------------

// const duplicate = arr => [...new Set(arr)];

// let newNumber = [2, 3, 6, 7, 10, 13, 15, 14, 18, 21, 24, 13, 7, 6, 2];
// let newArray = duplicate(newNumber);

// console.log(`The original array is: ${newNumber}`);
// console.log(`Array without duplicate is: ${newArray}`);




// // Array Reverser ------------------------------------------------

// const reverser = arr => arr.slice().reverse();

// let newNumber = [2, 3, 6, 7, 10, 13, 15, 14, 18, 21, 24];
// let reversedArray = reverser(newNumber);

// console.log(`This is the original array: ${newNumber}`);
// console.log(`This is the reversed array: ${reversedArray}`);





// // Guessing Game -----------------------------------------------


// let allowedGuess = 6;
// let originalNumber = 3;
// let guessCount = 6;

// while(guessCount > 0){
//     let userGuess = prompt(`Guess a number between 1 and 6: Number of guess left ${guessCount}`);

//     userGuess = Number(userGuess);

//         if(userGuess === originalNumber){
//             console.log(`You guessed ${userGuess}, and it's correct. Congratulations!!!`);

//             alert(`You guessed ${userGuess}, and it's correct. Congratulations!!!`);

//             break
//         }else if(guessCount <= 1){
//             console.log(`Game Over!!!`);

//             alert(`Game Over!!!`);

//             break
//         }else {
//             alert(`You guessed ${userGuess}, and it's wrong. Please try again`)
//         }
        
//     guessCount--
// }




// // Password Validator ---------------------------------------------

// let password = prompt(`Enter password:`);
// let password2;
// let attempt = 4;

// while(attempt > 0){

//     password2 = prompt(`Enter password again to confirm: You have ${attempt} left`);

//     if(password === password2){
//         console.log(`Login successful!!!`)
//         alert(`Login successful!!!`)

//         break
//     }else if(attempt <= 1){
//         console.log(`You have exceeded the number of attempts allowed, please try again in 24hours.`);
//         alert(`You have exceeded the number of attempts allowed, please try again in 24hours.`);

//         break
//     }else{
//         alert(`Your password dose not match, please try again`)
//     }

//     attempt--
// }





// // Number Counter -------------------------------------------

// let countNumber = 1;
// let givenNumber = prompt(`Enter a number you wish to count to`);

// while(countNumber >= 1 && countNumber <= givenNumber){
//     console.log(countNumber);
//     countNumber++
// }




// // Number Factor Finder ---------------------------------------------

// function factorFinder(fact){
//     let factors = [];
//     let i = 1;

//     while(i <= fact){
//         if(fact % i === 0){
//             factors.push(i);
//         }
//         i++
//     }

//     return factors
// }

// let number = prompt(`Enter a number to find all its factors:`);
// number = Number(number);

// let result = factorFinder(number);

// console.log(`The factors of ${number} are: ${result}`)




// // Simple Number Guessing Game --------------------------------------


// let allowedGuess = 6;
// let originalNumber = Math.floor(Math.random() * 10) + 1;
// let guessCount = 6;

// while(guessCount > 0){
//     let userGuess = prompt(`Guess a number between 1 and 6: Number of guess left ${guessCount}`);

//     userGuess = Number(userGuess);

//         if(userGuess === originalNumber){
//             console.log(`You guessed ${userGuess}, and it's correct. Congratulations!!!`);

//             alert(`You guessed ${userGuess}, and it's correct. Congratulations!!!`);

//             break
//         }else if(guessCount <= 1){
//             console.log(`Game Over!!!`);

//             alert(`Game Over!!!`);

//             break
//         }else {
//             alert(`You guessed ${userGuess}, and it's wrong. Please try again`)
//         }
        
//     guessCount--
// }




// // Random Number Generator -------------------------------------

// let randomNumber = Math.random();

// console.log(randomNumber);




// // Quadratic Equation Solver ---------------------------------------
// let root1;
// let root2;

// let a = prompt(`Enter the value of a:`);
// a = Number(a);
// let b = prompt(`Enter the value of b:`);
// b = Number(b);
// let c = prompt(`Enter the value of c:`);
// c = Number(c);

// let square = Math.sqrt(b ** 2 - (4 * a * c));
// let denominator = 2 * a;

// root1 = (-b + square)/denominator;
// root2 = (-b - square)/denominator;

// console.log(`The roots of the quadratic equation are ${root1} or ${root2}`);



// // Distance Calculator ------------------------------------------

// const calculator = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

// let point1 = {};
// let point2 = {};

// point1.x = prompt(`Please enter the value of "X" in point 1:`);
// point1.x = Number(point1.x);
// point1.y = prompt(`Please enter the value of "Y" in point 1:`);
// point1.y = Number(point1.y);
// point2.x = prompt(`Please enter the value of "X" in point 2:`);
// point2.x = Number(point2.x);
// point2.y = prompt(`Please enter the value of "Y" in point 2:`);
// point2.y = Number(point2.y);


// let result = calculator(point1.x, point1.y, point2.x, point2.y);

// console.log(`The distance between Point 1 and Point 2 is: ${result}`);





// // Trigonometric Calculator ---------------------------------------

// const convertToRadian = angleDegree => angleDegree * (Math.PI/180);

// function trigCalculator(angle){

//     let radians = convertToRadian(angle);
//     let sine = Math.sin(radians).toFixed(4);
//     let cosine = Math.cos(radians).toFixed(4);
//     let tangent = Math.tan(radians).toFixed(4);

//     console.log(`for the Angle of ${angle} degrees:`);
//     console.log(`Sine = ${sine}`);
//     console.log(`Cosine = ${cosine}`);
//     console.log(`Tangent = ${tangent}`);
// }

// let degree = prompt(`Please enter the Angle Degree:`);
// trigCalculator(degree);


// Finance Calculator -----------------------------------------

// // Simple Interest -----------------------------------------------

// const simpleInterest = (principal, rate, time) => (principal * rate * time)/100;


// let p = prompt(`Enter Principal:`);
// p = Number(p);
// let r = prompt(`Enter Rate:`);
// r = Number(r);
// let t = prompt(`Enter Time:`);
// t = Number(t);

// let result = simpleInterest(p,r,t);

// console.log(`Simple Interest = ${result}`);




// // Compound Interest ---------------------------------------

// const compoundInterest = (principalAmount, annualInterest, numberOfTimes, time) => principalAmount * Math.pow((1 + annualInterest / numberOfTimes), numberOfTimes * time)

// let p = prompt(`Enter Principal Amount:`);
// p = Number(p);
// let r = prompt(`Enter Annual Interest Rate:`);
// r = Number(r/100);
// let n = prompt(`Enter number of times that interest is compounded per year:`);
// n = Number(n);
// let t = prompt(`Enter time the money is invested/borrowed for (years):`);
// t = Number(t);

// let a = compoundInterest(p, r, n, t);

// let cI = a - p;
// console.log(a)
// console.log(`Compound Interest = ${cI.toFixed(2)}`);



// // Loan Payment ---------------------------------------

// const loanPayment = (principleAmount, monthlyInterest, numberOfPayment, time) => p * (r/n) / (1 - Math.pow((1 + r / n), -(n * t)));


// let p = prompt(`Enter Principal Amount:`);
// p = Number(p);
// let r = prompt(`Enter Monthly Interest Rate:`);
// r = Number(r/100);
// let n = prompt(`Enter number of times that interest is compounded per year:`);
// n = Number(n);
// let t = prompt(`Enter time the money is invested/borrowed for (years):`);
// t = Number(t);

// let mP = loanPayment(p, r, n, t);

// console.log(`The monthly loan payment = ${mP}`);






// const shoppingListArray = []

// let addItems = true;

// while(addItems === true){
//     let shoppingItems = window.prompt("Enter your shopping Items : TYPE IN DONE WHEN YOU ARE DONE");

//     if(shoppingItems.toUpperCase() ===`DONE`){
//         addItems = false;
//     }else{
//         shoppingListArray.push(shoppingItems);
//     }
   
// }

// console.log(`Hello, you entered ${shoppingListArray.length} items, and Here is your shopping list : ${shoppingListArray}`);







// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// for(let numb of number){

//     console.log(`Multiplication Table for ${numb}:`)
//     for(let newNumb of number){
//         let result = numb * newNumb;

//         console.log(`${numb} * ${newNumb} = ${result}`);
//     }
// }




// const studentArray = [
//     {
//       name: "Alice Johnson", registrationNumber: 875432, dateOfBirth: "1996-02-17", score: 85,
//     },
//     {
//       name: "Bob Smith", registrationNumber: 239876, dateOfBirth: "1998-06-08", score: 72,
//     },
//     {
//       name: "Charlie Williams", registrationNumber: 564321, dateOfBirth: "1995-11-04", score: 40,
//     },
//     {
//         name: "David Davis", registrationNumber: 987654, dateOfBirth: "1997-02-22", score: 87,
//       },
//       {
//         name: "Emma Martinez", registrationNumber: 123987, dateOfBirth: "1994-08-10", score: 76,
//       },
//       {
//         name: "Frank Anderson", registrationNumber: 456789, dateOfBirth: "1999-01-19", score: 69,
//       },
//       {
//         name: "Grace Thompson", registrationNumber: 876543, dateOfBirth: "1995-05-09", score: 92,
//       },
//       {
//         name: "Henry Brown", registrationNumber: 345678, dateOfBirth: "1996-05-12", score: 77,
//       },
//       {
//         name: "Isabella Wilson", registrationNumber: 210987, dateOfBirth: "1994-12-08", score: 75,
//       },
//       {
//         name: "Jack Miller", registrationNumber: 654321, dateOfBirth: "1997-07-03", score: 54,
//       },
//       {
//         name: "Olivia Taylor", registrationNumber: 109876, dateOfBirth: "1998-04-30", score: 81,
//       },
//       {
//         name: "Liam Jackson", registrationNumber: 543210, dateOfBirth: "1995-10-15", score: 79,
//       },
//       {
//         name: "Sophia Harris", registrationNumber: 876123, dateOfBirth: "1999-02-08", score: 68,
//       },
//       {
//         name: "Noah White", registrationNumber: 321098, dateOfBirth: "1994-07-26", score: 57,
//       },
//       {
//         name: "Ava Johnson", registrationNumber: 987123, dateOfBirth: "1996-11-14", score: 66,
//       },
//       {
//         name: "Oliver Robinson", registrationNumber: 456012, dateOfBirth: "1998-03-07", score: 80,
//       },
//       {
//         name: "Amelia Thomas", registrationNumber: 765432, dateOfBirth: "1995-10-03", score: 78,
//       },
//       {
//         name: "Ethan Lee", registrationNumber: 234567, dateOfBirth: "1997-04-18", score: 90,
//       },
//       {
//         name: "Mia Walker", registrationNumber: 890123, dateOfBirth: "1994-08-25", score: 49,
//       },
//       {
//         name: "Aiden Wright", registrationNumber: 678901, dateOfBirth: "1999-06-02", score: 55,
//       },
//   ];


//   let sortedList = studentArray.filter(function(studentScore){

//         return studentScore.score >= 75;
//   });

//   console.log(`These are the students whose score are greater than 75:`);
//   sortedList.forEach(function(students){
//     console.log(`Name: ${students.name}`);
//     console.log(`Reg. Number: ${students.registrationNumber}`);
//     console.log(`Score: ${students.score}`);
//   });