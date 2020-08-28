import * as React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { UserForm, PrivacyForm, Success } from '../comps/Forms'
import { Header } from '../comps/UI'
import { shallow, configure } from 'enzyme'
import RegistrationView from './RegistrationView'

configure({ adapter: new Adapter() })

describe('RegistrationView Component', () => {
  it('renders without crashing', () => {
    shallow(<RegistrationView />)
  })

  it('contains Header and UserForm upon start of the registration flow', () => {
    const wrapper = shallow(<RegistrationView />)

    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true)
    expect(wrapper.containsMatchingElement(<UserForm />)).toEqual(true)
  })
})
