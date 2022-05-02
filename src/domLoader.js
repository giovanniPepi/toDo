import getHeader from "./getHeader";
import getContainer from "./containerLoader";
import getEventListeners from "./getEventListeners";
import getOverlay from "./getOverlay";

//calls modules that handle DOM manipulation
const domLoader = () => {
  getHeader();
  getContainer(); 
  getEventListeners();
};







export default domLoader;