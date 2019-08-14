import styled from 'styled-components';

export const Chat = styled.div `
    display: block;
    position: absolute;
`;

export const ButtonIcon = styled.svg `
    width: 25px;
    fill: #ff3c00;
    transform: rotate(90deg);
    transition: fill 0.3s;
`;

export const ChatButton = styled.button `
    height: 50px;
    width: 140px;
    display: ${props => props.opened ? 'none' : 'flex'};
    border-radius: 4px;
    background: #fff;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 400px;
    left: -45px;
    box-shadow: 0px 0px 20px -4px rgba(0,0,0,0.12);
    transform: rotate(-90deg);

    & :hover {
        ${ButtonIcon} {
            fill: #1278ef;
        }
    }
`;

export const ButtonText = styled.span `
    font-size: 21px;
    font-weight: 500;
    margin-left: 15px;
`;

export const ChatField = styled.div `
    width: 340px;
    height: 105px;
    z-index: 123;
    position: absolute;
    transition: all 0.3s;
    visibility: ${props => props.opened ? 'visible' : 'hidden'};
    opacity: ${props => props.opened ? '1' : '0'};
    top: 170px;
`;

export const Header = styled.div `
    height: 105px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    background: #fff;
    border: 1px solid #f6f7f9;
`;

export const HeaderIcon = styled.svg `
    width: 20px;
    fill: #ff3c00;
    transform: rotate(90deg);
`;

export const HeaderLeft = styled.div `
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const HeaderRight = styled.div `
    display: flex;
    align-items: center;
`;

export const ChatName = styled.div `
    font-size: 20px;
    font-weight: 500;
    margin-left: 10px;
`;

export const Icon = styled.div `
    display: block;
`;

export const Online = styled.div `
    display: flex;
    align-items: center;
`;

export const OnlineIcon = styled.div `
    width: 7px;
    height: 7px;
    background-color: #3abc33;
    border-radius: 5px;
`;

export const OnlineCount = styled.span `
    font-size: 16px;
    font-weight: bold;
    margin: 0 5px;
`;

export const Messages = styled.ul `
    max-height: 300px;
    overflow: overlay;
    padding: 20px;
    background: #fff;
    border-right: 1px solid #f6f7f9;
    border-bottom: 1px solid #f6f7f9;

    & ::-webkit-scrollbar {
        width: 3px;
        margin-right: 5px;
        padding-right: 10px;
    }

    & ::-webkit-scrollbar-track {
        background: #f4f5f8; 
        margin-right: 5px;
        border-radius: 5px;
        padding-right: 10px;
    }

    & ::-webkit-scrollbar-thumb {
        -webkit-appearance: none;
        background: #dde4f3;
        border-radius: 5px;
        margin-right: 5px;
        padding-right: 10px;
        width: 3px;
    }
`;

export const Message = styled.li `
    width: 100%;
    margin-bottom: 25px;
    display: flex;
`;

export const ProfileIcon = styled.img `
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

export const InfoTop = styled.div `
    display: flex;
    justify-content: space-between;
`;

export const MessageInfo = styled.div `
    display: flex;
    flex-direction: column;
    width: 230px;
    margin-left: 20px;
`;

export const ProfileName = styled.span `
    font-size: 15px;
    font-weight: 400;
`;

export const Date = styled.span `
    font-size: 11px;
    color: #6f7d9e;
`;

export const MessageText = styled.span `
    margin-top: 20px;
    border-radius: 5px;
    background: #f5f7f9;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 400;
    color: #455366;
    position: relative;

    & :after {
        content: " ";
        position: absolute;
        bottom: 100%;
        left: 8%;
        margin-left: -5px;
        border-width: 0px 11px 9px 0;
        border-style: solid;
        border-color: transparent transparent #f5f7f9 transparent;
    }
`;

export const Sender = styled.div `
    height: 60px;
    background-color: #f9fafb;
    display: flex;
    align-items: center;
`;

export const Input = styled.input `
    height: 60px;
    background-color: #f9fafb;
    border: 0;
    padding-left: 25px;
    width: 250px;
`;

export const InputIcon = styled.svg `
    width: 18px;
    margin-right: 14px;
    fill: #d3d7dd;
    cursor: pointer;
    transition: fill 0.3s;

    & :hover {
        fill: #9fa8b4;
    }
`;