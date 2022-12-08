import styled from "styled-components";
import { FONT_COLOR, WHITE_COLOR } from "../../styles/constants/colors";
import { opacityAppear } from "../../styles/global/GlobalStyles";

export const LoginUserWrapper = styled.div`
  animation: ${opacityAppear} 0.3s ease-in-out;
`;

export const HeaderLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;

  margin-bottom: 2rem;
  color: ${FONT_COLOR};
`;

export const LoginSection = styled.div`
  background-color: ${WHITE_COLOR};
`;
