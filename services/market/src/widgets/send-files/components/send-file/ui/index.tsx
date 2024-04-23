import React, { useEffect, useState } from "react"
import './index.sass'
import { Button, ButtonSizes, ButtonTypes, FileInput, Input, NumberInput, Title, TitleSizes } from "@packages/shared"

interface SendFileProps {
    isLastPage?: boolean,
    fileName: string
}

export const SendFile: React.FC<SendFileProps> = ({ fileName, isLastPage = false }) => {
    const [title, setTitle] = useState<string>('')
    const [file, setFile] = useState(fileName)
    const [price, setPrice] = useState<number>(100)

    useEffect(() => {
        console.log(price)
    }, [price])

    return (
        <div className="send-file">
            <Title style={{ margin: '0 auto' }} size={TitleSizes.big} value="Intake Form" />
            <Input value={title} setValue={setTitle} label="Title"  placeholder="The product`s name" required />
            <FileInput value={file} setValue={setFile} label="File" placeholder={file} required />
            <NumberInput value={price} setValue={setPrice} label="Price" placeholder="Indicate the price" required />
            
            {(!isLastPage) ? 
                <Button className="wiper-pagination-bullet swiper-pagination-bullet-active" type={ButtonTypes.active} size={ButtonSizes.big} styles={{ padding: '20px 0' }} value="Далее" />:
                <Button onClick={() => {

                }} type={ButtonTypes.active} size={ButtonSizes.big} styles={{ padding: '20px 0' }} value="Загрузить" />
            }
        </div>
    )
}