const skillsCont = document.querySelector('.skills-grid-container');

const skillsStorage = [
  { name: 'HTML5', img: 'html5 logo.png', className: 'long-width' },
  {
    name: 'CSS3',
    img: 'img_css.jpg',
    details: ['Flexbox, CSS Grid', 'Media Queries', 'CSS Animation'],
  },
  {
    name: 'Bootstrap_Taiwild',
    img: 'bootstrap.png',
    img2: 'tailwind css.png',
  },
  {
    name: 'JavaScript',
    img: 'JavaScript logo official.png',
    details: ['ES6+', 'OOP, Async JavaScript', 'DOM Manipulation'],
  },
  {
    name: 'Node.js',
    img: '320px-Node.js_logo.svg.png',
    details: ['Express', 'REST API', 'Security'],
  },
  {
    name: 'Vue.js',
    img: 'vue-logo.png',
    details: ['Vue Router', 'Vuex'],
  },
  {
    name: 'Mongodb',
    img: 'mongodb-logo.png',
    className: 'long-width',
  },
  {
    name: 'Adobe Xd',
    img: 'Adobe-Xd.png',
    details: ['Web Page Design', 'Designing SVG Shapes'],
  },
];

const skillsImgPath = 'img/Skills img';

class SkillsUI {
  static displaySkills() {
    skillsStorage.forEach((skill) => SkillsUI.addSkillsToList(skill));
  }

  static addSkillsToList(skill) {
    const skillBox = document.createElement('div');
    skillBox.classList.add('skills-box', 'flex-row');
    skillsCont.append(skillBox);

    skillBox.insertAdjacentHTML(
      'beforeend',
      `<img src="${skillsImgPath}/${skill.img}" ${
        skill.className ? `class="${skill.className}"` : ''
      } alt="${skill.name} Logo">`
    );

    if (skill.img2) {
      skillBox.insertAdjacentHTML(
        'beforeend',
        `<img src="${skillsImgPath}/${skill.img2}">`
      );
      skillBox.style.justifyContent = 'space-around';
    }

    if (!skill.details) return;

    const ul = document.createElement('ul');
    ul.classList.add('skills-details');
    skillBox.append(ul);

    let li = '';
    for (let detail of skill.details) li += `<li>${detail}</li>`;

    ul.insertAdjacentHTML('beforeend', li);
  }
}

export { SkillsUI };
