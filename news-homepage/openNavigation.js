"use strict";

const toggleNavigation = () => {
	const navigation = document.getElementById('mobile-main-navigation');

	navigation.setAttribute('data-open' ,!(navigation.getAttribute('data-open') === 'true'));
}