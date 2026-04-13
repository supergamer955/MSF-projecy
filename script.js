// Safe Initialization
try {
    AOS.init({ duration: 800 });
} catch (e) { console.log("AOS failed to load"); }

// Progress Bar
window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    let bar = document.getElementById("progress-bar");
    if(bar) bar.style.width = scrolled + "%";
};

// Cursor Logic (Wrapped to prevent crashes)
const cursor = document.querySelector('#custom-cursor');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}
