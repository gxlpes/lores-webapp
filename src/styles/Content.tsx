import styled from "styled-components";

interface PropsStyles {
    direction?: string;
}

export const Content = styled.div<PropsStyles>`
    height: 100%;
    max-width: 75rem;
    margin-inline: auto;

    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: center;
    align-items: center;
    gap: 1rem;

`