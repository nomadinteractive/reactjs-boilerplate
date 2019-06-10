// @flow

import React from 'react'
import { connect } from 'react-redux'

import { increaseClickCountAction } from '../../actions/index'
import Button from '../shared/button'

const mapStateToProps = state => ({
	clicks: state.clicks
})

const mapDispatchToProps = dispatch => ({
	handleIncreaseButtonClick: () => {
		dispatch(increaseClickCountAction())
	}
})

type Props = {
	clicks: number,
	handleIncreaseButtonClick: Function
}

class Counter extends React.Component<Props> {
	render() {
		const {
			clicks,
			handleIncreaseButtonClick
		} = this.props

		return (
			<div>
				<h2>Counter page</h2>
				<h2>
					Clicks:&nbsp;
					{clicks}
				</h2>
				<Button
					// $FlowIgnore
					onClick={() => { handleIncreaseButtonClick() }}
				>
					Increase
				</Button>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
