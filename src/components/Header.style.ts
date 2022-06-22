import styled from "styled-components";
import {variable} from "../styles/variable";

export const Container = styled.header<{visible:boolean}>`
  position: fixed;
  display: flex;
  height: ${variable.headerHeight};
  user-select: none;
  pointer-events: none;
  transition: top 0.3s ease 0.2s;
  top: ${(props)=> props.visible ? '0' : `-${variable.headerHeight}`};
  width: 100%;
`;
