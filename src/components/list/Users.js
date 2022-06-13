import React, { useEffect, useState } from 'react'
import {BASE_IMAGE_URL, BASE_SIGNUP_URL, BASE_URL, Elements} from '../config/Config'
import Cookies from 'universal-cookie'

const Users = () => {

    const cookies = new Cookies();
    const token = cookies.get('token');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [accessLevel, setAccessLevel] = useState('');

    const nameChangeHandler = (e) => {
        setFirstName(e.target.value);
    }

    const familyChangeHandler = (e) => {
        setLastName(e.target.value);
    }

    const mobileChangeHandler = (e) => {
        setPhoneNumber(e.target.value);
    }

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }
    const accessLevelChangeHandler = (e) => {
        setAccessLevel(e.target.value);
    }

    let handleSubmit = async (event) => {

        event.preventDefault();
        console.log(firstName);

        fetch(BASE_SIGNUP_URL + "api/auth/signup?api-version=1.0", {
            method: "POST",
            headers: {
                'accept': '*/*',
                'Authorization': 'Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.HPtfpOMB0aP-uaLTEgZJXUYQCFNl_agQFQ5sMP8QaSbvcy4ui_Xbiw.3JmW5tpmpOMAPLLia-b01g.0eA-h7tP8aOtL0o1PvChtWkmKVZpkjgNSpcYIyyk2JHjp6OtLy6MSiqVGI6pASy1nZAhWoQQ7rSosaNEh0WEz4q2DfUw3bxehO7qlan4HW5wNSH-h6-GEXri2L6UMR3fvZavfKxMFtNzTFs4KEQqJCXvAJAW5ovye1IOJE20YniHUreEq6uXyFVMIoKLw9XSlRyGtbCIyL7TjUDdLEL-VA4L8llHojPwXEhS6uKNHTZ_KdmuDxV7Qg-UtjqUdCBrCjeBPsuERa_fy33mCIgNbuy-98-2BjVh26-7CpCCrUWIglJS2OFShfsiOcMdwVG6Pz4bCXfqTDE7LihtmNUlh0nVlu3q1pGHAvTbLOcrZzey0WC2ZPVpdddHZkSzlEbacUh6waS-Ww7nhOSkr9rLoRTy5rV8hQHDfbp8RG2woyq_LxgoIguYKmLkhaADsGVFurXYOJv0MERR2M21yu7W7GZzEE0vwLNi9JI8MkNx4Ls.j3wLNh1Io6Z01t4YMn-VvQ',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                phoneNumber,
                email,
                password,
                userName,
                accessLevel
            }),
        })
            .then((response) => response.json())
            .then(console.log);

    }

    return (
        <div className="user_page">
            <form id='page-form' onSubmit={handleSubmit} method="POST">
                <div>
                    <label htmlFor="firstName">
                        نام
                    </label>
                    <input type="text" name="firstName" id="firstName" defaultValue={firstName} onChange={nameChangeHandler} placeholder="نام" />
                </div>
                <div>
                    <label htmlFor="lastName">
                        نام خانوادگی
                    </label>
                    <input type="text" name="lastName" id="lastName" defaultValue={lastName} onChange={familyChangeHandler} placeholder="نام خانوادگی" />
                </div>
                <div>
                    <label htmlFor="phoneNumber">
                        شماره همراه
                    </label>
                    <input type="text" name="phoneNumber" id="phoneNumber" defaultValue={phoneNumber} onChange={mobileChangeHandler} placeholder="شماره همراه" />
                </div>
                <div>
                    <label htmlFor="userName">
                        نام کاربری
                    </label>
                    <input type="text" name="userName" id="userName" defaultValue={userName} onChange={usernameChangeHandler} placeholder="نام کاربری" />
                </div>
                <div>
                    <label htmlFor="password">
                        رمز عبور
                    </label>
                    <input type="password" name="password" id="password" defaultValue={password} onChange={passwordChangeHandler} placeholder="رمز عبور" />
                </div>
                <div>
                    <label htmlFor="email">
                        ایمیل
                    </label>
                    <input type="email" name="email" id="email" defaultValue={email} onChange={emailChangeHandler} placeholder="ایمیل" />
                </div>
                <div>
                    <label htmlFor="accessLevel">
                        سطح دسترسی
                    </label>
                    {/*<input type="number" name="accessLevel" id="accessLevel" defaultValue={accessLevel} onChange={accessLevelChangeHandler} placeholder="سطح دسترسی" />*/}
                    <select name="accessLevel" id="accessLevel" defaultValue={accessLevel} onChange={accessLevelChangeHandler}>
                        <option>
                            انتخاب کنید
                        </option>
                        <option value="500">
                            پرسنل
                        </option>
                        <option value="400">
                            نماینده
                        </option>
                        <option value="100">
                            مدیر کل
                        </option>
                    </select>
                </div>
                <div>
                    <button type='submit' defaultValue='ثبت' className='btn btn-primary px-5' >ثبت</button>
                </div>
            </form>
        </div>
    )
};

export default Users;