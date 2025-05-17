
**Role in LISA (Future Web UI):**

- Optional language for building a lightweight, local web interface to interact with LISA.
    
- Enables dynamic front-end behavior (form handling, live updates) when served via Flask or FastAPI.
    

**Environment & Version:**

- Node.js 16+ (for any build tooling or npm scripts)
    
- Vanilla JS or lightweight framework (e.g., Svelte)—no heavy dependencies.
    

**Key Concepts & Libraries:**

- **AJAX / Fetch API** – send/receive JSON requests to the LISA backend
    
- **DOM Manipulation** – update task lists, reminders, and Q&A responses dynamically
    
- **Optional Framework:**
    
    - **Svelte** – compile-time framework for minimal runtime overhead
        
    - Plain ES6 modules if a framework isn’t desired
        
- **Bundling & Tooling (Optional):**
    
    - Rollup or Vite for bundling (only if using a framework)
        
    - NPM scripts for build/watch tasks
        

**Suggested Sections for This Note:**

1. **Setup & Tooling**: installing Node.js, initializing `package.json`
    
2. **API Endpoints**: list of REST routes served by the Python backend (`/tasks`, `/ask`, `/add`)
    
3. **Front-End Structure**: suggested file layout under `web/static/js/`
    
4. **Dynamic Interaction**: using Fetch to add tasks, poll for reminders, display Q&A
    
5. **Styling**: minimal CSS or integration with Bootstrap via CDN
    
6. **Deployment**: serving static assets from Flask/FastAPI
    

---

Let me know which linked note you’d like to tackle next!