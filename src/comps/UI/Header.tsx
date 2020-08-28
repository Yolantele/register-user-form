import React from 'react'
import { style } from './style'
import { Button } from 'antd'

const SECTIONS = [
  { label: 'User', value: 0 },
  { label: 'Privacy', value: 1 },
  { label: 'Done', value: 2 }
]

interface CompProps {
  section: number
}
const Header: React.FC<CompProps> = ({ section }) => (
  <section style={style.header}>
    {SECTIONS.map(({ label, value }, i) => (
      <Button block key={i} type={section === value ? 'primary' : 'default'}>
        {label}
      </Button>
    ))}
  </section>
)

export default Header
