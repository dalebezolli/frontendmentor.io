function toggleNavigation() {
	const siteNav = document.querySelector('#site-nav');
	siteNav.setAttribute('data-open', siteNav.getAttribute('data-open') !== 'true');
}

function toggleDropdown(event) {
	event.target.setAttribute('data-open', event.target.getAttribute('data-open') !== 'true');
}