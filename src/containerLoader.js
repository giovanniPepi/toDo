import body from "./globalDom";
import getLeftContainer from "./getLeftContainer";
import getRightContainer from "./getRightContainer";

// module handler
const getContainer = (() => {

  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const leftContainer = getLeftContainer()
  container.appendChild(leftContainer);

  const rightContainer = getRightContainer();
  container.appendChild(rightContainer);
  
  body.appendChild(container);
  return container;
})

export default getContainer;