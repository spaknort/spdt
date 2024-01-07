import React, { FC } from 'react'
import { sum } from '@packages/shared'

export const Index: FC = () => {
    return (
        <div className="index">
            Index
            { sum(5, 5) }
        </div>
    )
}