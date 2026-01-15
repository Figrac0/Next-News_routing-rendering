# Next.js Advanced Routing & Rendering 

A comprehensive demonstration of Next.js 14+ routing, rendering strategies, and architectural patterns. This project showcases professional implementation of file-based routing with advanced features like parallel routes, intercepting routes, dynamic routing, and error boundaries.

## 🎯 Live Demonstration

<div align="center">

<h3>Project Overview & Live Demo</h3>

<div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin: 30px 0;">

<a href="https://next-news-routing-rendering-jts9.vercel.app/" target="_blank" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 15px 30px; border-radius: 12px; color: white; font-weight: bold; font-size: 18px; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3); transition: all 0.3s ease; border: 2px solid white;">
    View Live Application
  </div>
</a>

</div>

</div>

## 📸 Project Preview

<p align="center">
  <img src="https://github.com/Figrac0/Next-News_routing-rendering/blob/Routing%2BData_Fetching/screenshots/maingif.gif" alt="Project Demo GIF - Full Application Walkthrough" width="800"/><br/>
</p>

---

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

This project implements a full-stack news application that serves as a practical case study for modern Next.js routing capabilities combined with professional data management patterns. The architecture demonstrates how to build maintainable, scalable applications using Next.js 14's App Router paradigm with a robust SQLite backend.

### 🔧 Core Features Demonstrated

**Advanced Routing Architecture**
- Implementation of `[[...filter]]` pattern for archive filtering (year/month)
- Parallel routes with `@modal` for intercepted image views and `@latest` for dedicated content sections
- Route groups `(marketing)` and `(content)` for logical separation
- Intercepting routes for modal presentations without navigation

**Data Management & Fetching**
- SQLite database with `better-sqlite3` for persistent data storage
- Server-side data fetching with async/await patterns
- Comprehensive data utility layer with news aggregation and filtering
- Proper error handling for data fetching scenarios

**Performance Optimization**
- Streaming and Suspense for progressive loading
- Skeleton loading states for improved UX
- Strategic component splitting for optimal loading
- Route-based code splitting and data caching

**User Experience Enhancements**
- Responsive design with Tailwind CSS
- Accessible navigation components
- Smooth transitions and animations
- Breadcrumb navigation with dynamic filtering

### 🏗️ Architecture Highlights

**Frontend Structure**
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


**Backend Structure**
```js
backend/
├── app.js # Express server with REST API
├── data.db # SQLite database
└── package.json # Backend dependencies
```

**Data Layer Implementation**
- **Database**: SQLite with `better-sqlite3` for lightweight persistence
- **API**: RESTful endpoints for news data access
- **Utilities**: Comprehensive functions for filtering, sorting, and pagination
- **Synchronization**: Automatic data seeding and schema management

### 🎯 Key Technical Implementations

**SQLite Integration**
- Server-side SQLite database initialization
- Prepared statements for optimized queries
- Automatic data seeding on first launch
- Date-based filtering with SQL functions

**Data Fetching Patterns**
- Async server components for data loading
- Suspense boundaries for loading states
- Error boundaries for graceful failure handling
- Optimistic UI updates

**Performance Features**
- Skeleton loading components for archive filtering
- Progressive image loading
- Route pre-fetching
- Memory-efficient data handling

**State Management**
- URL-based state for filtering
- Component-level loading states
- Error state propagation
- Modal state management

## 📊 Data Flow & API Design

**Database Schema**
```sql
news (
  id INTEGER PRIMARY KEY,
  slug TEXT UNIQUE,
  title TEXT,
  content TEXT,
  date TEXT,
  image TEXT
)
```
## 📊 Data Flow & API Design

### API Endpoints
- **GET /api/news** - Retrieve all news articles
- Filtering by year/month via query parameters
- Automatic date parsing and sorting

### Data Utility Functions
- **`getAllNews()`** - Fetch complete news dataset
- **`getNewsItem(slug)`** - Retrieve specific article
- **`getLatestNews()`** - Get most recent articles
- **`getAvailableNewsYears()`** - Extract unique publication years
- **`getNewsForYear(year)`** - Year-based filtering
- **`getNewsForYearAndMonth(year, month)`** - Date-range filtering

## 🧠 Learning Outcomes

This project serves as a practical demonstration of:

### Advanced Next.js 14+ Patterns
- Mastery of modern App Router paradigms with async components
- Production-ready error handling and loading states
- Optimal component composition and data flow patterns
- Performance optimization through strategic code splitting
- Maintainable architecture for scalable applications

### Full-Stack Development
- SQLite database integration and management
- REST API design and implementation
- Server-side data fetching strategies
- Data persistence and synchronization

### Performance Engineering
- Streaming and Suspense implementation
- Skeleton loading patterns
- Route-based code splitting
- Efficient data fetching and caching

### Professional Development Practices
- Clean architecture with separation of concerns
- Comprehensive error handling
- Responsive and accessible design
- Production-ready deployment configuration

## 🎨 Styling & UI Architecture

### Design System
- **Tailwind CSS** for utility-first styling and rapid development
- **Component Library** with reusable, accessible components
- **Responsive Patterns** mobile-first approach across all viewports
- **Animation System** smooth transitions and loading states

### Loading States
- Custom skeleton components for various content types
- Progressive disclosure of information
- Context-aware loading indicators
- Error state visual design

### Navigation & Interaction
- ARIA-compliant navigation components
- Breadcrumb navigation with dynamic paths
- Modal interactions with backdrop management
- Filtering UI with visual feedback

## 📈 Performance Considerations

### Loading Optimization
- Strategic component splitting for reduced initial bundle size
- Route-based code splitting with automatic optimization
- Image optimization with proper sizing and format selection
- Font and asset preloading strategies

### Data Management
- Efficient SQL queries with prepared statements
- Client-side navigation preservation for smooth transitions
- Data caching patterns for repeated requests
- Memory-efficient data handling

### Rendering Performance
- Server-side rendering for initial load
- Static generation for predictable content
- Incremental static regeneration for dynamic data
- Optimal re-render strategies

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ and npm/yarn
- SQLite3 (system-level or via better-sqlite3)

## 🔧 Technology Stack

### Frontend
- Next.js 14.1.0 with App Router
- React 18 with Server Components
- Tailwind CSS for styling
- better-sqlite3 for client-side data access

### Backend
- Express.js server
- SQLite database
- CORS middleware for cross-origin requests
- REST API design

### Development Tools
- ESLint for code quality
- Built-in Next.js development server
- Hot reload for rapid development

## 🚀 Deployment Considerations

### Frontend Deployment
- Optimized for Vercel deployment
- Static generation where applicable
- Incremental static regeneration
- Image optimization via Next.js

### Backend Deployment
- Compatible with Node.js hosting platforms
- SQLite database file included in deployment
- Minimal dependencies for easy deployment
- Environment variable configuration

### Performance Optimization
- CDN for static assets
- Database connection pooling
- Caching strategies
- Monitoring and analytics integration

