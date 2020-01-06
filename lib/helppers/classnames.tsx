function classes(...names: (string | undefined)[]) {
    // 如果是真值 就需要 如果是假值就不需要
    return names.filter(Boolean).join(' ')
}

export default classes

interface Option {
    extra: string | undefined
}

interface ClassToggle {
    [K: string]: boolean
}

// 有范围的类前缀生成器
function scopedClassMaker(prefix: string) {
    return (name: string | ClassToggle, options?: Option) =>

        // {a: true, b: false, c: true} => entries [['a', true], ['b', false], ['c', true]]  => filter 如果kv[1]为true 则返回 => map 返回kv[0]
        Object
            .entries(name instanceof Object ? name : { [name]: name })
            .filter(kv => kv[1] !== false).map(kv => kv[0])
            .map(name => [prefix, name]
                .filter(Boolean)
                .join('-'))
            .concat(options && options.extra || [])
            .join(' ')
    // 此时 name=['a', 'c']

    //  if (options && options.extra) {
    //      return [scoped, options && options.extra].filter(Boolean).join(' ')
    //  } else {
    //      return scoped
    //  }
}

export { scopedClassMaker }