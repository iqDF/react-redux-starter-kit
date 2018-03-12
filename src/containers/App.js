import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'

class Test extends React.Component {
    render() {
        return (
            <h1>No Redux</h1>
        )
    }
}
class App extends React.Component {

    shouldComponentUpdate() {
        return false
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Test} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
