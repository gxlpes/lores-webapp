import styled from "styled-components";
import { MAIN_COLOR, WHITE_COLOR } from "../../styles/constants/colors";

export const SubheaderWrapper = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    
    width: 100%;

    button {
        margin-block: 2rem;
        background-color: ${MAIN_COLOR};
        color: ${WHITE_COLOR};
    }

    form {
        display: flex;
        flex-direction: row !important;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        button {
            margin:unset;
        }
    }
`