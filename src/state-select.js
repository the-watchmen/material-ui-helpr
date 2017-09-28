import React from 'react'
import {FormControl} from 'material-ui/Form'
import {InputLabel} from 'material-ui/Input'
import {MenuItem} from 'material-ui/Menu'
import {Select} from '@gfpacheco/redux-form-material-ui'
import {Field} from 'redux-form'
import {US_STATES} from 'helpr'

const _states = []

_states.push(
  <MenuItem value="">
    <em>None</em>
  </MenuItem>
)

for (const code in US_STATES) {
  _states.push(<MenuItem value={code}>{US_STATES[code]}</MenuItem>)
}

export default function stateSelect(props) {
  return (
    // eslint-disable-next-line foo
    <FormControl className={props.className}>
      <InputLabel htmlFor="state">State</InputLabel>
      <Field name="state" component={Select}>
        {_states}
      </Field>
    </FormControl>
  )
}
