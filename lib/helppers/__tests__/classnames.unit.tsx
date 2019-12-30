// 行为驱动测试 bdd
import classes from '../classnames.tsx'
describe('classes', () => {
    it('接收一个 classname', () => {
        const result = classes('n')
        expect(result).toEqual('n')
    })
    it('接收两个 classNamel', () => {
        const result = classes('a', 'b')
        expect(result).toEqual('a b')
    })
    it('接收 undefined', () => {
        const result = classes('a', undefined)
        expect(result).toEqual('a')
    })
    it('接收 多个 falsy值', () => {
        const result = classes('a', undefined, '中文', false, null)
        expect(result).toEqual('a 中文')
    })
    it('接收 0 个参数', () => {
        const result = classes()
        expect(result).toEqual('')
    })
})