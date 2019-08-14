import React, { Component } from 'react';

import * as Styled from './styles';

const navs = [
    'Ставки',
    'Новости',
    'Рейтинг',
    'Скидки',
    'Техподдержка',
    'Как это работает?'
];

export default class Navbar extends Component {
    state = {
        sliderWidth: 54,
        sliderPosition: 0
    }

    handleItem = (event) => {
        const {
            offsetWidth,
            offsetLeft
        } = event.target;

        this.setState({
            sliderWidth: offsetWidth,
            sliderPosition: offsetLeft
        });
    }

    handleCreator = (event) => {
        this.handleItem(event);
    }

    render() {
        const {
            sliderWidth,
            sliderPosition
        } = this.state;

        return (
            <Styled.Navbar>
                {navs.map((elem, index) => (
                    <Styled.NavItem key={elem} onClick={this.handleItem} ref={this[`item${index}`]}>
                        {elem}
                    </Styled.NavItem>
                ))}
                <Styled.NavSlider wide={sliderWidth} position={sliderPosition} />
            </Styled.Navbar>
        );
    }
}
