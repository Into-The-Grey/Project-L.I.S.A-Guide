
**Context in LISA:**

- Defines the local compute environment used to run and test LISA’s various components, especially the AI models.
    

**Key Components:**

- **CPU:**
    
    - AMD Ryzen Threadripper (e.g., 3960X/3970X) or Ryzen 9 series
        
    - 24–32 cores, high multi-thread performance for scheduling, data processing, and inference orchestration
        
- **Memory (RAM):**
    
    - 64–128 GB DDR4/DDR5
        
    - Ensures multiple AI models (e.g., a 7 B LLM + embedding index) can reside in memory simultaneously without swapping
        
- **GPU:**
    
    - NVIDIA mid-range cards (e.g., RTX 3060/3070/4060/4070)
        
    - At least 8 GB VRAM; 12 + GB preferred for quantized 7 B–13 B models
        
    - Enables faster inference through CUDA; compatible with PyTorch*, TensorFlow*, and other frameworks
        
- **Storage:**
    
    - SSD (NVMe preferred) for fast model loading and database access
        
    - At least 1 TB capacity to store models (several GB each), datasets, and logs
        
- **Networking (offline):**
    
    - Gigabit Ethernet or reliable Wi-Fi for local LAN access (for web UI on other devices)
        
    - No Internet dependency for inference or data fetch
        

**Suggested Sections for This Note:**

1. **Model Memory Requirements:** typical VRAM/RAM needs for Mistral 7B, TinyLlama, etc.
    
2. **Optimization Tips:** enabling mixed precision, model quantization, memory pinning
    
3. **Benchmarking:** sample commands and metrics for inference throughput and latency
    
4. **Troubleshooting:** common GPU/driver issues and fixes
    

---

Let me know when you’d like the **Offline AI Models** note!