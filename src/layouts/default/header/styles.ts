import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '@/styles/css/ts/components'
import { fadeIn } from '@/styles/animation'

export const HeaderContainer = styled.header`
    ${tw`fixed w-full z-20`}
    height: ${({ theme }) => theme.spacing.headerHeight};
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const Container = styled(AppContainer)`
    ${tw`flex justify-between items-center`}
`

export const Article = styled.article`
    ${tw`flex`}
`

export const ImageContainer = styled.figure``

export const Image = styled.img.attrs(fadeIn.left)`
    ${tw`w-32 sm:w-20 sm:h-12`}
`

export const Content = styled.article.attrs(fadeIn.down)`
    ${tw`flex items-center md:hidden`}
`

export const Button = styled(AppButton).attrs(fadeIn.right)`
    ${tw`pl-4 py-3 flex ml-3 items-center justify-between transition-all duration-500 md:hidden`}

    > svg {
        ${tw`text-lg ml-4 mr-2`}
    }

    &:hover {
        color: ${({ theme }) => theme.colors.yellow};
    }
`

export const ImageIcon = styled.img`
    ${tw`w-5 mr-2`}
`
