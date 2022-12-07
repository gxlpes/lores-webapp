import styled from "styled-components"

export const FullpageH = styled.div`
    width: 100vw;
    min-width: 100%;    
`

export const FullpageV = styled.div`
    height: 100vh;
    min-height: 100%;    
`

export const Fullpage = styled.div`
    background-color: ${(props) => props.color};
    height: 100vh;
    width: 100vw;
`