import styled from "styled-components";

export const ShowCaseContainer = styled.div`
    position: relative;
`
export const Image = styled.img`
    width: 100%;

`

export const ShowCaseImageCard = styled.div`
    width: 100%;
    padding-top: 0.3rem;
    position: relative;
    overflow: hidden;
`
export const Particle = styled.img`

    position: absolute;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    bottom: ${({ bottom }) => bottom};
    transform: rotate(${({ rotate }) => rotate});

`