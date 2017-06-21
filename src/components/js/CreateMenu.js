import React from 'react';

import '../css/CreateMenu.css';

export default class CreateMenu extends React.Component {

	constructor(props){
		super(props);

	}

	render(){
		return (
			<div className="innerDiv">
				<input type="text" className="inputCreate" placeholder="  NAME"/><br/>
				<input type="text" className="inputCreate" placeholder="  PHONE"/><br/>
				<button className="createButton" onClick={this.props.createContactData}>CREATE</button>
			</div>
		);
	}
}