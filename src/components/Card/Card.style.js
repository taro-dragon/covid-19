import styled from 'styled-components'

export const CardCp = styled.div`
    width: ${props => props.width};
    background-color: ${props => props.bgcolor};
    padding-top:${props => props.py ? props.py : props.pt};
    padding-bottom:${props => props.py ? props.py : props.pb};
    padding-right:${props => props.px ? props.px : props.pr};
    padding-left:${props => props.px ? props.px : props.pl};
    border-radius: 8px;
`