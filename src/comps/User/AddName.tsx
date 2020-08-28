import React from 'react'
import { Form, Input } from 'antd'

const { Item: Field } = Form

const AddName = () => {
  const NAME_RULES = [{ required: true, message: 'Please input your name', whitespace: true }]
  return (
    <Field name='name' label='Name' rules={NAME_RULES}>
      <Input />
    </Field>
  )
}

export default AddName
