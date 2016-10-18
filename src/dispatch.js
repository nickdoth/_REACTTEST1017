import React , { Component } from 'react'
import ReactDOM from 'react-dom'
import bs, { Grid, Alert } from 'react-bootstrap'
import { LoginForm } from './member';

export function r(route, data) {
	var [c, func] = route.split('/')
	ctrl[c][func](data)
	renderApp()
}

export var appState = {}

export var ctrl = {
	member: {
		login(data) {
			console.log('login with:', data)
			appState.loggedIn = true
		},
	}
}

function Page() {
	let alertLoggedIn = appState.loggedIn ?
		(<Alert>You have logged in.</Alert>) : ''

	return <Grid>
		<h1>Hello</h1>
		{alertLoggedIn}
		<LoginForm />
	</Grid>
}


export function renderApp() {
	ReactDOM.render(<Page />, document.getElementById('page'))
}