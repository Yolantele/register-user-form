import React from 'react'
import { Form, Checkbox } from 'antd'

interface CompProps {
  validate?: boolean
  label: string
  name: string
}

const { Item: Field } = Form

const AddAgreement: React.FC<CompProps> = ({ validate, label, name }) => (
  <Field
    name={name}
    valuePropName='checked'
    rules={
      validate
        ? [
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('Should accept agreement')
            }
          ]
        : []
    }>
    <Checkbox style={{ margin: 10 }}>{label}</Checkbox>
  </Field>
)

export default AddAgreement
