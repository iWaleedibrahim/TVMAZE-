
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from './Store'
import Main from './Navigation'



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

