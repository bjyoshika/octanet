const A = document.getElementById('task-area');
const B = document.getElementById('single-task');
const C = document.getElementById('tasks'); 

function addTask(event){
    event.preventDefault();
    if(B.value=='') return;
    const task = CreateTask(B.value);
    C.appendChild(task);
    B.value='';
}
function CreateTask(taskName){
    const task=document.createElement('li');
    task.classList.add('task');
    task.innerHTML = `
    <input type="checkbox">
    <label>${taskName}</label>
    <span class="delete">&times;</span>
    `;
    const deleteButton=task.querySelector('.delete');
deleteButton.addEventListener('click',deleteTask);
return task;
}
function deleteTask(event){
    event.target.preventElement.remove();
}

A.addEventListener('submit',addTask);