import React from 'react';
import Update from 'react-addons-update';

import Header from './Header';
import SearchList from './SearchList';
import CreateMenu from './CreateMenu';
import RemoveMenu from './RemoveMenu';
import EditMenu from './EditMenu';

import '../css/PhoneBook.css';

export default class PhoneBook extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			selectMenu: 0,
			inputValue: '',
			dataList: [
				{ name: 'Yura', phone: '010-7040-0006' },
				{ name: 'Yutina', phone: '010-7744-2206' },
				{ name: 'Yuta', phone: '010-7605-9281' }
			]
		}

		this.setSelectMenu = this.setSelectMenu.bind(this);
		this.setInputValue = this.setInputValue.bind(this);
		this.getInputValue = this.getInputValue.bind(this);
		this.createContactData = this.createContactData.bind(this);
		this.removeDataList = this.removeDataList.bind(this);
		this.editDataList = this.editDataList.bind(this);

	}

	setSelectMenu(value){
		this.setState({ selectMenu: value });

		console.log(this.state.selectMenu);
	}

	setInputValue(e){
		this.setState({ inputValue: e.target.value });
	}

	getInputValue(){ 
		return this.state.inputValue; 
	}

	createContactData(contact){
		this.setState({ dataList: update(this.state.dataList, { $push: [contact] }) });
		this.setSelectMenu(0);
	}

	removeDataList(index){
		this.setState({
			dataList: update(this.state.dataList, { $splite: [[index, 1]] })
		});
	}

	editDataList(contact, index){
		this.setState({
			dataList: update(this.state.dataList,
				{
					[index]: {
						name: { $set: contact.name },
						phone: { $set: contact.phone }
					}
				}
			)
		});
	}

	componentWillMount(){
		document.body.style.margin = 0;
		document.body.style.padding = 0;
		document.body.style.backgroundColor = '#2d2d2d';
	}

	render(){

		const title_style = { margin: '30px', textAlign: 'center', color: '#ddd' }
		const undefined_menu = { textAlign: 'center', fontSize: '20px', color: '#fff' }

		return (
			<div>
				<h1 className="title">PhoneBook</h1>
				
				<Header setInputValue={() => this.setInputValue} setSelectMenu={() => this.setSelectMenu} />
				{
					(this.state.selectMenu==0) ?
						<SearchList dataList={this.state.dataList} inputValue={() => this.getInputValue} />

						: (this.state.selectMenu==1) ? 
							<CreateMenu createContactData={() => this.createContactData} />

							: (this.state.selectMenu==2) ?
								<RemoveMenu removeDataList={() => this.removeDataList} />

								: (this.state.selectMenu==3) ?
									<EditMenu editDataList={() => this.editDataList} />

									: <div className="undefinedMenu">--Cannot Find Menu--</div>
					
						
				}
			

			</div>
		);
	}
}