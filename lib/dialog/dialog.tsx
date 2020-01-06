import React, {ReactElement, ReactFragment, ReactNode, useState} from 'react'
import './dialog.scss'
import Icon from "../icon/Icon"
import ReactDOM from 'react-dom'
import {scopedClassMaker} from "../helppers/classnames"

interface Props {
    visible: boolean
    buttons?: Array<ReactElement>
    onClose: React.MouseEventHandler
    closeOnClickMask?: boolean
}

const scopedClass = scopedClassMaker('ckui-dialog')
const sc = scopedClass

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onCloseClick: React.MouseEventHandler = (e) => {
        props.onClose(e)
    }
    const onMaskClick: React.MouseEventHandler = (e) => {
        if (props.closeOnClickMask) {
            props.onClose(e)
        }
    }
    const x = props.visible ? (
        <React.Fragment>
            <div className={sc('mask')} onClick={ onMaskClick } />
            <div className={sc('')}>
                <div className={sc('close')} onClick={ onCloseClick }>
                    <Icon name={'close'} />
                </div>
                <header className={sc('header')}>
                    提示
                </header>
                <main className={sc('main')}>
                    { props.children }
                </main>
                {
                    props.buttons && props.buttons.length > 0 && <footer className={sc('footer')}>
                        {
                            props.buttons && props.buttons.map((button, index) => {
                                return React.cloneElement(button, { key: index })
                            })
                        }
                    </footer>
                }

            </div>
        </React.Fragment>
    ) : null
    return (
        ReactDOM.createPortal(x, document.body)

    )
}

Dialog.defaultProps = {
    closeOnClickMask: false
}

const alter = (content: string) => {
    const component = <Dialog visible={true} onClose={() => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }} >{content}</Dialog>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {

    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }

    const onYes = () => {
        yes && yes()
        onClose()
    }

    const onNo = () => {
        no && no()
        onClose()
    }

    const component = (
        <Dialog onClose={ onClose }
                visible={ true }
                buttons={ [<button onClick={onYes}>yes</button>, <button onClick={onNo}>no</button>] }
        >
            { content }
        </Dialog>
    )
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
}

const modal = (content: ReactNode | ReactFragment) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component = (
        <Dialog visible={true} onClose={ onClose } > {content} </Dialog>
    )
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
    return onClose

}

const basicModal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }

    const component = (
        <Dialog onClose={ () => { onClose(); afterClose && afterClose() } }
                visible={ true }
                buttons={buttons}
        >
            { content }
        </Dialog>
    )
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
    return onClose
}

const alter1 = (content: string) => {
    const button = <button onClick={() => { close() }}>ok</button>
    const close = basicModal(content, [button])
}

const confirm1 = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => { close(); yes && yes() }
    const onNo = () => { close(); no && no() }
    const buttons = [
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>
    ]
    const close = basicModal(content, buttons, no)

}

const modal1 = (content: ReactNode | ReactFragment) => {
    return basicModal(content)
}

export { alter, confirm, modal, alter1, confirm1, modal1 }

export default Dialog
