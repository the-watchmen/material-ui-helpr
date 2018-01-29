import React from 'react'
import {FormControl, FormHelperText} from 'material-ui/Form'
import Input, {InputLabel} from 'material-ui/Input'
import debug from 'debug'

const dbg = debug('lib:mui-helpr:redux-form:text')

export default function({
  label,
  input: {name, value, onChange},
  meta: {touched, error, warning},
  className
}) {
  dbg('args=%o', arguments[0])
  const _error = touched && (error || warning)
  return (
    <FormControl className={className} error={_error}>
      <InputLabel htmlFor={name}>{label || name}</InputLabel>
      <Input id={name} value={value} onChange={onChange} />
      {_error && <FormHelperText>{error || warning}</FormHelperText>}
    </FormControl>
  )
}
