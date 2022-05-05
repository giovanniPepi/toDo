import getFocus from "./getFocus";

const processEditIcon = (e) => {
  //goes up all the way to listItem
  const parent1 = e.target.parentElement;
  const parent2 = parent1.parentElement;
  const input = parent2.children[2];
  const listTitle = parent2.children[1];

  listTitle.classList.toggle('listTitleInactive');
  input.classList.toggle('listInputActive');
  input.setAttribute('value', `${listTitle.textContent}`);

  //add focus
  getFocus(input);



}

export default processEditIcon;