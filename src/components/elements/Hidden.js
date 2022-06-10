import React from 'react'

const Hidden = ({field, data}) => {
    return (
        <input type="hidden" name={field.name} id={field.name} defaultValue={data ? data[field.name] : field.default ? field.default : 0} placeholder={field.title} />
    )
}

export default Hidden