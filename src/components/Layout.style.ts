import styled from 'styled-components';
import { variable } from '../styles/variable';

export const Container = styled.div`
  padding-top: ${variable.headerHeight};
  background-color: ${props => props.theme.backgroundColor};
  min-height: 100vh;
`;

export const Main = styled.main`
  margin: 0 auto;
  max-width: 640px;
`;
