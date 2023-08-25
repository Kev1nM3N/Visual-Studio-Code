async function main (){
    const movies = await fetch (`https://www.omdbapi.com/?apikey=ae3e12f8&s=top`);
    const moviesData = await movies.json()

    console.log(moviesData);
}

main()