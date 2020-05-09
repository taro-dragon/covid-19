import React from 'react'
import {BlockCp} from './Block.style.js'

const Block = ({ 
     children,
     mt, 
     mb, 
     mr, 
     ml, 
     my, 
     mx, 
     pt, 
     pb, 
     pr, 
     pl, 
     px, 
     py, 
     direction, 
     align, 
     justify, 
     wrap, 
     maxWidth, 
     bgColor, 
     radius,
     width
    }) => {
    return(
        <BlockCp 
            mt={mt}
            mb={mb}
            mr={mr}
            ml={ml}
            mx={mx}
            my={my}
            pt={pt}
            pb={pb}
            pr={pr}
            pl={pl}
            px={px}
            py={py}
            direction={direction}
            align={align}
            justify={justify}
            wrap={wrap}
            maxWidth={maxWidth}
            bgColor={bgColor}
            radius={radius}
            width={width}
        >
            {children}
        </BlockCp>
    )
}

Block.defaultProps = {
    maxWidth: '100%'
}

export default Block