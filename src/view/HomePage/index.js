import React, { Component } from 'react';
import { Carousel } from 'antd';
import { NavLink } from 'react-router-dom'
import './index.less'
import menuConfigData from "../Menu/menuConfig";

export default class HomePage extends Component {
    componentWillMount(){
        const imageList = []
        const imageListNode = this.renderMenu(imageList);

        this.setState({
            imageListNode
        })
    }
    renderMenu =(data)=>{
        return data.map((item)=>{
           return (
            <div key={item.name}>
                <div>
                    <img src={item.name} alt=""/>
                    <div className='carousel-text' >
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                        <button type='button'> <NavLink to={item.url}>立即体验</NavLink></button>
                    </div>
                </div>
            </div>
           )
        })
    }
    render() {
        return (
            <div>
                <Carousel autoplay dots={true}>
                    { this.state.imageListNode }
                </Carousel>,
            </div>
         );
    }
}
