import getHeader from "./getHeader";
import getContainer from "./containerLoader";


//calls modules that handle DOM manipulation
const domLoader = (() => {
  getHeader();
  getContainer();
 
})();

export default domLoader;