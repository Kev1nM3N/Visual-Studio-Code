const postsElement = document.querySelector('.post-list')
const id = localStorage.getItem("pear")


function onSearchChange(event) {
    const id2 = event.target.value;
    main2(id2)
}

async function main2(id2) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id2 || id}`);
    const postsData = await posts.json();

    postsElement.innerHTML = postsData.map((element) => postsHTML(element)).join('');
}

main2()

function postsHTML(element) {
    return `
        <div class="post">
            <div class="post__title">
                ${element.title}
            </div>
            <p class="post__body">
                ${element.body}
            </p>
        </div>`
}