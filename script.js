
// Mobile menu toggle
const btn = document.getElementById('mobileMenuBtn');
const drawer = document.getElementById('mobileMenu');
if(btn && drawer){
  btn.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Year
document.getElementById('y').textContent = new Date().getFullYear();
