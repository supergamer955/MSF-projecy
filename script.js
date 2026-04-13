// Initialize Animations
AOS.init({
    duration: 1000,
    once: false
});

// Custom Cursor Logic
const cursor = document.querySelector('#custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Expand cursor on hoverable elements
document.querySelectorAll('a, .glass-card').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(3)';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});
