//
import { getItem, setItem } from './storage.js';
import { renderTasks } from './render-list.js';
import { updateTask, getTasksList } from './tasksGateway.js';

export const onCheckboxChange = (event) => {
  if (!event.target.dataset.taskId) return;
  const { taskId } = event.target.dataset;
  const oldTasksList = getItem('tasksList');
  const { text, createDate, id } = oldTasksList.find((task) => task.id === taskId);
  const done = event.target.checked;
  const updatedTask = {
    text,
    id,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

// prepare data
// update  it into Dbase
// read (get) data from server
// save new data to front-end storage
// update UI based on new data
