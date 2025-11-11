// Zoom / Lightbox
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const btn = document.getElementById('toggle-desc');
const content = document.getElementById('desc-content');

btn.addEventListener('click', () => {
    content.classList.toggle('expanded');
    btn.classList.toggle('up');

    // ganti arrow
    if (content.classList.contains('expanded')) {
        btn.innerHTML = "&#x25B2;"; // arrow up
    } else {
        btn.innerHTML = "&#x25BC;"; // arrow down
    }
});

document.querySelectorAll(".zoom-img").forEach(img => {
    img.onclick = () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    };
});

// Close button
document.querySelector(".close").onclick = () => {
    modal.style.display = "none";
};

// Klik di luar gambar untuk menutup modal
modal.onclick = (e) => {
    if (e.target === modal) { // pastikan klik di background, bukan gambar
        modal.style.display = "none";
    }
};
