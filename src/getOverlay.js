import body from "./globalDom";

const getOverlay = () => {

  const overlay = document.createElement('section'); 
  overlay.setAttribute('class', 'overlayHidden');
  overlay.setAttribute('id', 'overlay');

  //appends

  body.prepend(overlay);
}

export default getOverlay;