# Vittoria Ceretti Gallery

An elegant photo gallery showcasing Vittoria Ceretti.

## Features

✨ Clean, minimalist design  
🖼️ Masonry grid layout  
🔍 Lightbox view with navigation  
⌨️ Keyboard shortcuts (arrow keys, ESC)  
📱 Fully responsive

## How to Add Real Images

The site currently uses placeholder fashion images. To add actual Vittoria Ceretti photos:

### Option 1: Manual (Simple)
Edit `script.js` and replace the URLs in `fallbackImages` array with:
- Getty Images embeds
- Instagram photo URLs (with permission)
- Your own hosted images

### Option 2: Unsplash API (Free)
1. Get a free API key at [unsplash.com/developers](https://unsplash.com/developers)
2. Add to `script.js`: `const UNSPLASH_ACCESS_KEY = 'your_key_here';`
3. Search query will be 'vittoria ceretti fashion model'

### Option 3: Instagram Embed
You could also embed her Instagram posts directly (requires Instagram API or embed codes).

## Deploy

Super simple:
1. Push to GitHub
2. Connect to Vercel/Netlify
3. Deploy (no build step needed!)

## Legal Note

Make sure you have rights to use any images you add! This is a fan gallery template.
