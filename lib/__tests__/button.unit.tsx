import renderer from 'react-test-renderer'
import * as React from 'react'
import Button from '../Button'

describe('button', () => {
    it('是个div', () => {
        // 渲染一个虚拟ODM 就是一个对象
        let json = renderer.create(<Button />).toJSON()
        expect(json).toMatchSnapshot()
    })
})