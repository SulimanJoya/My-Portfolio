const fName = document.getElementById('fullName');
const Message = document.getElementById('comment');
const Email = document.getElementById('email');

function getFormData() {
  const formData = {
    fullName: fName.value,
    comments: Message.value,
    emailAddress: Email.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

function persistData() {
  if (!localStorage.getItem('formData')) {
    getFormData();
  } else {
    const fetchData = JSON.parse(localStorage.getItem('formData'));
    fName.setAttribute('value', fetchData.fullName);
    Message.textContent = fetchData.comments;
    Email.setAttribute('value', fetchData.emailAddress);
  }
}

window.onload = () => {
  persistData();
};

fName.addEventListener('change', getFormData);
Message.addEventListener('change', getFormData);
Email.addEventListener('change', getFormData);
