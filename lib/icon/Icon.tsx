import React from 'react'
import './importAllIcons.js'
import './icon.scss'
// @ts-ignore
import classes from '../helppers/classnames.tsx'

/**
 * 1. 添加一个loader ==> 转换svg源代码
 * 2. 把所有svg文件放到 icons 文件中
 * 3. 在页面上使用 svg 然后使用 use 标签添加 xlink-href 属性
 */

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string
}

const Icon: React.FunctionComponent<IconProps> = ({ className, name, ...restProps }: any) => {
    return (
        <svg
            className={classes('icon', className)}
            { ...restProps }
        >
            <use xlinkHref={`#${ name }`} />
        </svg>
    )
}

export default Icon