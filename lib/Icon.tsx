import React from 'react'
import './importAllIcons'

/**
 * 1. 添加一个loader ==> 转换svg源代码
 * 2. 把所有svg文件放到 icons 文件中
 * 3. 在页面上使用 svg 然后使用 use 标签添加 xlink-href 属性
 */

interface IconProps {
    name: string
}

const Icon: React.FunctionComponent<IconProps> = (props: any) => {
    return (
        <span>
            <svg>
                <use xlinkHref={`#${ props.name }`} />
            </svg>
        </span>
    )
}

export default Icon