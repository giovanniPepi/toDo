// removes active status from input; removes inactive status from title
const inputEditor = (target) => {
  const itemSiblings = target.parentElement;
  const title = itemSiblings.children[1];
  
  target.classList.remove('listInputActive');
  title.classList.remove('listTitleInactive');
}

export default inputEditor;