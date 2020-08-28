import React from 'react'
import { Form, Input, Tooltip } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { RULES } from './const'

const { Item: Field } = Form

const { upperCaseLowerCaseAndNumber, minCharacterLength } = RULES

const AddPassword = () => {
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
    <>
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
    </>
  )
}

export default AddPassword
