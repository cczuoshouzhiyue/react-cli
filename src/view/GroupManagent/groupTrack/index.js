import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.less'
import { connect } from 'react-redux'
import {switchMenu} from "../../../redux/action";
const FormItem = Form.Item

class GroupTrack extends Component {
    constructor (props) {
        super(props)
        this.state = {
            userName : {
                rules: [{ required: true, message:  'Please input your username!'},{max: 6 ,message :'超过最大长度'}],
                initialValue: this.props.menuName
            }
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let userInfo = this.props.form.getFieldsValue(['userName']);
        const { dispatch } = this.props;
        dispatch(switchMenu(userInfo.userName));

        console.log(userInfo)
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator  } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 10 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 4,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        }
        return (
              <div className='form-test'>
                  {this.props.menuName}
                <Form className="login-form" onSubmit={this.handleSubmit}>
                    <FormItem  {...formItemLayout}  label="用户名"  hasFeedback>
                        {getFieldDecorator('userName', this.state.userName )(
                            <Input prefix={<Icon type="user"  id="success" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem  {...formItemLayout} label="密码">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>

                    <FormItem {...tailFormItemLayout}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Register</Button>
                    </FormItem>
                    {/*<FormItem {...tailFormItemLayout}>*/}
                        {/*{getFieldDecorator('remember', {*/}
                            {/*valuePropName: 'checked',*/}
                            {/*initialValue: true,*/}
                        {/*})}*/}
                        {/*<Button type="primary" htmlType="submit" className="login-form-button">*/}
                            {/*Log in*/}
                        {/*</Button>*/}
                    {/*</FormItem>*/}
                </Form>
              </div>
        );
    }

}
const mapStateToProps = state => {
    return {
        menuName : state.menuName
    }
}

export default connect(mapStateToProps)(Form.create()(GroupTrack))
