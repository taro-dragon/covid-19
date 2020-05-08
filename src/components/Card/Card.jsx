import React from 'react'

import {CardCp} from './Card.style.js'

const Card = ({children, width, py, px, pt, pb, pr, pl, bgcolor}) => {
    return(
        <CardCp
            width={width}
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