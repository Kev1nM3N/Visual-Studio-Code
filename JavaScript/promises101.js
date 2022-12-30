// const emailRef = document.querySelector(`.email`); //We select which element to use in HTML

// fetch("https://jsonplaceholder.typicode.com/users/1")  (timestamp: 10:30)
//   .then((response) => {                  //We fetch the data, use the .then to collect for data, call it response
//     return response.json();              //This entire thing is now a promise/response.json()
//   })
//   .then((data) => {                      //When the whole thing is a promise, we use .then to fetch the info called data.
//     console.log(data);                   //The info was ready, David just wanted to show what it looked like.
//     emailRef.innerHTML = data.email     
//   });

// async function main(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")     //await automatically returns the response for us.
//     const data = await response.json()       //Right now, its gibberish data. To make frontend understand this, we add .json()
//     console.log(data);
//     emailRef.innerHTML = data.email;
// }

// main()













/**
 * 1. Create a function called `getVideo`
 * 2. Accept a parameter called `subscriptionStatus`
 * 3. Return a new promise inside of the function that:
 *         - if "VIP" resolve ("show video")
 *         - if "Free" resolve ("show trailer")
 *         - otherwise reject ("no video")
 * 4. console.log the result of getVideo(status) in main()
 */

// const statusRef = document.querySelector(".status")

// function getSubscriptionStatus(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("FREE")
//         }, 2000);
//     })
// }


// function getVideo(subscriptionStatus){
//     return new Promise((resolve, reject) => {
//         if (subscriptionStatus === `VIP`){
//             resolve(`show video`)
//         }

//         else if (subscriptionStatus === `FREE`){
//             resolve(`Show Trailer`)
//         }

//         else{
//             reject(`No video`)
//         }
//     })
// }

// async function main(){
//     const status = await getSubscriptionStatus()
//     statusRef.innerHTML = status;
//     console.log(await getVideo(status));
// }

// main();