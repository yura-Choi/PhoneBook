import React from 'react';

import '../css/SelectMenu.css';

export default class SelectMenu extends React.Component {

	constructor(props){
		super(props);

		this.createMenu = this.createMenu.bind(this);
		this.deleteMenu = this.deleteMenu.bind(this);
		this.editMenu = this.editMenu.bind(this);
	}

	createMenu(){
		this.props.setSelectMenu(1);
	}
	deleteMenu(){
		this.props.setSeleteMenu(2);
	}
	editMenu(){ 
		this.props.setSeleteMenu(3); 
	}

	render(){
		return (
			<div>
				<button className="buttonMenu" onClick={this.createMenu}>CREACT</button>
				<button className="buttonMenu" onClick={this.deleteMenu}>DELETE</button>
				<button className="buttonMenu" onClick={this.editMenu}>EDIT</button>
				<button className="buttonMenu" onClick={this.props.showEditMenu}>CANCEL</button>
			</div>
		);
	}

}