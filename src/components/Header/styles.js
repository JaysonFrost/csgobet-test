import styled from 'styled-components';
import bonusIcon from 'assets/img/bonus.png';
import intuIcon from 'assets/img/intu.png';
import betIcon from 'assets/img/bet-icon.png';

export const Header = styled.header `
    min-height: 84px;
    display: flex;
    align-items: center;
    padding: 0 5%;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid #eaeef1;

    @media (max-width: 1385px) {
        justify-content: center;
    }
`;

export const HeaderSide = styled.nav `
    display: flex;
    align-items: center;
    min-height: 86px;
    flex-wrap: wrap;
`;

export const LogoLink = styled.a `
    display: flex;
    width: 200px;
    height: 86px;
    align-items: center;
    justify-content: center;
    padding-right: 40px;

    @media (max-width: 361px) {
        padding: 0;
    }
`;

export const DotaImg = styled.svg `
    width: 40px;
    height: 40px;
    fill: #fff;
    transition: fill 0.3s;
`;

export const DotaLink = styled.a `
    width: 85px;
    height: 86px;
    background: #2f3647;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;

    & :hover {
        background: #12151d;

        ${DotaImg} {
            fill: #ff3c00
        }
    }

    @media (max-width: 361px) {
        display: none;
    }
`;

export const ButtonTopIcon = styled.div `
    width: 45px;
    height: 45px;
    background-image: ${props => `url(${props.bonus ? bonusIcon : intuIcon})`};
    background-size: cover;
    margin-right: 15px;
`;

export const ButtonText = styled.span `
    font-weight: ${props => (props.bold ? 'bold' : '200')};
    font-size: ${props => (props.bold ? '15px' : '13px')};
    color: ${props => props.color};
`;

export const ButtonTextWrapper = styled.div `
    display: flex;
    flex-direction: column;
`;

export const HeaderButton = styled.div `
    display: flex;
    height: 84px;
    padding: 0 25px;
    align-items: center;
    border-bottom: 2px solid transparent;
    border-right: 1px solid #eaeef1;
    cursor: pointer;
    transition: border-bottom-color 0.3s;
    
    &:hover {
        border-bottom-style: solid;
        border-bottom-color: ${props => (props.bonus ? '#2db2f0' : '#0656f9')};
        border-bottom-width: 2px;
    }

    @media (max-width: 1200px) {
        border-right: 0;
        border-left: 1px solid #eaeef1;
    }

    @media (max-width: 880px) {
        ${ButtonTextWrapper} {
            display: none;
        }
    }

    @media (max-width: 620px) {
        display: none;
    }
`;


export const BetButton = styled.button `
    width: 150px;
    height: 45px;
    background-color: #6d809a;
    border-radius: 40px;
    display: flex;
    margin-left: 15px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background-color: #333f51;
    }

    @media (max-width: 510px) {
        display: none;
    }
`;

export const BetIcon = styled.div `
    background-image: url(${betIcon});
    background-size: cover;
    width: 15px;
    height: 15px;
`;

export const BetText = styled.span `
    color: #ffffff;
    margin-left: 10px;
    font-size: 15px;
`;

export const Profile = styled.div `
    height: 45px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    position: relative;

    & :after {
        content: ''; /* ${props => props.online && ''} */
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 5px;
        background: red;
        left: 42px;
        top: -3px;
    }
`;

export const ProfileIcon = styled.img `
    width: 45px;
    height: 45px;
    background-color: #f1f3f6;
    border-radius: 40px;
    cursor: pointer;
`;

export const ProfileName = styled.span `
    font-size: 16px;
    color: #27303b;
    font-weight: 400;
    margin-bottom: 4px;
`;

export const ProfileBalance = styled.span `
    font-size: 19px;
    color: #17c06d;
`;

export const Deposit = styled.button `
    transition: all 0.25s;
    width: 25px;
    height: 25px;
    border-radius: 26px;
    background: #17b96c;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 35px;
    cursor: pointer;
    
    img {
        width: 13px;
        height: 13px;
        transition: all 0.25s;
    }

    &:hover {
        background: #64e7a9;

        img {
            transform: rotate(-90deg)
        }
    }

    @media (max-width: 361px) {
        display: none;
    }
`;