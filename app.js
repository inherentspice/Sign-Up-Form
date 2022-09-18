const form = document.querySelector('#sign-up-form');
console.log(form);
form.addEventListener('submit', e => {
  const password = document.querySelector('#set_password');
  const confirmPassword = document.querySelector('#confirm_password');
  const passwordWarning = document.querySelector('#password-match');
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    passwordWarning.classList.add('mismatch')
  } else if (password.value.length < 7) {
    e.preventDefault();
    passwordWarning.classList.add('mismatch')
  }
})
