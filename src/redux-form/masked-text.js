import React from 'react'
import PropTypes from 'prop-types'
import {FormControl, FormHelperText} from 'material-ui/Form'
import Input, {InputLabel} from 'material-ui/Input'
import debug from 'debug'
import MaskedInput from 'react-text-mask'

const dbg = debug('lib:mui-helpr:redux-form:masked-text')

const maskedText = props => {
  dbg('props=%o', props)
  const {label, input, meta, className} = props
  const {name} = input
  const {touched, error, warning} = meta
  const _error = touched && (error || warning)
  return (
    <FormControl className={className} error={_error}>
      <InputLabel htmlFor={name}>{label || name}</InputLabel>
      <Input value={input.value} inputComponent={MaskedInput} {...props} />
      {_error && <FormHelperText>{error || warning}</FormHelperText>}
    </FormControl>
  )
}

maskedText.propTypes = {
  mask: PropTypes.array.isRequired
}

export default maskedText
