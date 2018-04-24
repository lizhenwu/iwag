import React from 'react';  // 写组件的文件必须引入React

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick.bind(this);
    }
    handleClick(e) {
        console.log(e);
        alert('clicked!');
    }
    render() {
        return <button onClick={this.handleClick}>click me</button>
    }
}