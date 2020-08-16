import React, { Component } from "react"
import { connect } from "react-redux"

import { Props, mapDispatcherToProps } from "./models"

class DashboardComponent extends Component<Props> {
	// #region Constructor
	logout = this.props.logout
	// #endregion

	// #region JSX
	render() {
		return (
			<Container fluid>
				<Row style={{ height: "10%" }}>
					<Col style={{ paddingTop: 15 }}>
						<img className="logo" src={ Logo } alt="" />
					</Col>
				</Row>
				<Row style={{ height: "90%" }}>
					<Container fluid>
						<Row style={{ height: "33%" }}>
							<div style={{ width: "40%" }} />
							<div style={{ width: "60%", display: "flex", flexWrap: "wrap" }}>
								<div style={{ width: "40%", marginTop: "20%" }}>
									<CircleButton label="Practice your skills" />
								</div>
								<div style={{ width: "40%" }}>
									<CircleButton label="Make an impact" />
								</div>
								<div style={{ width: "20%" }}>
									<CircleButton />
								</div>
							</div>
						</Row>

						<Row style={{ height: "33%" }}>
							<Col xs={ 3 } />
							<Col xs={ 2 } style={{ marginTop: 20 }}>
								<CircleButton label="Building the capabilities" />
							</Col>
						</Row>
						
						<Row style={{ height: "33%" }}>
							<div style={{ width: "15%" }} />
							<div>
								<CircleButton label="Your commitment" list={ getCommitmentItems.bind(this)() } />
							</div>
						</Row>
					</Container>
				</Row>
				<Kristoff show={ this.state.showKristoff } close={ this.toggleKristoff } />
			</Container>
		)
	}
	// #endregion
}

export const Dashboard = connect(null, mapDispatcherToProps)(DashboardComponent)
