import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';

import * as Styled from './styles';


import { navItems } from './strings.js';

class Popup extends Component {
	state = {
		sliderPosition: 0,
		popupOpen: false
	}

	handleClickOutside = () => {
		this.setState({
			popupOpen: false
		});
	};

	handleItem = (event, index) => {
		event.stopPropagation();
		const {
			offsetTop
		} = event.target;

		this.setState({
			sliderPosition: offsetTop,
			activeItem: index
		});
	}

	openPopup = () => {
		this.setState(state => ({
			popupOpen: !state.popupOpen
		}));
	}

	render() {
		const {
			sliderWidth,
			sliderPosition,
			activeItem,
			popupOpen
		} = this.state;

		return (
			<Styled.MenuButton onClick={this.openPopup} active={popupOpen}>
				<Styled.MenuFirstLine />
				<Styled.MenuSecondLine />

				<Styled.Popup active={popupOpen}>
					{navItems.map((elem, index) => (
						<Styled.PopupItem key={elem.text} onClick={event => this.handleItem(event, index)}>
							<Styled.PopupIcon viewBox={elem.iconViewBox} active={activeItem === index}>
								<path d={elem.iconPath} />
							</Styled.PopupIcon>
							<Styled.PopupText>{elem.text}</Styled.PopupText>
						</Styled.PopupItem>
					))}
					<Styled.PopupSlider length={sliderWidth} position={sliderPosition} />
				</Styled.Popup>
			</Styled.MenuButton>
		);
	}
}

export default onClickOutside(Popup);
