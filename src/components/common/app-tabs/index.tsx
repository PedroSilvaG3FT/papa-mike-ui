import React from 'react'
import { Container, Button } from './styles'

export interface IAppTabsItem {
    id?: string
    name: string
    action?: Function
}

export interface AppTabsProps {
    currentId?: string
    items: IAppTabsItem[]
    onSelect?: (item: IAppTabsItem) => void
}

const AppTabs: React.FC<AppTabsProps> = props => {
    const { items, currentId, onSelect } = props

    const handleClick = (item: IAppTabsItem) => {
        if (item.action) item.action()
        else if (onSelect) onSelect(item)
    }

    return (
        <Container>
            {items.map((item, index) => (
                <Button
                    key={index}
                    onClick={() => handleClick(item)}
                    isActive={currentId === item.id}
                >
                    {item.name}
                </Button>
            ))}
        </Container>
    )
}

export default AppTabs
