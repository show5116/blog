import styled from 'styled-components';
import { variable } from '../styles/variable';
import { color } from '../styles/color';

export const Container = styled.header<{ visible: boolean }>`
  position: fixed;
  display: flex;
  height: ${variable.headerHeight};
  justify-content: space-between;
  align-items: flex-end;
  user-select: none;
  transition: top 0.3s ease 0.2s;
  top: ${props => (props.visible ? '0' : `-${variable.headerHeight}`)};
  width: 100%;
  padding-left: ${variable.pagePadding};
  padding-right: ${variable.pagePadding};
  margin-bottom: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${color.gray};
  padding: 2px;
  border-radius: 100%;
  margin-right: 0.25rem;
  cursor: pointer;
  img {
    border-radius: 50%;
  }
`;
