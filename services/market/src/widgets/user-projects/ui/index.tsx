import React from "react"
import './index.sass'
import { Colours, LightThemeColours, Text, Title, TitleSizes, useTypedSelector } from "@packages/shared"
import { ThemeTypes } from "@packages/shared/src/lib/enum/themeTypes"
import { IProjectItem } from "../lib/IProjectItem"
import { ProjectItem } from "../components/project-item"

export const UserProjects: React.FC = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const UserProjectsThemeStyle = (theme == ThemeTypes.DARK) ? Colours.block_color: LightThemeColours.block_color
    const projectsItems: Array<IProjectItem> = [
        { id: 1, imgPath: 'https://lh3.google.com/u/0/d/1CJo3gBZte1LAB94VwZYeIaVOgYaMNnZn', title: 'Technology behind the Blockchain' },
        { id: 2, imgPath: 'https://lh3.google.com/u/0/d/1CJo3gBZte1LAB94VwZYeIaVOgYaMNnZn', title: 'Greatest way to a good Economy' },
        { id: 3, imgPath: 'https://lh3.google.com/u/0/d/1CJo3gBZte1LAB94VwZYeIaVOgYaMNnZn', title: 'Most essential tips for Burnout' }
    ]

    return (
        <div style={{ background: UserProjectsThemeStyle }} className="user-projects">
            <Title value="All Projects" size={TitleSizes.medium} />
            <Text style={{ marginTop: '6px' }} value="Here you can find more details about your projects. Keep you user engaged by providing meaningful information." size={1} />
            <div className="user-projects__items">
                {
                    projectsItems.map(item => (
                        <ProjectItem id={item.id} imgPath={item.imgPath} title={item.title} key={item.title} />
                    ))
                }
            </div>
        </div>
    )
}