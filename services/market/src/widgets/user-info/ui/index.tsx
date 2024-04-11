import React from 'react'
import './index.sass'
import { Colours, LightThemeColours, Text, Title, TitleSizes, useTypedSelector } from '@packages/shared'
import { ThemeTypes } from '@packages/shared/src/lib/enum/themeTypes'
import { IInfoItem } from '../lib/IInfoItem'
import { InfoItem } from '../components/info-item'

export const UserInfo: React.FC = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const userInfoThemeStyle = (theme == ThemeTypes.DARK) ? Colours.block_color: LightThemeColours.block_color
    const infoItems: Array<IInfoItem> = [
        { subTitle: 'Education', title: 'Stanford University' },
        { subTitle: 'Department', title: 'Product Design' },
        { subTitle: 'Organization', title: 'Simmmple Web LLC' },
        { subTitle: 'Languages', title: 'English, Spanish, Italian' },
        { subTitle: 'Work History', title: 'Google, Facebook' },
        { subTitle: 'Date of Birth', title: '20 July 1986' },
    ]

    return (
        <div style={{ background: userInfoThemeStyle }} className="user-info">
            <Title value='General Information' size={TitleSizes.medium} />
            <Text style={{ marginTop: '6px' }} value="`
            As we live, our hearts turn colder. Cause pain is what we go through as we become older.
            We get insulted by others, lose trust for those others. We get back stabbed by friends.
            It becomes harder for us to give others a hand.
            We get our heart broken by people we love, even that we give them all...`" size={1} />
            {/* before 330 chars */}
            <div className="user-info__items">
                {
                    infoItems.map(item => (
                        <InfoItem subTitle={item.subTitle} title={item.title} key={item.subTitle} />
                    ))
                }
            </div>
        </div>
    )
}