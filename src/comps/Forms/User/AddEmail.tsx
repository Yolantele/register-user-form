import React from 'react'
import { Form, Input } from 'antd'

const { Item: Field } = Form

const AddEmail = () => (
  <Field
    name='email'
    label='E-mail'
    rules={[
      {
        type: 'email',
        message: 'The input is not valid E-mail!'
      },
      {
        required: true,
        message: 'Please input your E-mail!'
      }
    ]}>
    <Input />
  </Field>
)

export default AddEmail
