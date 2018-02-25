import { Button,Input } from 'antd';
import { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <Input />
                <Button type='primary'>登录</Button>
            </div>
        );
    }
}
