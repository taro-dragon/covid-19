import styled from 'styled-components'
import Color from '../../constants/color'

export const SelectCp = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-sizing: border-box;
    padding: 6px 36px 6px 12px;
    border-radius: 16px;
    color: ${Color.primary};
    font-size: 16px;
    font-weight: bold;
    border: none;
    box-shadow: 0px 3px 6px ${Color.tarnary}50;
    background-color: ${Color.white};
    position: relative;
    :focus { outline: none; }
`