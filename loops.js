// // var fruits = ["apple", "blueberries", "oranges", "bananas", "grapes"];
// // console.log(fruits);


// // // print all of the fruits on new lines


// // // lets do a loop
// // for( var i = 0; i < fruits.length; i++) {
// //     console.log(fruits[i]);
// // }

// // // structure of a for loop
// // /*
// // for( var i = 0; i < fruits.length; i++) {
// //     console.log(fruits[i]);
// // }

// // what does this actually mean!

// // there are four things to consider

// // first:
// // what is getting looped though?  i.e what's actually changing? 
// // in this case tha answer is var i
// // so what's happening to var i
// // so i is increasing from 0 to the length of the list of fruits
// // specifcally it is increasing by 1

// // the three things a for loop needs: 
// // 1. initial condition
// //     you need a variable and a starting point for that variable
// //     *this is the variable that we are going to be changing in the loop
// //     in this case: var i = 0
// //     so we are going to be changing i and it will start at 0

// // 2. end condition
// //     when can the computer stop? 
// //     the answer can be never
// //     or immediately 
// //     or anything in between
// //     in this case we stop when i >= fruits.length   or in other terms   we loop while the value of i is less than fruits.length 

// // 3. increment operation
// //     this is what the loop changes in order to get us closer to our end condition 
// //     in this case, we add 1 to i
// //     we can do literally anything 
// //     because computers are dumb 

// // for( initial condition; end condition; increment operation )
// // {

// //     code to run at every increment with the new value of our loop variable
// // }




// // how a for loop works
// // for( var k = 1; k < 3; k++) {

// // }

// // what will happen
// // 1. k gets created and set equal to 1
// // 2. we check the end condition to see if it is true or false
// //     in this case,   we check IS K LESS THAN 3
// //     if that's true then:
// //         we run the code in the loop
// //         then we perform the increment operation 
// //         now k = 2
// //         then we ceck the end condition to see if it is true or false
// //         IS K < 3    is 2 < 3?   yes:
// //             run the code in the loop
// //             incremement 
// //             k = 3
// //             IS K < 3?    is 3 < 3?    False
// //             stop looping



// //     */

// // //syntax!!!!
// // /*
// // num = 7
// // num = num + 1
// // // what's the new value of num? 8

// // num = 7
// // num++
// // // what's the new value of num? 8

// // num = 7
// // num += 1
// // // what's the new value of num? 8

// // num = 7
// // num += 10
// // // what's the new value of num? 17

// // also works for 
// // num--
// // num -= 1
// // num -= 10

// // num *= 10 // 70     same as num = num * 10
// // num /= 10 // 0.7

// // */


// // // for( var i = 0; i < fruits.length; i += 0 ) {
// // //     console.log(i);
// // // }

// // // for(var i = 0; i > fruits.length; i+= 1) {
// // //     console.log(i)
// // // }

// // // for (var i = 0; i < fruits.length; i += 100) {
// // //     console.log(i)
// // // }

// // for (var i = 5000; i > 1000; i -= 1000 ) {
// //     console.log("My bank account after buying another iphone")
// // }


// // console.log('done!')



// // /* 
// // I want you to give me the first 500 items in the 7 times table

// // i.e I want you to print
// // 7
// // 14
// // 21
// // ....
// // */

// // // almost!   
// // // the for loop will just increment "i" from one value to another to another, until you reach an end condition
// // for (var i = 0; i<501; i+=7) {
// //     console.log (i)
// //     // you have an infinite amount of space to write code here!
// //     // nobody said that console.log is the only thing you can do here O_O
// //     // you can perform logic in here that get's run every loop
// //     // think of fruit[i]
// //     // # print me everything in the list in order 
// //     // # all on separate lines
// //     // print(fruits[0])
// //     // print(fruits[1])

// //     // the above is equivalent to doing something...

// // }


// // // now do it again a different way
// // for( var i = 0; i <= 500; i++ ) {
// //     console.log(i*7);
// // }


// // /*
// //     print the number that is 2 less than every multiple of 5 up to 280
// //     ex:
// //         3
// //         8
// //         13
// //         ...

// // */

// // for(var i = 1; i <= 56; i++) {
// // console.log((i*5)-2)
// // }

// // // i = 1
// // // is 1 <= 280
// // // yes
// // // print( 1 * 5 - 2 )
// // // i++     i = 2
// // // is 2 <= 280
// // // yes
// // // print( 2 * 5 - 2)
// // // i++     3
// // // ...
// // // i = 280
// // // is 280 <= 280
// // // yes
// // // print( 280 * 5 - 2 )   /// this is a really big number! 

// // // i is going to increment by 1 until the end of the loop
// // // k is going to be the value that we print and check against 
// // // for ( var i = 1, k = 1; k < 280; i++, k = 5*i-2) {
// // //     console.log(k)   
// // // }

// // function disgustingIncrement( number, limit ) {
// //     if(k*5-2 < limit) {
// //         console.log(k*5-2)
// //         console.log("number is ", number)

// //         return 1;
// //     }

// //     return 0;
// // }

// // for( var i = 1, k = 1; (i == 1 && k > 0); i = disgustingIncrement(k, 280), k++) {
// //     console.log("lol this is gross")
// // }

// // // 










// // /* what's the point of writing that piece of art */
// // // javascript is a shit language 

// // /*
// // Actual conclusion: 
// //     you can define and increment multiple variables in a loop, you are NOT restricted to one
// //     this is really useful if you are iterating over complex datasets

// //     in that example above, we are defining two variable when we initilaize the loop, i and k   both are being set to 1 in this case, they dont have to be set to the same variable!
// //     what else are we doing?
// //     we have a loop condiction that relies on both variables. in this case, i has to be equal to 1 and k has to be greater than 0 for the loop to run it's code
// //     the condiction can be anything     EVEN IF IT DOESN'T INVOLE I OR K
// //     lastly
// //     for our "increment" we are not restricted to addition, subtraction, multiplication, or really naything     WE CAN RUN ANY FUNCITON WE WANT THERE EVERY ITERATION 
// //     in this case, we are running a function every time the loop iterates

// //     */  


// //     // for ( /* initialize */ ; /* are we allowed to run the code */ ; /* run this after running the code */ ) {
// //     //     // the code
// //     // }

// //     // initialize
// //     // are we allowed? 
// //     // if yes, run the code
// //     // do your increment
// //     // are we allowed?
// //     // no
// //     // end the loop





// //     //. can you tell me how a loop works

// //     for ( var chocolate = "hello"; chocolate.includes("e"); chocolate = chocolate.slice(0, -1)) {
// //         console.log(chocolate)
// //     }

// //     // what's going on here
// //     // chocolate = "hello"
// //     // does chocolate contain the letter "e"? 
// //     // print(chocolate) // hello
// //     // chocolate = chocolate.slice(0, -1)    // this means chocolate = all of the letters of chocolate from index 0 to index -1     index -1 is shorthand for the last letter
// //     // effectively
// //     // chocolate = hell

// //     // does hell contain the letter e? 
// //     // print(hell)
// //     // chocolate = hel
// //     // does hel contain e
// //     // print hel
// //     // chocolate = he
// //     // does he contain e
// //     // print he
// //     // chocolate = h
// //     // does h contain e? 
// //     //no
// //     //stop



// //     // write a loop that prints your name one letter at a time
// //     // quick example
// //     for( var mike = "mike"; mike.length < 100; mike += "e") {
// //         console.log(mike)
// //     }

// //     // print your name once, then twice, then three times, up until you have 200 characters of your name
// //     // output
// //     // sabrina
// //     // sabrinasabrina
// //     // sabrinasabrinasabrina ...

// //     for(var sabrina = "sabrina"; sabrina.length <= 200; sabrina+= "sabrina") {
// //         console.log (sabrina)
// //         console.log(sabrina.length)
// //     }


// // variable = sabrina
// // return sabrina + sabrina
// // = sabrinasabrina
// function moreSabrina( variable ) {
//     return variable + "sabrina"
// }

// console.log(moreSabrina("glasses"))

//                                                             // itarator = sabrinasabrina
// for ( var iterator = "sabrina"; iterator.length <= 200; iterator = moreSabrina(iterator)) {
//     console.log(iterator);
// }

// /*
//     okay so interator is sabrina, the length of sabrina has to be less than or equal to 200 in order for it to run
// */

// // dont run this it will infinite loop
// // for ( var iterator = "sabrina"; iterator.length <= 200; moreSabrina(iterator)) {
// //     console.log(iterator);
// // }



// for (var a = 0, b = 5; a < 10 && b < 25; a++, b++) {
//     console.log(a, "    ", b);
// }




// // print through the 9 times tables and the 10 times tables at the same time up until the 18th element of the table   
// // 9   10
// // 18  20
// // .....
// // 9*18   180


// // 9* 1      10*1
// // 9*2       10*2
// // 
// //  9*18      10*18
// // console.log( value, "    ", value)
// for (var i = 1; i<=18; i++)
// console.log (i*9 + "    " + i*10)






videoGames = [
    [ "Mincraft", "calming,creative"],
    [ "Call Of Duty", "violent,fun,dark" ],
    [ "Fortnite", "fun,creative,multiplayer" ],
];

console.log(videoGames)

// lets get creative with our for loops and if statements
user_recommendations = [];

// let's build up our user recommendations
// up first we get their preferences
preference = "violent";

for( var i = 0; i < videoGames.length; i++) {
    videoGameData = videoGames[i];
    // console.log("video game data = " + videoGameData)
    // we know the format of our data is
    // [ NAME, ATTRIBUTES ]
    // what we want to do is say:
    // the games attributes match the user's preference we:    add it to the recommendations! 
    // DATA.includes(VALUE)    Returns true if DATA contains the string VALUE

    // example
    // var foods = "fish,chips,plumbs"
    // foods.includes("fish")      is TRUE
    // foods.includes("pizza")     is  FALSE

    // videoGameData = [ "Call Of Duty", "violent,fun,dark" ]
    // videoGameData[0] = "Call of Duty"
    // videoGameData[1] = "violent,fun,dark"

    if( videoGameData[1].includes(preference) ) {
        user_recommendations += videoGameData[0] + ", ";
    }
}

// console.log("user recommendations = ", user_recommendations);





function getAttributes(gameData) {
    return gameData[1].split(",")
}

function getName(gameData) {
    return gameData[0]
}

videoGames = [
    [ "Mincraft", "calming,creative"],
    [ "Call Of Duty", "violent,fun,dark" ],
    [ "Fortnite", "fun,creative,multiplayer" ],
];

preferences = ["violent", "fun"];
user_recommendations = []
for( var i = 0; i < videoGames.length; i++ ){
    videoGameData = videoGames[i];
    gameAttributes = getAttributes(videoGameData);
    gameName = getName(videoGameData);

    for(var k = 0; k < preferences.length; k++) {
        if(gameAttributes.includes(preferences[k])) {
            user_recommendations += gameName + ", "
            break
        }
    }
}

console.log(user_recommendations)