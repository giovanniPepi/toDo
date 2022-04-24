const getLeftContainer = () => {
  const leftContainer = document.createElement('div');
  leftContainer.setAttribute('class', 'leftContainer');

  const timeList = document.createElement('ul')
  timeList.setAttribute('class', 'timeList');
  
  const li1 = document.createElement('li');
  li1.setAttribute('class', 'liDefault');
  li1.textContent = 'Recent';

  const li2 = document.createElement('li');
  li2.setAttribute('class', 'liDefault');
  li2.textContent = 'Today';
  
  const li3 = document.createElement('li');
  li3.setAttribute('class', 'liDefault');
  li3.textContent = 'Week';
  
  const li4 = document.createElement('li');
  li4.setAttribute('class', 'liDefault');
  li4.textContent = 'Month';

  const projectList = document.createElement('ul');
  projectList.setAttribute('class', 'projectList');
  projectList.textContent = 'PROJECTS';

  const subProjLi1 = document.createElement('li');
  subProjLi1.setAttribute('class', 'subProj');
  subProjLi1.textContent = 'Proj1';

  const subProjLi2 = document.createElement('li');
  subProjLi2.setAttribute('class', 'subProj');
  subProjLi2.textContent = 'Proj2';

  const subProjLi3 = document.createElement('li');
  subProjLi3.setAttribute('class', 'subProj');
  subProjLi3.textContent = 'Proj3';

  const addBtn = document.createElement('button');
  addBtn.setAttribute('class', 'addBtn');
  addBtn.textContent = '+';

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

