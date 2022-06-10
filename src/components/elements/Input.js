import React from 'react'

const Input = ({field, data}) => {
    return (
        <input type={field.type} className="form-control" name={field.name} id={field.name} defaultValue={data ? data[field.name] : ''} placeholder={field.title} />
    )
}

export default Input