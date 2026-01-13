# Next.js Advanced Routing & Rendering 

A comprehensive demonstration of Next.js 14+ routing, rendering strategies, and architectural patterns. This project showcases professional implementation of file-based routing with advanced features like parallel routes, intercepting routes, dynamic routing, and error boundaries.

## 🎯 Live Demonstration

<div align="center">

<h3>Project Overview & Live Demo</h3>

<div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin: 30px 0;">

<a href="https://next-news-routing-rendering.vercel.app/news" target="_blank" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 15px 30px; border-radius: 12px; color: white; font-weight: bold; font-size: 18px; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3); transition: all 0.3s ease; border: 2px solid white;">
    View Live Application
  </div>
</a>

</div>

</div>

## 📸 Project Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/Figrac0/Next-News_routing-rendering/main/screenshots/1.png" alt="Home Page - NextNews Landing" width="400"/><br/>
</p>

---

<p align="center">
  <img src="https://raw.githubusercontent.com/Figrac0/Next-News_routing-rendering/main/screenshots/2.png" alt="News Listing - Article Grid View" width="400"/><br/>
</p>

---

<p align="center">
  <img src="https://raw.githubusercontent.com/Figrac0/Next-News_routing-rendering/main/screenshots/3.png" alt="Article Detail - Full Content View" width="400"/><br/>
</p>

---

<p align="center">
  <img src="https://raw.githubusercontent.com/Figrac0/Next-News_routing-rendering/main/screenshots/4.png" alt="Archive Filtering - Year/Month Navigation" width="400"/><br/>
</p>

---

<p align="center">
  <img src="https://raw.githubusercontent.com/Figrac0/Next-News_routing-rendering/main/screenshots/5.png" alt="Modal Image View - Intercepted Route" width="400"/><br/>
</p>

---

## 🚀 Technical Overview

This project implements a news application that serves as a practical case study for modern Next.js routing capabilities. The architecture demonstrates how to build maintainable, scalable applications using Next.js 14's App Router paradigm.

### 🔧 Core Routing Features Demonstrated

**Dynamic Routing with Catch-All Segments**
- Implementation of `[[...filter]]` pattern for archive filtering (year/month)
- Nested dynamic routing with validation and error handling
- Optional catch-all segments for flexible URL structures

**Parallel & Intercepting Routes**
- `@modal` slot for intercepted image views
- `@latest` slot for dedicated latest news section
- Parallel route groups `(marketing)` and `(content)` for logical separation
- Intercepting routes for modal presentations without navigation

**Layout Hierarchies & Composition**
- Nested layouts with shared UI components
- Root layout with global styling and metadata
- Route group-specific layouts
- Layout composition with slot-based architecture

**Advanced Error Handling**
- `error.js` for component-level error boundaries
- `not-found.js` for 404 handling at segment levels
- Granular error states with user-friendly recovery
- Error propagation through route segments

### 🏗️ Project Structure Highlights

The project follows Next.js 14+ App Router conventions with a focus on:

1. **Route Groups** - Logical organization using parentheses `(group-name)`
2. **Private Folders** - Underscore-prefixed directories for internal modules
3. **Slot-based Architecture** - Using `@` prefix for parallel route slots
4. **Server/Client Component Separation** - Strategic "use client" directives
5. **Metadata API** - SEO optimization with segment-specific metadata

### 🎯 Key Technical Implementations

- **Archive Filtering System**: Dynamic breadcrumb navigation with validation
- **Image Interception**: Modal image views with backdrop click handling
- **Conditional Rendering**: Context-aware UI based on URL parameters
- **Data Fetching Patterns**: Utility functions for news aggregation and filtering
- **Responsive Design**: Mobile-first approach with Tailwind CSS


```js
app/
├── (content)/                 # Route group for content pages
│   ├── news/                 # News section
│   │   ├── [slug]/           # Dynamic news article routes
│   │   │   ├── @modal/       # Parallel slot for intercepted modals
│   │   │   │   └── image/
│   │   │   │       └── page.js
│   │   │   ├── image/
│   │   │   │   └── page.js
│   │   │   ├── layout.js     # Nested layout with modal slot
│   │   │   └── page.js       # Article detail page
│   │   ├── not-found.js      # Section-specific 404
│   │   └── page.js           # News listing
│   └── archive/              # Archive section
│       ├── @latest/          # Parallel slot for latest news
│       │   └── page.js
│       ├── [[...filter]]/    # Catch-all archive filtering
│       │   ├── error.js      # Filter error handling
│       │   └── page.js
│       ├── layout.js         # Archive-specific layout
│       └── page.js           # Archive main page
├── (marketing)/              # Marketing route group
│   ├── api/                  # API routes
│   ├── layout.js
│   └── page.js               # Home page
├── globals.css               # Global styles
├── layout.js                 # Root layout
└── not-found.js              # Global 404
```

## 🧠 Learning Outcomes

This project serves as a practical demonstration of:

- **Advanced Next.js 14+ App Router patterns** - Mastery of modern routing paradigms
- **Production-ready error handling strategies** - Robust error boundaries and fallback UI
- **Optimal component composition patterns** - Efficient component hierarchy and reusability
- **Performance optimization through route segmentation** - Strategic code splitting
- **Maintainable code organization for scalable applications** - Clean architecture and separation of concerns

## 🎨 Styling & UI

- **Tailwind CSS for utility-first styling** - Rapid UI development with consistency
- **Responsive design patterns** - Mobile-first approach across all viewports
- **Accessible navigation components** - ARIA-compliant interactive elements
- **Consistent spacing and typography scales** - Design system implementation
- **Interactive states with smooth transitions** - Enhanced user experience with animations

## 📈 Performance Considerations

- **Strategic component splitting for optimal loading** - Reduced initial bundle size
- **Route-based code splitting** - Automatic performance optimization
- **Efficient data fetching patterns** - Minimized network requests
- **Image optimization strategies** - Proper sizing and format selection
- **Client-side navigation preservation** - Smooth transitions between pages

## 🛠️ Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
