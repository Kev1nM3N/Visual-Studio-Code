// template_57i7q9q
// service_jrkdgnb
// zB9fmdo_XchCWnTVO (public key or user id)

let contrastToggle = false
const scaleFactor = 1 / 20;

function moveBackground(event){
  const shapes = document.querySelectorAll(`.shape`)
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++){
    const isOdd = i % 2 !== 0;
    const booleanInt = isOdd ? -1 : 1
    shapes[i].style.transform = `translate(${x * booleanInt}px, ${y * booleanInt}px)`
  }
}

function toggleContrast(){
  contrastToggle = !contrastToggle
  if (contrastToggle){
    document.body.classList += " dark-theme"
  }
  else{
    document.body.classList.remove("dark-theme")
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(`.modal__overlay--loading`);
  const success = document.querySelector(`.modal__overlay--success`);
  loading.classList += ` modal__overlay--visible`;

  emailjs
    .sendForm(
      `service_jrkdgnb`,
      `template_57i7q9q`,
      event.target,
      `zB9fmdo_XchCWnTVO`
    )
    .then(() => {
      loading.classList.remove(`modal__overlay--visible`);
      success.classList += ` modal__overlay--visible`;
      console.log(`It worked! Yaay!`);
    })
    .catch(() => {
      loading.classList.remove(`modal__overlay--visible`);
      alert(
        `The email service is temporaily unavailable. Please contact me at mendez.kevin44@yahoo.com`
      );
    });
}

let isModalOpen = false

function toggleModal(){
  if (isModalOpen){
    isModalOpen = false;
    return document.body.classList.remove(`modal--open`);
  }
  isModalOpen = true
  document.body.classList += ` modal--open`;
}
