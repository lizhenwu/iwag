import React from 'react';
import classnames from 'classnames';

const regFor2Ch = /^[\u4e00-\u9fa5]{2}$/;

export default class Button extends React.Component{
    static defaultProps = {
        type: 'awesome',
        loading: false,
        style: null,
        size: null
    }
    constructor(props) {
        super(props);
        this.state = {
            loading: this.props.loading,
        }
    }
    handleClick = e =>  {
        let {onClick} = this.props;
        if(onClick) {
            onClick(e);
        }
    }
    render() {
        let {className, type, style, size, children, loading, ...others} = this.props;
        if(loading) {
            others = others || {};
            others.disabled = true;
        }
        let sizeClass = '';
        switch(size) {
            case 'large': 
                sizeClass = 'l';
                break;
            case 'small':
                sizeClass = 's';
                break;
            default: 
                break;
        }
        let classes = classnames(className, {
            [`btn-${type}`]: type,
            [`btn-${sizeClass}`]: sizeClass,
            ['loading']: loading,
        })
        let childrenCompos = (children || children === 0) ? React.Children.map(children, (child, i) => {
            if(typeof child === 'string' || typeof child === 'number') {
                // 验证是否两个汉字
                if(regFor2Ch.test(child)) {
                    child = child.split('').join(' ');
                }
            }
            return <span>{child}</span>
        }) : null;
        return <button {...others} style={style} className={classes} onClick={this.handleClick}>{childrenCompos}</button>
    }
}