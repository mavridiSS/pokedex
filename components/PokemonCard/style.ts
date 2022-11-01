import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0.5rem;
  margin: 2rem;
  border-radius: 1rem;
  width: 220px;
  height: 285px;
  text-align: center;
  box-shadow: 0 5px 25px 1px rgb(0 0 0 / 50%);
  transition: all 0.2s ease-in-out;
  gap: 10px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;
