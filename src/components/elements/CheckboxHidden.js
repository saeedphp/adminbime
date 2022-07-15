import React from 'react'

function CheckboxHidden({field, data}) {

    return (
        <div  className="form-check">
            <input className="form-check-input" type="checkbox" name={field.name} id={field.name} defaultValue={data ? data[field.name] : field.default ? field.default : 0} />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                {field.title}
            </label>
        </div>
    )
}

export default CheckboxHidden