// async function main (){
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//     const data = await response.json()
//     const store = data.filter(element => !element.completed).slice(0, 6);
//     console.log(store)
// }

// main()

fetch (`https://jsonplaceholder.typicode.com/todos`)

.then ((response) => {
    return response.json()
})
.then((data) => {
    const store = data.filter(element => !element.completed).slice(0, 6)
    console.log(store);
})