var rs = require('readline-sync');

// prompt name question
// promt fav hobby
// ask if there's more hobbies
// add hobbies to list
// store list of user hobbies
// print user hobby list

var hobbies = [];
var areYouSure = false;
var moreHobbies = 0;

function getHobbyCount () {
    moreHobbies = rs.questionInt('How many other hobbies do you have? ');
}

function addHobbies (numHobbies) {
    var counter = 0;
    while(counter < numHobbies) {
       var input = rs.prompt();
       hobbies.push(input);
       counter++
   
       if (counter < numHobbies) {
           console.log('-- Awesome! "' + input + '" is cool! What\'s the other ' + (moreHobbies - counter) + '?');
    } else {
       console.log('I wish I could do ' + hobbies + '...but I\'m not even real');
     }
   }
}

var userName = rs.question('what is youe name? ');
var favHobby = rs.question(userName + ', what is your favorite hobby? ');

hobbies.push(favHobby);
 getHobbyCount();


if (moreHobbies > 0) {
    console.log('Cool, what are they?');
    addHobbies(moreHobbies);
} else {
    areYouSure = rs.keyInYN('Are you sure? ' + hobbies[0] + ' is all you like to do? ');
}

if (!areYouSure && hobbies.length <= 1) {
getHobbyCount();
console.log('Cool, what are they?');
addHobbies(moreHobbies);
} else if (areYouSure) {
    console.log(hobbies + ' is cool, good for you.'); 
}