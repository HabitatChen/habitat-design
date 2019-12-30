import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import Button from './Button'
// @ts-ignore
import Icon from './Icon'

const fn: React.MouseEventHandler = (e) => {
    console.log(e)
    console.log(e.target)
    // 断言
    console.log((e.target as SVGUseElement).href )
}

ReactDOM.render(
    <div>
        <Icon
            name='wechat'
            onClick={ fn }
            onMouseEnter={ () => {
                console.log('enter')
            }}
        />
    </div>,
    document.querySelector('#root'))
