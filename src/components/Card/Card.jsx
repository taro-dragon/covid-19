import React from 'react'

import {CardCp} from './Card.style.js'

const Card = ({ 
    children,
    mt,
    mb,
    mr,
    ml,
    my,
    mx, 
    width, 
    py, 
    px, 
    pt, 
    pb, 
    pr, 
    pl, 
    bgcolor
}) => {
    return(
        <CardCp
            width={width}
            mt={mt}
            mb={mb}
            mr={mr}
            ml={ml}
            mx={mx}
            my={my}
            py={py}
            px={px}
            pt={pt}
            pb={pb}
            pr={pr}
            pl={pl}
            bgcolor={bgcolor}
        >
            {children}
        </CardCp>
    )
}

export default Card