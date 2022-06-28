import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_IMAGE_URL, BASE_URL } from '../config/Config'
import $ from "jquery";
import Cookies from "universal-cookie";

const FileElement = ({field, data}) => {

    const cookies = new Cookies();
    const token = cookies.get('token');

    const [showLoading, setShowLoading] = useState(false);
    const [showOk, setShowOk] = useState(false);

    function handleChange(e) {
        var input = document.getElementById(field.name);

        setShowOk(false);
        setShowLoading(true);

        data = new FormData()
        data.append('FormFile', input.files[0])

        fetch(BASE_URL + 'cms/customfile/image', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: data
        })
        .then(async response => {
            const data = await response.json();

            // setRecord(data.result);
            console.log(data);
            let hidden_input = document.getElementById(field.name + '-input');
            //hidden_input.value = data.result;
            hidden_input.setAttribute('value', data.result)
            console.log(hidden_input);
            setShowLoading(false);
            setShowOk(true);
        })
        .catch(error => {
            // this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
    }

    return (
        <>
            {/*<a href={data ? BASE_IMAGE_URL + data[field.get.field][field.get.url] : ''}>{data ? data[field.get.field][field.get.url] : ''}</a>*/}
            <input name={field.name} type="hidden" id={field.name + '-input'}  />
            <div className='input-group'>
                <input type="file" className="form-control" id={field.name} placeholder={field.title} onChange={handleChange} />
                <span className="input-group-text" style={{display: showLoading || showOk ? "inline" : "none"}}>
                    <div style={{ display: showLoading ? "inline" : "none" }}>
                        در حال ارسال
                    </div>
                    <span style={{display: showOk ? "inline" : "none"}}>ارسال شد</span>
                </span>
            </div>
        </>
    )
}

export default FileElement