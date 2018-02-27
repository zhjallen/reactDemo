import { Button, Input, Col, Form } from 'antd';
import { Component } from 'react';
import getNum, { login } from '../action/login';

const FormItem=Form.Item;
@connect(
    state => {
        return {
            loginData: state.loginReducer,
        };
    },
    dispatch => bindActionCreators({}, dispatch),
)
export default class Login extends Component {
    constructor(props) {
        super();
    }
    submit() {
        console.log(this.props, 'ddstore');
        //  this.setState({})
        store.dispatch(getNum());
    }
    login() {
        const { getFieldsValue } = this.props.form;
        const data = getFieldsValue();
        store.dispatch(login(data));
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
          <Form  className="login-form">
            <FormItem>
              {getFieldDecorator('user', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })
              (<Input placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input  type="password" placeholder="Password" />
              )}
            </FormItem>
            <Button onClick={this.login.bind(this)}>登录</Button>
            </Form>
            );
    }
}
Login = Form.create()(Login);
