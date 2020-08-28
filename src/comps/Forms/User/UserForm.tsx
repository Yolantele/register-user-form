import React from 'react'
import { Form } from 'antd'
import { LAYOUT } from '../style'
import AddPassword from './AddPassword'
import AddEmail from './AddEmail'
import AddName from './AddName'
import AddJobRole from './AddJobRole'
import { Submit } from '../../UI'
import { useEncryption } from '../../../hooks'
const { formItemLayout } = LAYOUT

interface CompProps {
  onNext: () => void
}

const INITIAL_INPUTS = { role: ['industry', 'role'] }

const UserForm: React.FC<CompProps> = ({ onNext }) => {
  const [form] = Form.useForm()
  const [encrypt] = useEncryption()

  const onFinish = (values: object) => {
    localStorage.setItem('u', encrypt(values))
    onNext()
  }

  return (
    <Form
      {...formItemLayout}
      form={form}
      name='register'
      onFinish={onFinish}
      initialValues={INITIAL_INPUTS}
      style={{ width: 350 }}
      scrollToFirstError>
      <AddName />
      <AddJobRole />
      <AddEmail />
      <AddPassword />
      <Submit />
    </Form>
  )
}

export default UserForm
