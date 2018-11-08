import React, { Component } from 'react';
import Header from './view/Header/index'
import { Row, Col } from 'antd';
import './App.css';
import './style/common.less'

export default class Common extends Component {
    render() {
        return (
            <div>
                <Row className="simple-page">
                    <Header/>
                </Row>
                <Row className="content">
                    {this.props.children}
                </Row>
            </div>
        );
    }
}
