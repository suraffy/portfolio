let nav = document.querySelector('nav');
let LogoImage = document.getElementById('logo-img');
let mainNav = document.querySelector('.main-nav');
let navbarToggler = document.querySelector('.navbar-toggler');

LogoImage.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.style.padding = '4px 0px';
    nav.style.backgroundColor = '#f8f8f8';
    nav.style.boxShadow = '0 1px 2px #ccc';
    mainNav.style.top = '48px';
  } else {
    nav.style.padding = '25px 0px';
    nav.style.backgroundColor = 'transparent';
    nav.style.boxShadow = 'none';
    mainNav.style.top = '70px';
  }

  mainNav.classList.remove('show-main-nav');
});

navbarToggler.addEventListener('click', () => {
  mainNav.classList.toggle('show-main-nav');
});

mainNav.addEventListener('click', () => {
  mainNav.classList.remove('show-main-nav');
});

document.body.addEventListener('click', (event) => {
  // 320 = mainNav height + nav height
  if (event.clientY > 320) {
    mainNav.classList.remove('show-main-nav');
  }
});

// let order = 1;
// let jump = false;

// for (box of skillsBox) {
//   if (jump) {
//     order--;
//     box.style.order = order;
//     order += 2;
//     jump = false;
//     continue;
//   }

//   if (order % 2 === 0) {
//     order++;
//     jump = true;
//     box.style.order = order;
//     continue;
//   }

//   box.style.order = order;
//   order++;
// }

const filterList = document.querySelector('.filter-list');
const filterItems = document.querySelectorAll('.filter-item');
const searchProjectEl = document.querySelector('#search-project');
const searchProjectBtn = document.querySelector('.fa-search');
const allProjects = document.querySelectorAll('.project-box');
const paginationList = document.querySelector('.pagination');
const filteredProjectsInfo = document.querySelector('.filtered-projects-info');

let filterValue;
let searched = false;
let filtered = false;
let statusedProjects = [];
let projectPages;
let currPageNumber;

filterList.addEventListener('click', filterProject);
searchProjectEl.addEventListener('input', searchProject);
searchProjectBtn.addEventListener('click', searchProject);
window.addEventListener('DOMContentLoaded', pagination); // pagination();

function searchProject() {
  const searchPatt = new RegExp(searchProjectEl.value, 'i');

  let = searchResults = 0;
  for (let project of allProjects) {
    const projectName = project.dataset.projectName;

    if (
      searchPatt.test(projectName) &&
      (!filterValue || filterValue === project.dataset.projectType)
    ) {
      project.style.display = 'flex';
      project.setAttribute('data-project-status', 'searched');
      searchResults++;
    } else {
      project.style.display = 'none';
      project.removeAttribute('data-project-status');
    }
  }

  searched = true;
  filteredProjectsInfo.textContent = `${searchResults} results`;
  filteredProjectsInfo.style.visibility = 'visible';

  if (searchProjectEl.value === '') {
    searched = false;
  }
  pagination();
}

function filterProject(event) {
  if (event.target.tagName !== 'LI') return;

  let FilteredProjectsQuantity = 0;
  filteredProjectsInfo.style.visibility = 'hidden';

  const filterEl = event.target;
  filterEl.classList.toggle('clicked-filter-item');

  if (filterValue === filterEl.dataset.filterItem) {
    filterValue = undefined;
  } else {
    filterValue = filterEl.dataset.filterItem;
  }

  for (let filterItem of filterItems) {
    if (filterItem === filterEl) continue;
    filterItem.classList.remove('clicked-filter-item');
  }

  if (filterValue === 'all' || !filterValue) {
    for (let project of allProjects) {
      project.style.display = 'flex';
      project.removeAttribute('data-project-status');
    }
    filterValue = undefined;
    filtered = false;

    if (filterEl.classList.contains('clicked-filter-item')) {
      filteredProjectsInfo.textContent = `${filterEl.textContent} Projects, ${allProjects.length} results`;
      filteredProjectsInfo.style.visibility = 'visible';
    }

    pagination();
    return;
  }

  for (project of allProjects) {
    if (project.dataset.projectType === filterEl.dataset.filterItem) {
      project.style.display = 'flex';
      project.setAttribute('data-project-status', 'filtered');
      FilteredProjectsQuantity++;
    } else {
      project.style.display = 'none';
      project.removeAttribute('data-project-status');
    }
  }

  filteredProjectsInfo.textContent = `${filterEl.textContent} Projects, ${FilteredProjectsQuantity} results`;
  filteredProjectsInfo.style.visibility = 'visible';

  filtered = true;
  pagination();
}

function pagination() {
  statusedProjects.length = 0;
  paginationList.innerHTML = '';

  let count = 0;
  projectPages = 0;
  for (let project of allProjects) {
    if (project.dataset.projectStatus) {
      statusedProjects.push(project);
      count++;
    }
  }

  if (count === 0 && !searched && !filtered) {
    count = allProjects.length;
    statusedProjects = [...allProjects];
  }

  for (let i = 0; i < statusedProjects.length; i++) {
    if (i > 1) statusedProjects[i].style.display = 'none';
  }

  if (count > 2) {
    for (let i = 1; i < count / 2 + 1; i++) {
      const li = document.createElement('li');
      li.textContent = i;
      li.classList.add('page-item');
      paginationList.append(li);
    }

    projectPages = Math.ceil(count / 2);

    paginationList.insertAdjacentHTML(
      'afterbegin',
      '<li class="page-item">Prev</li>'
    );
    paginationList.insertAdjacentHTML(
      'beforeend',
      '<li class="page-item">Next</li>'
    );

    paginationList.children[1].classList.add('active');
    paginationList.firstElementChild.classList.add('disabled');
  }
}

paginationList.addEventListener('click', (event) => {
  if (event.target.tagName !== 'LI') return;

  const li = event.target;
  if (currPageNumber === undefined) currPageNumber = 1;
  let newPageNumber = li.textContent;

  if (+newPageNumber === currPageNumber) return;
  if (newPageNumber === 'Prev') {
    if (currPageNumber === 1) return;
    newPageNumber = currPageNumber - 1;
  }

  if (newPageNumber === 'Next') {
    if (currPageNumber === projectPages) return;
    newPageNumber = currPageNumber + 1;
  }

  currPageNumber = +newPageNumber;

  for (let project of statusedProjects) project.style.display = 'none';

  statusedProjects[newPageNumber * 2 - 2].style.display = 'flex';
  if (statusedProjects[newPageNumber * 2 - 1]) {
    statusedProjects[newPageNumber * 2 - 1].style.display = 'flex';
  }

  for (let page of paginationList.children) {
    if (page === paginationList.children[newPageNumber]) {
      page.classList.add('active');
      continue;
    }
    page.classList.remove('active');
    page.classList.remove('disabled');
  }

  if (+newPageNumber === 1) {
    paginationList.firstElementChild.classList.add('disabled');
  }

  if (+newPageNumber === projectPages) {
    paginationList.lastElementChild.classList.add('disabled');
  }

  // document.querySelector('#projects').scrollIntoView(false);
  paginationList.scrollIntoView(false);
});
