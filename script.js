// Unsplash API - You can replace with your own API key for higher limits
const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_KEY_HERE'; // Get free key at unsplash.com/developers

// Fallback: Curated image URLs (you can replace these with actual Vittoria Ceretti image URLs)
const fallbackImages = [
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
    'https://images.unsplash.com/photo-1495385794356-15371f348c31?w=800',
    'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800',
    'https://images.unsplash.com/photo-1496440737103-cd596325d314?w=800',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800',
    'https://images.unsplash.com/photo-1532170579297-281918c8ae72?w=800',
    'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800',
    'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800',
];

const gallery = document.getElementById('gallery');
const loading = document.getElementById('loading');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentImages = [];
let currentIndex = 0;

// Try to fetch from Unsplash, fallback to curated images
async function loadImages() {
    try {
        // Try Unsplash API first (requires API key for production)
        // For now, use fallback images
        currentImages = fallbackImages;
        displayImages(currentImages);
    } catch (error) {
        console.error('Error loading images:', error);
        currentImages = fallbackImages;
        displayImages(currentImages);
    }
}

function displayImages(images) {
    loading.style.display = 'none';
    
    images.forEach((imageUrl, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Vittoria Ceretti';
        img.loading = 'lazy';
        
        item.appendChild(img);
        item.addEventListener('click', () => openLightbox(index));
        
        gallery.appendChild(item);
    });
}

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = currentImages[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    lightboxImg.src = currentImages[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    lightboxImg.src = currentImages[currentIndex];
}

// Event listeners
closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

// Load images on page load
loadImages();
