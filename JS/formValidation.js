const form = document.getElementById('formContainer');
const email = document.getElementById('email');
const error = document.getElementById('error-msg');

form.addEventListener('submit',  (e) => {
  if (email.value !== email.value.toLowerCase()) {
    error.textContent = '* Please write your email in lower case.';
    e.preventDefault();
  } else {
    form.submit();
  }
});
