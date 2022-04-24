  import body from "./globalDom";
  
  // creates header
  const getHeader = () => {
    const header = document.createElement('div');
    header.setAttribute('class', 'header');

    const title = document.createElement('div');
    title.setAttribute('class', 'title');
    title.textContent = 'EasyList';

    const save = document.createElement('div');
    save.setAttribute('class', 'options');
    save.setAttribute('id', 'save');
    save.textContent = 'save';

    header.appendChild(title)
    header.appendChild(save);

    body.prepend(header);
  };

  export default getHeader;