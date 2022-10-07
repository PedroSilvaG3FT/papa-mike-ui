import { AppButton } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`h-16 rounded-full`}
    background: ${({ theme }) => theme.colors.primary};
`

export const Content = styled.article`
    ${tw`sm:overflow-x-auto sm:pl-44 sm:pt-4`}
    ${tw`h-full w-full flex shadow-md items-center justify-around rounded-full`}
    /* background: red; */

    &::-webkit-scrollbar {
        width: 0px;
    }
`
interface ButtonProps {
    isActive?: boolean
}
export const Button = styled(AppButton)<ButtonProps>`
    ${tw`sm:min-w-[auto] sm:px-2 sm:mr-4`}
    ${tw`px-6 min-w-[155px] mr-6 text-base h-full flex items-center justify-center whitespace-nowrap`}

    color: ${({ isActive, theme }) =>
        isActive ? theme.colors.yellow : theme.colors.bgSecondary};
`
