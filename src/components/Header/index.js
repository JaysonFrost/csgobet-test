import React, {
    PureComponent,
} from 'react';

import Popup from 'components/Popup';

import * as Styled from './styles';

import logo from 'assets/img/logo.png';
import { dotaLogoPath } from './strings.js';
import profileIcon from 'assets/img/profileicon.png';
import plusIcon from 'assets/img/plus.svg';

export default class Header extends PureComponent {
    render() {
        return (<Styled.Header>
            <Styled.HeaderSide >
                <Styled.LogoLink href="/" >
                    <img src={logo}
                        alt="logo"
                        css="width: 200px" />
                </Styled.LogoLink>

                <Styled.DotaLink href="/dota" >
                    <Styled.DotaImg viewBox='0 0 71 71'>
                        <path d={dotaLogoPath} />
                    </Styled.DotaImg>
                </Styled.DotaLink >

                <Styled.HeaderButton bonus >
                    <Styled.ButtonTopIcon bonus />
                    <Styled.ButtonTextWrapper >
                        <Styled.ButtonText bold color="#2db1ef" > Бонусы </Styled.ButtonText>
                        <Styled.ButtonText color="#92cfec" > Ежедневные раздачи </Styled.ButtonText>
                    </Styled.ButtonTextWrapper>

                </Styled.HeaderButton>

                <Styled.HeaderButton >
                    <Styled.ButtonTopIcon />
                    <Styled.ButtonTextWrapper >
                        <Styled.ButtonText bold color="#0656f9" > Интуиция </Styled.ButtonText>
                        <Styled.ButtonText color="#729dff" > Угадывай события </Styled.ButtonText>
                    </Styled.ButtonTextWrapper>
                </Styled.HeaderButton>
            </Styled.HeaderSide>

            <Styled.HeaderSide>
                <Styled.BetButton >
                    <Styled.BetIcon />
                    <Styled.BetText > Мои ставки </Styled.BetText>
                </Styled.BetButton>

                <Styled.Profile >
                    <Styled.ProfileIcon src={profileIcon} />
                    <Styled.ButtonTextWrapper css="margin-left: 10px" >
                        <Styled.ProfileName > Виктор Павлов </Styled.ProfileName>
                        <Styled.ProfileBalance> 8 608.50 Р </Styled.ProfileBalance>
                    </Styled.ButtonTextWrapper >

                    <Styled.Deposit >
                        <img src={plusIcon} alt="icon" />
                    </Styled.Deposit>
                </Styled.Profile >

                <Popup />
            </Styled.HeaderSide>
        </Styled.Header>
        );
    }
}