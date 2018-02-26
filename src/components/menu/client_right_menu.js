import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from 'store'
import { toggleModal } from 'actions'
import { Row, Col, Panel, FormGroup } from 'react-bootstrap'
import style from './right_menu.css'
import { Link } from 'react-router-dom'
import SmallDivider from 'components/divider/small_divider.js'
import MiddleItem from 'components/list/middle_item.js'
import MiddleString from 'components/list/middle_string.js'
import Avatar from 'components/gallery/avatar.js'
import MainModal from 'components/modal/modal.js'
import Credits from 'components/membership/credits.js'
import Plans from 'components/membership/plans.js'

class ClientRightMenu extends Component {
	showPlans = () => {
		store.dispatch(toggleModal(true, 'plans'))
	}

	showAddCredits = () => {
		store.dispatch(toggleModal(true, 'credits'))
	}

	render() {
		const { data } = this.props.user
		const { plans, credits } = this.props.modals
		return (
			<div className="p-15">
				<FormGroup className="px-15">
					<Avatar 
						src={data.avatar.original}
					/>
				</FormGroup>

				<FormGroup className="text-center">
					<div>
						<h2><strong>{data.first_name + ' ' + data.last_name}</strong></h2>
					</div>
				</FormGroup>

				<FormGroup>
					<MiddleString
						text={data.profile_id}
						keyName="ID:"
					/>
				</FormGroup>
				<FormGroup>
					<MiddleString
						text={data.membership.name}
						keyName="Membership:"
						link={true}
						onClick={this.showPlans}
					/>
				</FormGroup>
				<FormGroup>
					<MiddleString
						text={data.view_profile}
						keyName="Profile viewed by girls:"
					/>
				</FormGroup>
				<FormGroup>
					<SmallDivider
						text="Profile"
					/>
				</FormGroup>
				<FormGroup>
					<MiddleItem
						text="View Profile"
						icon="fas fa-user"
						link="/profile/info"
					/>
					<MiddleItem
						text="Edit Profile"
						icon="fas fa-cog"
						link="/profile/edit"
					/>
					<MiddleItem
						text="Add Credits"
						icon="fas fa-credit-card"
						onClick={this.showAddCredits}
					/>
				</FormGroup>
				<FormGroup>
					<SmallDivider
						text="Info"
					/>
				</FormGroup>
				<FormGroup>
					<MiddleString
						text={data.credits}
						keyName="Money Balance:"
					/>
					<MiddleString
						text="0"
						keyName="Bonus Balance:"
					/>
				</FormGroup>
				<MainModal
                    body={<Plans />}
                    title="Membership"
                    show={plans}
                    keyModal="plans"
                    size="lg"
                />
                <MainModal
                    body={<Credits />}
                    title="Credits"
                    show={credits}
                    keyModal="credits"
                    size="sm"
                />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return state
}

export default connect(
	mapStateToProps
)(ClientRightMenu);