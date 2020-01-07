import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom'

import './lib/./index.scss'

import IconDemo from "./lib/icon/icon.demo"
import DialogExample from './lib/dialog/dialog.example'
import LayoutExampe from './lib/layout/layout.example'
import { Layout, Header, Content, Footer, Aside } from './lib/layout/layout'
import './example.scss'

// @ts-ignore
import x from './logo.png'


ReactDom.render((
    <Router>
        <Layout className={'site-page'}>
            <Header className={'site-header'}>
                <div className={'logo'}>
                    <img src={x} alt=""/>
                </div>
            </Header>
            <Layout>
                <Aside className={'site-aside'}>
                    <h2>组件</h2>
                    <ol>
                        <li>
                            <NavLink to={'/icon'}>Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/button'}>Button</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dialog'}>对话框</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/layout'}>布局</NavLink>
                        </li>
                    </ol>
                </Aside>
                <Content className={'site-content'}>
                    <Route path={'/icon'} component={ IconDemo } />
                    <Route path={'/dialog'} component={ DialogExample } />
                    <Route path={'/layout'} component={ LayoutExampe } />
                </Content>
            </Layout>
            <Footer className={'site-footer'}>
                &copy; habitatchen
            </Footer>
        </Layout>
    </Router>

), document.getElementById('root'))