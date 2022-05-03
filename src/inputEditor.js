// removes active status from input; removes inactive status from title
const inputEditor = (e) => {
  const itemSiblings = e.parentElement;
  const title = itemSiblings.children[1];
  
  e.classList.remove('listInputActive');
  title.classList.remove('listTitleInactive');

}

export default inputEditor;