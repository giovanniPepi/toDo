import getHeader from "./getHeader";
import getContainer from "./containerLoader";

//calls modules that handle DOM manipulation
const domLoader = () => {
  getHeader();
  getContainer(); 

  const getEventListeners = (() => {
    const listCheck = document.querySelector('.listCheck');
    console.log(listCheck);

    listCheck.addEventListener('click', () => listCheck.innerHTML = '');
  })();


};







export default domLoader;