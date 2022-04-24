const getLeftContainer = () => {

  const leftContainer = document.createElement('div');
  leftContainer.setAttribute('class', 'leftContainer');

  const menuTime = document.createElement('ul');

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
  

  //appends
  const liList = document.querySelectorAll('li');
  liList.forEach((li => {
    menuTime.appendChild(li);  
  }));
  leftContainer.appendChild(menuTime);

  return leftContainer;
}

export default getLeftContainer;
