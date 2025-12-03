# NFL Injury Recovery Research Website - Foundation

## 📁 Project Structure

```
nfl-injury-research-site/
├── index.html          # Main HTML structure (scaffolded)
├── css/
│   └── global.css      # Global styles, variables, utilities
├── js/
│   └── app.js          # Base JavaScript with animation controllers
├── assets/             # Images, icons, media (empty for now)
└── README.md           # This file
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#002244` - NFL side, headings
- **Primary Red**: `#D50A0A` - Non-Pro side, CTAs, accents
- **Secondary Blue**: `#0066cc` - Links, highlights
- **Accent Red**: `#FF1744` - Hover states
- **Neutrals**: White, light gray, mid gray, dark gray, black

### Typography
- **Headings**: Montserrat (700, 800, 900 weights)
- **Body**: Open Sans (400, 600, 700 weights)
- Responsive sizing using `clamp()` for fluid typography

### Spacing System
- `--spacing-xs`: 8px
- `--spacing-sm`: 16px
- `--spacing-md`: 24px
- `--spacing-lg`: 40px
- `--spacing-xl`: 60px
- `--spacing-2xl`: 80px

## 🏗️ HTML Structure

### Sections (In Order)
1. **Navigation** - Sticky nav bar
2. **Hero** - Full-viewport hero with animations
3. **Stats Banner** - Animated statistics
4. **Comparison Slider** - Interactive split-screen
5. **Key Findings** - Research findings grid
6. **Injury Selector** - Tabs with race chart
7. **Timeline** - Dual recovery timeline
8. **Tech Showcase** - Medical tech cards
9. **Research Overview** - Summary section
10. **CTA Section** - Final call-to-action
11. **Footer** - Site footer

### Modals
- `#techModal` - For tech details
- `#caseModal` - For case studies

## 🎯 JavaScript Features

### Core Systems
- **Scroll Observer**: Efficient scroll-triggered animations using IntersectionObserver
- **Counter Animation**: Animates numbers from 0 to target
- **Modal System**: Reusable modal open/close with ESC key support
- **Smooth Scroll**: Anchor link smooth scrolling

### Utility Functions
- `createScrollObserver()` - Create scroll observers
- `staggerAnimation()` - Cascading animations
- `animateCounter()` - Number animations
- `debounce()` - Rate limiting
- `isInViewport()` - Viewport detection
- `addClassWithDelay()` - Delayed class addition
- `getCSSVariable()` - CSS variable getter

### Placeholder Functions (To Be Implemented)
- `initComparisonSlider()`
- `initInjurySelector()`
- `initTimelineAnimations()`
- `initTechModals()`
- `initNavigation()`

## 🎨 CSS Utilities

### Animation Classes
- `.fade-in` - Fade in animation
- `.fade-in-up` - Fade in with upward motion
- `.slide-in-left` - Slide in from left
- `.slide-in-right` - Slide in from right

### Spacing Utilities
- `.mt-*` / `.mb-*` - Margin top/bottom (xs, sm, md, lg, xl)

### Text Alignment
- `.text-center`, `.text-left`, `.text-right`

### Section Backgrounds
- `.section-white`, `.section-gray`, `.section-blue`, `.section-red`

## 🚀 Usage

### Adding Animated Counters
```html
<div data-counter="3.5" data-duration="2000">0</div>
```

### Using Scroll Observers
```javascript
createScrollObserver('.my-element', (element) => {
    element.classList.add('fade-in');
}, { threshold: 0.3 });
```

### Opening Modals
```javascript
openModal('techModal', '<h2>Content Here</h2><p>Details...</p>');
```

## 📱 Responsive Breakpoints
- **1200px**: Large desktop
- **992px**: Desktop
- **768px**: Tablet
- **576px**: Mobile

## ✅ What's Ready
- ✅ Clean HTML structure with semantic sections
- ✅ Complete design system (colors, typography, spacing)
- ✅ CSS variables for consistent theming
- ✅ Base animation system
- ✅ Scroll observer infrastructure
- ✅ Counter animations
- ✅ Modal system
- ✅ Smooth scrolling
- ✅ Utility classes
- ✅ Responsive breakpoints

## 🔜 Next Phase
Building individual sections with content:
- Navigation bar with menu
- Hero section with animations
- Stats banner
- Interactive features
- And more...

## 🧪 Testing
Open `index.html` in a browser. You should see:
- Console message: "🏈 NFL Injury Recovery Research - Initializing..."
- Console message: "✅ App initialized successfully"
- Empty page with proper font loading

## 📝 Notes
- All placeholder functions are marked with comments
- Section styles are stubbed in CSS for easy expansion
- Global state is stored in `window.APP` for debugging
- Modal functions are exposed globally for console testing
