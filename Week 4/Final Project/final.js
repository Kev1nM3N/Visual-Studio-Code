const movieElement = document.querySelector(`.movies`)
const searchInput = document.getElementById(`showcase__searchbar`)
const changeHeading = document.querySelector(`.movies__header--title`)
const filterBox = document.getElementById(`filter`)
const mainMoviesElement = document.getElementById(`main__movies`)
const rowMovies = document.querySelector(`row__movies`)
const spinningWheel = document.querySelector(`.fa-spinner`)


// https://www.omdbapi.com/?apikey=ae3e12f8&s=

async function main (filter){
    const movies = await fetch (`https://www.omdbapi.com/?apikey=ae3e12f8&s=top`);
    const moviesData = await movies.json();
    filterBox.selectedIndex = ""
    changeHeading.innerHTML = `Trending Now`

    const filteredMovies = moviesData.Search.filter(element => /^[0-9]+$/.test(element.Year));

    if (filter === `New_to_Old`){
        filteredMovies.sort((a, b) => (b.Year) - (a.Year));
        filterBox.selectedIndex = 1;
    }
    else if (filter === `Old_to_New`){
        filteredMovies.sort((a, b) => (a.Year) - (b.Year));
        filterBox.selectedIndex = 2;
    }

    filteredMovies.length > 0
        ? movieElement.innerHTML = filteredMovies.map((element) => moviesHTML(element)).join(``)
        : movieElement.innerHTML = `<p>No results found.</p>`;
    console.log(filteredMovies)

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
        if (!searchText){
            return alert(`Please Enter a Valid Movie`)
        }
        localStorage.setItem(`apple`, searchText);
        movieSearchSubmit(searchText);
    }
}

async function movieSearchSubmit(newFilter) {
    let searchMovies
    let searchMoviesResult

    const searchText = searchInput.value;
    if (!searchText){
        return alert(`Please Enter a Valid Movie`)
    }

    localStorage.setItem(`apple`, searchText);

    const id = localStorage.getItem(`apple`)

    if (movieElement){
        movieElement.setAttribute(`style`, `display: none`)
        spinningWheel.setAttribute(`style`, `display: block !important`)
    }

    setTimeout(() => {
        spinningWheel.removeAttribute(`style`, `display: block !important`)
        movieElement.removeAttribute(`style`, `display: none`)
        changeHeading.innerHTML = `Results For: ${id}`
    }, 3000);
    
    
    searchMovies = await fetch (`https://www.omdbapi.com/?apikey=ae3e12f8&s=${id}`);
    searchMoviesResult = await searchMovies.json();

    
    if (!searchMoviesResult || !searchMoviesResult.Search) {
        movieElement.innerHTML = `<p>No results found.</p>`;
    } else {
        filterBox.selectedIndex = "";

        changeHeading.innerHTML = `Fetching...`
        const filteredMovies = searchMoviesResult.Search.filter(element => /^[0-9]+$/.test(element.Year));

        if (newFilter === `New_to_Old`){
            filteredMovies.sort((a, b) => (b.Year) - (a.Year));
            filterBox.selectedIndex = 1;
        }
        else if (newFilter === `Old_to_New`){
            filteredMovies.sort((a, b) => (a.Year) - (b.Year));
            filterBox.selectedIndex = 2;
        }
        
        filteredMovies.length > 0
            ? movieElement.innerHTML = filteredMovies.map((element) => moviesHTML(element)).join(``)
            : movieElement.innerHTML = `<p>No results found2.</p>`;
        console.log(filteredMovies);
    }
}


function filterMovies(event) {
    const searchText = searchInput.value;
    !searchText ? main(event.target.value) : movieSearchSubmit(event.target.value);
}