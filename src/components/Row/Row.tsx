import styled from "styled-components";
import { MAIN_COLOR } from "../../styles/constants/colors";

export const Row = styled.div`
    border: 2px solid ${MAIN_COLOR};
    border-radius: 8px;

    padding-inline: 1rem;

    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    width: 100%;

    p {
        padding: 1rem;
        width: 14.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    svg {
        cursor: pointer;
        :hover {
            opacity: 0.5;
        }
    }
`
export const RowHeader = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    width: 100%;
    padding-inline: 1rem;
    color: ${MAIN_COLOR};

    p {
        padding: 0rem 1rem 0rem 1rem;
        width: 14.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bolder;
    }
`