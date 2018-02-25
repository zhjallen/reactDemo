import { Button } from 'antd';
import { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <Button type='primary'>登录</Button>
            </div>
        );
    }
}
export default Login;
