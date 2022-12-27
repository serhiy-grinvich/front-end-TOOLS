import { todoListInitHandlers } from './todo-init.js';
import { renderTasks } from './render-list.js';
import { getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';

const onPageLoaded = () => {
  todoListInitHandlers();
  getTasksList().then(tasksList => {
    setItem('tasksList', tasksList);
    renderTasks();
  });
};
document.addEventListener('DOMContentLoaded', onPageLoaded);

const onStorageChange = event => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);

// get data from server
// save data to front-end storage
// update UI based on data from server
