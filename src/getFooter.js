import Logo from "./img/GitHub-Mark-120px-plus.png";
const getFooter = () => {

  const footer = document.createElement('div');
  footer.setAttribute('class', 'footer');

  const logo = document.createElement('a');
  logo.setAttribute('class', 'logo');
  logo.setAttribute('href', 'https://github.com/gerijeb');

  const logoImg = new Image();
  logoImg.setAttribute('class', 'logo');
  logoImg.src = Logo;

  const about = document.createElement('div');
  about.setAttribute('class', 'options');
  about.textContent = 'about';

  //appends
  logo.appendChild(logoImg);
  footer.appendChild(logo);
  footer.appendChild(about);

  return footer;
}

export default getFooter; 
