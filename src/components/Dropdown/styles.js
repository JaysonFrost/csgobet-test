import styled from 'styled-components';

export const Dropdown = styled.div `
    display: flex;
    align-items: center;
    padding: 0 15px;
    min-width: 65px;
    width: ${props => props.widthProp ? `${props.widthProp - 30}px` : 'auto'};
    height: 40px;
    border: ${props => !props.opened ? '1px solid #e7eaf5' : '1px solid transparent'};
    cursor: pointer;
    font-weight: 400;
    margin-left: 15px;
    position: relative;
`;


export const Header = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
`;

export const IconSVG = styled.svg `
    width: 17px;
`;

export const Icon = styled.img `
    width: 20px;
    height: 15px;
`;

export const Arrow = styled.div `
    width: 0;
    height: 0;
    position: absolute;
    right: 15px;
    transition: all 0.3s;
    transform: ${props => props.opened ? 'rotate(-180deg)' : 'unset'};
    border-style: solid;
    border-width: 6px 3px 0 3px;
    border-color: #000000 transparent transparent transparent;
`;

export const Text = styled.div `
    display: block;
    margin-left: 7px;
`;

export const List = styled.ul `
    background: #fff;
    min-width: 50px;
    position: absolute;
    opacity: ${props => props.opened ? '1' : '0'};
    visibility: ${props => props.opened ? 'visible' : 'hidden'};
    top: 41px;
    transition: opacity 0.3s;
    width: 100%;
    left: -1px;
    border-right: ${props => !props.opened ? '1px solid #e7eaf5' : '1px solid transparent'};
    border-left: ${props => !props.opened ? '1px solid #e7eaf5' : '1px solid transparent'};

    & :after {
        width: 100%;
        height: calc(100% + 40px);
        content: '';
        position: absolute;
        top: -40px;
        pointer-events: none;
        box-shadow: ${props => props.opened ? '0px 0px 20px -4px rgba(0,0,0,0.12)' : 'unset'};
    }
`;

export const Item = styled.li `
    transition: all 0.3s;
    display: flex;
    opacity: ${props => props.opened ? '1' : '0'};
    height: 37px;
    align-items: center;
    padding: 0 15px;
    border-top: 1px solid #e7eaf5;
`;