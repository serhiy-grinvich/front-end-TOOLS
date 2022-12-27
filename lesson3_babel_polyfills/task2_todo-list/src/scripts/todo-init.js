import { addNewTask } from './create-task.js';
import { onCheckboxChange } from './toggle-task.js';
import { onDeleteTask } from './delete-task.js';

export const todoListInitHandlers = () => {
  const createTaskBtn = document.querySelector('.create-task-btn');
  createTaskBtn.addEventListener('click', addNewTask);

  const onTaskChange = event => {
    if (event.target.classList.contains('list-item__checkbox')) {
      onCheckboxChange(event);
    }
    if (event.target.classList.contains('list-item__delete-btn')) {
      onDeleteTask(event);
    }
  };
  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onTaskChange);
};
