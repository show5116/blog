import styled from 'styled-components';
import { variable } from 'styles/variable';

export const Container = styled.div<{ visible: boolean }>`
    position: fixed;
    top: ${variable.headerHeight};
    padding-top: 20px;
    transition: 0.3s ease-in-out;
    opacity: ${(props) => (props.visible ? '1' : '0')};
`;

export const Description = styled.div`
    padding-bottom: 20px;
`;

export const Profile = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    svg {
        width: 20px;
        padding-right: 10px;
    }
    a {
        cursor: pointer;
    }
`;
