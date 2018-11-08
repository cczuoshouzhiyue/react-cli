import React from 'react'
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { switchMenu, saveBtnList } from './../../redux/action'
import menuConfigData from './menuConfig'
import './index.less'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class YtMenu extends React.Component {
    state = {
        current: '',
    }
    handleClick = ({ item, key }) => {
        if (key == this.state.current) {
            return false;
        }
        let menuName = this.props.menuName
        console.log('获取到的=' + menuName)
        // 事件派发，自动调用reducer，通过reducer保存到store对象中
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.title));

        this.setState({
            current: key
        });
        // hashHistory.push(key);
    };
    componentWillMount(){
        const menuTreeNode = this.renderMenu(menuConfigData);

        this.setState({
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={<span>{item.title} <span><Icon type="down" /></span></span>} key={item.key}>
                        { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                mode='horizontal'
                subMenuCloseDelay= {.5}
            >
                { this.state.menuTreeNode }
            </Menu>
        );
    }
}
const mapStateToProps = state => {
    return {
        menuName : state.menuName
    }
}
export default connect(mapStateToProps)(YtMenu)
