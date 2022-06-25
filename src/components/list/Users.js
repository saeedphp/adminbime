import React, {useState } from 'react'
import { BASE_SIGNUP_URL} from '../config/Config'
import Cookies from "universal-cookie";


const Users = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [accessLevel, setAccessLevel] = useState('');

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const cookies = new Cookies();
    const token = cookies.get('token');

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
        setError(null);
        setSuccess(null);
        fetch(BASE_SIGNUP_URL + "api/auth/signup?api-version=1.0", {
            method: "POST",
            headers: {
                'accept': '*/*',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                phoneNumber,
                userName,
                password,
                email,
                accessLevel
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('عملیات مورد نظر اجرا نشد!');
                } else if (response.ok) {
                    throw new Error('کاربر با موفقیت افزوده شد')
                }
                setSuccess(success.message);
                return response.json();
            })
            .then((response) => response.json())
            .then(console.log).catch((error) => {
            setError(error.message)
        });

    }

    return (
        <div className="user_page">
            <form id='page-form' onSubmit={handleSubmit} method="POST">
                {error && <p className="login_error">{error}</p>}
                {success && <p className="login_success">{success}</p>}
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