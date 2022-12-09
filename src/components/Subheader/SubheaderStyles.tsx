import styled from "styled-components";

export const SubheaderWrapper = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;

    button {
        margin-block: 2rem;
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