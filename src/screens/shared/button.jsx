import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
	render() {
		const {
			children,
			onClick
		} = this.props

		return (
			<button
				type="button"
				className="btn"
				onClick={onClick}
			>
				{children}
			</button>
		)
	}
}

Button.propTypes = {
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func
}

Button.defaultProps = {
	onClick: () => {}
}

export default Button
