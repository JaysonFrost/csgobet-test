import styled from 'styled-components';

export const Navbar = styled.ul `
    min-height: 85px;
    display: flex;
    margin-left: 5px;
    position: relative;
    flex-wrap: wrap;

    @media (max-width: 957px) {
        justify-content: center;
    }
`;

export const NavItem = styled.li `
    font-size: 15px;
    font-weight: 500;
    padding: 20px 30px;
    color: #4c5768;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: all 0.3s;
`;

export const NavSlider = styled.div `
    transition: all 0.3s;
    height: 2px;
    width: ${props => props.wide === 54 ? 54 : props.wide - 60}px;
    left: ${props => props.position + 30}px;
    position: absolute;
    bottom: 0;
    background: #0075f3;

    @media (max-width: 957px) {
        display: none;
    }
`;