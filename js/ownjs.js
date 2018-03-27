const $hideButton = document.getElementById('hide-modals')
const $modal = document.getElementById('modals')
const $overlay = document.getElementById('overlay')

$hideButton.addEventListener('click', (event) => {
	$modal.style.animation = 'modalOuts .8s forwards'
	$overlay.classList.remove('active');
});