import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import { BaseLayoutStatefull as BaseLayout } from '../layouts/BaseLayout'
import { IndexLoadable as Index } from '../Pages/Home/Index'
import { AboutLoadable as About } from '../Pages/Home/About'




export default class AppRouter extends React.Component {
    constructor(props) {
        super(props)

        // this.state = { a: true }
    }

    render() {
        return (
            <Router>
                {true && <BaseLayout />}
                {/* <button style={{ zIndex: '10' }} onClick={() => { this.setState({ a: !this.state.a }) }}>AAA</button> */}

                <Route exact path="/" render={() => (<Redirect to="/home/index" />)} />
                <Route path="/home/index" component={Index} />
                <Route path="/home/about" component={About} />

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Router>)

    }
}
