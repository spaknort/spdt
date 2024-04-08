import React from "react"
import './index.sass'
import { Title, TitleSizes } from "@packages/shared"
import { Text } from "@packages/shared/src/components/shared/text"

interface CounterProps {
    value: number,
    text: string
}

export const Counter: React.FC<CounterProps> = ({ value, text }) => {
    const stringValue = (value < 1000) ? String(value): (value / 1000) + 'k'

    return (
        <div className="user-card-counter">
            <Title value={stringValue} size={TitleSizes.medium}  />
            <Text value={text} size={0.875} />
        </div>
    )
}