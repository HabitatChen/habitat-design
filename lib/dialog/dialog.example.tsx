import React, {Fragment, useState} from 'react'
import Dialog, { alter, confirm, modal, alter1, confirm1, modal1 } from "./dialog"
import {Simulate} from "react-dom/test-utils"
import click = Simulate.click

const DialogExample = () => {
    const [x, setX] = useState(false)
    const [y, setY] = useState(false)
    const openModal = () => {
        const close = modal((<h1>你好 <button onClick={ () => close() }>close</button></h1>))
    }
    const openModal1 = () => {
        const close = modal1((<h1>你好 modal1 <button onClick={ () => close() }>close</button></h1>))
    }
    return (
        <Fragment>
            <div>
                <h1>example 1</h1>
                <button onClick={ () => { setX(!x) }}>click</button>
                <Dialog
                    visible={x}
                    buttons={[
                        <button onClick={ () => { setX(!x) }}>1</button>,
                        <button onClick={ () => { setX(!x) }}>2</button>
                    ]}
                    onClose={ () => { setX(!x)} }
                >
                    <div>hi</div>
                </Dialog>
            </div>
            <div>
                <h1>example 2</h1>
                <button onClick={ () => { setY(!y) }}>click</button>
                <Dialog
                    visible={y}
                    buttons={[
                        <button onClick={ () => { setY(!y) }}>1</button>,
                        <button onClick={ () => { setY(!y) }}>2</button>
                    ]}
                    onClose={ () => { setY(!y)} }
                    closeOnClickMask={ true }
                >
                    <div>hi</div>
                </Dialog>
            </div>
            <div>
                <h1>example 3</h1>
                <button onClick={ () => { alter('11')} }>alter</button>
                <button onClick={ () => { alter1('11 alter1')} }>alter</button>
                <button onClick={ () => { confirm('11', () => { console.log('yes')}, () => { console.log('no')})} }>confirm</button>
                <button onClick={ () => { confirm1('11', () => { console.log('yes')}, () => { console.log('no')})} }>confirm</button>
                <button onClick={ () => { openModal() } }>modal</button>
                <button onClick={ () => { openModal() } }>modal</button>

            </div>
        </Fragment>

    )
}

export default DialogExample