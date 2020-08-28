import * as React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Success from './Success'

configure({ adapter: new Adapter() })

describe('Success Component', () => {
  it('renders without crashing', () => {
    shallow(<Success />)
  })
})
