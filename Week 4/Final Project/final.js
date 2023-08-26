const movieElement = document.querySelector(`.movies`)
const searchInput = document.getElementById(`showcase__searchbar`)

// https://www.omdbapi.com/?apikey=ae3e12f8&s=

async function main (filter){
    const movies = await fetch (`https://www.omdbapi.com/?apikey=ae3e12f8&s=top`);
    const moviesData = await movies.json();
    
    if (filter === `New_to_Old`){
        moviesData.Search.sort((a, b) => (b.Year) - (a.Year))
    }
    else if (filter === `Old_to_New`){
        moviesData.Search.sort((a, b) => (a.Year) - (b.Year))
    }


    movieElement.innerHTML = moviesData.Search.map((element) => moviesHTML(element)).join(``);


}

main()


function moviesHTML (element) {
    return `<div class="movie">
                <figure class="movie__wrapper--img">
                    <img class="movie__img" src="${element.Poster}" alt="">
                </figure>
                <h2 class="movie__title">${element.Title}</h2>
                <h3 class="movie__release-date">${element.Year}</h3>
            </div>`
}

function filterMovies (event){
    main(event.target.value)
}

function movieSearch (event){
    const searchText = searchInput.value
    localStorage.setItem(`apple`, searchText)

    movieSearchSubmit(searchText)

}

async function movieSearchSubmit(newFilter) {
    // window.location.href = `${window.location.origin}/Week%204/Final%20Project/searchfinal.html`
    const id = localStorage.getItem(`apple`)

    const searchMovies = await fetch (`https://www.omdbapi.com/?apikey=ae3e12f8&s=${id}`);
    const searchMoviesResult = await searchMovies.json();


    movieElement.innerHTML = searchMoviesResult.Search.map((element) => moviesHTML(element)).join(``);

    console.log(searchMoviesResult)
}