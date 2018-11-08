import React from 'react'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import Menu from '../../view/Menu/index'
import './index.less'
class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <Row>
                        <Col span={6} className="header-logo">
                            <img src="/assets/logo.png" alt="" />
                            {/*{this.props.menuName}*/}
                        </Col>
                        <Col span={18}>
                            <Menu/>
                        </Col>
                    </Row>
                </header>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        menuName : state.menuName
    }
}
export default connect(mapStateToProps)(Header)
