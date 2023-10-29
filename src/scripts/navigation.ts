function toggleNav() {
  let openSideMenuButton = document.querySelector('button.navigation-button');
    let sideMenu = document.querySelector('#sideMenu') as HTMLElement;
    let bodyContainer = document.querySelector('body') as HTMLElement;
  
    openSideMenuButton.addEventListener('click', () => {
      sideMenu.style.display = 'flex';
      bodyContainer.style.overflowY = 'hidden';
    });

}


  toggleNav();

  // Runs on view transitions navigation
  document.addEventListener("astro:after-swap", toggleNav);