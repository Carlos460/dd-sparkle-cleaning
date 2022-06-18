import styled from 'styled-components';

export const CtaButton = styled.button`
  height: 45px;
  margin: 20px 0px 0px;
  padding: 0px 10px;
  font-size: 17px;

  color: white;
  background-color: var(--primary);
  border: solid 2px var(--primary);
  border-radius: 4px;
  cursor: pointer;
  box-shadow: var(--primary);
  &:hover {
    background-color: rgba(0, 0, 0, 0);
    color: var(--primary);
  }
  &:active {
    background-color: var(--primary);
    color: white;
  }
`;
