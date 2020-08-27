import React from 'react'
import { Form, Button, Checkbox } from 'antd'
import { LAYOUT } from './style'
import { useEncryption } from '../hooks'

interface CompProps {
  onNext: () => void
}
const { Item: Field } = Form
const { formItemLayout, tailFormItemLayout } = LAYOUT

const AGGREMENT_FIELDS = [
  {
    label: 'I have read the agreement',
    name: 'agreement',
    validate: true
  },
  { label: 'Receive updates about Tray.io product by email', name: 'productUpdates' },
  {
    label: 'Receive communication by email for other products created by Tray.io team',
    name: 'otherUpdates'
  }
]

const PrivacyForm: React.FC<CompProps> = ({ onNext }) => {
  const [form] = Form.useForm()
  const [encrypt] = useEncryption()

  const onFinish = (values: object) => {
    localStorage.setItem('p', encrypt(values))

    onNext()
  }

  return (
    <Form
      {...formItemLayout}
      form={form}
      name='register'
      onFinish={onFinish}
      scrollToFirstError
      style={{ margin: '0px 50px' }}>
      {AGGREMENT_FIELDS.map(({ label, name, validate }, i) => (
        <Field
          key={i}
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
      ))}

      <Field {...tailFormItemLayout}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Field>
    </Form>
  )
}

export default PrivacyForm
