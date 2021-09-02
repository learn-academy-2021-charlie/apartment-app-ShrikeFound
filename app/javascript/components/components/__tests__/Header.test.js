import React from 'react'
import Enzyme,{shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../Header'

Enzyme.configure({adapter: new Adapter()})


describe("When Header renders",() =>{
  it("displays a nav element",() =>{
    const header = shallow(<Header/>)
    expect(header.find("nav").length).toEqual(1)
  })
})