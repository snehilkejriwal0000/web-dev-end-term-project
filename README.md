[readme (1).md](https://github.com/user-attachments/files/24943746/readme.1.md)

EduTrack | Daily Progress Dashboard
EduTrack is a sleek, glassmorphism-inspired productivity tool designed to help learners track their daily educational goals. It features a persistent progress ring and a historical sidebar to visualize learning consistency over time.

🚀 Problem Statement
Learners often struggle to maintain a clear overview of their daily accomplishments and historical consistency. Traditional "to-do" lists lack visual motivation and fail to show how today's efforts compare to previous days. EduTrack solves this by providing immediate visual feedback via a dynamic progress ring and an automated history log.

✨ Features Implemented
Persistent Data: Uses localStorage to save your tasks and history even after refreshing the page.

Dynamic Progress Ring: A conic-gradient visualization that updates in real-time as tasks are completed.

Automated History Sidebar: Automatically tracks and calculates completion percentages for previous dates.

Responsive Glassmorphism UI: A modern, mobile-friendly design using backdrop filters and CSS variables.

Relative Dating: Smart date formatting that displays "Today" and "Yesterday" for better readability.

🧠 DOM Concepts Used
Document Querying: Using getElementById, querySelector, and querySelectorAll to access elements.

Event Handling: Implementing onclick, onchange, and input listeners to trigger logic.

Dynamic Element Creation: Using document.createElement to generate list items and history entries on the fly.

Style Manipulation: Directly updating element.style.background (for the progress ring) and element.style.width (for progress bars).

Attribute Management: Modifying classes via classList.add/remove and setting attributes like checked.

🛠️ Steps to Run the Project
Clone or Download: Save the index.html, style.css, and script.js files into the same folder.

Open in Browser: Double-click the index.html file or right-click and select "Open with..." (Chrome, Firefox, or Edge recommended).

Interact:

Type a goal in the input field and click Add Task.

Click the custom checkboxes to mark goals as done.

Observe the History sidebar update as you add data over different calendar days.

⚠️ Known Limitations
Manual Date Simulation: Since the app uses the system's current date, users cannot manually add tasks to "past" dates through the UI; history is built naturally as the days pass.

Browser Specific Storage: Data is stored in the browser's localStorage, meaning it won't sync across different devices or different browsers.

Single Category: The current version supports a single global list per day rather than categorized subjects (e.g., Math, Coding, Reading).
