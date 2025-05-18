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
        

**Benefits of Using Ubuntu Linux for LISA:**

1. **Stability and Reliability:**
   - Ubuntu Linux is known for its stability and reliability, making it an ideal choice for development and deployment environments.
   - Long-term support (LTS) versions provide extended support and regular updates, ensuring a secure and stable system.

2. **Extensive Software Repository:**
   - Ubuntu offers a vast repository of software packages, making it easy to install and manage the necessary tools and libraries for LISA.
   - The availability of pre-built packages reduces the time and effort required for setup and maintenance.

3. **Strong Community Support:**
   - Ubuntu has a large and active community of users and developers who contribute to its ecosystem. This ensures that users can find extensive documentation, tutorials, and support for any issues they encounter.
   - The strong community support also ensures that Ubuntu is regularly updated and maintained.

4. **Compatibility with Hardware and Software:**
   - Ubuntu provides excellent compatibility with a wide range of hardware, including NVIDIA GPUs, which are essential for model inference in LISA.
   - The operating system also supports various software libraries and tools required for LISA, such as Python, system notifications, and more.

5. **Security Features:**
   - Ubuntu includes built-in security features, such as a firewall (UFW) and regular security updates, to protect the system from potential threats.
   - The operating system also supports encryption and secure boot, ensuring the integrity and confidentiality of data.

**Suggested Sections for This Note:**

- **Hardware Compatibility:** ensuring GPU and sound devices work
    
- **Firewall & Security:** configuring `ufw` for local-only services
    
- **Swap Configuration:** setting up swap if RAM is constrained during model loading
    
- **Automations & Services:** running LISA as a background service (systemd unit example)
    

---

Let me know the next note to create!
