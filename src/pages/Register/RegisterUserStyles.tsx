import styled from "styled-components";
import { WHITE_COLOR } from "../../styles/constants/colors";
import { opacityAppear, upAppear } from "../../styles/global/GlobalStyles";

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