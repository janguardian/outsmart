promoStates();

function promoStates() {
  const menu = document.getElementById('menu');
  const openedMenu = document.getElementById('openedMenu');
  const closeMenu = document.getElementById('closeMenu');
  const headerButton = document.getElementById('headerButton');
  const menuButton = document.getElementById('menuButton');
  const menuContainer = document.getElementById('menuContainer');
  const menuLink = document.getElementsByClassName('menu__link');
  const promoButton = document.getElementsByClassName('button__get-touch');

  openedMenu.addEventListener('click', (e) => {
    e.preventDefault;
    menu.classList.toggle('menu_opened');
    menuContainer.classList.toggle('menu__container_opened');
    headerButton.style.pointerEvents = 'none';
    openedMenu.style.pointerEvents = 'none';
  });

  closeMenu.addEventListener('click', (e) => {
    e.preventDefault;
    menu.classList.toggle('menu_opened');
    menuContainer.classList.toggle('menu__container_opened');
    headerButton.style.pointerEvents = 'auto';
    openedMenu.style.pointerEvents = 'auto';
  });

  for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', () => {
      menu.classList.toggle('menu_opened');
      menuContainer.classList.toggle('menu__container_opened');
      headerButton.style.pointerEvents = 'auto';
      openedMenu.style.pointerEvents = 'auto';
    });
  };

  menuButton.addEventListener('click', (e) => {
    e.preventDefault;
    menu.classList.toggle('menu_opened');
    menuContainer.classList.toggle('menu__container_opened');
    headerButton.style.pointerEvents = 'auto';
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