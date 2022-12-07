import styled from "styled-components";
import { WHITE_COLOR } from "../../styles/constants/colors";
import { opacityAppear, upAppear } from "../../styles/global/GlobalStyles";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    animation: ${upAppear} 0.3s ease-in-out;

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: ${WHITE_COLOR};
    border-radius: 1rem;
    padding: 4rem;
`

export const RegisterUserWrapper = styled.div`
  transition: all 0.3s ease-in-out;
  animation: ${opacityAppear} 0.3s ease-in-out;

  svg {
    width: 4rem;
    height: auto;
  }
`

export const HeaderRegister = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 7rem;

    color: ${WHITE_COLOR};
  
`