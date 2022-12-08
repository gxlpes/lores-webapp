import styled, { createGlobalStyle, keyframes } from "styled-components";
import { FONT_COLOR, GREY_COLOR, MAIN_COLOR, WHITE_COLOR } from "../constants/colors";

interface PropsStyles {
  shadow: boolean;
  padding: boolean;
}

export default createGlobalStyle`

:root{
--fs-sm: clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem);
--fs-base: clamp(1rem, 0.34vw + 0.91rem, 1.19rem);
--fs-md: clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem);
--fs-lg: clamp(1.56rem, 1vw + 1.31rem, 2.11rem);
--fs-xl: clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem);
--fs-xxl: clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem);
--fs-xxxl: clamp(3.05rem, 3.54vw + 2.17rem, 5rem);
}

h1 {
    font-size: var(--fs-xxl);
    font-weight: 700;
    }

h2 {
    font-size: var(--fs-xl);
    font-weight: 700;
}

h3 {
    font-size: var(--fs-lg);
    font-weight: 700;
}

input:focus {
  outline: 2px solid ${MAIN_COLOR}
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  overflow-x: hidden;
  overflow-y: hidden;

  a {
    color: inherit;
    text-decoration: none;
  }

}

body {
    font-family: "Inter", sans-serif;
    color: ${FONT_COLOR};
    font-size: var(--fs-base);
    transition: all 0.3s ease-in-out;
}

button[type=submit] { 
    margin-top: 4rem;
}

label[for=admin] {
  margin-block: 1rem 2rem;
}

.valid {
      background-color: ${MAIN_COLOR};
      color: ${WHITE_COLOR};
    }

`;

export const Button = styled.button`
    border: none;
    padding: 1rem;
    border-radius: 0.3rem;
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    width: 20rem;

    :hover {
        opacity: 0.5;
    }
`;



export const Input = styled.input`
    background-color: ${GREY_COLOR};
    border-radius: 0.3rem;
    border: none;
    padding: 1rem;
    font-size: inherit;
`;

export const Label = styled.label`
    font-weight: 500;
    margin-block: 2rem 0.5rem;

    display: flex;
    gap: 1rem;

    :first-of-type {
      margin-block: 0rem 0.5rem;
    }
`;

export const Form = styled.form<PropsStyles>`
    display: flex;
    flex-direction: column;
    animation: upAppear 0.3s ease-in-out;
    padding: ${(props) => props.padding ? "4rem" : "1rem"};
    box-shadow: ${((props) => props.shadow ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : undefined)};
    background-color: ${(props) => props.color};
    border-radius: ${((props) => props.shadow ? "5px" : undefined)};
`


export const opacityAppear = keyframes`
    from {
      opacity: 0;
    }

    to {
      opacity: 100;
    }
`;

export const upAppear = keyframes`
  from {
  opacity: 0;
  transform: translateY(50px);
}
  to {
  opacity: 1;
  transform: translateY(0);
}
`;




















