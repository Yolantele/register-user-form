import React from 'react'
import { Form } from 'antd'
import { LAYOUT } from '../style'
import { useEncryption } from '../../../hooks'
import { Submit } from '../../UI'
import AddAgreement from './AddAgreement'
import { AGGREMENT_FIELDS } from './const'

interface CompProps {
  onNext: () => void
  section?: number
  setSection?: any
}

const { formItemLayout } = LAYOUT

const PrivacyForm: React.FC<CompProps> = ({ onNext, section, setSection }) => {
  const [form] = Form.useForm()
  const [encrypt] = useEncryption()

  const onFinish = (values: object) => {
    localStorage.setItem('p', encrypt(values))
    onNext()
  }

  return (
    <Form {...formItemLayout} form={form} name='register' onFinish={onFinish} scrollToFirstError>
      {AGGREMENT_FIELDS.map(({ label, name, validate }, i) => (
        <AddAgreement {...{ label, name, validate }} key={i} />
      ))}
      <Submit {...{ section, setSection }} />
    </Form>
  )
}

export default PrivacyForm
