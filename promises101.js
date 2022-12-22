// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"));
const emailRef = document.querySelector(".email")
console.log(emailRef)

fetch("https://jsonplaceholder.typicode.com/users/1").then(response => { //inside the arguement is where we get the response from the backend server. We can name it whatever but response is best practice.
    response.json().then(data => {
        console.log(data)
        emailRef.innerHTML = data.email
    }) //to make this compatible with frontend we add json followed by parenthesis. This makes it readable.
})