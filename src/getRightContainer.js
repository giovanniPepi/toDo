import getListItem from "./getListItem";

const getRightContainer = () => {

  const rightContainer = document.createElement('div');
  rightContainer.setAttribute('class', 'rightContainer');

  const listContainer = document.createElement('div');
  listContainer.setAttribute('class', 'listContainer');

  const listItem = getListItem();
  listContainer.appendChild(listItem);

  //appends

  rightContainer.appendChild(listContainer);

  return rightContainer;
}

export default getRightContainer;