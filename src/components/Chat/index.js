import React, {
	Component
} from 'react';
import onClickOutside from 'react-onclickoutside';

import * as Styled from './styles';

import { chatSvgPath, addMessageSvg, smileSvgPath } from './strings.js';

import profileIcon from 'assets/img/profileicon.png';
import { mockedData } from './mock.js';

class Chat extends Component {
	constructor(props) {
		super(props);

		this.chatRef = React.createRef();
	}

	state = {
		data: mockedData,
		value: '',
		chatIsOpen: false
	}

	componentDidUpdate() {
		this.chatRef.current.scrollTo(0, this.chatRef.current.scrollHeight);
	}

	componentDidMount() {
		this.chatRef.current.scrollTo(0, this.chatRef.current.scrollHeight);
	}

	handleInput = (event) => {
		this.setState({
			value: event.target.value
		});
	}

	handleClickOutside = () => {
		this.setState({
			chatIsOpen: false
		});
	};

	addMessage = (event) => {
		event.preventDefault();
		const {
			value,
			data
		} = this.state;

		if (!value.length) {
			return;
		}

		const mockedData = {
			id: Math.random(0, 100),
			name: 'Igor Arnautov',
			messageText: value,
			image: profileIcon,
			date: new Date().toLocaleString().slice(0, -3)
		};

		this.setState({
			data: [...data, mockedData],
			value: ''
		}, () => this.chatRef.current.scrollTo(0, this.chatRef.current.scrollHeight));
	}

	openChat = () => {
		this.setState(state => ({
			chatIsOpen: !state.chatIsOpen
		}));
	}

	render() {
		const {
			data,
			value,
			chatIsOpen
		} = this.state;

		return (
			<Styled.Chat>
				<Styled.ChatButton onClick={this.openChat} opened={chatIsOpen}>
					<Styled.ButtonIcon viewBox="0 0 41 49">
						<path d={chatSvgPath} />
					</Styled.ButtonIcon>
					<Styled.ButtonText>CHAT</Styled.ButtonText>
				</Styled.ChatButton>
				<Styled.ChatField opened={chatIsOpen}>
					<Styled.Header>
						<Styled.HeaderLeft onClick={this.openChat}>
							<Styled.HeaderIcon viewBox="0 0 41 49">
								<path d={chatSvgPath} />
							</Styled.HeaderIcon>
							<Styled.ChatName>Чат</Styled.ChatName>
						</Styled.HeaderLeft>
						<Styled.HeaderRight>
							<Styled.Online>
								<Styled.OnlineIcon></Styled.OnlineIcon>
								<Styled.OnlineCount>{456}</Styled.OnlineCount>
								<span> онлайн</span>
							</Styled.Online>
						</Styled.HeaderRight>

					</Styled.Header>

					<Styled.Messages ref={this.chatRef}>
						{data.map(elem => (
							<Styled.Message key={elem.id}>
								<Styled.ProfileIcon src={elem.image} />
								<Styled.MessageInfo>
									<Styled.InfoTop>
										<Styled.ProfileName>{elem.name}</Styled.ProfileName>
										<Styled.Date>{elem.date}</Styled.Date>
									</Styled.InfoTop>
									<Styled.MessageText>{elem.messageText}</Styled.MessageText>
								</Styled.MessageInfo>
							</Styled.Message>
						))}
					</Styled.Messages>
					<Styled.Sender>
						<form onSubmit={this.addMessage}>
							<Styled.Input
								onChange={this.handleInput}
								value={value}
								type="text"
								placeholder="Введите сообщение"
							></Styled.Input>
						</form>

						<button disabled>
							<Styled.InputIcon viewBox="0 0 40 41">
								<path d={addMessageSvg} />
							</Styled.InputIcon>
						</button>

						<form onSubmit={this.addMessage}>
							<button onClick={this.addMessage}>
								<Styled.InputIcon viewBox="0 0 41 41">
									<path d={smileSvgPath} />
								</Styled.InputIcon>
							</button>
						</form>

					</Styled.Sender>
				</Styled.ChatField>
			</Styled.Chat>
		);
	}
}

export default onClickOutside(Chat);