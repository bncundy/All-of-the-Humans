# All of the Humans - Photography Portfolio

A modern, elegant photography portfolio website showcasing wedding, family, and commercial photography services.

## 🎨 Design System

The website now features a **unified design system** with consistent:
- Typography (Cormorant Garamond, Playfair Display, Montserrat, Inter)
- Color palette (cream, paper, charcoal tones)
- Spacing scale (CSS variables)
- Component library
- Responsive breakpoints

## 📁 Project Structure

```
├── index.html          # Portfolio homepage (grid layout)
├── romance.html        # Wedding & engagement services
├── family.html         # Family & maternity services
├── studio.html         # Commercial & product services
├── custom.css          # Unified design system
├── custom.js           # Shared JavaScript functionality
├── family.png          # Family photography hero image
├── romance.png         # Wedding photography hero image
└── product.webp        # Product photography hero image
```

## ✨ Key Improvements

### 1. Unified CSS Framework
- **CSS Variables**: All colors, fonts, and spacing use CSS custom properties
- **Reusable Components**: Buttons, cards, grids, navigation
- **Consistent Typography**: Shared font families and sizing scale
- **Design Tokens**: Easy to update entire site from one place

### 2. Fixed Character Encoding
- Replaced broken characters (â€œ, â€") with proper HTML entities
- Corrected bullets (•), arrows (→), and em dashes (—)
- All special characters now display correctly

### 3. Responsive Design
- Mobile-first approach
- Consistent breakpoints across all pages
- Touch-friendly navigation
- Optimized image sizing

### 4. Improved Navigation
- Fixed navigation bar across all pages
- Consistent styling and behavior
- Active page indicators
- Smooth scroll to anchors

### 5. Performance Optimizations
- Lazy loading images
- Efficient CSS selectors
- Minimal JavaScript
- Optimized font loading

### 6. Code Quality
- Semantic HTML5
- BEM-inspired class naming
- Commented sections
- DRY principles (Don't Repeat Yourself)

## 🚀 Getting Started

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. No build process required!

### Git Setup
```bash
# Initialize repository
git init

# Add files
git add .

# Initial commit
git commit -m "Initial commit: Unified photography portfolio"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/thegoodcrust/all-of-the-humans.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 🎯 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Philosophy

The website follows three distinct visual languages:

1. **Homepage**: Dark, dramatic split-screen with hover interactions
2. **Wedding/Family**: Light, editorial, spacious layouts with subtle animations
3. **Studio**: Clean, modern, commercial aesthetic with structured grids

All unified through consistent:
- Typography system
- Spacing scale
- Color palette
- Component library

## 📝 Customization

### Updating Colors
Edit CSS variables in `custom.css`:
```css
:root {
  --color-cream: #F9F7F1;
  --color-paper: #F8F5F2;
  /* ... */
}
```

### Changing Fonts
Update font imports and variables in `custom.css`:
```css
@import url('your-font-url');

:root {
  --font-serif: 'Your Font', serif;
}
```

### Adding Pages
1. Copy an existing HTML file
2. Update content
3. Use existing CSS classes from `custom.css`
4. Add navigation links

## 🔧 Technical Details

- **No Dependencies**: Pure HTML, CSS, and vanilla JavaScript
- **No Build Step**: Works directly in browser
- **SEO Friendly**: Semantic HTML, meta tags, proper heading hierarchy
- **Accessible**: ARIA labels, keyboard navigation, proper contrast ratios

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and up
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: 479px and below

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | `#F9F7F1` | Family page background |
| Paper | `#F8F5F2` | Romance page background |
| White | `#ffffff` | Studio page background |
| Black | `#000000` | Primary text, borders |
| Charcoal | `#1a1a1a` | Homepage background |
| Medium Gray | `#555555` | Secondary text |
| Light Gray | `#999999` | Tertiary text |

## 📦 Future Enhancements

- [ ] Contact form functionality
- [ ] Image gallery with lightbox
- [ ] Blog/journal section
- [ ] Client testimonials
- [ ] Pricing calculator
- [ ] Online booking system
- [ ] Instagram feed integration
- [ ] Portfolio filtering

## 🤝 Contributing

This is a personal project, but suggestions are welcome! Please open an issue to discuss proposed changes.

## 📄 License

All rights reserved. Photography and content © All of the Humans.

---

Built with ❤️ for capturing life's beautiful moments.