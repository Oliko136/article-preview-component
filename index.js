const toggleButton = document.getElementById('toggle-btn');
const toastEl = document.getElementById('toast');

toggleButton.addEventListener('click', toggleToast);

function toggleToast() {
    toastEl.classList.toggle('is-hidden');
}
