const movieElement = document.querySelector(`.movies`)
const searchInput = document.getElementById(`showcase__searchbar`)
const changeHeading = document.querySelector(`.movies__header--title`)
const filterBox = document.getElementById(`filter`)

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



function movieSearch (event){
    if (event.key === 'Enter') {
        const searchText = searchInput.value;
        localStorage.setItem(`apple`, searchText);

        movieSearchSubmit(searchText);
    }
}

async function movieSearchSubmit(newFilter) {
    const searchText = searchInput.value;
    localStorage.setItem(`apple`, searchText);

    const id = localStorage.getItem(`apple`)

    const searchMovies = await fetch (`https://www.omdbapi.com/?apikey=ae3e12f8&s=${id}`);
    const searchMoviesResult = await searchMovies.json();

    filterBox.selectedIndex = ""

    changeHeading.innerHTML = `Results For: ${id}`

    if (newFilter === `New_to_Old`){
        searchMoviesResult.Search.sort((a, b) => (b.Year) - (a.Year))
        filterBox.selectedIndex = 1
    }
    else if (newFilter === `Old_to_New`){
        searchMoviesResult.Search.sort((a, b) => (a.Year) - (b.Year))
        filterBox.selectedIndex = 2
    }

    searchMoviesResult.Search ? movieElement.innerHTML = searchMoviesResult.Search.map((element) => moviesHTML(element)).join(``) : movieElement.innerHTML = `<p>No results found.</p>`;
    

    console.log(searchMoviesResult)
}

function filterMovies (event){
    const searchText = searchInput.value;

    if (!searchText){
        main(event.target.value)
    }
    else {
        movieSearchSubmit(event.target.value)
    }
}