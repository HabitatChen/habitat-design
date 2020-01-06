import React, {HTMLAttributes, ReactElement} from 'react'
import Aside from "./aside"
import {scopedClassMaker} from "../helppers/classnames"
const sc = scopedClassMaker('ckui-layout')

interface Props extends HTMLAttributes<HTMLElement>{
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props

    const childrenAsArray = props.children as Array<ReactElement>
    const hasAside = length in childrenAsArray &&
        childrenAsArray.reduce((result, node) => result || node.type === Aside, false)

    return (
        <div className={sc({ '': true, hasAside }, { extra: className } )} { ...rest }>
            { props.children }
        </div>
    )
}

export default Layout