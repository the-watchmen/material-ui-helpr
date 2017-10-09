import React from 'react'
import {Field} from 'redux-form'
import {US_STATES} from '@watchmen/helpr'
import Select from './select'

export default function(props) {
  const {className, name, label, validators} = props
  return (
    <Field
      className={className}
      name={name}
      label={label || name}
      component={Select}
      validate={validators}
      options={{'': '', ...US_STATES}}
    />
  )
}
