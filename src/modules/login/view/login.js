import { Button, Input } from 'antd';
import { Component } from 'react';
import getNum from '../action/login';

@connect(
    state => {
        return {
            loginData: state.loginReducer,
        }
    },
    dispatch => bindActionCreators({}, dispatch)
)
export default class Login extends Component {
    constructor(props) {
        super();
    }
    submit() {
        console.log(this.props, 'ddstore')
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
