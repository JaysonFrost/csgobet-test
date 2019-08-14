import styled from 'styled-components';

export const Navigation = styled.div`
    min-height: 85px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 5%;
`;

export const NavSide = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 550px) {
        margin: 0 auto;
    }
`;

export const Support = styled.button`
    transition: all 0.25s;
    min-width: 43px;
    height: 43px;
    border-radius: 26px;
    background: #17b96c;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
        width: 23px;
        height: 23px;
        transition: all 0.25s;
    }

    &:hover {
        background: #64e7a9;
    }
`;

export const Socials = styled.div`
    display: flex;
    margin-right: 5px;

    @media (max-width: 550px) {
        display: none;
    }
`;

export const Social = styled.svg`
    fill: #818d9e;
    width: 22px;
    margin-left: 30px;
    cursor: pointer;
    transition: fill 0.3s;

    &:hover {
        fill: #1b2129;
    }
`;