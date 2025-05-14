
**Role in LISA:**

- Primary implementation language for the assistant’s core functionality (CLI, scheduler, data handling, NLP integration).
    
- Chosen for its extensive open-source ecosystem (e.g. `sched`, APScheduler, `sqlite3`, HuggingFace Transformers, GPT4All) and ease of writing both scripts and larger applications.
    

**Version & Environment:**

- Ubuntu Linux (20.04 LTS or later)
    
- Python 3.10+ (ensure compatibility with latest libraries)
    

**Key Libraries & Tools:**

- **CLI & Scheduling:**
    
    - `argparse` / `click` – command-line argument parsing
        
    - `sched` or **APScheduler** – task reminder scheduling
        
- **Data Storage:**
    
    - `json`, `csv` – simple file formats (Week 1)
        
    - `sqlite3` – local database (Week 6)
        
- **NLP & AI Models:**
    
    - **HuggingFace Transformers** – load offline LLMs (Mistral 7B, Llama-2, etc.)
        
    - **GPT4All** – unified API for local chat models
        
    - **Duckling**, **dateparser** – date/time extraction
        
- **Notifications:**
    
    - `print` / CLI alerts (initial)
        
    - `notify-send` integration on Linux (optional desktop popup)
        
- **Optional Enhancements:**
    
    - `pyttsx3` / `eSpeak` – Text-to-Speech
        
    - Vosk / Whisper – Speech-to-Text
        

**Suggested Sections for This Note:**

1. **Installation**: setting up venv, installing dependencies
    
2. **Project Layout**: where Python code lives (`core/`, `modules/`)
    
3. **Running the CLI**: examples of `lisa` commands
    
4. **Scheduling & Notifications**: how reminders are triggered
    
5. **NLP Integration**: loading and querying LLMs offline
    
6. **Testing**: pytest setup for Python modules