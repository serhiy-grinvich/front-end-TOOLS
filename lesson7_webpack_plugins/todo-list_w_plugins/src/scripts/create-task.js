import { getItem, setItem } from './storage.js';
import { renderTasks } from './render-list.js';
import { createNewTask, getTasksList } from './tasksGateway.js';

export const addNewTask = () => {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value;
  if (text === '') return;

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
    finishDate: null,
  };
  createNewTask(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks(); // - try
    });
  // .then(() => {
  //   setItem('tasksList', getTasksList());
  //   renderTasks(); // - try
  // });

  inputElem.value = '';
};

// prepare data
// add it to Dbase
// read (get) data from server
// save new data to front-end storage
// update UI based on new data
