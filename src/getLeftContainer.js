const getLeftContainer = () => {
  const leftContainer = document.createElement('div');
  leftContainer.setAttribute('class', 'leftContainer');

  const menuTime = document.createElement('ul');
  menuTime.setAttribute('class', 'menuTime');

  const li1 = document.createElement('li');
  li1.setAttribute('class', 'li1');
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

  const li5 = document.createElement('li');
  li5.setAttribute('class', 'liDefault');
  li5.textContent = 'PROJECTS';

  const li6 = document.createElement('li');
  li6.setAttribute('class', 'subProj');
  li6.textContent = 'Proj1';

  const li7 = document.createElement('li');
  li7.setAttribute('class', 'subProj');
  li7.textContent = 'Proj2';

  const li8 = document.createElement('li');
  li8.setAttribute('class', 'subProj');
  li8.textContent = 'Proj3';

  const addBtnDiv = document.createElement('div');
  addBtnDiv.setAttribute('class', 'addBtnDiv');

  const addBtn = document.createElement('button');
  addBtn.setAttribute('class', 'addBtn');
  addBtn.textContent = '+';

  //appends
  menuTime.appendChild(li1);
  menuTime.appendChild(li2);
  menuTime.appendChild(li3);
  menuTime.appendChild(li4);
  menuTime.appendChild(li5);
  menuTime.appendChild(li6);
  menuTime.appendChild(li7);
  menuTime.appendChild(li8);

  addBtnDiv.appendChild(addBtn);

  leftContainer.appendChild(menuTime);
  leftContainer.appendChild(addBtnDiv);
  return leftContainer;
}

export default getLeftContainer;

