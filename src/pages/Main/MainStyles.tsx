import styled from "styled-components";
import { SEC_COLOR, WHITE_COLOR } from "../../styles/constants/colors";


export const MainWrapper = styled.div`
       .first {
        margin-top: 8rem;
        width: 100%;

        .counter {
            width: 29%;
        }
    
        svg {
        transform: translateX(30px);
    }
    }
`

export const Card = styled.div`
    height: 8rem;
    overflow-y: hidden;
    background-color: ${WHITE_COLOR};
    padding: 2rem;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    font-size: var(--fs-lg);
    font-weight: 600;
    margin-inline: auto;
    width: 100%;
    
    display: flex;
    align-items: center;
    gap: 3rem;

    p {
        width: 100%;
    }

    .counter {
        width: 40%;
        font-size: 15.5rem;
        color: ${SEC_COLOR};
        font-weight: bolder;
    }

    .icon {
        display: flex;
        align-items: center;
        font-size: 5rem;
        color: ${SEC_COLOR};
    }

    :hover {
        cursor: pointer;
        opacity: 0.5;
    }
`