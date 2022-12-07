import styled from "styled-components";
import { GREY_COLOR, MAIN_COLOR, WHITE_COLOR } from "../../styles/constants/colors";

export const HeaderWrapper = styled.header`
padding-inline: 8rem;
padding-block: 1rem;
background-color: ${GREY_COLOR};
transition: all 0.3s ease-in-out;

a:not(.logo) {
    color: ${WHITE_COLOR};
    background-color: ${MAIN_COLOR};
    border-radius: 8px;
    padding: 0.8rem 1.5rem 0.8rem 1.5rem;
    transition: all 0.3s ease-in-out;
}

    a:hover {
        opacity: 0.5;
    }
`

export const ContainerLinks = styled.div`
    display: flex;
    gap: 4rem;
    transition: all 0.3s ease-in-out;

`

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    transition: all 0.3s ease-in-out;


    svg {
        width: 4rem;
    }

`