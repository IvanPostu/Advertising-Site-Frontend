import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import { BaseLayoutStatefull as BaseLayout } from '../layouts/BaseLayout'
import { IndexLoadable as Index } from '../Pages/Home/Index'
import { AboutLoadable as About } from '../Pages/Home/About'



export default class AppRouter extends React.Component {


    render() {
        return (
            <Router>
                <BaseLayout />



                <Route exact path="/" render={() => (<Redirect to="/home/index" />)} />
                <Route path="/home/index" component={Index} />
                <Route path="/home/about" component={About} />
            </Router>)

    }
}
