import React from 'react'

const Textarea = ({field, data}) => {
    return (
        <textarea className="form-control" id={field.name} name={field.name} rows={3} defaultValue={data ? data[field.name] : ''} />

    )
}

export default Textarea