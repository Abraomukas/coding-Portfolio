const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
	//* Control buttons
	for (let index = 0; index < sectionBtn.length; index++) {
		sectionBtn[index].addEventListener('click', function () {
			let currentBtn = document.querySelectorAll('.active-btn');
			currentBtn[0].className = currentBtn[0].className.replace(
				'active-btn',
				''
			);
			this.className += ' active-btn';
		});
	}

	//* Sections
	allSections.addEventListener('click', (e) => {
		const id = e.target.dataset.id;

		if (id) {
			sectionBtns.forEach((btn) => {
				btn.classList.remove('active');
			});
			e.target.classList.add('active');

			sections.forEach((section) => {
				section.classList.remove('active');
			});

			const element = document.getElementById(id);
			element.classList.add('active');
		}
	});
}

pageTransitions();
