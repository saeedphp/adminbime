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

      /*  let form = document.getElementById('page-form');
        var formData = new FormData(form);
        let data = Object.fromEntries(formData.entries());
        let data_keys = Object.keys(data);
        let send_data = {};*/


       /* console.log(send_data);
        send_data = JSON.stringify(send_data);
        const token = cookies.get('token');
        let fetch_method = "POST";*/

        /*let route = BASE_SIGNUP_URL + "api/auth/signup?api-version=1.0";

        Swal.fire({
            title: 'آیا مطمئنید که رکورد اضافه شود؟',
            icon: "warning",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'بله',
            denyButtonText: `خیر`,
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(route, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.wXvIHG3FK6pjeLTzKYQub0iSusGC_Dkkf-HTRRzarWEFltR5G08wcQ.REJZoqfNZy9okWD57-kV2Q.6IMKD5mp0_MfcD-wxtaR2m_xW14lrBdMpPMBTHGYzqLLyJ-_yVsRUjnizl1i1V35V0uQZI27VItl4_eed7ydZPkdQGyAEVsqVUwmMLTsnTmZ-NeKcooSayLCGzUltbIP1KpYwgrQ2D6vReuOR5FDcGdh3KOQfGuHLKL3IwAUg6OTQ4UZxfTBzH3p5Hyedk_nQJUSAUUgkW5sfoUhyyVLJgEi9gL7PnTo4cM7wT_aHqgTeixiCQCPwMyMCS2Bm_yTKKh5eLEGUMNyR1ogWu5NEIICokYc0a1Ip2O-AirlA2TuDwInC-x4wvtRVR6k-xU4lJtdTi27y46mug0rX0ljH99vPpSO3DayEATeTifPukkvTfbZlMTRdsWIf7lgmEeYQ9mIr_5PeYNjWDe_XMQBa20N4f69C6jGumQmRlboc2NJ0jSXLazifFmkm99ADY7WMvuUndPSSyinFfamHEtEhI8DxgxIa8rTVsrpOXJq6D0.jCJKh-IdnzsnQil3eusjuQ'
                    },
                    method: fetch_method,
                    body: JSON.stringify({
                        name,
                        family,
                        mobile,
                        email,
                        username,
                        password,
                        accessLevel
                    })
                }).then(async response => {
                    const data = await response.json();

                    // setRecord(data.result);
                    console.log(data);
                    //window.location.reload();
                    // window.location.replace('/list/' + model)
                })
                    .catch(error => {
                        // this.setState({ errorMessage: error.toString() });
                        console.error('There was an error!', error);
                    });
            }

        })*/

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