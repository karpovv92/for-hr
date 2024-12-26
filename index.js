const signin = document.querySelector('.signin');
const signup = document.querySelector('.signup');
const wrapper = document.querySelector('.wrapper');

signup.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signin.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});