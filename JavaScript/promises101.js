// const emailRef = document.querySelector(`.email`); //We select which element to use in HTML

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {                  //We fetch the data, use the .then to ask for data, call it response
//     return response.json();              //This entire thing is now response.json()
//   })
//   .then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.email
//   });

// async function main(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")     //await automatically returns the response for us.
//     const data = await response.json()       //Right now, its gibberish data. To make frontend understand this, we add .json()
//     console.log(data);
//     emailRef.innerHTML = data.email;
// }

// main()

