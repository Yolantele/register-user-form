import * as React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import PrivacyForm from './PrivacyForm'
import { Submit, Header } from '../../UI'
import AddAgreement from './AddAgreement'

configure({ adapter: new Adapter() })

describe('PrivacyForm Component', () => {
  it('renders without crashing', () => {
    shallow(<PrivacyForm />)
  })

  it('contains appropriate child Elements: agreement fields and submit ', () => {
    const wrapper = shallow(<PrivacyForm />)
    expect(wrapper.containsMatchingElement(<Submit />)).toEqual(true)
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(false)
    expect(wrapper.containsMatchingElement(<AddAgreement />)).toEqual(true)
  })
})
