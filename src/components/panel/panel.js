import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import style from './panel.css'

class MainPanel extends Component {
	render() {
		return (
			<Panel bsClass={style.headerPanel + ' panel'}>
				<Panel.Heading>
					<h3 className="title">
						<i className={this.props.iconClass}></i>
						&nbsp;
						{this.props.title}
					</h3>
				</Panel.Heading>
				<Panel.Body>
							{this.props.body}
				</Panel.Body>
			</Panel>
		);
	}
}

export default MainPanel