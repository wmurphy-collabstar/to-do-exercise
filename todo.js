const task = document.getElementById('taskInput');
const addBtn = document.getElementById('addTask');
const list = document.getElementById('taskList');

function createListItem(taskText){
    const listItem = document.createElement('li');
    listItem.setAttribute("class", "item");
    listItem.textContent = taskText;
    return listItem;
}

function addTask(){
    const taskText = task.value;
    if (!taskText.trim()){return;}
    if (list.innerText.toLowerCase().includes(taskText.toLowerCase())){ return;}
    const listItem = createListItem(taskText);
    list.append(listItem);
    task.value = '';
}

function completeTask(event){
    if (!event.target.classList.contains('item')){return;}
    event.target.classList.toggle('completed');
}

addBtn.addEventListener("click", addTask);
list.addEventListener("click", completeTask);
