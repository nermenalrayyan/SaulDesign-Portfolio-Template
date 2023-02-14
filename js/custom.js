function toggleMenu() {
    const toggleMenu = document.querySelector('#toggleMenu'),
        navBar = document.querySelector('#navBar');
    
    toggleMenu.classList.toggle("active");
    navBar.classList.toggle("active");
  };