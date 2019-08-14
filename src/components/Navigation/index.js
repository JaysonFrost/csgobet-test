import React, { Component } from 'react';

import Navbar from 'components/Navbar';
import Dropdown from 'components/Dropdown';
import * as Styled from './styles';

import supportIcon from 'assets/img/support-icon.svg';

import { socialSVG, langs, times } from './strings.js';

export default class Navigation extends Component {
    render() {
        return (
            <Styled.Navigation>
                <Styled.NavSide>
                    <Styled.Support>
                        <img src={supportIcon} alt="icon" />
                    </Styled.Support>
                    <Navbar />
                </Styled.NavSide>
                <Styled.NavSide>
                    <Styled.Socials>
                        {socialSVG.map((elem) => (
                            <Styled.Social key={elem.name} viewBox={elem.viewBoxIcon}>
                                <path d={elem.pathIcon} />
                            </Styled.Social>
                        ))}
                    </Styled.Socials>

                    <Dropdown widthProp={108} data={times} />
                    <Dropdown data={langs} />
                </Styled.NavSide>
            </Styled.Navigation>
        );
    }
}
