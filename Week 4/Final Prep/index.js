// // API 1: "https://jsonplaceholder.typicode.com/users"
// // API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

const userElement = document.querySelector('.user-list');

async function main(params) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    userElement.innerHTML = data.map((element) => userHTML(element)).join('');
}

main()

function showUserPosts (id){
    localStorage.setItem("pear", id);
    window.location.href = `${window.location.origin}/Week%204/Final%20Prep/user.html`
    console.log(id);
}

function userHTML(element) {
    return `<div class="user-card" onclick="showUserPosts(${element.id})">
                <div class="user-card__container">
                <h3>${element.name}</h4>
                    <p><b>Email:</b> ${element.email}</p>
                    <p><b>Phone:</b> ${element.phone}</p>
                    <p><b>Website:</b> <a href="https://${element.website}" target="_blank">${element.website}</a></p>
                </div>
            </div>`
}

