import skillsList from './skillsList.js';

const skillsCont = document.querySelector('.skills-grid-container');
const skillsImgPath = 'img/Skills img';

class skillUI {
  static displaySkills() {
    skillsList.forEach((skill) => skillUI.addSkillsToList(skill));
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

export { skillUI };
