import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

import * as Styled from './styles';

class Dropdown extends Component {
	static propTypes = {
		widthProp: PropTypes.number,
		data: PropTypes.array.isRequired
	}

	state = {
		selectedItem: this.props.data[0],
		dropdownOpen: false
	}

	handleDropdown = () => {
		this.setState(state => ({
			dropdownOpen: !state.dropdownOpen
		}));
	}

	handleClickOutside = () => {
		this.setState({
			dropdownOpen: false
		});
	};

	selectItem = (elem) => {
		this.setState({
			selectedItem: elem
		});
	}

	render() {
		const {
			selectedItem: {
				text,
				iconViewBox,
				iconPath,
			},
			dropdownOpen
		} = this.state;

		const {
			widthProp,
			data
		} = this.props;

		return (
			<Styled.Dropdown onClick={this.handleDropdown} opened={dropdownOpen} widthProp={widthProp}>
				<Styled.Header>
					{iconViewBox ?
						<Styled.IconSVG viewBox={iconViewBox}>
							<path d={iconPath} />
						</Styled.IconSVG> :
						<Styled.Icon src={iconPath} alt={text} />
					}

					<Styled.Text>{text}</Styled.Text>
					<Styled.Arrow opened={dropdownOpen}></Styled.Arrow>
				</Styled.Header>
				<Styled.List opened={dropdownOpen}>
					{data.filter(elem => elem.text !== text).map(elem => (
						<Styled.Item key={elem.text} opened={dropdownOpen} onClick={() => this.selectItem(elem)}>
							{elem.iconViewBox ?
								<Styled.IconSVG viewBox={elem.iconViewBox}>
									<path d={elem.iconPath} />
								</Styled.IconSVG> :
								<Styled.Icon src={elem.iconPath} alt={elem.text} />
							}
							<Styled.Text>{elem.text}</Styled.Text>
						</Styled.Item>
					))}
				</Styled.List>
			</Styled.Dropdown>

		);
	}
}

export default onClickOutside(Dropdown);
