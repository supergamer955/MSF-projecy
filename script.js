AOS.init({ duration: 1000, once: false });

window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};

const cursor = document.querySelector('#custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Tactical Cursor
const cursor = document.querySelector('#custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Cursor Interactions
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
