import { getItem, setItem } from './storage.js';

const createCheckbox = (done, id) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.dataset.taskId = id;
  checkboxElem.checked = done;
  checkboxElem.classList.add('list-item__checkbox');
  return checkboxElem;
};
const createDeleteBtn = id => {
  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');
  deleteBtnElem.dataset.taskId = id;
  return deleteBtnElem;
};

const createListElem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item', 'list__item');
  if (done) {
    listItemElem.classList.add('list-item_done');
  }
  const checkboxElem = createCheckbox(done, id);
  const deleteBtnElem = createDeleteBtn(id);
  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);
  return listItemElem;
};

export const renderTasks = () => {
  const listElem = document.querySelector('.list');
  const tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort(
      (a, b) =>
        a.done - b.done ||
        new Date(b.finishDate) - new Date(a.finishDate) ||
        new Date(b.createDate) - new Date(a.createDate),
    )
    .map(createListElem);

  listElem.append(...tasksElems);
};
