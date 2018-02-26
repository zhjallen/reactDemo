import { Button, Input } from 'antd';
import { Component } from 'react';
import getNum from '../action/login';


export default class Login extends Component {
    constructor(props) {
        super();
    }
    submit() {
     console.log(store.getState(), 'store')
    //  this.setState({})
    store.dispatch(getNum());
    }
    render() {
        return (
            <div>
                <Input />
                <Button type='primary' onClick={this.submit.bind(this)}>登录</Button>
            </div>
        );
    }
}
