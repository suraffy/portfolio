import projectsList from './ProjectsList.js';

const projectsSection = document.querySelector('#projects');
const projectsCont = document.querySelector('.projects-container');
const filterItems = document.querySelectorAll('.filter-item');
const filteredResultsInfo = document.querySelector('.filtered-results');
const paginationList = document.querySelector('.pagination');

const projectImgPath = 'img/project_img';
let currentPageNumber = 1;
let filteredProjects = [];

class ProjectUI {
  static displayProjects() {
    for (let i = 0; i < 3; i++) ProjectUI.addProjectToList(projectsList[i]);

    if (projectsList.length > 3) {
      ProjectUI.addPagination();
    }
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

  static filter(e) {
    if (!e.target.classList.contains('filter-item')) return;

    const filterEl = e.target;
    filterEl.classList.toggle('clicked-filter-item');

    let filterValue = filterEl.dataset.filterItem;
    filteredProjects = [];

    if (!filterEl.classList.contains('clicked-filter-item')) {
      filterValue = undefined;
      ProjectUI.hideFilteredResultsInfo();
    }

    for (let filterItem of filterItems) {
      if (filterItem === filterEl) continue;
      filterItem.classList.remove('clicked-filter-item');
    }

    ProjectUI.removeProjects();
    ProjectUI.removePagination();

    projectsList.forEach((project) => {
      if (
        !filterValue ||
        filterValue.toLowerCase() === 'all' ||
        filterValue.toLowerCase() === project.type.toLowerCase()
      ) {
        if (filteredProjects.length < 3) ProjectUI.addProjectToList(project);
        filteredProjects.push(project);
      }
    });

    const filteredResults = filteredProjects.length;
    if (filteredResults > 3) ProjectUI.addPagination(filteredResults);

    if (filterValue)
      ProjectUI.showFilteredResultsInfo(filterValue, filteredResults);
  }

  static showFilteredResultsInfo(filterValue, filteredResults) {
    filteredResultsInfo.textContent = `${filterValue} Projects, ${filteredResults} results`;
    filteredResultsInfo.style.display = 'block';
  }

  static hideFilteredResultsInfo() {
    filteredResultsInfo.style.display = 'none';
  }

  static addPagination(filteredResults) {
    const projectCount = filteredResults
      ? filteredResults
      : projectsList.length;
    const pages = Math.ceil(projectCount / 3);

    for (let i = 1; i <= pages; i++) {
      const pageItems = document.createElement('li');
      pageItems.classList.add('page-item');
      pageItems.textContent = i;

      paginationList.append(pageItems);
    }

    paginationList.insertAdjacentHTML(
      'afterbegin',
      `<li class="page-item">Prev</li>`
    );
    paginationList.insertAdjacentHTML(
      'beforeend',
      `<li class="page-item">Next</li>`
    );

    paginationList.children[1].classList.add('active');
    paginationList.firstElementChild.classList.add('disabled');
  }

  static removePagination() {
    paginationList.textContent = '';
  }

  static navigatePagination(e) {
    if (!e.target.classList.contains('page-item')) return;

    if (filteredProjects.length === 0) {
      filteredProjects = projectsList;
    }

    const pages = Math.ceil(filteredProjects.length / 3);
    let pageNumber = +e.target.textContent
      ? +e.target.textContent
      : e.target.textContent;

    if (pageNumber === 'Prev') {
      if (currentPageNumber === 1) return;
      pageNumber = currentPageNumber - 1;
      currentPageNumber = pageNumber;
    } else if (pageNumber === 'Next') {
      if (currentPageNumber === pages) return;
      pageNumber = currentPageNumber + 1;
      currentPageNumber = pageNumber;
    }

    currentPageNumber = pageNumber;
    for (let page of paginationList.children) {
      if (pageNumber === +page.textContent) {
        page.classList.add('active');
        continue;
      }
      page.classList.remove('active');
      page.classList.remove('disabled');
    }

    if (currentPageNumber === 1) {
      paginationList.firstElementChild.classList.add('disabled');
    }

    if (currentPageNumber === pages) {
      paginationList.lastElementChild.classList.add('disabled');
    }

    ProjectUI.removeProjects();

    for (let i = pageNumber * 3 - 3; i < pageNumber * 3; i++) {
      if (filteredProjects[i]) ProjectUI.addProjectToList(filteredProjects[i]);
    }

    projectsSection.scrollIntoView(true);
  }
}

export default ProjectUI;
