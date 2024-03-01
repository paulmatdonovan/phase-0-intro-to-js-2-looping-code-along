// // Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and an added bow!`);

//     }
//     return gifts;
// }
// console.log(wrapGifts(gifts));


writeCards = (array, eventName) => {
    let newArray = [];


    for (let i = 0; i < array.length; i++) {


        newArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);



        console.log(newArray);
        debugger;

    }
    return newArray;

}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

countDown = number => {

    let countdown = number;
    while (countdown > 0) {
        console.log(countdown--)
    }

}
// countDown(5)

