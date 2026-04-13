// Init AOS
AOS.init();

// Cursor Logic
const cursor = document.querySelector('#custom-cursor');

document.addEventListener('mousemove', (e) => {
    if(cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Scroll Progress
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const bar = document.getElementById("progress-bar");
    if(bar) bar.style.width = scrolled + "%";
});

// Hover Scaling
document.querySelectorAll('.glass-card, button, a').forEach(elem => {
    elem.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%, -50%) scale(5)');
    elem.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%, -50%) scale(1)');
});
