import React from 'react'
import {SelectCp} from './Select.style.js'

const Select = ({children, value, onChange}) => {
    return(
        <SelectCp value={value} onChange={onChange}>
            {children}
        </SelectCp>
    )
}

export default Select