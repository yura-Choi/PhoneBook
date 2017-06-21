import React from 'react';
import SelectMenu from './SelectMenu';

import '../css/Header.css';

export default class Header extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			ifSelect: false
		};

		this.showEditMenu = this.showEditMenu.bind(this);
	}

	showEditMenu(){
		this.setState({ ifSelect: !this.state.ifSelect });
		(!this.static.ifSelect) ? this.props.setSelectMenu(0) : ''
	}

	render(){
		return (
			<div className="wrapperDiv">
				<input type="text" className="input" placeholder="  SEARCH" onChange={this.props.setInputValue} />
				{
					(!this.state.ifSelect) ?
						<button className="openMenu" onClick={this.showEditMenu}>MENU</button>

						: <SelectMenu setSelectMenu={() => this.props.setSelectMenu} showEditMenu={() => this.showEditMenu()} /> 

				}
			</div>
		);
	}
}