import cryptojs from 'crypto-js'
import { KEY } from './const'

type EncryptHook = () => [any, any]

const useEncyption: EncryptHook = () => {
  const encrypt = (values: object) => {
    return cryptojs.AES.encrypt(JSON.stringify(values), KEY).toString()
  }

  const decrypt = (values: string) => {
    const bytes = cryptojs.AES.decrypt(values || '', KEY)
    return JSON.parse(bytes.toString(cryptojs.enc.Utf8))
  }

  return [encrypt, decrypt]
}

export default useEncyption
