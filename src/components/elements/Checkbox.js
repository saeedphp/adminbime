import React from 'react'

function Checkbox({field, data}) {
    const checked = (data && (data[field.name] === 'true' || data[field.name] === true));
  return (
    <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue name={field.name} id={field.name} checked={checked} />
        <label className="form-check-label" htmlFor="flexCheckDefault">
            {field.title}
        </label>
    </div>
  )
}

export default Checkbox