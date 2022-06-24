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

        var data = new FormData()
        data.append('FormFile', input.files[0])

        fetch(BASE_URL + 'cms/customfile/image', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.ZbbBOWa0qAXAGkCAy6IhdPAe8a7ksykBSMJAWRt0oPxVLTyJNx04lA.Qb26tcLJFtrBL2ELtt38iQ.Vqiq7pT7_PyfQONwXjuSmUsf_lUKChfNXpFtZPfdAIbiXbxM56B5_wLAOJ77CI1ryyshe2J6CI-H5cV5-hx2GYjf6tb4S18HJA8_EMd3aTsHczvJ5cbNmKDVFx9S2YK7wnGOjeL-on65qvIgzEj--MuBg-N-UdCW3UP1W4XXM34DYST2FYphoaF5PaGveHOVaFT5oRBoI6ona6EXiEBRK42U7ERtRNQfA8ACIbYhH5FCRqsghLJmUIbz6VXkEDFQ1Ef0vJZxxbJ7QjY0G1k7c--fR5W44csQtNeaOOK9cSHHPfZtdlkRci54MNGEPtKJQ-KPmYccbu2Mk0P_lu0COquSOVJjrdNB6wMSk71sM8ZEAc_X35LZDCuR6WvOyqWhbKW-biL9TzfRGQQT_jL7N4WC1lk-q-g86yq40TrCNgHkOZoYJByIuKjnFFlC_SfbKc9_DV-UTexu2g2Ny4GsOQ1v8yCWh-ex8zH_le6mXOk.2S7HTDscwwmWn8ln9NFOZA'
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