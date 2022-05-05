import listTitleEditor from "./listTitleEditor";
import processKeyboard from "./processKeyboard";
import processEditIcon from "./processEditIcon";
import processDeleteIcon from "./processDeleteIcon";

const getEventListeners = () => {

  const listCheck = document.querySelectorAll('.listCheck');

  //toggle class, cosmetic only
  const evaluateCheckList = (e) => {
    const parent = e.target.parentElement;
    const parentItems = parent.children;

    //classList changes
    e.target.classList.toggle('listCheck-unchecked');  
    parentItems[1].classList.toggle('listTitle-unchecked');
    parentItems[3].classList.toggle('listDate-unchecked');
    parentItems[4].classList.toggle('listEdit-unchecked');
    parentItems[5].classList.toggle('listRemove-unchecked');
  };
  
  listCheck.forEach((item => {
    item.addEventListener('click', e => evaluateCheckList(e));
  }))

  //listens for click on title and toggle class/input
  const titleList = document.querySelectorAll('.listTitle');
  titleList.forEach((item => {
    item.addEventListener('click', e => listTitleEditor(e.target));
  }));

  //same as clicking on title, but as an icon
  const listEdit = document.querySelectorAll('.listEdit');
  listEdit.forEach((item => {
    item.addEventListener('click', e => processEditIcon(e));
  }))

  //listens for input saving and calls titleList
  const titleInputList = document.querySelectorAll('.listInputInactive');
  titleInputList.forEach((item => {
    item.addEventListener('keyup', e => {
      processKeyboard(e);
    })
  }));

  // handles delete Icon
  const deleteList = document.querySelectorAll('.listRemove');
  deleteList.forEach((item => {
    item.addEventListener('click', e => processDeleteIcon(e));
  }))
  



};

export default getEventListeners;