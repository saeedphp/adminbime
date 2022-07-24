import {Fragment} from "react";
import {BASE_SIGNUP_URL} from "../config/Config";
import Cookies from "universal-cookie";
import {useRef, useState} from "react";
import React from "react";
import {useParams} from "react-router-dom";
import validator from "validator";

const Reset = () => {

    const form = useRef(null);
    const cookies = new Cookies();
    const token = cookies.get('token');
    const {id} = useParams();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const [newPassword, setNewPassword] = useState(null);
    const passChangeHandler = (e) => {
        setNewPassword(e.target.value);
    }

    let handleSubmit = async (event) => {

        event.preventDefault();
        //console.log(firstName);
        form.current.reset();
        if (id) {
            await fetch(BASE_SIGNUP_URL + "api/auth/" + id + '/resetpassword/?newPassword=' + newPassword + '&api-version=1.0', {
                method: "POST",
                headers: {
                    'accept': '*/*',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({
                    newPassword
                }),
            })
                .then(response => {

                    console.log(response);
                    console.log(response.text());
                    /*if (!response.ok) {
                        throw new Error('عملیات مورد نظر اجرا نشد!');
                    } else if (response.ok) {
                        throw new Error('کاربر با موفقیت افزوده شد')
                    }*/
                    if (response.status === 404) {
                        throw new Error('آدرس api اشتباه است!');
                    } else if (response.status === 400) {
                        //console.log(response.text());
                        throw new Error('عملیات مورد نطر اجرا نشد! لطفا از رمز عبور قوی تری استفاده کنید!')
                    } else if (response.ok) {
                        throw new Error('رمز عبور با موفقیت تغییر کرد')
                    }
                    setSuccess(success.message);
                    return response.json();
                    //return response.json().then(err => Promise.reject(err))

                })
                .then((response) => response.json())
                .then(console.log).catch((error) => {
                    console.log('error: ' + error)
                    setError(error.message)
                });
        }

    }

    const [errorMessage, setErrorMessage] = useState('')

    const validate = (value) => {

        if (validator.isStrongPassword(value, {
            minLength: 7, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage(<p className="strong_pass">رمز عبور قوی است</p>)

        } else {
            setErrorMessage(<p className="weak_pass">رمز عبور قوی تر انتخاب کنید!</p>)
        }

    }

    return (
        <Fragment>
            <div className="user_page">
                <form ref={form} id='page-form' onSubmit={handleSubmit} method="POST">
                    {error && <p className="login_error">{error}</p>}
                    {success && <p className="login_success">{success}</p>}
                    <div>
                        <label htmlFor="firstName">
                            تغییر رمز عبور
                            <abbr className="required" title="ضروری" style={{color: 'red'}}>*</abbr>
                        </label>
                        <input
                            type="text"
                            name="newPassword"
                            id="newPassword"
                            defaultValue={newPassword}
                            onChange={passChangeHandler}
                            onKeyDown={(e) => validate(e.target.value)}
                            placeholder="رمز عبور"
                        />
                        {errorMessage === '' ? null :
                            <span style={{
                                fontWeight: 'bold',
                            }}>{errorMessage}</span>}
                    </div>

                    <div>
                        <button type='submit' defaultValue='ثبت' className='btn btn-primary px-5'>ثبت</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
};

export default Reset;