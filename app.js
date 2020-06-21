
// String Methods
// Task 1
// var firstName = prompt("Whats your first name ?");
// var lastName = prompt("whats your last name ?");
// var fullName = firstName + " " + lastName;
// alert("welcome " + fullName);

// Task 2
// var favPhone = prompt("whats your fav phone ?");
// var phoneLength = favPhone.length;
// document.write("my fav phone is: " + favPhone + "<br/>");
// document.write("string length: ", phoneLength);

// Task 3
// var country = "Pakistani";
// var indexNum = country.indexOf("n");
// document.write(indexNum);

// Task 4
// var greeting = "Hello World";
// var indexNum = greeting.lastIndexOf("l");
// document.write(indexNum);

// Task 5
// var text = "Pakistani";
// var indexNum = text.indexOf("i");
// document.write(indexNum);

// Task 6
// var beverage = [ "ice-cream " , " juice "];
// var fastFood = [ " burger " , " zinger"];
// var food = beverage.concat(fastFood);
// document.write(food);

// Task 7
// var hyderabad = "hyderabad";
// var exchange = hyderabad.replace("hyder", "islam")
// document.write("city ", hyderabad, "<br />");
// document.write("after replacement ", exchange);

// Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace(/and/g, "&");
// document.write(message, "<br />");
// document.write("after replacing and: ", replace);

// Task 9
// var str = "479";
// document.write("value ", str, "<br/>");
// document.write("type ", typeof(str), "<br/>");
// var number = 479;
// document.write("value ", number, "<br/>");
// document.write("type ", typeof(number), "<br/>");

// Task 10
// var userInput = prompt("Enter your text");
// userInput = userInput.toUpperCase();
// document.write(userInput);

// Task 11
// var input = prompt("Enter anything");
// var index = input[0].toUpperCase();
// var replace = input.replace(input[0], index);
// document.write(replace);

// Task 12
// var num = 35.36;
// var toString = num.toString();
// var removeDot = toString.split(".").join("");
// document.write(removeDot);

// Task 13
// var input = prompt("enter username");
// if(input.includes("!") || input.includes("@") || input.includes(".") || input.includes(",")){
//   alert("please enter a valid username")
// }

// Task 14
// var array = ["cake", "apple pie", "cookie", "chips", "patties"];
// var bakery = prompt("Enter your bakery items");
// bakery = bakery.toLowerCase();
// var bakeryItems = array.indexOf(bakery);
// if (array.indexOf(bakery) != -1){
//     alert( bakery + " is available at index " + bakeryItems + " in our bakery");
// } else {
//     alert( bakery + " is not available in our bakery");
// }

// Task 15
//  var userPassword= prompt("Enter your Password");

// function checkPassword(Pass)
//   {
//     var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
//     var result = re.test(Pass);
//     if(result === true){
//         alert("password is correct");
//     }
//     else{
//       alert("password is incorrect");
//     }
//   }
//  checkPassword(userPassword);

// Task 16
// var university = "University of Karachi";
// var toArray = university.split("");
// for (var i=0; i<toArray.length; i ++){
//   document.write(toArray[i] + "<br/>");
// }

// Task 17
// var input = prompt("");
// var lastChar = input.substr(input.length - 1);
// document.write(input, "<br/>")
// document.write(lastChar);

// Task 18
// var str = ("The quick brown fox jumps over the lazy dog").toLowerCase();
// var count = (str.match(/the/g)).length;
// document.write("text: " + str + "<br/>");
// document.write("there are two occurrences of word " + count)

//.......Chapter 26 to 30....
// Task 1

// var userNumber = +prompt("Enter your positive number");
// var round = Math.round(userNumber);
// var floor = Math.floor(userNumber);
// var ceil = Math.ceil(userNumber);
// if (userNumber > 0) {
//     document.write("Number "+ userNumber + "<br>" + "round of value " + round + "<br>"+ "floor value of the number "+ floor + "<br>" +"ceil value of the number "+ ceil);
// } else{
// alert("Invalid number ")

// }

// Task 2
// var userNumber = +prompt("Enter your positive number");
// var round = Math.round(userNumber);
// var floor = Math.floor(userNumber);
// var ceil = Math.ceil(userNumber);
// if (userNumber < 0) {
//     document.write("Number "+ userNumber + "<br>" + "round of value " + round + "<br>"+ "floor value of the number "+ floor + "<br>" +"ceil value of the number "+ ceil);
// } else{
// alert("Invalid number ")

// 

// Task 3
// var value = prompt("any number");
// var abs = Math.abs(value);
// document.write("the absolute value of " + value + " is " + abs);

// Task 4
// var random = Math.floor(Math.random() * 6 + 1);
// document.write("random dice value: " + random)

// Task 5
// var random = Math.floor(Math.random() * 2 + 1);
// if (random === 2){
// document.write("random coin value: Heads");
// } else if (random === 1){
// document.write("random coin value: Tails");
// }

// Task 6
// var min = 1;
// var max = 100;
// var x= Math.floor(Math.random() *(max-min+1)+min) ;
// document.write("random number between 1 and 100 = "+ x);


// Task 7
//  var weight = prompt("Enter your weight");
//  var convert = parseInt(weight);
//  document.write("The weight of user is " + convert);

// Task 8
// var secretNum = +prompt("Enter the secret number between 1 to 10");
// if (secretNum === 8) {
// alert("Congrautalion your answer is right");
// } else {
//     alert( "Try again ");
// } 

// Date Methods
// Task 1
// document.write(Date());

// Task 2
// var month = ["january", "feburary", "march", "april", "may", "june", "july", "august", "september", "october", "november" , "december"]
// var date = new Date();
// var currentMonth = date.getMonth();
// document.write(month[currentMonth]);

// Task 3
// var month = ["january", "feburary", "march", "april", "may", "june", "july", "august", "september", "october", "november" , "december"]
// var date = new Date();
// var currentMonth = date.getMonth();
// document.write(month[currentMonth].substr(0,3));

// Task 4
// var dayName = ["Sunday" , "Monday" , "Tuesday" , "wednesday" , "Thursday" , "Friday", "Saturday" ];
// var date = new Date().getDay();
// if (dayName[date] === "Sunday" ||  dayName[date] === "Saturday" ) {
//     alert("Today is FunDay")
// }else {
//     alert("Today is Working Day")
// }

// Task 5
//  var newDate = new Date();
//  if (new Date() > 16) {
//      alert("First fifteen days of the month")   
//  }else if (new Date() < 16) {
//      alert("Last days of the month")
//  }

// Task 6
// var date = new Date(1970-01-01);
// var today = new Date();
// var timeInMiliseconds = (today - date) ;
// var timeInMinutes = Math.round(timeInMiliseconds / 60 * 1000);
// document.write("current date: " + today + "<br/>");
// document.write("elapsed miliseconds since jan 1,1970: " + timeInMiliseconds + "<br/>");
// document.write("elapsed minutes since jan 1,1970: " + timeInMinutes + "<br/>");

// Task 7
// var hours = new Date().getHours();
// if (hours > 12){
//   document.write("Its PM");
// } else {
//   document.write("Its AM");
// }


// Task 8
// var myDate = new Date("Dec 31 , 2020" );
// var laterDate = myDate ;
// document.write(laterDate);


// Task 9
// var date1 = new Date("Jun 18, 2015"); 
// var date2 = new Date("Jun 19, 2020")
  
// To calculate the time difference of two dates 
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// // To calculate the no. of days between two dates 
// var Difference_In_Days = Difference_In_Time / (1000 *60 * 60 * 24); 
  
// //To display the final no. of days (result) 
// document.write("Total number of days passed " + Difference_In_Days); 

// Task 10
// var date1 = new Date("Jan 1, 2015"); 
// var date2 = new Date("Dec 5, 2015");
  
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
 
// var Difference_In_Days = Difference_In_Time / (1000 *60); 
 
// document.write("Total number of days passed " + Difference_In_Days); 

// Task 11
// let hourAgo = new Date('2020-06-17T19:43:00');
// let now = new Date('2020-06-17T20:43:00');
// document.write("now: " + now + "<br/>");
// document.write("1 hour ago: " + hourAgo);

// Task 12
// let hundredYearAgo = new Date('1920-06-17T19:43:00');
// let now = new Date('2020-06-17T20:43:00');
// document.write("now: " + now + "<br/>");
// document.write("100 years ago: " + hundredYearAgo);

// Task 13
// var year = new Date().getFullYear();
// var age = prompt("enter your age");
// var minus = year - age;
// alert("your birth year is: " + minus);

// Task 14
// var customerName = prompt("Enter your name");
// var customerMonth = prompt("billing month");
// var numberUnits = +prompt("Total units");
// var ChargesPerUnit = +prompt("Charges per unit");
// var latePayment = 400 ;
// var netAmount = numberUnits * ChargesPerUnit;
// var grossAmount = netAmount + latePayment;
// document.write("Payable with in due date :" + netAmount + "<br>" );
// document.write("Payable after due date :" + grossAmount );

// Task 1
// function date () {
//   document.write(new Date());
// }
// date();

// Task 2
//var firstName = prompt("firstName");
//var lastName = prompt("lastName");
// function greet(firstName, lastName){
//   document.write("Welcome " + firstName+ " " + lastName);
// }
// greet(firstName, lastName);

// Task 3
// var num1 = prompt("enter number");
// var num2 = prompt("enter number 2");
// function add(num1, num2){
//   document.write(Number(num1) + Number(num2))
// }
// add(num1, num2);

// Task 4
// function calculator(num1 , operator , num2) {
 
//  if ( operator === "+") {
//      return num1 + num2
//  }  else  if ( operator === "-") {
//     return num1 - num2
// } else  if ( operator === "/") {
//     return num1 / num2
// } else  if ( operator === "%") {
//     return (num1 % num2)*100
// } 
// else if ( operator === "*") {
//     return num1 * num2
// }else {
//   return "Incorrect operator"
// }
// }
// var result1 = calculator(+prompt("Enter your value"),prompt("Enter your operator"),+prompt("Enter your value"));
// document.write(result1); 

// Task 5
// function squareIt( a ) {
//     return a * a 
// }
// document.write( "Square value :" + squareIt( +prompt("eter your value") ));

// Task 6
// var input = +prompt("Enter number");
// var result = 1; 
// function fact(number) {         
//     for (i=number; i>=1; i--)
//     {
//         result = result *i; 
//     }
//     return result;
// }
//     var final =fact(input);
//     document.write( final);
// Task 7
// var start = prompt("start");
// var end = prompt("end");
// function count(start, end){
//   for (var i=start; i <= end; i ++){
//     document.write(i + "<br/>")
//   }
// }
// count(start, end);
// Task 8
// var b = prompt("base");
// var p = prompt("perp");
//
// function geometry(b, perp){
//   var base = b * b;
//   var perpendicular = perp * perp;
//
//   var hyp = Number(base) + Number(perpendicular);
//   square(hyp);
//   function square(hyp){
//     document.write(hyp * hyp);
//   }
//
// }
// geometry(b, p)

// Task 9
// var width = 25;
// function area(width, height){
//   document.write("area " + width * height);
// }
// area(width, 5)

// Task 10
// var word = prompt("word");
// function palindrome(word){
//   if (word[0] === word[word.length - 1]){
//     document.write("it is a palindrome word");
//   } else {
//     document.write("nope its not");
//   }
// }
// palindrome(word);

// Task 11
// function titleCase(str) {
//    var splitStr = str.toLowerCase().split(' ');
//    for (var i = 0; i < splitStr.length; i++) {
//        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//    }
//    return splitStr.join(' ');
// }
//
// document.write(titleCase('the quick brown fox'));

// Task 12

// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     document.write(word);
// }
// longestWord("web development tutorial");

// Task 13
// function numOfChar(str, char){
//   num = str.match(char).length;
//   document.write(num)
// }
// numOfChar("hello world", /l/g);

// Task 14
// var radius = 20;
// function calcCircumference(radius){
//   circumference = 2 * 3.142 * radius;
//   document.write("circumference: " + Math.round(circumference) + "<br/>");
//   calcArea(radius);
// }
// function calcArea(radius){
//   area = 3.142 * (radius * radius);
//   document.write("area: " + area);
// }
// calcCircumference(radius)

