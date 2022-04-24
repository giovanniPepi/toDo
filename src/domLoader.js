import body from "./globalDom";
import getHeader from "./getHeader";

//calls modules that handle DOM manipulation
const domLoader = (() => {

  const getContainer = (() => {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    const leftContainer = document.createElement('div');
    leftContainer.setAttribute('class', 'leftContainer');

    const rightContainer = document.createElement('div');
    rightContainer.setAttribute('class', 'rightContainer');
  })

 
})();

export default domLoader;