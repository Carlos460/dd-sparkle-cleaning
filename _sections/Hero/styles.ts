import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 800px;
  padding: 100px 0px 0px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const CtaButton = styled.button`
  height: 45px;
  margin: 25px 0px 0px;
  padding: 0px 10px;
  font-size: 16px;

  color: white;
  background-color: var(--primary);
  border: solid 2px var(--primary);
  border-radius: 4px;
  cursor: pointer;
  box-shadow: var(--primary);
  transition: background-color 0.4s ease, color 0.4s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0);
    color: var(--primary);
  }
  &:active {
    background-color: var(--primary);
    color: white;
  }
`;
