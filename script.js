// Instagram posts from @vittoria (Vittoria Ceretti's official account)
// Add more Instagram post URLs here - just grab the URL from any post on her profile
const instagramPosts = [
    'https://www.instagram.com/p/C3QmKxBN8zP/',  // Example - replace with actual posts
    'https://www.instagram.com/p/C3NqVxRtZvK/',
    'https://www.instagram.com/p/C3LJKxBNqzP/',
    'https://www.instagram.com/p/C3IqVxRtZvK/',
    'https://www.instagram.com/p/C3FJKxBNqzP/',
    'https://www.instagram.com/p/C3CqVxRtZvK/',
    // Add more post URLs from instagram.com/vittoria
];

const gallery = document.getElementById('gallery');
const loading = document.getElementById('loading');

// Use Instagram's oEmbed API to get embed codes
async function loadInstagramPosts() {
    loading.textContent = 'Loading from Instagram...';
    
    for (const postUrl of instagramPosts) {
        try {
            // Instagram oEmbed endpoint
            const oembedUrl = `https://graph.instagram.com/oembed?url=${encodeURIComponent(postUrl)}&maxwidth=320&hidecaption=false`;
            
            const response = await fetch(oembedUrl);
            
            if (response.ok) {
                const data = await response.json();
                
                // Create container for the embed
                const embedContainer = document.createElement('div');
                embedContainer.className = 'instagram-embed';
                embedContainer.innerHTML = data.html;
                
                gallery.appendChild(embedContainer);
                
                // Instagram's embed script needs to process the embeds
                if (window.instgrm) {
                    window.instgrm.Embeds.process();
                }
            }
        } catch (error) {
            console.error('Error loading Instagram post:', error);
        }
    }
    
    loading.style.display = 'none';
    
    // Load Instagram's embed script
    if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    }
}

// Alternative: Simple iframe embeds (faster, simpler)
function loadInstagramPostsSimple() {
    loading.style.display = 'none';
    
    instagramPosts.forEach(postUrl => {
        const postId = postUrl.split('/p/')[1].replace('/', '');
        
        const embedContainer = document.createElement('div');
        embedContainer.className = 'instagram-embed';
        
        // Create blockquote for Instagram embed
        embedContainer.innerHTML = `
            <blockquote class="instagram-media" 
                data-instgrm-permalink="${postUrl}" 
                data-instgrm-version="14"
                style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:100%; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
            </blockquote>
        `;
        
        gallery.appendChild(embedContainer);
    });
    
    // Load Instagram's embed script
    if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    }
}

// Use the simple method
loadInstagramPostsSimple();
