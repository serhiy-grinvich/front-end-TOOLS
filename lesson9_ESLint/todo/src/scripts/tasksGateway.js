const baseUrl = 'https://639db0201ec9c6657baffddd.mockapi.io/api/v1/task-list';

export const getTasksList = () => fetch(baseUrl).then((response) => response.json());

export const createNewTask = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(taskData),
});

export const updateTask = (taskId, newTask) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(newTask),
});

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, { method: 'DELETE' });
// create func 4 get list from server
// create func 4 create new elem on server
// create func for update task on serser
// create func 4 delete task
