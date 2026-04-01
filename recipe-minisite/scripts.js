const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const submenuButtons = document.querySelectorAll('.submenu-toggle');

if (navToggle && navMenu) {
	navToggle.addEventListener('click', function () {
		navMenu.classList.toggle('nav-open');

		const expanded = navToggle.getAttribute('aria-expanded') === 'true';
		navToggle.setAttribute('aria-expanded', !expanded);
	});
}

submenuButtons.forEach(function (button) {
	button.addEventListener('click', function () {
		if (window.innerWidth < 768) {
			const submenu = button.nextElementSibling;
			submenu.classList.toggle('open');

			const expanded = button.getAttribute('aria-expanded') === 'true';
			button.setAttribute('aria-expanded', !expanded);
		}
	});
});