import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
    gap: 20px;
    svg {
        opacity: 0.7;
        transition: 0.2s ease;
        cursor: pointer;
    }
    svg:hover {
        opacity: 1;
    }
`;
