const submitRating = (event) => {
	event.preventDefault();

	const form = document.getElementById('rating-form');
	const formData = new FormData(form);
	if(!formData.has('rating-selector')) return;
	const rating = formData.get('rating-selector');
	
	const ratingDetails = document.getElementById('rating-details');
	const thankyouDetails = document.getElementById('thank-you-details');
	const ratingNumber = document.getElementById('rating-number');
	ratingNumber.textContent = rating;

	ratingDetails.classList.add('hidden');
	thankyouDetails.classList.remove('hidden');
}