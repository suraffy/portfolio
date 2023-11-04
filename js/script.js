import skillUI from './skillUI.js';
import ProjectUI from './projectUI.js';

const filterList = document.querySelector('.filter-list');
const paginationList = document.querySelector('.pagination');

// document.addEventListener('DOMContentLoaded', skillUI.displaySkills);
// document.addEventListener('DOMContentLoaded', ProjectUI.displayProjects);

skillUI.displaySkills();
ProjectUI.displayProjects();

paginationList.addEventListener('click', ProjectUI.navigatePagination);
filterList.addEventListener('click', ProjectUI.filterProjects);
