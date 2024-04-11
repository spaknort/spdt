import React from "react"
import './index.sass'
import { Colours, LightThemeColours, Title, TitleSizes, useTypedSelector } from "@packages/shared"
import { ThemeTypes } from "@packages/shared/src/lib/enum/themeTypes"
import { Link } from "react-router-dom"
import { IProjectItem } from "../../lib/IProjectItem"

export const ProjectItem: React.FC<IProjectItem> = ({ id, title, imgPath }) => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const ProjectItemThemeStyle = (theme == ThemeTypes.DARK) ? Colours.background_color: LightThemeColours.background_color

    return (
        <div style={{ background: ProjectItemThemeStyle }} className="project-item">
            <img src={imgPath} alt="" className="project-item__img" />
            <div className="project-item__content">
                <Title className="project-item__title" style={{ width: 'max-content' }} value={title} size={TitleSizes.small} />
                <div>
                    <span className="project-item__id">Project # {id}</span>
                    <Link className="project-item__details" to="">See project details</Link>
                </div>
            </div>
        </div>
    )
}