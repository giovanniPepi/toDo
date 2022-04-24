import body from "./globalDom";
import getLeftContainer from "./getLeftContainer";
import getRightContainer from "./getRightContainer";
import getFooter from "./getFooter";

// module handler
const getContainer = (() => {

  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const leftContainer = getLeftContainer()
  container.appendChild(leftContainer);

  const rightContainer = getRightContainer();
  container.appendChild(rightContainer);

  const footer = getFooter();
  container.appendChild(footer);

  body.appendChild(container);
  return container;
})

export default getContainer;