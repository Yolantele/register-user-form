import React from 'react'
import { Form, Button } from 'antd'
import { LAYOUT } from './style'
import { style } from './style'
const { Item: Field } = Form
const { tailFormItemLayout } = LAYOUT

interface CompProps {
  section?: number
  setSection?: (n: number) => void
}

const Submit: React.FC<CompProps> = ({ section, setSection }) => (
  <section style={style.submit}>
    <Button
      disabled={section ? false : true}
      onClick={() => (section && setSection ? setSection(section - 1) : null)}>
      GoBack
    </Button>
    <Field {...tailFormItemLayout}>
      <Button type='primary' htmlType='submit' style={{ marginTop: 20 }}>
        Submit
      </Button>
    </Field>
  </section>
)

export default Submit
