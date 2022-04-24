import getHeader from "./getHeader";
import getContainer from "./containerLoader";

//calls modules that handle DOM manipulation
const domLoader = () => {
  getHeader();
  getContainer(); 

  const listCheck = document.querySelector('.listCheck');

  const evaluateCheckList = (e) => {
    e.target.classList.toggle('listCheck-teste');    

  };
  
  listCheck.addEventListener('click', e => evaluateCheckList(e));


};







export default domLoader;