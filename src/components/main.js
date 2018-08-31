import React from 'react';
import {AddNewTask} from './addtask';
import {ToDoAppList} from './applist'

export class Todo extends React.Component {
    constructor(props) {
        super();
        this.state = {tasks: props.tasks};
        //updateList/removeTask内でthisを使っているのでbindする
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    //リストの更新
    updateList(text) {
        var updatedTasks = this.state.tasks;
        updatedTasks.push(text);
        this.setState({tasks: updatedTasks});
        //ローカルストレージ
        this.updateLocalStorage(updatedTasks);
    }

    //タスクの削除
    removeTask(text) {
        var updatedTasks = this.state.tasks;
        updatedTasks.splice(updatedTasks.indexOf(text), 1);
        this.setState({tasks: updatedTasks});
        //ローカルストレージ
        this.updateLocalStorage(updatedTasks);
    }

    //ローカルストレージへデータを格納
    updateLocalStorage(updatedTasks) {
        localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
    }

    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <AddNewTask updateList={this.updateList} />
                <ToDoAppList tasks={this.state.tasks} remove={this.removeTask} />
            </div>
            );
    }
}
