import Logo from "./img/GitHub-Mark-120px-plus.png";
import body from "./globalDom";

  // creates header
  const getHeader = () => {

    const header = document.createElement('header');
    header.setAttribute('class', 'header');

    const title = document.createElement('div');
    title.setAttribute('class', 'title');
    title.textContent = 'EasyList';

    const save = document.createElement('div');
    save.setAttribute('class', 'options');
    save.setAttribute('id', 'save');
    save.textContent = 'save';

    const logo = document.createElement('a');
    logo.setAttribute('class', 'logo');
    logo.setAttribute('href', 'https://github.com/giovanniPepi');

    const logoImg = new Image();
    logoImg.setAttribute('class', 'logo');
    logoImg.src = Logo;

    const about = document.createElement('div');
    about.setAttribute('class', 'options');
    about.textContent = 'about';

    //appends
    logo.appendChild(logoImg);
    
    header.appendChild(title)
    header.appendChild(logo);
    header.appendChild(save);
    
    body.appendChild(header);
  };

  export default getHeader;