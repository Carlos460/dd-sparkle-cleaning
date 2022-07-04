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
  max-width: 75%;
  margin: 10rem auto 5rem auto;
  @media (max-width: 800px) {
    max-width: 100%;
  }

  @media(max-width: 450px){

  }
`;

export const Header = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 70px;
  line-height: 80px;
  font-weight: 600;
  font-family: sans-serif;
  color: ${(props) => props.color || "black"};

  @media (max-width: 450px) {
    font-size: 40px;
    line-height: 45px;
  }
`;

export const Text = styled.div`
  margin: 30px 0px;
  font-size: 24px;
  font-family: sans-serif;

  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Row = styled.div`
  width: 100%;
  height: 50%;
  margin: 10px 0px;
  display: grid;
  grid-template-columns: auto auto auto;

  justify-content: space-between;
  row-gap: 50px;

  @media (max-width: 1000px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  background-color: var(--primary);
  color: white;
  font-size: 17px;
  line-height: 20px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;
  height: 60px;
  width: 150px;

  box-shadow: 5px 5px 10px rgba(0 , 0, 0, 0.5);

  @media (max-width: 1000px) {
    width: 200px;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  margin-top: 30px;
  color: white;
  font-size: 20px;

  text-decoration: none;

  & > a {
    text-decoration: none;
    color: var(--primary);

    @media(max-width: 450px){
      font-size: 25px;
    }
  }

  @media (max-width: 450px) {
    justify-content: center;
    margin-top: 40px;
  }
`;


