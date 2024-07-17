// IMPORT PROJECT ------------------------------------------------------------------------------------------

import './Home.css';
import { projects as data } from '../../../data/data-projects';

// IMPORT DATA ---------------------------------------------------------------------------------------------

// IMPORT CREATE -------------------------------------------------------------------------------------------

// IMPORT FILLING SECTION ----------------------------------------------------------------------------------

// RUN PROJECT NAVIGATIONS ---------------------------------------------------------------------------------

// RUN FILLING ---------------------------------------------------------------------------------------------

// END -----------------------------------------------------------------------------------------------------

const projectTemplate = document.querySelector('#project-template').content;

function getProjectTemplate() {
	return projectTemplate.querySelector('.Project').cloneNode(true);
}

function create(data) {
	const li = document.createElement('li');
	const template = getProjectTemplate();
	const id = template.querySelector('.Project__id');
	const title = template.querySelector('.Project__title');
	const description = template.querySelector('.Project__description');
	const note = template.querySelector('.Project__note');
	const present = template.querySelector('.Project__present');

	const btnFigma = template.querySelector('.Project__btn-figma');
	const btnGit = template.querySelector('.Project__btn-git');
	const btnTask = template.querySelector('.Project__btn-task');
	const btnWiki = template.querySelector('.Project__btn-wiki');
	const btnPublic = template.querySelector('.Project__btn-public');

	li.classList.add('List__item');

	title.textContent = data.title;
	id.textContent = data.id;
	description.textContent = data.description;
	note.textContent = data.note;

	if (data.present != undefined) present.src = data.present;
	else {
		template.querySelector('.Project__present_wrapper').style.display = 'none';
	}

	settingButton(btnFigma, 'Figma', data.figma);
	settingButton(btnGit, 'GitHub', data.git);
	settingButton(btnTask, 'Task', data.task);
	settingButton(btnWiki, 'Wiki', data.wiki);
	settingButton(btnPublic, 'Publication', data.public);

	if (data.tags.length == 0) {
		template.querySelector('.Project__tags').style.display = 'none';
	} else {
		data.tags.forEach((tag) => {
			const tagItem = document.createElement('span');
			tagItem.classList.add('Project__tag');
			tagItem.textContent = tag;
			template.querySelector('.Project__tags').append(tagItem);
		});
	}
	li.append(template);

	return li;
}

function loadProjectCards(data) {
	const list = document.querySelector('.List');
	data.filter((el) => {
		return el.id != undefined && el.title != undefined;
	}).forEach((el) => {
		const project = create(el);
		list.append(project);
	});
}

function settingButton(btn, name, url) {
	btn.textContent = name;
	if (url == undefined) {
		btn.href = '#!';
		btn.classList.add('Button--disabled');
	} else {
		btn.href = url;
	}
}

loadProjectCards(data);
