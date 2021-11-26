
let taskContent = document.getElementById('task-content');
let submitTaskDisplay = document.getElementById('submit-task-display');

let addTask = document.getElementById('add-task');


let getStorage = () => JSON.parse(localStorage.getItem('todoList')) ?? [];

let setStorage = (storage) => localStorage.setItem('todoList', JSON.stringify(storage));

render();


function createTask(task, index) {

    let item = document.createElement('div');
    item.id = 'task'
    item.innerHTML = `
    <div class="task-text">${task}</div>
    <button id="btn-remove" onclick="removeTask(this)" data-index=${index}>X</button>
    `
    document.getElementById('task-list').appendChild(item);
}

function deleteTask() {
    let taskList = document.getElementById('task-list');

    while (taskList.firstChild) {
        taskList.removeChild(taskList.lastChild);
    };
};

function render() {
    deleteTask();
    let storage = getStorage();
    storage.forEach((item, index) => createTask(item.task, index))
}

function openAddTask() {
    addTask.style.display = 'none';
    submitTaskDisplay.style.display = 'flex';
};

function submitTask() {
    let storage = getStorage();
    storage.push({ 'task': taskContent.value });
    setStorage(storage);
    taskContent.value = '';
    render();
}

function btnCancel() {
    addTask.style.display = 'flex';
    submitTaskDisplay.style.display = 'none';
};

function removeTask(element) {

    let index = element.dataset.index;
    let storage = getStorage();
    storage.splice(index, 1);
    setStorage(storage);
    render();
};






