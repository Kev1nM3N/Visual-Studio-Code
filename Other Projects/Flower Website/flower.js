console.log('hello world');

const menuToggle = document.querySelector(`.fa-bars`)
const showcase = document.getElementById(`showcase`)
const closeMenu = document.querySelector(`.fa-xmark`)
const clockTime = document.getElementById(`timeClock`)

const dt = new Date();
clockTime.innerHTML = dt.toLocaleDateString()


menuToggle.addEventListener(`click`, () => {
    menuToggle.classList.toggle(`active`)
    showcase.classList.toggle(`active`)
})

closeMenu.addEventListener(`click`, () => {
    closeMenu.classList.toggle(`active`)
    showcase.classList.toggle(`active`)
    menuToggle.classList.remove(`active`) // hide the toggle button when the menu is active
})