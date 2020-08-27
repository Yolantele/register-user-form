import React from 'react'
import { Form, Input, Tooltip, Cascader, Button } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { ROLES, RULES } from './const'
import { LAYOUT } from './style'

import { useEncryption } from '../hooks'
const { Item: Field } = Form
const { formItemLayout, tailFormItemLayout } = LAYOUT
const { upperCaseLowerCaseAndNumber, minCharacterLength } = RULES

interface CompProps {
  onNext: () => void
}
const NAME_RULES = [{ required: true, message: 'Please input your name', whitespace: true }]

const PASSWORD_RULES = [
  {
    required: true,
    message: 'Please input your password'
  },
  {
    min: minCharacterLength,
    message: `At least ${minCharacterLength} characters required`
  },
  {
    pattern: upperCaseLowerCaseAndNumber,
    message: 'Include at least 1 uppercase, lowercase, numeric character. No special characters'
  }
]

const CONFIRM_PASSWORD_RULES = [
  {
    required: true,
    message: 'Please confirm your password!'
  },
  ({ getFieldValue }) => ({
    validator(rule, value) {
      try {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve()
        }
        return Promise.reject('The two passwords that you entered do not match!')
      } catch (e) {}
    }
  })
]
const INITIAL_INPUTS = { role: ['industry', 'role'] }

const RegistrationForm: React.FC<CompProps> = ({ onNext }) => {
  const [form] = Form.useForm()
  const [encrypt] = useEncryption()

  const onFinish = (values: object) => {
    localStorage.setItem('u', encrypt(values))
    onNext()
  }

  const PasswordHelper = () => (
    <span>
      Password&nbsp;
      <Tooltip
        title={`Password must be at least ${minCharacterLength} characters long with at least one number, uppercase, lowercase characters, no special characters`}>
        <QuestionCircleOutlined />
      </Tooltip>
    </span>
  )

  return (
    <Form
      {...formItemLayout}
      form={form}
      name='register'
      onFinish={onFinish}
      initialValues={INITIAL_INPUTS}
      scrollToFirstError>
      <Field name='name' label='Name' rules={NAME_RULES}>
        <Input />
      </Field>
      <Field name='role' label='Role'>
        <Cascader options={ROLES} />
      </Field>
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

      <Field name='password' label={<PasswordHelper />} rules={PASSWORD_RULES} hasFeedback>
        <Input.Password />
      </Field>

      <Field
        name='confirm'
        label='Confirm Password'
        dependencies={['password']}
        hasFeedback
        rules={CONFIRM_PASSWORD_RULES}>
        <Input.Password />
      </Field>

      <Field {...tailFormItemLayout}>
        <Button type='primary' htmlType='submit' style={{ marginTop: 20 }}>
          Submit
        </Button>
      </Field>
    </Form>
  )
}

export default RegistrationForm
