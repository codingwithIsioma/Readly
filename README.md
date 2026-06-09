# Readly
 
A minimal, editorial reading platform built with pure HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies.
 
**[Live Demo →](https://codingwithisioma.github.io/Readly/)**
 
---
 
## Overview
 
Readly is a clean, distraction-free space for reading curated articles across different topics — Design, Technology, Culture, Science, World News etc. Articles are fetched live from [The Guardian Open Platform API](https://open-platform.theguardian.com), with a hardcoded fallback dataset for offline resilience.
 
The project was built as part of my cloud engineering programme at AltSchool Africa, applying everything covered in the first two months of the curriculum — from JavaScript fundamentals through to OOP, async/await, localStorage, and DOM manipulation.
 
---
 
## Features
 
- **Authentication simulation** — sign up, sign in, and sign out with user state persisted via localStorage
- **Live article feed** — articles fetched from The Guardian API on every page load
- **Topic filter pills** — filter the home feed by topic in real time
- **Real-time search** — search across all articles by title, author, or topic
- **Bookmarks** — save and remove articles; full article objects persisted to localStorage so bookmarks survive across sessions
- **Reading streak** — tracks consecutive daily visits and increments automatically
- **Favourite topics** — derived from a Map that records how many articles per topic the user has read
- **Skeleton loader** — shimmer placeholder shown while articles are fetching
- **Delete account** — permanently removes all user data from localStorage
---
 
## Pages
 
| Page | Description |
|---|---|
| `index.html` | Landing page — introduces Readly to new visitors |
| `signup.html` | Registration form with full input validation |
| `signin.html` | Sign in form with credential check against localStorage |
| `home.html` | Main article feed with search, filters, and bookmarking |
| `article.html` | Full article reading page |
| `bookmarks.html` | Saved articles |
| `search.html` | Dedicated search page |
| `profile.html` | User stats, favourite topics, and account management |
 
---
 
## Tech Stack
 
- **HTML5** — semantic structure, one file per page
- **CSS3** — custom properties, CSS Grid, Flexbox, animations
- **JavaScript (ES6+)** — vanilla JS, no frameworks
- **The Guardian Open Platform API** — live article data
- **localStorage** — all persistence; auth state, bookmarks, streak
- **Google Fonts** — Lora (serif) + DM Sans (sans-serif)
---
 
## Project Structure
 
```
readly/
│
├── index.html
├── signup.html
├── signin.html
├── home.html
├── article.html
├── bookmarks.html
├── search.html
├── profile.html
│
├── css/
│   ├── global.css
│   ├── nav.css
│   ├── auth.css
│   ├── home.css
│   ├── article.css
│   └── profile.css
│
└── js/
    ├── classes/
    │   ├── User.js
    │   ├── Article.js
    │   ├── BookmarkManager.js
    │   ├── StreakTracker.js
    │   ├── TopicTracker.js
    │   └── ApiService.js
    ├── data.js
    ├── nav.js
    ├── signup.js
    ├── signin.js
    ├── home.js
    ├── article.js
    ├── bookmarks.js
    ├── search.js
    └── profile.js
```
 
---
 
## OOP Architecture
 
All core logic is organised into ES6 classes inside `js/classes/`:
 
| Class | Responsibility |
|---|---|
| `User` | Stores name, email, password, and session state. Handles save/load to localStorage. |
| `Article` | Wraps article data. Static `render()` method builds HTML card strings. |
| `BookmarkManager` | Owns bookmarks as a Map of full article objects. Handles add, remove, persistence. |
| `StreakTracker` | Tracks streak count and last visit date. Auto-increments on new day visits. |
| `TopicTracker` | Owns a Map of topic read counts. Derives top 3 favourite topics for the profile page. |
| `ApiService` | All Guardian API fetch logic. Transforms raw API response to match local data shape. Falls back to `data.js` on failure. |
 
Classes are shared across pages by linking them as `<script>` tags before each page's own script — no module bundler required.
 
---
 
## Getting Started
 
### Prerequisites
 
- A modern browser
- A free Guardian API key — register at [open-platform.theguardian.com](https://open-platform.theguardian.com)
### Running locally
 
1. Clone the repository
```bash
git clone https://github.com/codingwithisioma/Readly.git
cd Readly
```
 
2. Add your Guardian API key
Open `js/classes/ApiService.js` and replace the `api_key` variable with your own key:
 
```javascript
const api_key = "your-api-key-here";
```
 
3. Open `index.html` in your browser or serve with a local server
```bash
# Using VS Code Live Server, or
npx serve .
```
 
> **Note:** The Guardian API requires requests to be made from a server context. Opening `index.html` directly as a file may cause CORS issues depending on your browser. Use a local server for best results.
 
---
 
## Concepts Applied
 
This project was built to apply the following concepts covered during my first two months at AltSchool Africa:
 
- JavaScript fundamentals — data types, operators, conditionals, loops
- Functions, scope, and closures
- Arrays, Maps, and Sets
- Destructuring assignment
- DOM manipulation and event listeners
- Browser Object Model — `window.location`, `window.history`
- OOP — classes, constructors, inheritance, static methods
- Async JavaScript — Promises, async/await, fetch API
- localStorage for client-side persistence
- Git and GitHub for version control
---
 
## Author
 
**Ezekiel Blessing Isioma** — AltSchool Africa, Cloud Engineering Track (Cohort 5)
 
- GitHub: [@codingwithisioma](https://github.com/codingwithisioma)
---
 
## License
 
This project is open source and available under the [MIT License](LICENSE).