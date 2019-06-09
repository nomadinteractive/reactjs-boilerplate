import React from 'react'
import PropTypes from 'prop-types'
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

class Counter extends React.Component {
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
					onClick={() => { handleIncreaseButtonClick() }}
				>
					Increase
				</Button>
			</div>
		)
	}
}

Counter.propTypes = {
	clicks: PropTypes.number,
	handleIncreaseButtonClick: PropTypes.func
}

Counter.defaultProps = {
	clicks: 0,
	handleIncreaseButtonClick: () => {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
