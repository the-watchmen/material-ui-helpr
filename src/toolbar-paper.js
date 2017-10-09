import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import debug from 'debug'

const dbg = debug('lib:toolbar-paper')

const styles = theme => ({
  controls: {
    marginLeft: 'auto'
  },
  field: {
    padding: theme.spacing.unit * 2
  }
})

const toolbarPaper = props => {
  dbg('props=%o', props)
  const {classes, controls, children, title, elevation} = props

  return (
    <Paper className={classes.root} elevation={elevation || 5}>
      <Paper>
        <Toolbar className={classes.toolbar}>
          <Typography type="title">{title}</Typography>
          <div className={classes.controls}>{controls}</div>
        </Toolbar>
      </Paper>
      <div className={classes.field}>{children}</div>
    </Paper>
  )
}

toolbarPaper.propTypes = {
  title: PropTypes.string.isRequired
}

export default withStyles(styles)(toolbarPaper)
