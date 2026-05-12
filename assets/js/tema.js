const toggle = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');


if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    icon.className = 'bi bi-moon-fill';
}

toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    icon.className = isLight ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});