const openButton = document.getElementById('open-btn');
const closeButton = document.getElementById('close-btn');
const toastEl = document.getElementById('toast');

openButton.addEventListener('click', toggleToast);
closeButton.addEventListener('click', toggleToast);

function toggleToast() {
    toastEl.classList.toggle('is-hidden');
}
