import styled from "styled-components";

interface PropsStyles {
    direction?: string;
    justify?: string;
    align?: string;
    height?: boolean
    gap?: string;

    maxWidth: boolean;
}

export const Content = styled.div<PropsStyles>`
    max-width: ${(props) => props.maxWidth ? "100rem" : undefined};
    height: ${(props) => props.height ? "100%" : undefined};
    margin-inline: auto;

    display: flex;
    flex-direction: ${(props) => props.direction ? props.direction : "center"};
    justify-content: ${(props) => props.justify ? props.justify : "center"};
    align-items: ${(props) => props.align ? props.align : "center"};
   gap: ${(props) => props.gap ? props.gap : "1rem"};

`