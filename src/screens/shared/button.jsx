// @flow

import React from 'react'
// import PropTypes from 'prop-types' // TODO: npm rm

type Props = {
	children: string,
	onClick?: Function
}

class Button extends React.Component<Props> {
	static defaultProps = {
		onClick: () => {}
	}

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

export default Button
