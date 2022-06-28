import styled from "styled-components";

//SectionContainer
//Header
//Text
//BoxContainer
//Link

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 10rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  font-size: 25px;

  display: flex;
  flex-wrap: column;
  background-color: blueviolet;
`;
export const Text = styled.div`
  margin: 30px 0px;
  font-size: 24px;
  background-color: orange;
  font-family: sans-serif;
`;
export const BoxContainer = styled.div`
  background-color: yellow;
  height: 150px;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50%;
`;
export const Box = styled.div`
  background-color: var(--primary);
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 90%;
  width: 15%;
  margin: 0 0 0 0;
  border-radius: 15px;
`;
export const Link = styled.link``;
