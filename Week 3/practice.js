function main () {
    let store = document.querySelector(`h1`);
    store.innerHTML = store.innerHTML === 'Hello World' ? 'Kevin was here' : 'Hello World';
}

function toggleDark (){
    document.querySelector(`body`).classList.toggle(`theme`)
}