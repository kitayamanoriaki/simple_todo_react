import React from 'react';

export class AddNewTask extends React.Component {
    constructor() {
        super();
        //justSubmitted内でthisを使っているのでbind
        this.justSubmitted = this.justSubmitted.bind(this);
    }

    justSubmitted(event) {
        //ページがロードされるのを防ぐ
        event.preventDefault();
        //ユーザーが入力したテキストを取得
        var input = event.target.querySelector('input');
        var value = input.value;
        input.value = '';
        //updateListをコール
        this.props.updateList(value);
    }

    render() {
        return (
                //onSubmitでjustSubmittedを発火
                <form onSubmit={this.justSubmitted}>
                    <input type="text" />
                </form>
            );
    }
}
