import React from 'react'
import './index.sass'
import { Colours, LightThemeColours, ProgressBar, ProgressBarTypes, Title, TitleSizes, useTypedSelector } from '@packages/shared'
import { Text } from '@packages/shared/src/components/shared/text'
import { ThemeTypes } from '@packages/shared/src/lib/enum/themeTypes'

export const UserStorage: React.FC = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const userStorageThemeStyle = (theme == ThemeTypes.DARK) ? Colours.block_color: LightThemeColours.block_color

    return (
        <div style={{ background: userStorageThemeStyle }} className="user-storage">
            <div className="user-storage__content">
                <img className='user-storage__img' src="https://lh3.google.com/u/0/d/1uiQ_J2t7q14loI1ob9jTLUGsndTyvACS" alt="User Storage Img" />
                <Title value='Your storage' size={TitleSizes.medium} />
                <Text style={{ textAlign: 'center' }} value='Supervise your drive space in the easiest way' size={1} />
                <ProgressBar type={ProgressBarTypes.GB} from={0} value={25.2} to={50} />
            </div>
        </div>
    )
}