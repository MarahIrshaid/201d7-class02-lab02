'use strict'
var userName = prompt("Hi, What is your name?");
alert("Hello!    " + userName + "       Welcome to my lifeStory!   ");




// 1st question:
var correctAns = 0;
while (myBirthCity !== "yes" && myBirthCity !== "no") {
    var myBirthCity = prompt("Do you think I was born in Zarqa?")
    myBirthCity = myBirthCity.toLowerCase();

    console.log('Do you think I was born in Zarqa?'+ myBirthCity);

    switch (myBirthCity) {
        case 'yes':
            alert("That's right! bravo , I was born in Zarqa")
            //console.log('correct answer')
            correctAns = correctAns + 1;
            break;

        case 'no':
            alert("Sorry! that is a wrong answer ")
            // Console.log("Try again!")
            break;
        default: 
            alert("Sorry! not acceptable answer ")
    }
}

// 2nd question:

while (favColor !== "yes" && favColor !== "no") {
    var favColor = prompt("Do you think pink is Marah's favorate color?")
    favColor = favColor.toLowerCase();

    console.log("Do you think pink is Marah's favorate color?" + favColor);

    switch (favColor) {
        case 'yes':
            alert("That's right! bravo , my favorate color is pink")
            //console.log('correct answer')
            correctAns = correctAns + 1;
            break;

        case 'no':
            alert("Sorry! that is a wrong answer ")
            // Console.log("Try again!")
            break;
         default: 
            alert("Sorry! not acceptable answer  ")
    }
}


// 3rd question:
while (brothers !== "yes" && brothers !== "no") {
    var brothers = prompt("Do i have brothers?")
    brothers = brothers.toLowerCase();

    console.log("Do i have brothers?" + brothers);

    switch (brothers) {
        case 'no':
            alert("That's right! bravo ,i have no brothers at all!")
            //console.log('correct answer')
            correctAns = correctAns + 1;
            break;

        case 'yes':
            alert("Sorry! that is a wrong answer ")
            // Console.log("Try again!")
            break;
        default: 
            alert("Sorry! not acceptable answer  ")
    }
}



// fourth question:

while (favMeal !== "yes" && favMeal !== "no") {
    var favMeal = prompt("is Mansaf my favorate meal ?")
    favMeal = favMeal.toLowerCase();

    console.log("is Mansaf my favorate meal ?" +favMeal);

    switch (favMeal) {
        case 'no':
            alert("That's right! bravo ,i don't like mansaf!")
            //console.log('correct answer')
            correctAns = correctAns + 1;
            break;

        case 'yes':
            alert("Sorry! that is a wrong answer ")
            // Console.log("Try again!")
            break;
        default: 
            alert("Sorry! not acceptable answer  ")
    }
}

// fifth question :
while (tall !== "yes" && tall !== "no") {
    var tall = prompt("Am I 160 cm tall  ?")
    tall = tall.toLowerCase();

    console.log("Am I 160 cm tall  ?" + tall);

    switch (tall) {
        case 'no':
            alert("That's right! bravo ,I'm 174 cm tall!")
            //console.log('correct answer')
            correctAns = correctAns + 1;
            break;

        case 'yes':
            alert("Sorry! that is a wrong answer ")
            // Console.log("Try again!")
            break;
        default: 
            alert("Sorry! not acceptable answer ")
    }
}



// this is lab03
// 6th question:

for (var counter = 0; counter <= 3; counter++) {
    var number = prompt('How much time does Marah spend on practicing programming everyday? choose from 1-10 hours ')

    console.log('How much time does Marah spend on practicing programming everyday? choose from 1-10 hours '+ number)
    if (number >= 1 && number <= 5) {

        alert('Too low!');
        console.log(' too low')
    }
    else if (number == 6) {

        alert('correct!');
        correctAns = correctAns + 1;
        console.log('correct')
        break;

    }

    else if (number > 6 && number <= 10) {
        alert('too high!');
        console.log('too high')

    }
    else {
        alert('out of range!')
        console.log('out of range')

    }
    console.log('got here ' + counter)
    if (counter === 3) {
        alert('the correct answer is 6');
        console.log('the correct answer is 6')
    }
}


// 7th question:
var userAnswer;
var trueAnswer = ["black", "pink"];
userAnswer = prompt('What colors Marah likes the most ?')
console.log('What colors Marah likes the most ?' + userAnswer)
for (var counter = 0; counter < 5; counter++) {
    if (userAnswer === trueAnswer[0] || userAnswer === trueAnswer[1]) {
        alert('correct');
        console.log("correct");
        correctAns = correctAns + 1;
        break;

    }
    else if (userAnswer !== trueAnswer[0] || userAnswer !== trueAnswer[1]) {
        alert('wrong!')
        console.log("wrong answer!")
        userAnswer = prompt('What colors Marah likes the most ?')
    }

}
alert('the correct answers are : pink and black!')
alert('You got\b\b\b' + correctAns + '\b\b\banswers correct! Bravo.')


alert('Thanks ' + userName + ' for answering questions about me! , now read a full bio in this page.');





