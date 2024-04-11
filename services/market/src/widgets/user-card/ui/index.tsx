import React from 'react'
import './index.sass'
import { Colours, LightThemeColours, Title, TitleSizes, useTypedSelector } from '@packages/shared'
import { ThemeTypes } from '@packages/shared/src/lib/enum/themeTypes'
import { Avatar } from '@packages/shared/src/components/entites/avatar/ui'
import { Text } from '@packages/shared/src/components/shared/text'
import { Counter } from '../components/counter'

export const UserCard: React.FC = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const userCardThemeStyle = (theme == ThemeTypes.DARK) ? Colours.block_color: LightThemeColours.block_color

    return (
        <div style={{ background: userCardThemeStyle }} className="user-card">
            <div className="user-card__header">
                <img src="https://lh3.google.com/u/0/d/1whqyPeYgwzcSCRZJSsifEw_SWRQG_oRI" alt="User Card Img" className="user-card__img" />
                <Avatar className='user-card__avatar' />
            </div>
            <div className="user-card__content">
                <Title value='Adela Parkson' size={TitleSizes.medium} />
                <Text value='Product Designer' size={1} />
                <div className="user-card__counters">
                    <Counter value={10} text='Posts' />
                    <Counter value={9700} text='Followers' />
                    <Counter value={274} text='Followers' />
                </div>
            </div>
        </div>
    )
}