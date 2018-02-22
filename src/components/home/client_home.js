import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Panel } from 'react-bootstrap'
import { Auth, Registration, MainModal, MainPanel, Recovery } from 'components'
import { toggleModal, setRecoveryHash, activateUser } from 'actions'
import store, { history } from 'store'
import BtnMain from 'components/form/buttons/main_button.js'
import style from './style.css';
import ClientRightMenu from 'components/menu/client_right_menu.js'
import SearchBar from 'components/search/search.js'

class ClientHome extends Component {
    constructor(props) {
        super(props)
    }

    showModal = () => {
        store.dispatch(toggleModal(true, 'registration'))
    }

    getLeftMenuItems = () => {
        return [
            {text: 'My Friends', linkTo: '/friends'},
            {text: 'My Messages', linkTo: '/messages'},
            {text: 'Shop', linkTo: '/shop'}
        ];
    }

    render() {
        const { data } = this.props.user
        return (
            <div className="shadow title">
                <Grid fluid>
                    <Row>
                        <Col md={10}>
                            <Panel>
                                <Panel.Body>
                                    <SearchBar/>

                                    <div className="TEMPORARY">
                                        <div>
                                            Popular:
                                        </div>

                                        <div className={style.tempBox}></div>

                                        <div>
                                            New:
                                        </div>

                                        <div className={style.tempBox}></div>
                                    </div>
                                </Panel.Body>
                            </Panel>
                        </Col>

                        <Col md={2} className={style.rightMenu}>
                            <ClientRightMenu 
                                
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(
    mapStateToProps
)(ClientHome);