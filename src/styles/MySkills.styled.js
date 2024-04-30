import styled from "styled-components";

export const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
    padding:0 5%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile }){
        padding: 0;
        grid-gap: 1rem;

    }
`

export const SkillsCards = styled.div`
    width: 140px;
    height: 145px;
    border: 1px solid #fff;
    border-radius: 1.2rem;
    padding: 1rem 0;
    display: flex ;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme}) => theme.colors.primary_light};

    @media(max-width: ${({ theme}) => theme.breakpoints.mobile}){
        width: 140px;
        height: 150px;
        padding: 0.8rem 0;
        display: flex;
    }
`