function classes(...names: (string | undefined)[]) {
    // 如果是真值 就需要 如果是假值就不需要
    return names.filter(Boolean).join(' ')
}

export default classes