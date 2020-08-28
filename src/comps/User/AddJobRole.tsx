import React from 'react'
import { Form, Cascader } from 'antd'
const { Item: Field } = Form

const AddJobRole = () => {
  const ROLES = [
    {
      value: 'engineering',
      label: 'Engineering',
      children: [
        {
          value: 'front-end',
          label: 'Front-end'
        },
        {
          value: 'back-end',
          label: 'Back-end'
        },
        {
          value: 'dev-ops',
          label: 'Dev-ops'
        },
        {
          value: 'data',
          label: 'Data'
        }
      ]
    },
    {
      value: 'design',
      label: 'Design',
      children: [
        {
          value: 'ui',
          label: 'UI'
        },
        {
          value: 'ux',
          label: 'UX'
        },
        {
          value: 'marketing',
          label: 'Marketing'
        },
        {
          value: 'animation',
          label: 'Animation'
        }
      ]
    }
  ]
  return (
    <Field name='role' label='Role'>
      <Cascader options={ROLES} />
    </Field>
  )
}

export default AddJobRole
