import React, { useEffect } from 'react'
import { Result } from 'antd'
import { useEncryption } from '../../hooks'

interface CompProps {
  section?: number
}
const Success: React.FC<CompProps> = () => {
  const [, decrypt] = useEncryption()

  useEffect(() => {
    let data = {
      ...decrypt(localStorage.getItem('u')),
      ...decrypt(localStorage.getItem('p'))
    }

    console.log('Collected Data ---> ', data)

    localStorage.removeItem('u')
    localStorage.removeItem('p')
  }, [decrypt])

  return (
    <Result
      status='success'
      title='Registration Successful!'
      subTitle='Please verify your email address, you should have received an email from us already!'
    />
  )
}

export default Success
