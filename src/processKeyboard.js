//saves input on enter
const processKeyboard = (e) => {

  if (e.keyCode ===13) {
    console.log(e.key);
  }
  else return;  
}

export default processKeyboard;