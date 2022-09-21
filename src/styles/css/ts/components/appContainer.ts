import tw from 'twin.macro'
import styled from 'styled-components'

interface AppContainerProps {
    showHeader?: boolean
}

export const AppContainer = styled.section<AppContainerProps>`
    ${tw`container mx-auto px-10`}
    padding-top: ${props => {
        return props.showHeader
            ? `calc(${props.theme.spacing.headerHeight} + 12px)`
            : '1rem'
    }};

    @media (min-width: 1200px) {
        max-width: 1200px;
    }
`
