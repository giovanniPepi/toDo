import getLeftContainer from "./getLeftContainer";
import getRightContainer from "./getRightContainer";
import body from "./globalDom";

// module handler
const getContainer = (() => {
    
  const container = document.createElement('section');
  container.setAttribute('class', 'container');

  const leftContainer = getLeftContainer();
  container.appendChild(leftContainer);

  const rightContainer = getRightContainer(6);
  container.appendChild(rightContainer);
  
  body.appendChild(container);
});

export default getContainer;