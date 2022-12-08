import styled from "styled-components";
import { MAIN_COLOR } from "../../styles/constants/colors";

export const Row = styled.div`
    border: 2px solid ${MAIN_COLOR};
    border-radius: 8px;

    display: flex;
    gap: 1rem;
    justify-content: flex-start;


    p {
        padding: 1rem;
        width: 15rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }
`