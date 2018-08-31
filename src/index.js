import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './components/main'
import registerServiceWorker from './registerServiceWorker';

var tasksList = ["Task 1", "Task 2", "Task 3"];

//ローカルストレージにtasksがある場合、そのデータを引っ張ってくる
var tasks = localStorage.getItem('storedTasks');

//tasksがある場合
if(tasks) {
    tasksList = JSON.parse(tasks);
}

ReactDOM.render(
  // This is not JSX but JS style here!
  // using object
  <Todo tasks={tasksList} />,
  document.getElementById('todo')
);
//サービスワーカーは、
//ユーザーがオフラインまたは低速なネットワーク上にあるとき、
//画面上の結果を見ることができるように、
//ファイルをキャッシュすることができます
registerServiceWorker();
