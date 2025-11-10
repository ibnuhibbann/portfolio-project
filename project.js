// Zoom / Lightbox
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");

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
