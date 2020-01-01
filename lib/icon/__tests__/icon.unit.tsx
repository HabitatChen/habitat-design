import renderer from 'react-test-renderer'
import * as React from 'react'
// @ts-ignore
import Icon from '../Icon.tsx'
// @ts-ignore
import { mount } from 'enzyme'

describe('icon', () => {
    it('是个div', () => {
        // 渲染一个虚拟ODM 就是一个对象
        let json = renderer.create(<Icon name={'alipay'} />).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('测试点击事件', () => {
        // 这种方式太low了
        //  let n = 1
        //  const fn = () => { n = 2 }
        const fn = jest.fn()
        const component = mount(<Icon name={'alipay'} onClick={fn}/>)
        // 模拟点击事件
        component.find('svg').simulate('click')
        expect(fn).toBeCalled()
    })
})