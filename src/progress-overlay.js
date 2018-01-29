import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import {CircularProgress} from 'material-ui/Progress'
import classNames from 'classnames'
import debug from 'debug'
import _ from 'lodash'

const dbg = debug('lib:mui-helpr:progress-overlay')

const styles = {
  root: {
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1000,
    backgroundColor: '#000000',
    opacity: 0.2,
    top: 0,
    left: 0
  },
  overlay2: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0
  }
}

class progressOverlay extends Component {
  // eslint-disable-next-line no-undef
  grabRef = elt => {
    dbg('grab-ref: elt=%o', elt)
    this.elt = elt
  }

  render() {
    dbg('render: this=%o', this)
    const {classes, className, children, active, size, relativeSize} = this.props
    const _size = size || _.get(this, 'elt.clientHeight', 0) * relativeSize

    return (
      <div ref={this.grabRef} className={classNames(classes.root, className)}>
        {children}
        {active && (
          <div>
            <Paper className={classes.overlay} />
            <div className={classes.overlay2}>
              <CircularProgress size={_size} />
            </div>
          </div>
        )}
      </div>
    )
  }

  // eslint-disable-next-line no-undef
  static propTypes = {
    // custom validate child type is Paper ?
    children: PropTypes.element.isRequired,
    size: PropTypes.number,
    relativeSize: PropTypes.number,
    active: PropTypes.bool
  }

  // eslint-disable-next-line no-undef
  static defaultProps = {
    relativeSize: 0.5
  }
}

export default withStyles(styles)(progressOverlay)
