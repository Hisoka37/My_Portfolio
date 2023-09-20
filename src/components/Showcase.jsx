import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled.js'

export const Showcase = () => {
    return (
        <PaddingContainer
            id='Home'
            left='3%'
            right='10%'
            top ='15%'
            bottom='10%'
        >
            <FlexContainer align='center' fullWidthChild>
                <div>
                    <Heading as= 'h1' size='h1' top ='0.5rem' bottom ='1rem'>
                         I'm <BlueText> Walid Kabboussa </BlueText></Heading>
                    <Heading as= 'h3' size='h3'>
                         I'm a <BlueText> Software Engineer </BlueText></Heading>    

                </div>
            </FlexContainer>
        </PaddingContainer>
    )
}
