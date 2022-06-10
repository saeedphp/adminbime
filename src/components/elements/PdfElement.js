import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_IMAGE_URL, BASE_URL } from '../config/Config'
import $ from "jquery";

const PdfElement = ({field, data}) => {

    const [showLoading, setShowLoading] = useState(false);
    const [showOk, setShowOk] = useState(false);

    function handleChange(e) {
        var input = document.getElementById(field.name);

        setShowOk(false);
        setShowLoading(true);

        var data = new FormData()
        data.append('FormFile', input.files[0])

        fetch(BASE_URL + 'cms/customfile/file', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.i99IsG-GVm3pRRFK309v8z7WXv6ICx2z5tbTqekteGIV3w0Nx0OvJw.3usYb7EAisYq312eZm65Tg.gvhf70d5N8wGGLufnb2Ngc1nLPsTyDL8wB1FIE1QsQBJof0G6dQ7_gBvyZzAJ61d88Kf5zZ7XRt6VRDXtPZyW_gqxzSK-vaexjCvO15lC5uHBiO5uRZjepWZSXfnt1BZ8UbdjDYHxjaohnEIJ9y-SgqOK4UBa6_VxOsDp8pzJ_eE8mpWfmtZi45iccPv8ZAVCUIBLcewFH6BZMGnqkGSik4iiG43P4UgCxmnNh5C0AoJX8IxGeLsX6jWSF9ymyTBy3ul1IR6SIEpNPMAA3NIOGObaEyoNwHN2N_UKcQL3cl7ecKemH_Au6oevD2DNxQ0TQfayJ6r3ek_8lLDLEUaKFijzAn7A9T56C6rDjYJGsjt4dP3v0LyoTfVk_LhIa6n3Lxg7wQ3ZXbtHcVB0G1uh_6F5Wb3tax51BDZm5-jGDFGyeTTiB06bq-Zu6mmCYvQpAVgZVzwa4IYmoPA7tsWZkvhE6VC1reOu2mB5zCs8jY.CWb2xGEMbktrxh8TEK-FMA'
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
            <a href={data ? BASE_IMAGE_URL + data[field.get.field][field.get.url] : ''}>{data ? data[field.get.field][field.get.url] : ''}</a>
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

export default PdfElement