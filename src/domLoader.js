import getHeader from "./getHeader";
import getContainer from "./containerLoader";
import getEventListeners from "./getEventListeners";

//calls modules that handle DOM manipulation
const domLoader = () => {
  getContainer(); 
  getHeader();
  getEventListeners();
};







export default domLoader;