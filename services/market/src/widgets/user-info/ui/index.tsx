import React, { useEffect } from 'react'
import './index.sass'
import { Colours, LightThemeColours, Text, Title, TitleSizes, useTypedSelector } from '@packages/shared'
import { ThemeTypes } from '@packages/shared/src/lib/enum/themeTypes'
import { IInfoItem } from '../lib/IInfoItem'
import { InfoItem } from '../components/info-item'

export const UserInfo: React.FC = () => {
    const userFullData = useTypedSelector(state => state.userReducer.userFullInfo)
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const userInfoThemeStyle = (theme == ThemeTypes.DARK) ? Colours.block_color: LightThemeColours.block_color
    const infoItems: Array<IInfoItem> = [
        { subTitle: 'Education', title: userFullData.education || 'Not Filled'},
        { subTitle: 'Speciality', title: userFullData.speciality },
        { subTitle: 'Organization', title: userFullData.organization || 'Not Filled'},
        { subTitle: 'Languages', title: userFullData.languages || 'Not Filled'},
        { subTitle: 'Work History', title: userFullData.work_history || 'Not Filled'},
        { subTitle: 'Date of Birth', title: userFullData.date_of_birth || 'Not Filled'},
    ]

    useEffect(() => {
        console.log(userFullData, userFullData.speciality)
    }, [userFullData])

    return (
        <div style={{ background: userInfoThemeStyle }} className="user-info">
            <Title value='General Information' size={TitleSizes.medium} />
            <Text style={{ marginTop: '6px' }} value={userFullData.text || 'Provide information about yourself'} size={1} />
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