	window.addEventListener('DOMContentLoaded', function()	{
		let gamburger = document.querySelector('.gamburger');
		let menu = document.querySelector('.menu');
		console.log(gamburger);
			gamburger.addEventListener('click', function()	{
				gamburger.classList.toggle('active');
				menu.classList.toggle('active');
			})

	})
