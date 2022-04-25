const getEventListeners = () => {

  const listCheck = document.querySelector('.listCheck');

  const evaluateCheckList = (e) => {
    e.target.classList.toggle('listCheck-teste');    

  };
  
  listCheck.addEventListener('click', e => evaluateCheckList(e));
};

export default getEventListeners;