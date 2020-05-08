import styled from 'styled-components'

export const BlockCp = styled.div`
    padding-top: ${props => props.py ? props.py : props.pt};
    padding-bottom: ${props => props.py ? props.py : props.pb};
    padding-right: ${props => props.px ? props.py : props.pr};
    padding-left: ${props => props.px ? props.py : props.pl};
    margin-top: ${props => props.my ? props.my : props.mt};
    margin-bottom: ${props => props.my ? props.my : props.mb};
    margin-right: ${props => props.mx ? props.mx : props.mr};
    margin-left: ${props => props.mx ? props.mx : props.mr};
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : 'normal'};
    align-items:　${props => props.align ? props.align : 'normal'};
    justify-content: ${props => props.justify ? props.justify : 'normal'};
    flex-wrap: ${props => props.wrap ? props.wrap : 'normal'};
    max-width: ${props => props.maxWidth};
    width: 100%;
    box-sizing: border-box;
`