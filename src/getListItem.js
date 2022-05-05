import editIcon from "./icons/square-edit-outline.svg";
import deleteIcon from  "./icons/delete.svg";

const getListItem = () => {

  const listItem = document.createElement('div');
  listItem.setAttribute('class', 'listItem');
  listItem.setAttribute('tabindex', '0');

  const listCheck = document.createElement('div');
  listCheck.setAttribute('class', 'listCheck');

  const listTitle = document.createElement('div');
  listTitle.setAttribute('class', 'listTitle');
  listTitle.textContent = 'title test';

  const listInput = document.createElement('input');
  listInput.setAttribute('class', 'listInputInactive');
  listInput.setAttribute('type', 'text');

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
  listItem.appendChild(listInput);
  listItem.appendChild(listDate);
  listItem.appendChild(listEdit);
  listItem.appendChild(listRemove);
  
  return listItem;
}

export default getListItem;