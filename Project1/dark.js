document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme=== 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Switch to Light Mode';
    } 

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');

        themeToggle.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';

        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});