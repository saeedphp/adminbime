import React, {useState } from 'react'
import { BASE_SIGNUP_URL} from '../config/Config'
import Cookies from "universal-cookie";
import validator from 'validator';
import {
    numbers,
    upperCaseLetters,
    lowerCaseLetters,
    specialCharacters,
} from '../characters'


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
        //console.log(firstName);
        setError(null);
        setSuccess(null);
        await fetch(BASE_SIGNUP_URL + "api/auth/signup?api-version=1.0", {
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
                console.log(response);
                console.log(response.text());
                /*if (!response.ok) {
                    throw new Error('???????????? ???????? ?????? ???????? ??????!');
                } else if (response.ok) {
                    throw new Error('?????????? ???? ???????????? ???????????? ????')
                }*/
                if (response.status === 404) {
                    throw new Error('???????? api ???????????? ??????!');
                } else if (response.status === 400) {
                    //console.log(response.text());
                    throw new Error('?????? ???????????? ?? ???? ?????? ???????? ???? ?????? ???????? ????????!')
                } else if (response.ok) {
                    throw new Error('?????????? ???? ???????????? ???????????? ????')
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

    const [errorMessage, setErrorMessage] = useState('')

    const validate = (value) => {

        if (validator.isStrongPassword(value, {
            minLength: 7, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage(<p className="strong_pass">?????? ???????? ?????? ??????</p>)

        } else {
            setErrorMessage(<p className="weak_pass">?????? ???????? ?????? ???? ???????????? ????????!</p>)
        }

    }


    return (
        <div className="user_page">
            <form id='page-form' onSubmit={handleSubmit} method="POST">
                {error && <p className="login_error">{error}</p>}
                {success && <p className="login_success">{success}</p>}
                <div>
                    <label htmlFor="firstName">
                        ??????
                        <abbr className="required" title="??????????" style={{color: 'red'}}>*</abbr>
                    </label>
                    <input type="text" name="firstName" id="firstName" defaultValue={firstName} onChange={nameChangeHandler} placeholder="??????" />
                </div>
                <div>
                    <label htmlFor="lastName">
                        ?????? ????????????????
                        <abbr className="required" title="??????????" style={{color: 'red'}}>*</abbr>
                    </label>
                    <input type="text" name="lastName" id="lastName" defaultValue={lastName} onChange={familyChangeHandler} placeholder="?????? ????????????????" />
                </div>
                <div>
                    <label htmlFor="phoneNumber">
                        ?????????? ??????????
                        <abbr className="required" title="??????????" style={{color: 'red'}}>*</abbr>
                    </label>
                    <input type="tel" min="8" max="11" maxLength="11" name="phoneNumber" id="phoneNumber" defaultValue={phoneNumber} onChange={mobileChangeHandler} placeholder="?????????? ??????????" />
                </div>
                <div>
                    <label htmlFor="userName">
                        ?????? ????????????
                        <abbr className="required" title="??????????" style={{color: 'red'}}>*</abbr>
                    </label>
                    <input type="text" name="userName" id="userName" defaultValue={userName} onChange={usernameChangeHandler} placeholder="?????? ????????????" />
                </div>
                <div>
                    <label htmlFor="password">
                        ?????? ????????
                        <abbr className="required" title="??????????" style={{color: 'red'}}>*</abbr>
                        <p>
                            ?????? ???????? ???????? ?????????? 8 ?????????????? ?? ???????? ???????? ?????????? ???????? ?? ?????????????? ????????
                        </p>
                    </label>
                    <input type="password" name="password" id="password" defaultValue={password} onKeyDown={(e) => validate(e.target.value)} onChange={passwordChangeHandler} placeholder="?????? ????????" />
                    {errorMessage === '' ? null :
                        <span style={{
                            fontWeight: 'bold',
                        }}>{errorMessage}</span>}

                </div>
                <div>
                    <label htmlFor="email">
                        ??????????
                        <abbr className="required" title="??????????" style={{color: 'red'}}>*</abbr>
                    </label>
                    <input type="email" name="email" id="email" defaultValue={email} onChange={emailChangeHandler} placeholder="??????????" />
                </div>
                <div>
                    <label htmlFor="accessLevel">
                        ?????? ????????????
                        <abbr className="required" title="??????????" style={{color: 'red'}}>*</abbr>
                    </label>
                    {/*<input type="number" name="accessLevel" id="accessLevel" defaultValue={accessLevel} onChange={accessLevelChangeHandler} placeholder="?????? ????????????" />*/}
                    <select name="accessLevel" id="accessLevel" defaultValue={accessLevel} onChange={accessLevelChangeHandler}>
                        <option>
                            ???????????? ????????
                        </option>
                        <option value="500">
                            ??????????
                        </option>
                        <option value="400">
                            ??????????????
                        </option>
                        <option value="100">
                            ???????? ????
                        </option>
                    </select>
                </div>
                <div>
                    <button type='submit' defaultValue='??????' className='btn btn-primary px-5' >??????</button>
                </div>
            </form>
        </div>
    )
};

export default Users;