import React, { useState } from "react"
import './index.sass'
import { Colours, Cross, LightThemeColours, Title, TitleSizes, useTypedSelector } from "@packages/shared"
import { ThemeTypes } from "@packages/shared/src/lib/enum/themeTypes"
import { Swiper, SwiperSlide  } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { SendFile } from "../components/send-file"

export const SendFiles: React.FC = () => {
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const sendFilesThemeStyle = (theme == ThemeTypes.DARK) ? Colours.block_color: LightThemeColours.block_color
    const [isShow, setIsShow] = useState<boolean>(true)

    function hideWidget(e: React.MouseEvent<HTMLElement, MouseEvent>) {
        if (e.target instanceof Element) {
            if (e.target.classList.contains('send-files') || e.target.classList.contains('cross') || e.target.classList.contains('cross-line')) setIsShow(false)
        }
    }

    return (
        <div onClick={e => hideWidget(e)} style={{ display: (isShow) ? 'flex': 'none' }} className="send-files">
            <div style={{ background: sendFilesThemeStyle }} className="send-files__wrapper">
                <div className="send-files__header">
                    <Title size={TitleSizes.big} value="Intake Form" />
                    <Cross onClick={e => hideWidget(e)} />
                </div>
                <div className="send-files__content">
                    <Swiper
                        style={{ height: '100%' }}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        slidesPerView={1}
                        scrollbar={{ draggable: true }}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide style={{ margin: 0 }}>
                            <SendFile />
                        </SwiperSlide>
                        <SwiperSlide style={{ margin: 0 }}>Slide 2</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    ) 
}