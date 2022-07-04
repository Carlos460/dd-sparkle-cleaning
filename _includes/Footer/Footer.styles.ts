import Link from "next/link";
import styled from "styled-components";


//SectionContainer
//Left
//Right
//Title

//FooterLink

export const SectionContainer = styled.div`
  width: 100%;
  height: 250px;

  background-color: var(--primary);
  color: white;
  font-family: sans-serif;
  font-size: 20px;
  
  display: flex;
  padding: 2rem 10rem;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
  & > a {
    text-decoration: none;
  }
  @media (max-width: 1000px) {
    

  }
  @media (max-width: 450px) {
    
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;

  text-decoration: none;
  width: 50%;

`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 450px){
      justify-content: center;
    }
`;

export const FooterLink = styled.div`
  & > a {
    font-family: sans-serif;
    text-decoration: none;
    color: white; 
  }
`;


export const Right = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  
  align-items: end;

  @media(max-width: 450px){
      justify-content: center;
      width: 100%;
    }
`;

export const Title = styled.div`
font-family: sans-serif;
font-size: 25px;
font-weight: bold;
`;


