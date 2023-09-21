import styled from "styled-components";

export const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 2rem;
    padding:0 5%;
`

export const SkillsCards = styled.div`
    width: 230px;
    border: 1px solid #fff;
    border-radius: 1rem;
    padding: 3rem 0;
    display: flex ;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme}) => theme.colors.primary_light};
`