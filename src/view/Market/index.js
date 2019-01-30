import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.less'
import MarketBanner from './market-banner'
import MarketFooter from './market-footer'

export default class Market extends Component {
    constructor (props) {
       super(props)
       console.log(props)
    }
    handleClick = (data) => {
        console.log(data)
    }
    render() {
        return (
            <div >
              <div className='market'>
               <MarketBanner/>
                <div className='market-title'>
                    <span>超市</span>
                </div>
                <div className='market-main'>
                    <Row gutter={16}>
                        <Col span={6}>
                            <div className='market-cell'  onClick={this.handleClick}>
                                <a>
                                    <span>各种水果</span>
                                    <p>这是一个神奇的水果</p>
                                    <span>个数:11111111</span>
                                </a>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className='market-cell' onClick={this.handleClick}>
                                <a>
                                    <span>各种水果</span>
                                    <p>这是一个神奇的水果</p>
                                    <span>个数:2222222</span>
                                </a>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className='market-cell' onClick={this.handleClick}>
                                <a>
                                    <span>各种水果</span>
                                    <p>这是一个神奇的水果</p>
                                    <span>个数:333333</span>
                                </a>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className='market-cell' onClick={this.handleClick}>
                                <a>
                                    <span>各种水果</span>
                                    <p>这是一个神奇的</p>
                                    <span>个数:444444444</span>
                                </a>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className='market-cell' onClick={this.handleClick}>
                                <a>
                                    <span>各种水果</span>
                                    <p>这是一个神奇的</p>
                                    <span>个数:444444444</span>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
               <MarketFooter/>
              </div>
            </div>
        );
    }
}
