import React from 'react'

const Number = ({field, data}) => {
    return (
        <input type="number" className="form-control" name={field.name} id={field.name} defaultValue={data ? data[field.name] : field.default ? field.default : 0} placeholder={field.title} />
    )
}

export default Number