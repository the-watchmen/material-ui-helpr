import React from 'react'
import {FormControl, FormHelperText} from 'material-ui/Form'
import Input, {InputLabel} from 'material-ui/Input'
import {MenuItem} from 'material-ui/Menu'
import Select from 'material-ui/Select'
import debug from 'debug'

const dbg = debug('lib:mui-helpr:redux-form:select')

export default function({
  label,
  input: {name, value, onChange},
  meta: {touched, error, warning},
  options,
  className
}) {
  dbg('args=%o', arguments)
  const _error = touched && (error || warning)
  const items = []
  for (const key in options) {
    items.push(
      <MenuItem key={key} value={key}>
        {options[key]}
      </MenuItem>
    )
  }
  return (
    <FormControl className={className} error={_error}>
      <InputLabel htmlFor={name}>{label || name}</InputLabel>
      <Select value={value} onChange={onChange} input={<Input id={name} />}>
        {items}
      </Select>
      {_error && <FormHelperText>{error || warning}</FormHelperText>}
    </FormControl>
  )
}
