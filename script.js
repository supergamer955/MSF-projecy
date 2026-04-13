// Initialize Animations
AOS.init({ duration: 1000, once: false });

// Scroll Progress Logic
window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    let bar = document.getElementById("progress-bar");
    if (bar) bar.style.width = scrolled + "%";
};

// Custom Cursor Logic - DEFINED ONLY ONCE
const cursor = document.querySelector('#custom-cursor');

if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Hover Effects
    document.querySelectorAll('a, button, .glass-card').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(4)';
            cursor.style.background = 'rgba(238, 49, 36, 0.2)';
            cursor.style.border = '1px solid #ee3124';
        });
        item.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = '#ee3124';
            cursor.style.border = 'none';
        });
    });
}
