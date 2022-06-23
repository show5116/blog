import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  svg {
    color: ${props => props.theme.fontColor};
  }
`;
