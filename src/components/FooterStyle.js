import styled from "styled-components";
import { device } from "../styleAux/deviceSize";

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(61, 61, 240);
  width: 100%;
  max-width: 100%;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 16px;
      width: 100%;
      padding-bottom: 20px;
      li {
        width: 100%;
        padding: 10px 20px;
        color: white;
        font-weight: bold;
      }
    }
  }
  p {
    background-color: white;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px;
  }
  @media ${device.tablet} {
    div {
      flex-direction: row;
      ul {
          flex-direction: row;
          font-size: 18px;
          li {
            padding: 10px 10px;
          }
      }
    }
  }
  @media ${device.laptop} {
    div {      
      ul {
          font-size: 22px;
          li {
            padding: 10px 20px;
          }
      }
    }
  }
`;

export { FooterStyle };
