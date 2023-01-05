import { todoListInitHandlers } from './scripts/todo-init.js';
import { renderTasks } from './scripts/render-list.js';
import { getTasksList } from './scripts/tasksGateway.js';
import { setItem } from './scripts/storage.js';
import './index.scss';

const onPageLoaded = () => {
  todoListInitHandlers();
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderTasks();
  });
};
document.addEventListener('DOMContentLoaded', onPageLoaded);

const onStorageChange = (event) => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);

// get data from server
// save data to front-end storage
// update UI based on data from server
