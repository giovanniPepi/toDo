import body from "./globalDom";
import getLeftContainer from "./leftContainer";

// module handler
const getContainer = (() => {

  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const leftContainer = getLeftContainer()
  container.appendChild(leftContainer);

  body.appendChild(container);
  return container;
})

export default getContainer;