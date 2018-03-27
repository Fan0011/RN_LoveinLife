import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Registration, MainPanel } from 'components'
import { toggleModal, toggleRegistration, changeStep, setActiveSection } from 'actions'
import store, { history } from 'store'
import BtnMain from 'components/form/buttons/main_button.js'
import style from './style.css'
import Advantages from './advantages.js'
import MemberBlock from 'components/members/member_block.js'
import ScrollToTop from './scroll_btn.js'

class Landing extends Component {
    showModal = () => {
        store.dispatch(toggleModal(true, 'login'))
    }

    closeRegistration = () => {
        store.dispatch(toggleRegistration(false))
        store.dispatch(changeStep(0))
    }

    componentDidMount = () => {
        window.onscroll = () => {
            this.advantagesAnimate()
            this.toggleScrollBtn()
        }
    }

    toggleScrollBtn = () => {
        const el = document.getElementById('scrollBtn')
        if (el) {
            if (document.documentElement.scrollTop >= 600) {
                if (el.className.indexOf('active') + 1 === 0) {
                    el.className = el.className + ' active'
                }
            } else {
                el.className = el.className.replace(' active', '')
            }
        }   
    }

    advantagesAnimate = () => {
        const el = document.getElementById('advantages')
        if (el) {
            if (el.scrollHeight >= document.documentElement.scrollTop) {
                store.dispatch(setActiveSection(true, 'advantages'))
            }
        }
    }

    render() {
        let activeClass = ''
        let col = 6
        if (this.props.signup.showRegistration) {
            activeClass = style.active
            col = 12
        }

        const { popular_list, new_list } = this.props.members
        return (
            <div>
                <div className={style.mainPart}>
                    <Grid className={style.innerMain}>
                        <Row>
                            <Col md={col} sm={12} >
                                <div className={style.wrapRegistration + ' ' + activeClass}>
                                    <MainPanel
                                        title="Registration"
                                        iconClass="fas fa-address-card"
                                        onClick={this.closeRegistration}
                                        showClose={(this.props.signup.step === 0 || this.props.signup.step === 4) && this.props.signup.showRegistration}
                                        body={<Registration />} />
                                </div>
                            </Col>
                            <Col md={6} sm={12} className={style.wrapLogin + ' ' + activeClass}>
                                <div>
                                    <div>
                                        <h1 className="text-white main">
                                            Premier Matchmaking agency to Find Your Ukrainian Lady
                                        </h1>
                                        <h2 className="text-white text-center">
                                            We are not Gods to predict your future but we have something to make you closer to your dream come true.
                                            <br />
                                            <a className={style.joinLink} onClick={() => store.dispatch(toggleRegistration(true))} href="javascript:;"> Join Now</a>
                                        </h2>
                                   </div>
                                   <div className="btn-login text-center">
                                        <BtnMain
                                            type="button"
                                            bsStyle="success"
                                            text="Login"
                                            onClick={this.showModal} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <Advantages />
                <div className={style.secondPart}>
                    <div className={style.secondPartInner}>
                        <h2 className={style.advantTitle}><span className={style.underlineText}>Girls</span></h2>
                        <Grid>
                            <div>
                                <Row>
                                    <Col xs={4} className="text-center">
                                        <div className={style.groupSwitch}>
                                            <span className={style.underlineText}>New</span>
                                        </div>
                                    </Col>
                                    <Col xs={4} className="text-center">
                                        <div className={style.groupSwitch}>
                                            <span className={style.underlineText}>Popular</span>
                                        </div>
                                    </Col>
                                    <Col xs={4} className="text-center">
                                        <div className={style.groupSwitch} onClick={() => history.push('/girls')}>
                                            <span className={style.underlineText}>Show more</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <MemberBlock list={popular_list} />
                        </Grid>
                    </div>
                </div>
                <ScrollToTop />
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signup: {
            showRegistration: state.signup.showRegistration,
            step: state.signup.step
        },
        members: {
            new_list: state.members.new_list,
            popular_list: state.members.popular_list,
        }
    } 
}

export default connect(
    mapStateToProps
)(Landing)