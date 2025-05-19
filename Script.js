const submitBtn = document.querySelector('#submit');
const mainPage = document.querySelector('.newsletter');
const thanksPage = document.querySelector('.message');
const email = document.querySelector('#email');
const homeBtn = document.querySelector('#home');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  // Basic email validation (simple example)
  if (email.value.trim() === '' || !email.value.includes('@')) {
    alert('Please enter a valid email address');
    return;
  }

  mainPage.classList.add('hide');
  thanksPage.classList.remove('hide');
});

homeBtn.addEventListener('click', () => {
 email.value='';
  mainPage.classList.remove('hide');
  thanksPage.classList.add('hide');
});
