**Role:**  
Provides LISA’s core time-management capabilities: task tracking, reminders, and natural-language event creation.

**Features:**
- Command-line task entry (Week 1 CLI MVP).  
- Reminder scheduler (Python `sched` / APScheduler).  
- Desktop notifications (`notify-send`).  
- Natural-language parsing via local LLM + dateparser/Duckling.  
- Recurring tasks configuration in module settings.
- Calendar integration for viewing and managing events.
- Priority-based task management to help users focus on important tasks.
- Time-blocking feature to allocate specific time slots for tasks.

**Examples of Usage:**

1. **Task Management:**
   - "LISA, add a task to complete the project report by Friday."
   - "LISA, set a reminder to call the client at 2 PM tomorrow."

2. **Event Scheduling:**
   - "LISA, schedule a meeting with the team at 3 PM on Monday."
   - "LISA, add a doctor's appointment to my calendar for next Wednesday at 10 AM."

3. **Natural Language Processing:**
   - "LISA, remind me to buy groceries every Saturday at 10 AM."
   - "LISA, block time for studying from 6 PM to 8 PM every weekday."

4. **Priority Management:**
   - "LISA, mark the project report as a high-priority task."
   - "LISA, list all high-priority tasks for today."

**Benefits:**
- Automated reminders keep you on track.  
- Flexible input: free-form language or structured commands.  
- Modular contexts (work, home, study) isolate schedules.
- Improved productivity through efficient task and time management.
- Enhanced focus on important tasks with priority-based management.
- Better organization and planning with calendar integration and time-blocking.
