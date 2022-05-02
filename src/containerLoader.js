import getLeftContainer from "./getLeftContainer";
import getRightContainer from "./getRightContainer";

// module handler
const getContainer = (() => {
  
  const overlay = document.querySelector('#overlay');
    
  const container = document.createElement('section');
  container.setAttribute('class', 'container');

  const leftContainer = getLeftContainer();
  container.appendChild(leftContainer);

  const rightContainer = getRightContainer(6);
  container.appendChild(rightContainer);
  
  overlay.appendChild(container);
  return container;
});

export default getContainer;