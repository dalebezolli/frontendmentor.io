





const validateForm = (event) => {
	event.preventDefault();
	const data = new FormData(event.target);
	
	const errorTexts = document.querySelectorAll('.error');
	const firstNameField = document.querySelector('#first-name');
	const lastNameField = document.querySelector('#last-name');
	const emailField = document.querySelector('#email');
	const passwordField = document.querySelector('#password');

	if(!data.get('first-name')) {
		firstNameField.classList.add('field-error');
		errorTexts[0].textContent = 'First Name cannot be empty';
	} else {
		firstNameField.classList.remove('field-error');
		errorTexts[0].textContent = '';
	}

	if(!data.get('last-name')) {
		lastNameField.classList.add('field-error');
		errorTexts[1].textContent = 'Last Name cannot be empty';
	} else {
		lastNameField.classList.remove('field-error');
		errorTexts[1].textContent = '';
	}

	if(!data.get('email')) {
		emailField.classList.add('field-error');
		errorTexts[2].textContent = 'Email cannot be empty';
	} else if(data.get('email').search('.*@.*\..*') === -1) {
		emailField.classList.add('field-error');
		errorTexts[2].textContent = 'Looks like this is not an email';
	} else {
		emailField.classList.remove('field-error');
		errorTexts[2].textContent = '';
	}

	if(!data.get('password')) {
		passwordField.classList.add('field-error');
		errorTexts[3].textContent = 'Password cannot be empty';
	} else {
		passwordField.classList.remove('field-error');
		errorTexts[3].textContent = '';
	}
}