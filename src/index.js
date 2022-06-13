import './style.css';
import Tasks from './taskClass';
import {
  createList,
  refresh,
  addABook,
  hitEnter,
  deleteTask,
  editTask,
  clearCompletedTask,
} from './function';
import changeStatus from './updateStatus';

const TasksList = new Tasks();

if (localStorage.getItem('tasks') !== null && localStorage.getItem('tasks') !== undefined) {
  TasksList.setTasks(JSON.parse(localStorage.getItem('tasks')));
}

const tasksContainer1 = TasksList.getTasks();

createList(tasksContainer1);
refresh();
addABook(TasksList, tasksContainer1);
hitEnter();
changeStatus(TasksList, tasksContainer1);
deleteTask(TasksList, tasksContainer1);
editTask(TasksList, tasksContainer1);
clearCompletedTask(TasksList, tasksContainer1);