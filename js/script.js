import { SkillsUI } from './skillsUI.js';
import { ProjectUI } from './projectUI.js';

const filterList = document.querySelector('.filter-list');
const paginationList = document.querySelector('.pagination');

document.addEventListener('DOMContentLoaded', SkillsUI.displaySkills);
document.addEventListener('DOMContentLoaded', ProjectUI.displayProjects);
paginationList.addEventListener('click', ProjectUI.navigatePagination);
filterList.addEventListener('click', ProjectUI.filter);
