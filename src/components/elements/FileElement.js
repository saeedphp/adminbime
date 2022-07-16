import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {BASE_IMAGE_URL, BASE_URL} from '../config/Config'
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

    function validateFileType() {
        var fileName = document.querySelector(".inputFile").value;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
            //TO DO
        } else {
            alert("Only jpg/jpeg and png files are allowed!");
            fileName.target.value = '';
            return;
        }
    }


    function inputChange() {
        handleChange();
        validateFileType();
    }

    //defaultValue={data ? data[field.get.field][field.get.url] : ''}

    return (
        <>
            <a href={data ? BASE_IMAGE_URL + data[field.get.field][field.get.url] : ''}>{data ? data[field.get.field][field.get.url] : ''}</a>
            <input name={field.name} type="hidden" id={field.name + '-input'} defaultValue={data ? data[field.get.field][field.get.value] : 0}/>
            <div className='input-group'>
                <input accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/webp"
                       type="file" className="form-control inputFile" id={field.name} placeholder={field.title}
                       onChange={inputChange}/>
                <span className={`input-group-text ${showLoading ? 'sending' : 'sent'}`}
                      style={{display: showLoading || showOk ? "inline" : "none"}}>
                    <div style={{display: showLoading ? "inline" : "none"}}>
                        در حال ارسال
                    </div>
                    <span style={{display: showOk ? "inline" : "none"}}>ارسال شد</span>
                </span>
            </div>
            <span style={{display: showOk ? "none" : "inline"}}>
                        تا زمانی که فایل ارسال نشده است، دکمه ثبت را نزنید!
                    </span>
        </>
    )
}

export default FileElement