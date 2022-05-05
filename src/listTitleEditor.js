import getFocus from "./getFocus";

//toggles classLists; removes title and inserts input
const listTitleEditor = (target) => {
  const itemSiblings = target.parentElement;
  const input = itemSiblings.children[2];
  
  target.classList.toggle('listTitleInactive');
  input.classList.toggle('listInputActive');

  input.setAttribute('value', `${target.textContent}`);

  //add focus
  getFocus(input);
}

export default listTitleEditor;