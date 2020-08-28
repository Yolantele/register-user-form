import * as React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import UserForm from './UserForm'
import { Submit, Header } from '../../UI'
import AddEmail from './AddEmail'
import AddJobRole from './AddJobRole'
import AddName from './AddName'
import AddPassword from './AddPassword'
configure({ adapter: new Adapter() })

describe('UserForm Component', () => {
  it('renders without crashing', () => {
    shallow(<UserForm />)
  })

  it('contains appropriate form fields to add name, role, email, passowrd', () => {
    const wrapper = shallow(<UserForm />)
    expect(wrapper.containsMatchingElement(<AddName />)).toEqual(true)
    expect(wrapper.containsMatchingElement(<AddJobRole />)).toEqual(true)
    expect(wrapper.containsMatchingElement(<AddEmail />)).toEqual(true)
    expect(wrapper.containsMatchingElement(<AddPassword />)).toEqual(true)
  })

  it('contains the appropriate child components Submit but not Header', () => {
    const wrapper = shallow(<UserForm />)
    expect(wrapper.containsMatchingElement(<Submit />)).toEqual(true)
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(false)
  })
})
