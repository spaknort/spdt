import React, { useEffect, useState } from "react"
import './index.sass'
import { Colours, Cross, LightThemeColours, Title, TitleSizes, UploadFileActionTypes, useTypedSelector } from "@packages/shared"
import { ThemeTypes } from "@packages/shared/src/lib/enum/themeTypes"
import { Swiper, SwiperSlide  } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { SendFile } from "../components/send-file"
import { useDispatch } from "react-redux"


export const SendFiles: React.FC = () => {
    const dispatch = useDispatch()
    const theme = useTypedSelector(state => state.themeReducer.theme)
    const sendFilesThemeStyle = (theme == ThemeTypes.DARK) ? Colours.block_color: LightThemeColours.block_color
    const uploadFiles = useTypedSelector(state => state.uploadFileReducer.data)
    const showWidget = useTypedSelector(state => state.uploadFileReducer.showWidget)

    function hideWidget(e: React.MouseEvent<HTMLElement, MouseEvent>) {
        if (e.target instanceof Element) {
            if (e.target.classList.contains('send-files') || e.target.classList.contains('cross') || e.target.classList.contains('cross-line')) {
                dispatch({ type: UploadFileActionTypes.SET_SHOW_WIDGET, showWidget: false })
            }
        }
    }

    return (
        <div onClick={e => hideWidget(e)} style={{ display: (showWidget) ? 'flex': 'none' }} className="send-files">
            <div style={{ background: sendFilesThemeStyle }} className="send-files__wrapper">
                <div className="send-files__header">
                    <div></div>
                    <Cross onClick={e => hideWidget(e)} />
                </div>
                <div className="send-files__content">
                    <Swiper
                        style={{ height: '100%' }}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        slidesPerView={1}
                        navigation={{
                            nextEl: ".button"
                        }}
                        slideNextClass="next"
                        allowTouchMove={false}
                        observer={true}
                        observeParents={true}
                        parallax={true}
                        scrollbar={{ draggable: true }}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            uploadFiles.map((file, index) => (
                                <SwiperSlide key={file.name} style={{ margin: 0 }}>
                                    <SendFile isLastPage={(index == uploadFiles.length - 1)} fileName={file.name} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    ) 
}