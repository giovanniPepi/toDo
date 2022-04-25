import getListItem from "./getListItem";

const getRightContainer = (listLength) => {

  const rightContainer = document.createElement('div');
  rightContainer.setAttribute('class', 'rightContainer');

  const listContainer = document.createElement('div');
  listContainer.setAttribute('class', 'listContainer');

  // 6 to avoid overflow
  for (let i = 0; i <= 6; i++) {
    let listItem = getListItem();
    listContainer.appendChild(listItem);
  }
  
  //appends

  rightContainer.appendChild(listContainer);

  return rightContainer;
}

export default getRightContainer;