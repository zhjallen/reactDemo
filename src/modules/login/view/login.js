import { Button, Input, Col, Row, Form } from 'antd';
import { Component } from 'react';
import getNum, { login } from '../action/login';

const FormItem = Form.Item;
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
            <Form className="login-form">
                <Row>
                    <Col span='4'>
                        <FormItem>
                            {getFieldDecorator('user', {
                                rules: [{ required: true, message: 'P666lease input your username!' }],
                            })
                                (<Input placeholder="Usee4eee4" />
                                )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input type="password" placeholder="Paseesword" />
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <Button onClick={this.login.bind(this)}>登eeedddee录</Button>
            </Form>
        );
    }
}
Login = Form.create()(Login);
