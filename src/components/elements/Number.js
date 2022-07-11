import React from 'react'

const Number = ({field, data}) => {
    return (
        <input type="number" className="form-control" name={field.name} id={field.name} defaultValue={data ? data[field.name] : ''} placeholder={field.title} />
    )
}

export default Number