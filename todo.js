const task = document.getElementById('taskInput');
const addBtn = document.getElementById('addTask');
const list = document.getElementById('taskList');

function createListItem(taskText){
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    return listItem;
}