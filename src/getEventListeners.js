const getEventListeners = () => {

  const listCheck = document.querySelectorAll('.listCheck');

  //toggle class, cosmetic only
  const evaluateCheckList = (e) => {
    const parent = e.target.parentElement;
    const parentItems = parent.children;

    //classList changes
    e.target.classList.toggle('listCheck-unchecked');  
    parentItems[1].classList.toggle('listTitle-unchecked');

  };
  
  listCheck.forEach((item => {
    item.addEventListener('click', e => evaluateCheckList(e));
  }))
  

};

export default getEventListeners;