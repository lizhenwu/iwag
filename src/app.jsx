import React from 'react';  // 写组件的文件必须引入React
import Button from './button';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            loading: false
        }
    }
    handleClick(e) {
        this.setState({
            loading: true
        })
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 2000);
    }
    render() {
        let styleObject = {
            margin: '10px 20px'
        }
        return <React.Fragment>
       <Button className='test' size='small' style={styleObject} type='awesome'>Primary</Button>
       <Button className="test" loading={this.state.loading} onClick={this.handleClick} style={styleObject} type="awesome">Primary</Button>
       <Button className="test" loading={this.state.loading} size="large" style={styleObject} type="awesome">Primary</Button>
       <Button className="test" style={styleObject} type="antd">Primary</Button>
       </React.Fragment>
    }
}