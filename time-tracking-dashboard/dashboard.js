'use strict';

let timeframe = 'weekly';
let data = null;

const cards = {
	'Work': document.querySelector('.stat-card[data-type="work"]') ,
	'Play': document.querySelector('.stat-card[data-type="play"]') ,
	'Study': document.querySelector('.stat-card[data-type="study"]') ,
	'Exercise': document.querySelector('.stat-card[data-type="exercise"]') ,
	'Self Care': document.querySelector('.stat-card[data-type="self-care"]') ,
	'Social': document.querySelector('.stat-card[data-type="social"]') ,
};
const timeframeControlsList = document.getElementById('timeframe-controls-list');

const changeTimeframe = (event) => {
	const element = event.target;

	if(element.tagName !== 'BUTTON') return;
	if(element.textContent.toLowerCase() === timeframe) return;

	for(const timeframeControl of timeframeControlsList.children) {
		timeframeControl.getElementsByTagName('BUTTON')[0].setAttribute('data-selected', 'false');
	}

	element.setAttribute('data-selected', 'true');
	timeframe = element.textContent.toLowerCase();
	displayData();
}

const displayData = async () => {
	for(const cardData of data) {
		const currentStatData = cardData.timeframes[timeframe].current;
		const currentStatElement = cards[cardData.title].querySelector('.stat-card__current-stat');
		currentStatElement.textContent = currentStatData + (currentStatData === 1 ? 'hr' : 'hrs');

		const previousStatData = cardData.timeframes[timeframe].previous;
		const previousStatElement = cards[cardData.title].querySelector('.stat-card__previous-stat-value');
		previousStatElement.textContent = previousStatData + (previousStatData === 1 ? 'hr' : 'hrs');

		const previousStatLabelElement = cards[cardData.title].querySelector('.stat-card__previous-stat-label');
		switch(timeframe) {
			case 'daily': 
				previousStatLabelElement.textContent = 'Yesterday';
				break;
			case 'weekly': 
				previousStatLabelElement.textContent = 'Last Week';
				break;
			case 'monthly': 
				previousStatLabelElement.textContent = 'Last Month';
				break;
		}
	}

}

const getUserData = async (callback) => {
	data = await (await fetch('./data.json')).json();
	if(typeof callback === 'function' ) callback();
}

getUserData(displayData);