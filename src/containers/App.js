import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

class App extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <BrowserRouter>
                    <Switch>
                      
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App
