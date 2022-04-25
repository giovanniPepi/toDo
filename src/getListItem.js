import editIcon from "./icons/square-edit-outline.svg";
import deleteIcon from  "./icons/delete.svg";

const getListItem = () => {

  const listItem = document.createElement('div');
  listItem.setAttribute('class', 'listItem');

  const listCheck = document.createElement('div');
  listCheck.setAttribute('class', 'listCheck');

  const listTitle = document.createElement('div');
  listTitle.setAttribute('class', 'listTitle');
  listTitle.textContent = 'title test';

  const listDetails = document.createElement('div');
  listDetails.setAttribute('class', 'listDetails');
  listDetails.textContent = 'details'

  const listDate = document.createElement('div');
  listDate.setAttribute('class', 'listDate');
  listDate.textContent = '22 apr';

  const listEdit = document.createElement('div');
  listEdit.setAttribute('class', 'listEdit');
  listEdit.innerHTML = editIcon;

  const listRemove = document.createElement('div');
  listRemove.setAttribute('class', 'listRemove');
  listRemove.innerHTML = deleteIcon;
  

  //appends
  listItem.appendChild(listCheck);
  listItem.appendChild(listTitle);
  listItem.appendChild(listDetails);
  listItem.appendChild(listDate);
  listItem.appendChild(listEdit);
  listItem.appendChild(listRemove);
  
  return listItem;
}

export default getListItem;