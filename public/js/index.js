const navToggle = document.getElementById('check');
const navItems = document.querySelectorAll('.nav__list');

// close the hamburger menu when a user clicks on any the nav item
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navToggle.checked = false;
    });
  });