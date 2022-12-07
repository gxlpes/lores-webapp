import styled from "styled-components";

interface PropsStyles {
    direction?: string;
    justify?: string;
    align?: string;

    maxWidth: boolean;
}

export const Content = styled.div<PropsStyles>`
    height: 100%;
    max-width: ${(props) => props.maxWidth ? "75rem" : undefined};
    margin-inline: auto;

    display: flex;
    flex-direction: ${(props) => props.direction ? props.direction : "center"};
    justify-content: ${(props) => props.justify ? props.justify : "center"};
    align-items: ${(props) => props.align ? props.align : "center"};
    gap: 1rem;

`