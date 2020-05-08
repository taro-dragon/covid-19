import styled from 'styled-components'
import Color from '../../constants/color'

export const LoadingCp = styled.span`
    background: ${Color.primary};
    -moz-border-radius-topleft: 32px;
    -webkit-border-top-left-radius: 32px;
    border-top-left-radius: 32px;
    -moz-border-radius-topright: 32px;
    -webkit-border-top-right-radius: 32px;
    border-top-right-radius: 32px;
    display: inline-block;
    width: 64px;
    height: 32px;
    overflow: hidden;
    position: relative;
    text-indent: -9999px;
    ::before {
    -moz-animation: gauge-loader 4000ms infinite ease;
    -webkit-animation: gauge-loader 4000ms infinite ease;
    animation: gauge-loader 4000ms infinite ease;
    background: white;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    content: '';
    position: absolute;
    left: 30px;
    top: 5.33333px;
    width: 4px;
    height: 26.66667px;
    -moz-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    }
    ::after {
    content: '';
    background: white;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    position: absolute;
    left: 25.6px;
    top: 25.6px;
    width: 12.8px;
    height: 12.8px;
    }
    @keyframes gauge-loader {
    0% {
        -moz-transform: rotate(-50deg);
        -ms-transform: rotate(-50deg);
        -webkit-transform: rotate(-50deg);
        transform: rotate(-50deg);
    }
    10% {
        -moz-transform: rotate(20deg);
        -ms-transform: rotate(20deg);
        -webkit-transform: rotate(20deg);
        transform: rotate(20deg);
    }
    20% {
        -moz-transform: rotate(60deg);
        -ms-transform: rotate(60deg);
        -webkit-transform: rotate(60deg);
        transform: rotate(60deg);
    }
    24% {
        -moz-transform: rotate(60deg);
        -ms-transform: rotate(60deg);
        -webkit-transform: rotate(60deg);
        transform: rotate(60deg);
    }
    40% {
        -moz-transform: rotate(-20deg);
        -ms-transform: rotate(-20deg);
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);
    }
    54% {
        -moz-transform: rotate(70deg);
        -ms-transform: rotate(70deg);
        -webkit-transform: rotate(70deg);
        transform: rotate(70deg);
    }
    56% {
        -moz-transform: rotate(78deg);
        -ms-transform: rotate(78deg);
        -webkit-transform: rotate(78deg);
        transform: rotate(78deg);
    }
    58% {
        -moz-transform: rotate(73deg);
        -ms-transform: rotate(73deg);
        -webkit-transform: rotate(73deg);
        transform: rotate(73deg);
    }
    60% {
        -moz-transform: rotate(75deg);
        -ms-transform: rotate(75deg);
        -webkit-transform: rotate(75deg);
        transform: rotate(75deg);
    }
    62% {
        -moz-transform: rotate(70deg);
        -ms-transform: rotate(70deg);
        -webkit-transform: rotate(70deg);
        transform: rotate(70deg);
    }
    70% {
        -moz-transform: rotate(-20deg);
        -ms-transform: rotate(-20deg);
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);
    }
    80% {
        -moz-transform: rotate(20deg);
        -ms-transform: rotate(20deg);
        -webkit-transform: rotate(20deg);
        transform: rotate(20deg);
    }
    83% {
        -moz-transform: rotate(25deg);
        -ms-transform: rotate(25deg);
        -webkit-transform: rotate(25deg);
        transform: rotate(25deg);
    }
    86% {
        -moz-transform: rotate(20deg);
        -ms-transform: rotate(20deg);
        -webkit-transform: rotate(20deg);
        transform: rotate(20deg);
    }
    89% {
        -moz-transform: rotate(25deg);
        -ms-transform: rotate(25deg);
        -webkit-transform: rotate(25deg);
        transform: rotate(25deg);
    }
    100% {
        -moz-transform: rotate(-50deg);
        -ms-transform: rotate(-50deg);
        -webkit-transform: rotate(-50deg);
        transform: rotate(-50deg);
    }
    }
`