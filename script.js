document.addEventListener('DOMContentLoaded', () => {
  const stickyHeader = document.getElementById('sticky-header');
  const scrollOffset = 50; // Значение прокрутки для появления нового хедера

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollOffset) {
		stickyHeader.classList.add('visible');
		stickyHeader.classList.remove('hidden');
    } else {
		stickyHeader.classList.remove('visible');
		stickyHeader.classList.add('hidden');
    }
  });

  const menuToggle = document.getElementById('menu-toggle');
  const menuLinks = document.getElementById('menu-links');

  menuToggle.addEventListener('click', () => {
	menuLinks.classList.toggle('open'); // Переключение класса "open" для меню
  });

  const menuToggleMobile = document.getElementById('menu-toggle-mobile');
  const menuLinksMobile = document.getElementById('menu-links-mobile');

  menuToggleMobile.addEventListener('click', () => {
	menuLinksMobile.classList.toggle('open'); // Переключение класса "open" для меню
  });

});


function order() {
    // Placeholder for order action
    alert('Your order has been placed!');
}