"use strict";

const generateAdvice = async () => {
	const adviceTitle = document.getElementById('advice-title');
	const adviceBody = document.getElementById('advice-body');

	const advice = await (await fetch('https://api.adviceslip.com/advice')).json();

	adviceTitle.textContent = `Advice #${ advice.slip.id }`;
	adviceBody.textContent = `"${advice.slip.advice}"`;
}

generateAdvice();