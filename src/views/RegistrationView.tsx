import React, { useState } from 'react'
import { UserForm, PrivacyForm, Success, Header } from '../comps'
import { style as s } from './style'

const RegistrationView = () => {
  const [section, setSection] = useState(0)

  const onNext = () => setSection(section + 1)

  return (
    <div style={s.main}>
      <Header {...{ section }} />
      <section style={s.section}>
        {section === 0 && <UserForm {...{ onNext }} />}
        {section === 1 && <PrivacyForm {...{ onNext, section, setSection }} />}
        {section === 2 && <Success />}
      </section>
    </div>
  )
}

export default RegistrationView
