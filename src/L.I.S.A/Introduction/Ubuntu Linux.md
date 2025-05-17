
**Role in LISA:**

- Primary operating system for development and deployment.
    
- Provides native support for necessary libraries (e.g., Python, system notifications) and hardware drivers (especially NVIDIA GPUs for model inference).
    

**Version Recommendations:**

- Ubuntu 22.04 LTS or later (for long-term support and updated packages)
    
- Kernel ≥ 5.15 for broad hardware compatibility
    

**Key Setup Steps:**

1. **System Update:**
    
    ```bash
    sudo apt update && sudo apt upgrade
    ```
    
2. **Python & Node Installation:**
    
    ```bash
    sudo apt install python3 python3-venv python3-pip nodejs npm
    ```
    
3. **GPU Drivers & CUDA:**
    
    - Install NVIDIA drivers via `Additional Drivers` or:
        
        ```bash
        sudo apt install nvidia-driver-535
        ```
        
    - (Optional) CUDA toolkit for GPU acceleration with PyTorch or TensorFlow.
        
4. **Desktop Notifications:**
    
    ```bash
    sudo apt install libnotify-bin
    ```
    
    - Enables `notify-send` for visual reminders.
        
5. **Other Tools:**
    
    - `git` for version control
        
    - `build-essential` for any native extensions
        
    - `faiss-cpu` (if using FAISS for embeddings)
        

**Suggested Sections for This Note:**

- **Hardware Compatibility:** ensuring GPU and sound devices work
    
- **Firewall & Security:** configuring `ufw` for local-only services
    
- **Swap Configuration:** setting up swap if RAM is constrained during model loading
    
- **Automations & Services:** running LISA as a background service (systemd unit example)
    

---

Let me know the next note to create!