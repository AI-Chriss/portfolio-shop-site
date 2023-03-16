const navbar = document.querySelector('nav');
const hero = document.getElementById('scroll');

// Dodanie zdarzenia scroll do obiektu window
window.addEventListener('scroll', function() {
  // Sprawdzenie pozycji paska nawigacji
  if (window.pageYOffset > navbar.offsetTop) {
    // Dodanie klasy 'sticky' do paska nawigacji
    navbar.classList.add('sticky');
    hero.classList.add('scrolling');
  } else {
    // Usunięcie klasy 'sticky' z paska nawigacji
    navbar.classList.remove('sticky');
    hero.classList.remove('scrolling');
  }
});