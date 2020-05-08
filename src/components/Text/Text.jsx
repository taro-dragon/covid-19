import React from 'react'
import {TitleCp, TextCp, DescCp, MainCp, SubmainCp, SpanCp} from './Text.style'

const Text = ({children, color, type}) => {
    switch(type){
        case'title':
             return <TitleCp color={color}>{children}</TitleCp>
        case'text':
             return <TextCp color={color}>{children}</TextCp>
        case'desc':
             return <DescCp color={color}>{children}</DescCp>
        case'main':
             return <MainCp color={color}>{children}</MainCp>
        case'sub':
             return <SubmainCp color={color}>{children}</SubmainCp>
        case'span':
             return <SpanCp color={color}>{children}</SpanCp>
        default:
               return <TextCp color={color}>{children}</TextCp>
    }
}

export default Text