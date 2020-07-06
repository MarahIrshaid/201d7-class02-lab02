'use strict'
var userName = prompt("Hi, What is your name?");
alert("Hello!    " + userName + " \b\b\b  Welcome to my lifeStory!   ");


var myBirthCity;

while (myBirthCity !== "yes") {
    myBirthCity = prompt("Do you think I was born in Zarqa?");
    myBirthCity.toLowerCase();

    if (myBirthCity === "yes") {
        alert("That's right! bravo , I was born in Zarqa")
        //console.log("My birth city is Zarqa")
    } else if (myBirthCity === "no") {
        alert("Sorry! that is a wrong answer ")
        // console.log("Try again!")
    }
    else {
        alert("not acceptable answer")
        // console.log("not true") }
    }


}

var tall;
while (tall !== "no") {
    tall = prompt("how much tall do you think I am, 160? ");
    tall.toLowerCase();

    if (tall === "no") {
        alert("That's right! bravo , I'm 174 cm tall");
        //console.log("I'm 174 cm tall");
    } else if (tall === "yes") {
        alert("Sorry! that is a wrong answer ");
        //console.log("Try again!");
    }
    else {
        alert("not acceptable answer")
        //console.log("not true")
    }
}

var favMeal;
while (favMeal !== "yes") {
    favMeal = prompt("Is Mansaf my favorate meal??");
    favMeal.toLowerCase();

    if (favMeal === "yes") {
        alert("That's right! bravo , it's Mansaf");
        // console.log("My favorate meal is Mansaf");
    } else if (favMeal === "no") {
        alert("Sorry! that is a wrong answer ");
        // console.log("Try again!");
    } else {
        alert("not acceptable answer")
        //console.log("not true")

    }
}

var favColor;
while (favColor !== "yes") {
    favColor = prompt("is pink my favorate color?");
    favColor.toLowerCase();

    if (favColor === "yes") {
        alert("That's right! bravo , its pink!");
        //console.log("My favorite color is pink");
    } else if (favColor === "no") {
        alert("Sorry! that is a wrong answer ");
        // console.log("Try again!")
    } else {
        alert("not acceptable answer")
        //console.log("not true")
    }

}
var brothers;
while (brothers !== "no") {
    brothers = prompt("do i have any brothers?");
    brothers.toLowerCase();

    if (brothers === "no") {
        alert("That's right! bravo , I have no brothers at all");
        //console.log("I have no brothers");
    } else if (brothers === "yes") {
        alert("Sorry! that is a wrong answer ");
        //console.log("Try again!");
    }
    else {
        alert("not acceptable answer")
        //console.log("not true")
    }
}


alert("Thanks " + userName + " for answering questions about me! , now read a full bio in this page.");





