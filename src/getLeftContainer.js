const getLeftContainer = () => {
  const leftContainer = document.createElement('nav');
  leftContainer.setAttribute('class', 'leftContainer');

  const timeList = document.createElement('ul')
  timeList.setAttribute('class', 'timeList');
  
  const li1 = document.createElement('li');
  li1.setAttribute('class', 'liDefault');
  li1.textContent = 'Recent';
  li1.setAttribute('tabindex', '0');

  const li2 = document.createElement('li');
  li2.setAttribute('class', 'liDefault');
  li2.textContent = 'Today';
  li2.setAttribute('tabindex', '0');
  
  const li3 = document.createElement('li');
  li3.setAttribute('class', 'liDefault');
  li3.textContent = 'Week';
  li3.setAttribute('tabindex', '0');
  
  const li4 = document.createElement('li');
  li4.setAttribute('class', 'liDefault');
  li4.textContent = 'Month';
  li4.setAttribute('tabindex', '0');

  const projectList = document.createElement('ul');
  projectList.setAttribute('class', 'projectList');
  projectList.textContent = 'PROJECTS';
  projectList.setAttribute('tabindex', '0');

  const subProjLi1 = document.createElement('li');
  subProjLi1.setAttribute('class', 'subProj');
  subProjLi1.textContent = 'Proj1';
  subProjLi1.setAttribute('tabindex', '0');

  const subProjLi2 = document.createElement('li');
  subProjLi2.setAttribute('class', 'subProj');
  subProjLi2.textContent = 'Proj2';
  subProjLi2.setAttribute('tabindex', '0');

  const subProjLi3 = document.createElement('li');
  subProjLi3.setAttribute('class', 'subProj');
  subProjLi3.textContent = 'Proj3';
  subProjLi3.setAttribute('tabindex', '0');

  const addBtn = document.createElement('button');
  addBtn.setAttribute('class', 'addBtn');
  addBtn.textContent = '+';
  addBtn.setAttribute('tabindex', '0');

  //appends
  projectList.appendChild(subProjLi1);
  projectList.appendChild(subProjLi2);
  projectList.appendChild(subProjLi3);

  timeList.appendChild(li1);
  timeList.appendChild(li2);
  timeList.appendChild(li3);
  timeList.appendChild(li4);

  leftContainer.appendChild(addBtn);
  leftContainer.appendChild(timeList);
  leftContainer.appendChild(projectList);

  return leftContainer;
}

export default getLeftContainer;

