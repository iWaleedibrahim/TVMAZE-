
import React, { Component } from 'react'
import { Provider } from 'react-redux'
// import ShowList from './Components/ShowList'
import { configureStore } from './Store/store'
import Main from './Config/routes'



class App extends Component {
    state = { loading: true }

    loadShows = () => {
        this.setState({ loading: true })
    }

    render() {
        return (
            <Provider store={configureStore()}>
                <Main />
            </Provider >
        )
    }
}

export default App;

