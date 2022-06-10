import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../config/Config';

const Dropdown = ({field, data}) => {
    const [allRecords, setAllRecords] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + field.dropdown.route, {
            headers: {
                'cultureLcid': 1065
            }
        })
        .then(async response => {
            const data = await response.json();

            setAllRecords(data.result);
            console.log(data.result);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }, []);

    return (
        <select className='form-select' name={field.name} id={field.name}>
            <option>انتخاب {field.title}</option>
            {data ?
                allRecords.map((item, i) => {

                if (item[field.dropdown.value] == data[field.get.field][field.get.value]) {
                    return (<option key={i} selected value={item[field.dropdown.value]} >{item[field.dropdown.text]}</option>)
                } else {
                    return (<option key={i} value={item[field.dropdown.value]} >{item[field.dropdown.text]}</option>)
                }

            }) : allRecords.map((item, i) => {
                return (
                    <option key={i} value={item[field.dropdown.value]}>
                        {item[field.dropdown.text]}
                    </option>
                )
                })}
        </select>
    )
}

export default Dropdown