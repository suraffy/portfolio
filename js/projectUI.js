import projectsList from './ProjectsList.js';

const projectsSection = document.querySelector('#projects');
const projectsCont = document.querySelector('.projects-container');
const filterItems = document.querySelectorAll('.filter-item');
const paginationList = document.querySelector('.pagination');

const projectImgPath = 'img/project_img';
let filteredProjects = projectsList;
let paginatedProjects = [];
const pageSize = 3;
let pageNumberCount = 0;
let currentPageNumber = 1;

class ProjectUI {
  static displayProjects() {
    if (paginatedProjects.length) {
      ProjectUI.removeProjects();

      for (let project of paginatedProjects)
        ProjectUI.addProjectToList(project);

      paginatedProjects.length = 0;
      return;
    }

    if (filteredProjects.length > 3) {
      for (let i = 0; i < 3; i++) {
        ProjectUI.addProjectToList(filteredProjects[i]);
      }

      ProjectUI.addPagination();
      paginationList.children[0].classList.add('active');
      return;
    }

    for (let project of filteredProjects) ProjectUI.addProjectToList(project);
  }

  static addPagination() {
    paginationList.textContent = '';

    const projectCount = filteredProjects.length;
    const pages = Math.ceil(projectCount / 3);
    pageNumberCount = pages;

    for (let i = 1; i <= pages; i++) {
      const pageItems = document.createElement('li');
      pageItems.classList.add('page-item');
      pageItems.setAttribute('data-page-number', i);
      pageItems.textContent = i;

      paginationList.append(pageItems);
    }
  }

  static removePagination() {
    paginationList.textContent = '';
  }

  static addProjectToList(project) {
    if (!project) return;
    projectsCont.insertAdjacentHTML(
      'beforeend',
      `
    <div class="project-box flex-row">
      <div class="project-profile-img row">
        <img src="${projectImgPath}/${project.img}">
      </div>

      <div class="project-details flex-column">
        <h2 class="project-title">${project.title}</h2>
        <span class="project-type">${project.type}</span>
        <p class="project-description">${project.desc}</p>
        <div class="project-links flex-row">
          <a href="" target="_blank" class="btn">Live Preview</a>
          <a href="" target="_blank">Source Code</a>
        </div>
      </div>
    </div>`
    );
  }

  static removeProjects() {
    projectsCont.textContent = '';
  }

  static filterProjects(e) {
    if (!e.target.classList.contains('filter-item')) return;

    const filterEl = e.target;

    let filterValue = filterEl.dataset.filterItem.toLowerCase();

    filteredProjects = projectsList.filter((p) => p.type === filterValue);
    if (filterValue === 'all') filteredProjects = projectsList;

    filterEl.classList.add('clicked-filter-item');

    for (let filterItem of filterItems) {
      if (filterItem === filterEl) continue;
      filterItem.classList.remove('clicked-filter-item');
    }

    ProjectUI.removePagination();
    ProjectUI.removeProjects();
    ProjectUI.displayProjects();
  }

  static navigatePagination(e) {
    if (!e.target.classList.contains('page-item')) return;

    const paginateEl = e.target;

    currentPageNumber = Number(paginateEl.dataset.pageNumber);

    for (let i = 0; i < pageNumberCount; i++) {
      if (currentPageNumber === i + 1) {
        paginatedProjects = filteredProjects.slice(
          i * pageSize,
          i * pageSize + pageSize
        );

        ProjectUI.displayProjects();

        paginateEl.classList.add('active');
        continue;
      }

      paginationList.children[i].classList.remove('active');
    }
  }
}

export default ProjectUI;
