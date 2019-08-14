import styled from 'styled-components';

export const Popup = styled.ul `
    display: flex;
    opacity: ${props => props.active ? '1' : '0'};
    visibility: ${props => props.active ? 'visible' : 'hidden'};
    flex-direction: column;
    position: absolute;
    width: 240px;
    box-shadow: 0px 0px 83px -4px rgba(0,0,0,0.12);
    left: -190px;
    top: 45px;
    background-color: #fff;
    transition: all 0.3s;
    z-index: 100;

    & :after {
        content: " ";
        position: absolute;
        bottom: 100%;
        left: 82%;
        margin-left: -5px;
        border-width: 12px;
        border-style: solid;
        border-color: transparent transparent white transparent;
    }
`;

export const PopupItem = styled.li `
    font-size: 14px;
    font-weight: 500;
    padding-left: 23px;
    color: #4c5768;
    display: flex;
    height: 49px;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid #f6f7f9;
    transition: all 0.3s;
`;

export const PopupSlider = styled.div `
    transition: all 0.3s;
    width: 2px;
    height: 50px;
    top: ${props => props.position}px;
    position: absolute;
    bottom: 0;
    background: #0075f3;
`;

export const PopupIcon = styled.svg `
    width: 20px;
    height: 20px;
    transition: fill 0.3s;
    fill: ${props => props.active ? '#0b76ff' : '#a2abb8'};
`;

export const PopupText = styled.span `
    color: black;
    margin-left: 15px;
    pointer-events:none;
`;

export const MenuFirstLine = styled.div `
    width: 21px;
    height: 2px;
    background: #6b7a8d;
    transition: all 0.2s;
    position: absolute;
    top: 6px;
    right: 0;
`;

export const MenuSecondLine = styled.div `
    width: 13px;
    height: 2px;
    background: #6b7a8d;
    transition: all 0.2s;
    position: absolute;
    top: 13px;
    right: 0;
`;

const emptyClass = styled.div `
    display: block;
`;

export const MenuButton = styled.button `
    width: 24px;
    height: 24px;
    position: relative;
    margin-left: 15px;

    ${props => props.active ? MenuFirstLine : emptyClass} {
        transform: rotate(-45deg);
        right: -4px;
        width: 31px;
        top: 11px;
    }

    ${props => props.active ? MenuSecondLine : emptyClass} {
        transform: rotate(45deg);
        right: -4px;
        width: 31px;
        top: 11px;
    }
`;