let dailyTasks = JSON.parse(localStorage.getItem('eduDailyTasks')) || [];

function getTodayDate() {
    const date = new Date();
    return date.toISOString().split('T')[0];
}

function getTodayTasks() {
    const today = getTodayDate();
    let dayData = dailyTasks.find(d => d.date === today);
    if (!dayData) {
        dayData = { date: today, tasks: [] };
        dailyTasks.push(dayData);
    }
    return dayData.tasks;
}

function updateUI() {
    const list = document.getElementById('taskList');
    const progressText = document.getElementById('progress-text');
    const progressDate = document.getElementById('progress-date');
    const ring = document.querySelector('.progress-ring');

    list.innerHTML = '';

    const tasks = getTodayTasks();
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        if (task.done) li.classList.add('completed');

        li.innerHTML = `
            <input type="checkbox" ${task.done ? 'checked' : ''} onchange="toggleTask(${index})">
            <span>${task.text}</span>
        `;
        list.appendChild(li);
    });


    const completedCount = tasks.filter(t => t.done).length;
    const totalTasks = tasks.length;
    const percent = totalTasks === 0 ? 0 : Math.round((completedCount / totalTasks) * 100);

    progressText.innerText = `${percent}%`;
    const today = getTodayDate();
    progressDate.innerText = `${formatDate(today)}`;

    ring.style.background = `conic-gradient(#6366f1 ${percent}%, #e2e8f0 ${percent}%)`;

    updateSidebar();

    localStorage.setItem('eduDailyTasks', JSON.stringify(dailyTasks));
}

function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();

    if (text === '') return;

    const tasks = getTodayTasks();
    tasks.push({ text: text, done: false });
    input.value = '';
    updateUI();
}

function toggleTask(index) {
    const tasks = getTodayTasks();
    tasks[index].done = !tasks[index].done;
    updateUI();
}

function clearTasks() {
    const tasks = getTodayTasks();
    if (tasks.length === 0) return;
    if (confirm('Are you sure you want to clear today\'s tasks?')) {
        tasks.length = 0;
        updateUI();
    }
}

function updateSidebar() {
    const sidebar = document.getElementById('historySidebar');
    sidebar.innerHTML = '';

    const sorted = [...dailyTasks].sort((a, b) => new Date(b.date) - new Date(a.date));

    sorted.forEach(day => {
        const completed = day.tasks.filter(t => t.done).length;
        const total = day.tasks.length;
        const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

        const dayEl = document.createElement('div');
        dayEl.className = 'history-item';
        dayEl.innerHTML = `
            <div class="history-date">${formatDate(day.date)}</div>
            <div class="history-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percent}%"></div>
                </div>
                <span class="progress-label">${completed}/${total}</span>
            </div>
        `;
        sidebar.appendChild(dayEl);
    });
}

function formatDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const dateOnly = new Date(dateStr);
    const todayStr = new Date().toISOString().split('T')[0];
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    if (dateStr === todayStr) return 'Today';
    if (dateStr === yesterdayStr) return 'Yesterday';

    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

updateUI();