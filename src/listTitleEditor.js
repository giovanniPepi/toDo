//toggles classLists; removes title and inserts input
const listTitleEditor = (className) => {
  const itemSiblings = className.parentElement;
  const input = itemSiblings.children[2];
  
  className.classList.toggle('listTitleInactive');
  input.classList.toggle('listInputActive');
}

export default listTitleEditor;