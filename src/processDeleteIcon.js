const processDeleteIcon = (e) => {
  //goes up all the way to listItem
  const parent1 = e.target.parentElement;
  const parent2 = parent1.parentElement;
  const listItem = parent2.parentElement;

  //only delete when clicking exactly on the listener
  if (listItem.classList[0] === 'listItem') {
    console.log('fuck');
    listItem.style.display = 'none';
  }
  

}
export default processDeleteIcon