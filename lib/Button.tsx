import * as React from 'react'
import {useEffect, useState} from 'react'
// @ts-ignore
import PropTypes from 'prop-types'

interface Props {
}

interface States {

}

class Button extends React.Component<Props, States> {

    constructor(props: any) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <App message={'hello'}/>
                <div />
            </div>
        )
    }
}

interface AppProps {
    // 如果有?: ts有可能会觉得是一个 undefined 而(undefined).split会报错 => 在报错的时候加一个 ！ props.message!.split('')
    // 即强制断言
    message?: string
}

/**
 *
 * @param props
 * @constructor
 *
 * 如何在函数组件中使用 state
 */
const App: React.FunctionComponent<AppProps> = (props) => {
    const [n, setN] = useState(1)
    const handleClick = () => {
        setN(n+1)
    }
    // 第二个参数是其依赖 如果n发生改变 则会调用 是一个数组 如果是个[] 则只会在mounted的时候执行一次
    // update mounted
    // 函数注销的话可以在 useEffect中 return 一个函数
    useEffect(() => {
        console.log('mounted or updated')
    }, [n])
    props.message!.split('')
    return (
        <div>
            hello word { props.message }
            { n }
            { props.message }
            <button onClick={handleClick}>click</button>
        </div>
    )
}
App.defaultProps = { message: 'default message' }
App.displayName = 'Ck'
App.propTypes = { message: PropTypes.string }

export default Button