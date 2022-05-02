import body from "./globalDom";

const getOverlay = () => {

  const overlay = document.createElement('section'); 
  overlay.setAttribute('class', 'overlayHidden');
  overlay.setAttribute('id', 'overlay');
  overlay.textContent = 'Overlay';

  //appends
  body.prepend(overlay);
}

export default getOverlay;