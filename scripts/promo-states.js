promoStates();



function promoStates() {
  let menu = document.getElementById('menu');
  let openedMenu = document.getElementById('openedMenu');
  let closeMenu = document.getElementById('closeMenu');
  let headerButton = document.getElementById('headerButton');
  let menuButton = document.getElementById('menuButton');
  let menuLink = document.getElementsByClassName('menu__link');
  let promoButton = document.getElementsByClassName('button__get-touch');

  openedMenu.addEventListener('click', (e) => {
    e.preventDefault;
    menu.classList.toggle('menu_opened');
    headerButton.style.opacity = '0';
    headerButton.style.pointerEvents = 'none';
    openedMenu.style.opacity = '0';
    openedMenu.style.pointerEvents = 'none';
  });

  closeMenu.addEventListener('click', (e) => {
    e.preventDefault;
    menu.classList.toggle('menu_opened');
    headerButton.style.opacity = '1';
    headerButton.style.pointerEvents = 'auto';
    openedMenu.style.opacity = '1';
    openedMenu.style.pointerEvents = 'auto';
  });

  for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', () => {
      menu.classList.toggle('menu_opened');
      headerButton.style.opacity = '1';
      headerButton.style.pointerEvents = 'auto';
      openedMenu.style.opacity = '1';
      openedMenu.style.pointerEvents = 'auto';
    });
  };

  menuButton.addEventListener('click', (e) => {
    e.preventDefault;
    menu.classList.toggle('menu_opened');
    headerButton.style.opacity = '1';
    headerButton.style.pointerEvents = 'auto';
    openedMenu.style.opacity = '1';
    openedMenu.style.pointerEvents = 'auto';
    document.location.href = '#touch';
  });

  for (let i = 0; i < promoButton.length; i++) {
    promoButton[i].addEventListener('click', (e) => {
      e.preventDefault;
      document.location.href = '#touch';
    });
  };
};