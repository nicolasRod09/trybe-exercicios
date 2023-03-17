const getSubmitBtn = document.getElementById('submit-btn');
const getAgreement = document.getElementById('agreement');
const changeDefault = (event) => {
  event.preventDefault();
};
getSubmitBtn.addEventListener('click', changeDefault);

const disableButton = () => {
  getSubmitBtn.disabled = false;
};

getAgreement.addEventListener('change', disableButton);
