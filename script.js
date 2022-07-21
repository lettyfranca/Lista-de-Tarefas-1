/**
 * Lista de Tarefas #1
 * @author Letícia França
 * By: Programación Accesible
 */

//Informações de datas
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

//Container de tarefas
const tasksContainer = document.getElementById('tasksContainer');

//função usada para inserir corretamente as informações da data.
const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('pt-br', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('pt-br', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('pt-br', { month: 'short' });
    dateYear.textContent = date.toLocaleString('pt-br', { year: 'numeric' });
};

//função usada para adicionar novas tarefas
const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach(itens => {
        itens.classList.contains('done') ? done.push(itens) : toDo.push(itens)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    order().forEach(itens => tasksContainer.appendChild(itens))
}

setDate();