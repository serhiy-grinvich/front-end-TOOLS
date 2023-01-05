import { getItem, setItem } from './storage.js';
import { renderTasks } from './render-list.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';

export const onDeleteTask = (event) => {
  const { taskId } = event.target.dataset;
  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

// find id
// delete from Dbase
// read (get) data from server
// save new data to front-end storage
// update UI based on new data
