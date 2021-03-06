import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import debug from 'debug'

const dbg = debug('lib:mui-helpr:route-icon')

const styles = {}

const routeIcon = props => {
	dbg('props=%o', props)
	const {route, tooltip, icon} = props
	// eslint-disable-next-line react/destructuring-assignment
	const size = props.size || 35

	return (
		<NavLink to={route}>
			<Tooltip title={tooltip}>
				<IconButton aria-label={tooltip}>
					{React.cloneElement(icon, {style: {height: size, width: size}})}
				</IconButton>
			</Tooltip>
		</NavLink>
	)
}

routeIcon.propTypes = {
	route: PropTypes.string.isRequired,
	tooltip: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired
}

export default withStyles(styles)(routeIcon)
