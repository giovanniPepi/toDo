const getEventListeners = () => {

  const listCheck = document.querySelectorAll('.listCheck');

  //toggle class, cosmetic only
  const evaluateCheckList = (e) => {
    e.target.classList.toggle('listCheck-teste');    
  };
  
  listCheck.forEach((item => {
    item.addEventListener('click', e => evaluateCheckList(e));
  }))
  

};

export default getEventListeners;