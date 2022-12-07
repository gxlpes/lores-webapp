import styled from "styled-components";

export const Dot = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background-color: ${(props) => props.color}
`;

export const DotContainer = styled.div`
    display: flex;
    gap: 0.8rem;
`