async function main(blank){
    const response = await fetch (`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json()
    const info = data.filter(element => element.userId === blank)
    console.log(info)
}

main(4)