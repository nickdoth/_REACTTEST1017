import React , { Component } from 'react'
import ReactDOM from 'react-dom'
import { r, appState } from '../dispatch'
import bs, { Grid, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import Immutable from 'immutable'

type int = number

export var LoginForm = React.createClass({

    info: Immutable.Map({
        username: '',
        password: ''
    }),

	getInitialState() {
        return this.info
	},

	render() {
        console.log(this.info);
		return <form>
				<p>Page#state: {JSON.stringify(this.info.toJS())}</p>
				{field(this, 'UserName', 'username')}
				{field(this, 'Password', 'password', { type: 'password' })}
				<a className="btn btn-primary" onClick={() => r('member/login', this.info.toJS())}>Summit</a>
			</form>
		
	}
})

function field(comp, viewName, stateKey, options) {
	return <FormGroup>
		<ControlLabel>{String(viewName)}</ControlLabel>
		<FormGroup>
			<FormControl
				disabled={appState.loggedIn}
				onChange={linkChange(comp, stateKey)} 
				type="text" 
				value={comp.info.get(stateKey)}
				{...options} />
		</FormGroup>
	</FormGroup>
}

function linkChange(comp, stateKey) {
	return function handleChange(e) {
        comp.info = comp.info.set(stateKey, e.target.value)
		comp.setState(comp.info);
	}
}