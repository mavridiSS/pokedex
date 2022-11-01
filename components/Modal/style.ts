import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Modal = styled.div`
  background-color: white;
  position: absolute;
  top: 25%;
  right: 25%;
  bottom: 25%;
  left: 25%;
  padding: 1em;

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    top: 25%;
    right: 10%;
    bottom: 25%;
    left: 10%;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  body {
    overflow: hidden;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  align-self: flex-end;
`;

export const Input = styled.input`
  padding: 5px 2px 5px;
  box-sizing: content-box;
  height: 1.4375em;
  margin: 0px;
  display: block;
  min-width: 0px;
  width: 100%;
`;
