// Selectors
const addTaskForm = document.querySelector('.add-task');
const taskList = document.querySelector('.task-list');

// Add task
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskName = addTaskForm.querySelector('input[type="text"]').value.trim();
    if (taskName === '') return;

    const taskDate = new Date();
    const taskHTML = `
        <li>
            <span class="task-name">${taskName}</span>
            <span class="task-date">${taskDate.toLocaleDateString()}</span>
            <div class="task-actions">
                <button class="edit-button">Editar</button>
                <button class="delete-button">Excluir</button>
            </div>
        </li>
    `;
    taskList.insertAdjacentHTML('beforeend', taskHTML);

    // Clear form
    addTaskForm.querySelector('input[type="text"]').value = '';
});

// Edit and delete task
taskList.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.classList.contains('edit-button') && !target.classList.contains('delete-button')) return;

    const task = target.closest('li');
    const taskName = task.querySelector('.task-name').textContent;
    const taskDate = task.querySelector('.task-date').textContent;

    if (target.classList.contains('edit-button')) {
        const newTaskName = prompt('Editar tarefa:', taskName);
        if (newTaskName === null || newTaskName.trim() === '') return;

        task.querySelector('.task-name').textContent = newTaskName;
        task.querySelector('.task-date').textContent = new Date().toLocaleDateString();
    } else if (target.classList.contains('delete-button')) {
        if (!confirm('Tem certeza que deseja excluir esta tarefa?')) return;

        taskList.removeChild(task);
    }
});
