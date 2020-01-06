import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import './lib/./index.scss'

import IconExample from "./lib/icon/icon.example"
import DialogExample from './lib/dialog/dialog.example'
import LayoutExampe from './lib/layout/layout.example'

ReactDom.render((
    <Router>
        <div>
            <header>
                <h2>ckui</h2>
            </header>
            <div>
                <aside>
                    <h2>组件</h2>
                    <ol>
                        <li>
                            <Link to={'/icon'}>Icon</Link>
                        </li>
                        <li>
                            <Link to={'/button'}>Button</Link>
                        </li>
                        <li>
                            <Link to={'/dialog'}>对话框</Link>
                        </li>
                        <li>
                            <Link to={'/layout'}>布局</Link>
                        </li>
                    </ol>
                </aside>
                <main>
                    <Route path={'/icon'} component={ IconExample } />
                    <Route path={'/dialog'} component={ DialogExample } />
                    <Route path={'/layout'} component={ LayoutExampe } />
                </main>
            </div>
        </div>
    </Router>

), document.getElementById('root'))