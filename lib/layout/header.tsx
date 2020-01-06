import React, {HTMLAttributes} from 'react'
import {scopedClassMaker} from "../helppers/classnames"
const sc = scopedClassMaker('ckui-layout')

interface Props extends HTMLAttributes<HTMLElement>{

}

const Header: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props
    return (
        <div className={sc('header', { extra: className } )} { ...rest }>
            { props.children }
        </div>
    )
}

export default Header