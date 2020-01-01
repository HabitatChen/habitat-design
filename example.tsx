import React from 'react'
import ReactDom from 'react-dom'
import Icon from './lib/icon/Icon'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import IconExample from "./lib/icon/icon.example"

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
                    </ol>
                </aside>
                <main>
                    <Route path={'/icon'} component={ IconExample } />
                </main>
            </div>
        </div>
    </Router>

), document.getElementById('root'))